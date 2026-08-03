import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { AdminShell } from "@/components/site/AdminShell";
import { AdminPagination } from "@/components/site/AdminPagination";
import { FormDialog } from "@/components/site/FormDialog";
import { showConfirm, showError, showSuccess } from "@/lib/alerts";
import { getStoredAdminSession } from "@/lib/admin-auth";
import { getAppBaseUrl } from "@/lib/app-url";
import { getCsrfToken } from "@/lib/csrf";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin/actualites")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const existingSession = getStoredAdminSession();
      if (!existingSession) {
        throw redirect({
          to: "/admin/login",
          search: { from: "/admin/actualites" },
          replace: true,
        });
      }
    }
  },
  component: AdminNews,
});

function AdminNews() {
  const { t, lang } = useI18n();
  const [news, setNews] = useState<
    Array<{
      id: string;
      date: string;
      title: Record<string, string>;
      excerpt: Record<string, string>;
      tag: Record<string, string>;
    }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    id: "",
    date: "",
    titleFr: "",
    titleEn: "",
    excerptFr: "",
    excerptEn: "",
    tagFr: "",
    tagEn: "",
  });

  useEffect(() => {
    const base = getAppBaseUrl();
    fetch(`${base}/api/cms/news`)
      .then((r) => r.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      });
  }, []);

  const resetForm = () => {
    setForm({
      id: "",
      date: new Date().toISOString().split("T")[0],
      titleFr: "",
      titleEn: "",
      excerptFr: "",
      excerptEn: "",
      tagFr: "",
      tagEn: "",
    });
    setEditing(null);
  };

  const handleAdd = () => {
    resetForm();
    setDialogOpen(true);
  };

  const handleEdit = (item: (typeof news)[0]) => {
    setEditing(item.id);
    setForm({
      id: item.id,
      date: item.date,
      titleFr: item.title.fr,
      titleEn: item.title.en,
      excerptFr: item.excerpt.fr,
      excerptEn: item.excerpt.en,
      tagFr: item.tag.fr,
      tagEn: item.tag.en,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const newItem = {
        id: form.id || `news-${Date.now()}`,
        date: form.date,
        title: { fr: form.titleFr, en: form.titleEn },
        excerpt: { fr: form.excerptFr, en: form.excerptEn },
        tag: { fr: form.tagFr, en: form.tagEn },
      };

      const updated = editing
        ? news.map((n) => (n.id === editing ? newItem : n))
        : [...news, newItem];
      const response = await fetch(`${getBaseUrl()}/api/cms/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify(updated),
      });
      if (!response.ok) {
        throw new Error("Failed to save article");
      }
      setNews(updated);
      resetForm();
      setDialogOpen(false);
      setCurrentPage(1);
      await showSuccess(t({ fr: "Actualité enregistrée", en: "Article saved" }));
    } catch (error) {
      console.error(error);
      await showError(
        t({ fr: "Échec de l'enregistrement", en: "Save failed" }),
        t({ fr: "Impossible d'enregistrer l'actualité.", en: "Unable to save the article." }),
      );
    } finally {
      setSaving(false);
    }
  };

  const getBaseUrl = () => getAppBaseUrl();

  const handleDelete = async (id: string) => {
    try {
      const confirmed = await showConfirm({
        title: t({ fr: "Supprimer cette actualité ?", en: "Delete this article?" }),
        text: t({ fr: "Cette action est irréversible.", en: "This action is irreversible." }),
        confirmText: t({ fr: "Oui, supprimer", en: "Yes, delete" }),
      });
      if (!confirmed) return;
      const deleteResponse = await fetch(`${getBaseUrl()}/api/cms/news`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify({ id }),
      });
      if (!deleteResponse.ok) {
        throw new Error("Failed to delete article");
      }
      setNews(news.filter((n) => n.id !== id));
      setCurrentPage(1);
      await showSuccess(t({ fr: "Actualité supprimée", en: "Article deleted" }));
    } catch (error) {
      console.error(error);
      await showError(
        t({ fr: "Échec de la suppression", en: "Deletion failed" }),
        t({ fr: "Impossible de supprimer l'actualité.", en: "Unable to delete the article." }),
      );
    }
  };

  if (loading) {
    return (
      <AdminShell
        title={t({ fr: "Actualités", en: "News" })}
        description={t({
          fr: "Gérer les articles et publications.",
          en: "Manage articles and publications.",
        })}
      >
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      </AdminShell>
    );
  }

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const paginatedNews = news.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <AdminShell
      title={t({ fr: "Actualités", en: "News" })}
      description={t({
        fr: "Gérer les articles et publications.",
        en: "Manage articles and publications.",
      })}
      actions={
        <Button onClick={handleAdd} variant="outline" size="sm">
          <Plus className="mr-2 size-4" />
          {t({ fr: "Nouvelle actualité", en: "New article" })}
        </Button>
      }
    >
      <FormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={
          editing
            ? t({ fr: "Modifier l'actualité", en: "Edit article" })
            : t({ fr: "Nouvelle actualité", en: "New article" })
        }
        saving={saving}
        onSubmit={handleSave}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="id">
              {t({ fr: "ID (laisser vide pour auto)", en: "ID (leave empty for auto)" })}
            </Label>
            <Input
              id="id"
              value={form.id}
              onChange={(e) => setForm((f) => ({ ...f, id: e.target.value }))}
              disabled={!!editing}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">{t({ fr: "Date", en: "Date" })}</Label>
            <Input
              id="date"
              type="date"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="titleFr">{t({ fr: "Titre (FR)", en: "Title (FR)" })}</Label>
            <Input
              id="titleFr"
              value={form.titleFr}
              onChange={(e) => setForm((f) => ({ ...f, titleFr: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="titleEn">{t({ fr: "Titre (EN)", en: "Title (EN)" })}</Label>
            <Input
              id="titleEn"
              value={form.titleEn}
              onChange={(e) => setForm((f) => ({ ...f, titleEn: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="excerptFr">{t({ fr: "Extrait (FR)", en: "Excerpt (FR)" })}</Label>
            <Textarea
              id="excerptFr"
              value={form.excerptFr}
              onChange={(e) => setForm((f) => ({ ...f, excerptFr: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="excerptEn">{t({ fr: "Extrait (EN)", en: "Excerpt (EN)" })}</Label>
            <Textarea
              id="excerptEn"
              value={form.excerptEn}
              onChange={(e) => setForm((f) => ({ ...f, excerptEn: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="tagFr">{t({ fr: "Tag (FR)", en: "Tag (FR)" })}</Label>
            <Input
              id="tagFr"
              value={form.tagFr}
              onChange={(e) => setForm((f) => ({ ...f, tagFr: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tagEn">{t({ fr: "Tag (EN)", en: "Tag (EN)" })}</Label>
            <Input
              id="tagEn"
              value={form.tagEn}
              onChange={(e) => setForm((f) => ({ ...f, tagEn: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={saving}>
            {saving && <Loader2 className="mr-2 size-4 animate-spin" />}
            {t({ fr: "Enregistrer", en: "Save" })}
          </Button>
        </div>
      </FormDialog>

      <div className="grid gap-4">
        {paginatedNews.map((item) => (
          <Reveal key={item.id}>
            <Card className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{item.title[lang] ?? item.title.fr}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.excerpt[lang] ?? item.excerpt.fr}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.tag[lang] ?? item.tag.fr}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      handleEdit(item);
                      setDialogOpen(true);
                    }}
                  >
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="size-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <AdminPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </AdminShell>
  );
}
