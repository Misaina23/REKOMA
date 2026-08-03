import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  FileText,
  Image,
  MessageSquareText,
  Newspaper,
  PenLine,
  TrendingUp,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/site/Reveal";
import { AdminShell } from "@/components/site/AdminShell";
import { getStoredAdminSession } from "@/lib/admin-auth";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin/")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const existingSession = getStoredAdminSession();
      if (!existingSession) {
        throw redirect({ to: "/admin/login", search: { from: "/admin" }, replace: true });
      }
    }
  },
  component: AdminDashboard,
});

const MODULE_COLORS = ["#2563eb", "#16a34a", "#d97706", "#9333ea", "#dc2626"];

function AdminDashboard() {
  const { t } = useI18n();
  const [stats, setStats] = useState({ news: 0, documents: 0, gallery: 0, pages: 0, messages: 0 });
  const [visits, setVisits] = useState<{ total: number; days: Record<string, number> }>({
    total: 0,
    days: {},
  });

  useEffect(() => {
    const base = (() => {
      if (typeof window !== "undefined") return window.location.origin;
      return process.env.VITE_APP_URL ?? "http://localhost:8080";
    })();
    Promise.all([
      fetch(`${base}/api/cms/news`).then((r) => r.json()),
      fetch(`${base}/api/cms/documents`).then((r) => r.json()),
      fetch(`${base}/api/cms/gallery`).then((r) => r.json()),
      fetch(`${base}/api/cms/pages`).then((r) => r.json()),
      fetch(`${base}/api/messages`).then((r) => r.json()),
      fetch(`${base}/api/visits`).then((r) => r.json()),
    ]).then(([news, documents, gallery, pages, messages, visitData]) => {
      setStats({
        news: Array.isArray(news) ? news.length : 0,
        documents: Array.isArray(documents) ? documents.length : 0,
        gallery: Array.isArray(gallery) ? gallery.length : 0,
        pages: Array.isArray(pages) ? pages.length : 0,
        messages: Array.isArray(messages) ? messages.length : 0,
      });
      setVisits({ total: visitData.total ?? 0, days: visitData.days ?? {} });
    });
  }, []);

  const todayKey = new Date().toISOString().slice(0, 10);
  const todayVisits = visits.days[todayKey] ?? 0;

  const modules = [
    {
      label: { fr: "Actualités", en: "News" },
      value: stats.news,
      icon: Newspaper,
      to: "/admin/actualites",
    },
    {
      label: { fr: "Documents", en: "Documents" },
      value: stats.documents,
      icon: FileText,
      to: "/admin/documents",
    },
    {
      label: { fr: "Galerie", en: "Gallery" },
      value: stats.gallery,
      icon: Image,
      to: "/admin/galerie",
    },
    { label: { fr: "Pages", en: "Pages" }, value: stats.pages, icon: PenLine, to: "/admin/pages" },
    {
      label: { fr: "Messages", en: "Messages" },
      value: stats.messages,
      icon: MessageSquareText,
      to: "/admin/messages",
    },
  ];

  const distributionData = modules.map((m) => ({
    name: t(m.label),
    value: m.value,
  }));

  const visitData = Array.from({ length: 7 }).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const key = date.toISOString().slice(0, 10);
    return {
      date: key,
      label: date.toLocaleDateString("fr-FR", { weekday: "short" }),
      visits: visits.days[key] ?? 0,
    };
  });

  return (
    <AdminShell
      title={t({ fr: "Tableau de bord", en: "Dashboard" })}
      description={t({
        fr: "Vue synthétique du contenu, des messages et de l'audience.",
        en: "Live overview of your content, messages and audience.",
      })}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        <Reveal>
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {t({ fr: "Visiteurs", en: "Visitors" })}
                </p>
                <p className="text-3xl font-bold mt-1">{visits.total.toLocaleString("fr-FR")}</p>
                <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                  <Users className="size-3" />
                  {todayVisits.toLocaleString("fr-FR")} {t({ fr: "aujourd'hui", en: "today" })}
                </p>
              </div>
              <Users className="size-8 text-primary" />
            </div>
          </Card>
        </Reveal>
        {modules.map((stat) => (
          <Reveal key={stat.label.fr}>
            <Link to={stat.to}>
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{t(stat.label)}</p>
                    <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className="size-8 text-muted-foreground" />
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="size-4 text-primary" />
              <h2 className="text-sm font-semibold">
                {t({ fr: "Visites des 7 derniers jours", en: "Visits over the last 7 days" })}
              </h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={visitData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="visitGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
                  <XAxis
                    dataKey="label"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs text-muted-foreground"
                  />
                  <YAxis
                    allowDecimals={false}
                    tickLine={false}
                    axisLine={false}
                    className="text-xs text-muted-foreground"
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "var(--background)",
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="visits"
                    name={t({ fr: "Visites", en: "Visits" })}
                    stroke="#2563eb"
                    strokeWidth={2}
                    fill="url(#visitGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="p-6">
            <h2 className="mb-4 text-sm font-semibold">
              {t({ fr: "Répartition du contenu", en: "Content distribution" })}
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={distributionData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    className="text-xs text-muted-foreground"
                  />
                  <YAxis
                    allowDecimals={false}
                    tickLine={false}
                    axisLine={false}
                    className="text-xs text-muted-foreground"
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(148,163,184,0.1)" }}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "var(--background)",
                      fontSize: 12,
                    }}
                  />
                  <Bar
                    dataKey="value"
                    name={t({ fr: "Éléments", en: "Items" })}
                    radius={[6, 6, 0, 0]}
                  >
                    {distributionData.map((_, index) => (
                      <Cell key={index} fill={MODULE_COLORS[index % MODULE_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Reveal>
      </div>
    </AdminShell>
  );
}
