import { Link, useRouterState } from "@tanstack/react-router";
import {
  FileText,
  GalleryThumbnails,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquareText,
  Newspaper,
  PenLine,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { showConfirm } from "@/lib/alerts";
import { clearStoredAdminSession, getStoredAdminSession } from "@/lib/admin-auth";
import { getAppBaseUrl } from "@/lib/app-url";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems = [
  {
    to: "/admin",
    label: { fr: "Tableau de bord", en: "Dashboard" },
    icon: LayoutDashboard,
    end: true,
  },
  {
    to: "/admin/messages",
    label: { fr: "Messages", en: "Messages" },
    icon: MessageSquareText,
  },
  { to: "/admin/actualites", label: { fr: "Actualités", en: "News" }, icon: Newspaper },
  { to: "/admin/documents", label: { fr: "Documents", en: "Documents" }, icon: FileText },
  { to: "/admin/galerie", label: { fr: "Galerie", en: "Gallery" }, icon: GalleryThumbnails },
  { to: "/admin/pages", label: { fr: "Pages", en: "Pages" }, icon: PenLine },
];

export function AdminShell({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const { t, lang } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [unreadCount, setUnreadCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sessionInfo, setSessionInfo] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const base = getAppBaseUrl();
        const response = await fetch(`${base}/api/messages`);
        if (!response.ok) return;
        const messages = (await response.json()) as Array<{ read?: boolean }>;
        setUnreadCount(messages.filter((message) => !message.read).length);
      } catch {
        setUnreadCount(0);
      }
    };

    const session = getStoredAdminSession();
    setSessionInfo(session?.email ?? null);

    void load();
    const timer = window.setInterval(load, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const handleLogout = async () => {
    const confirmed = await showConfirm({
      title: t({ fr: "Se déconnecter ?", en: "Log out?" }),
      text: t({
        fr: "Vous quitterez l’espace d’administration.",
        en: "You’ll leave the admin area.",
      }),
      confirmText: t({ fr: "Oui, quitter", en: "Yes, log out" }),
      cancelText: t({ fr: "Rester", en: "Stay" }),
    });

    if (confirmed) {
      clearStoredAdminSession();
      window.location.href = "/";
    }
  };

  const renderNavItem = (item: (typeof navItems)[number]) => {
    const active =
      pathname === item.to || (item.end ? pathname === item.to : pathname.startsWith(item.to));
    const Icon = item.icon;
    return (
      <Link
        key={item.to}
        to={item.to}
        onClick={() => setMobileOpen(false)}
        className={cn(
          "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
          active
            ? "bg-primary/10 text-primary shadow-sm"
            : "text-foreground/70 hover:bg-muted hover:text-foreground",
        )}
      >
        <Icon className={cn("size-4", active && "text-primary")} />
        <span>{t(item.label)}</span>
        {item.to === "/admin/messages" && unreadCount > 0 ? (
          <Badge className="ml-auto rounded-full bg-destructive px-1.5 py-0.5 text-[10px] text-destructive-foreground">
            {unreadCount}
          </Badge>
        ) : null}
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen bg-muted/40">
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-card">
        <div className="flex h-16 items-center gap-3 border-b border-border/70 px-5">
          <img
            src="/logo.png"
            alt={t({ fr: "REKOMA", en: "REKOMA" })}
            className="size-9 rounded-lg object-cover"
          />
          <div className="leading-tight">
            <p className="text-sm font-bold">REKOMA</p>
            <p className="text-[11px] text-muted-foreground">Administration</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-3">
          <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t({ fr: "Menu", en: "Menu" })}
          </div>
          <div className="space-y-0.5">{navItems.map(renderNavItem)}</div>
        </nav>
        <div className="border-t border-border/60 p-3">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-foreground/75 hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 size-4" />
            {t({ fr: "Déconnexion", en: "Logout" })}
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border/60 bg-card/80 px-4 backdrop-blur-md lg:px-6">
          <div className="flex items-center gap-3">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[88vw] max-w-sm">
                <SheetTitle className="sr-only">
                  {t({ fr: "Navigation admin", en: "Admin navigation" })}
                </SheetTitle>
                <div className="mt-6 flex items-center gap-3">
                  <img src="/logo.png" alt="REKOMA" className="size-9 rounded-lg object-cover" />
                  <div className="leading-tight">
                    <p className="text-sm font-bold">REKOMA</p>
                    <p className="text-[11px] text-muted-foreground">
                      {t({ fr: "Administration", en: "Administration" })}
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-1">{navItems.map(renderNavItem)}</div>
              </SheetContent>
            </Sheet>
            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold">{title}</h1>
                {description ? (
                  <span className="text-sm text-muted-foreground">· {description}</span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
            {sessionInfo ? (
              <div className="hidden rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-xs text-muted-foreground sm:block">
                {sessionInfo}
              </div>
            ) : null}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-foreground/75 hover:text-foreground"
            >
              <LogOut className="mr-2 size-4" />
              <span className="hidden sm:inline">{t({ fr: "Déconnexion", en: "Logout" })}</span>
            </Button>
          </div>
        </header>

        <div className="lg:hidden border-b border-border/60 bg-card/80 px-4 py-3">
          <h1 className="text-lg font-semibold">{title}</h1>
          {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
        </div>

        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto px-4 py-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
