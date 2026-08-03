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
import { getCsrfToken } from "@/lib/csrf";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin/pages")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const existingSession = getStoredAdminSession();
      if (!existingSession) {
        throw redirect({
          to: "/admin/login",
          search: { from: "/admin/pages" },
          replace: true,
        });
      }
    }
  },
  component: AdminPages,
});

function AdminPages() {
  const { t, lang } = useI18n();
  const [pages, setPages] = useState<
    Array<{
      id: string;
      slug: string;
      title: Record<string, string>;
      content: Record<string, string>;
      metaDescription?: Record<string, string>;
    }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    id: "",
    slug: "",
    titleFr: "",
    titleEn: "",
    contentFr: "",
    contentEn: "",
    metaDescriptionFr: "",
    metaDescriptionEn: "",
  });

  useEffect(() => {
    const base = (() => {
      if (typeof window !== "undefined") return window.location.origin;
      return process.env.VITE_APP_URL ?? "http://localhost:8080";
    })();
    fetch(`${base}/api/cms/pages`)
      .then((r) => r.json())
      .then((data) => {
        setPages(data);
        setLoading(false);
      });
  }, []);

  const resetForm = () => {
    setForm({
      id: "",
      slug: "",
      titleFr: "",
      titleEn: "",
      contentFr: "",
      contentEn: "",
      metaDescriptionFr: "",
      metaDescriptionEn: "",
    });
    setEditing(null);
  };

  const handleAdd = () => {
    resetForm();
    setDialogOpen(true);
  };

  const handleEdit = (item: (typeof pages)[0]) => {
    setEditing(item.id);
    setForm({
      id: item.id,
      slug: item.slug,
      titleFr: item.title.fr,
      titleEn: item.title.en,
      contentFr: item.content.fr,
      contentEn: item.content.en,
      metaDescriptionFr: item.metaDescription?.fr ?? "",
      metaDescriptionEn: item.metaDescription?.en ?? "",
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const newPage = {
        id: form.id || `page-${Date.now()}`,
        slug: form.slug,
        title: { fr: form.titleFr, en: form.titleEn },
        content: { fr: form.contentFr, en: form.contentEn },
        ...(form.metaDescriptionFr || form.metaDescriptionEn
          ? { metaDescription: { fr: form.metaDescriptionFr, en: form.metaDescriptionEn } }
          : {}),
      };
      const response = await fetch(`${getBaseUrl()}/api/cms/pages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify(newPage),
      });
      if (!response.ok) {
        throw new Error("Failed to save page");
      }
      const updated = editing
        ? pages.map((p) => (p.id === editing ? newPage : p))
        : [...pages, newPage];
      setPages(updated);
      resetForm();
      setDialogOpen(false);
      setCurrentPage(1);
      await showSuccess(t({ fr: "Page enregistrée", en: "Page saved" }));
    } catch (error) {
      console.error(error);
      await showError(
        t({ fr: "Échec de l'enregistrement", en: "Save failed" }),
        t({ fr: "Impossible d'enregistrer la page.", en: "Unable to save the page." }),
      );
    } finally {
      setSaving(false);
    }
  };

  const getBaseUrl = () => {
    if (typeof window !== "undefined") return window.location.origin;
    return process.env.VITE_APP_URL ?? "http://localhost:8080";
  };

  const handleDelete = async (id: string) => {
    try {
      const confirmed = await showConfirm({
        title: t({ fr: "Supprimer cette page ?", en: "Delete this page?" }),
        text: t({
          fr: "La page sera retirée du site public.",
          en: "The page will be removed from the public site.",
        }),
        confirmText: t({ fr: "Oui, supprimer", en: "Yes, delete" }),
      });
      if (!confirmed) return;
      const deleteResponse = await fetch(`${getBaseUrl()}/api/cms/pages`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify({ id }),
      });
      if (!deleteResponse.ok) {
        throw new Error("Failed to delete page");
      }
      setPages(pages.filter((p) => p.id !== id));
      setCurrentPage(1);
      await showSuccess(t({ fr: "Page supprimée", en: "Page deleted" }));
    } catch (error) {
      console.error(error);
      await showError(
        t({ fr: "Échec de la suppression", en: "Deletion failed" }),
        t({ fr: "Impossible de supprimer la page.", en: "Unable to delete the page." }),
      );
    }
  };

  if (loading) {
    return (
      <AdminShell
        title={t({ fr: "Pages", en: "Pages" })}
        description={t({ fr: "Gérer les pages du site.", en: "Manage site pages." })}
      >
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      </AdminShell>
    );
  }

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(pages.length / ITEMS_PER_PAGE);
  const paginatedPages = pages.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <AdminShell
      title={t({ fr: "Pages", en: "Pages" })}
      description={t({ fr: "Gérer les pages du site.", en: "Manage site pages." })}
      actions={
        <Button onClick={handleAdd} variant="outline" size="sm">
          <Plus className="mr-2 size-4" />
          {t({ fr: "Nouvelle page", en: "New page" })}
        </Button>
      }
    >
      <FormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={
          editing
            ? t({ fr: "Modifier la page", en: "Edit page" })
            : t({ fr: "Nouvelle page", en: "New page" })
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
            <Label htmlFor="slug">
              {t({ fr: "Slug (ex: /ma-page)", en: "Slug (e.g. /my-page)" })}
            </Label>
            <Input
              id="slug"
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
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
            <Label htmlFor="contentFr">{t({ fr: "Contenu (FR)", en: "Content (FR)" })}</Label>
            <Textarea
              id="contentFr"
              value={form.contentFr}
              onChange={(e) => setForm((f) => ({ ...f, contentFr: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contentEn">{t({ fr: "Contenu (EN)", en: "Content (EN)" })}</Label>
            <Textarea
              id="contentEn"
              value={form.contentEn}
              onChange={(e) => setForm((f) => ({ ...f, contentEn: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="metaDescriptionFr">
              {t({ fr: "Meta description (FR)", en: "Meta description (FR)" })}
            </Label>
            <Input
              id="metaDescriptionFr"
              value={form.metaDescriptionFr}
              onChange={(e) => setForm((f) => ({ ...f, metaDescriptionFr: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="metaDescriptionEn">
              {t({ fr: "Meta description (EN)", en: "Meta description (EN)" })}
            </Label>
            <Input
              id="metaDescriptionEn"
              value={form.metaDescriptionEn}
              onChange={(e) => setForm((f) => ({ ...f, metaDescriptionEn: e.target.value }))}
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
        {paginatedPages.map((page) => (
          <Reveal key={page.id}>
            <Card className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{page.title[lang] ?? page.title.fr}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{page.slug}</p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {page.content[lang] ?? page.content.fr}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      handleEdit(page);
                      setDialogOpen(true);
                    }}
                  >
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(page.id)}>
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
