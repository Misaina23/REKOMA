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

export const Route = createFileRoute("/admin/documents")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const existingSession = getStoredAdminSession();
      if (!existingSession) {
        throw redirect({
          to: "/admin/login",
          search: { from: "/admin/documents" },
          replace: true,
        });
      }
    }
  },
  component: AdminDocuments,
});

function AdminDocuments() {
  const { t, lang } = useI18n();
  const [documents, setDocuments] = useState<
    Array<{
      id: string;
      title: Record<string, string>;
      type: string;
      description: Record<string, string>;
      url: string;
    }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    id: "",
    titleFr: "",
    titleEn: "",
    type: "PDF",
    descriptionFr: "",
    descriptionEn: "",
    url: "",
  });

  useEffect(() => {
    const base = (() => {
      if (typeof window !== "undefined") return window.location.origin;
      return process.env.VITE_APP_URL ?? "http://localhost:8080";
    })();
    fetch(`${base}/api/cms/documents`)
      .then((r) => r.json())
      .then((data) => {
        setDocuments(data);
        setLoading(false);
      });
  }, []);

  const resetForm = () => {
    setForm({
      id: "",
      titleFr: "",
      titleEn: "",
      type: "PDF",
      descriptionFr: "",
      descriptionEn: "",
      url: "",
    });
    setEditing(null);
  };

  const handleAdd = () => {
    resetForm();
    setDialogOpen(true);
  };

  const handleEdit = (item: (typeof documents)[0]) => {
    setEditing(item.id);
    setForm({
      id: item.id,
      titleFr: item.title.fr,
      titleEn: item.title.en,
      type: item.type,
      descriptionFr: item.description.fr,
      descriptionEn: item.description.en,
      url: item.url,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const newItem = {
        id: form.id || `doc-${Date.now()}`,
        title: { fr: form.titleFr, en: form.titleEn },
        type: form.type,
        description: { fr: form.descriptionFr, en: form.descriptionEn },
        url: form.url,
      };

      const updated = editing
        ? documents.map((d) => (d.id === editing ? newItem : d))
        : [...documents, newItem];
      const response = await fetch(`${getBaseUrl()}/api/cms/documents`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify(updated),
      });
      if (!response.ok) {
        throw new Error("Failed to save document");
      }
      setDocuments(updated);
      resetForm();
      setDialogOpen(false);
      setCurrentPage(1);
      await showSuccess(t({ fr: "Document enregistré", en: "Document saved" }));
    } catch (error) {
      console.error(error);
      await showError(
        t({ fr: "Échec de l'enregistrement", en: "Save failed" }),
        t({ fr: "Impossible d'enregistrer le document.", en: "Unable to save the document." }),
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
        title: t({ fr: "Supprimer ce document ?", en: "Delete this document?" }),
        text: t({
          fr: "Le document sera retiré de la liste publique.",
          en: "The document will be removed from the public list.",
        }),
        confirmText: t({ fr: "Oui, supprimer", en: "Yes, delete" }),
      });
      if (!confirmed) return;
      const deleteResponse = await fetch(`${getBaseUrl()}/api/cms/documents`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify({ id }),
      });
      if (!deleteResponse.ok) {
        throw new Error("Failed to delete document");
      }
      setDocuments(documents.filter((d) => d.id !== id));
      setCurrentPage(1);
      await showSuccess(t({ fr: "Document supprimé", en: "Document deleted" }));
    } catch (error) {
      console.error(error);
      await showError(
        t({ fr: "Échec de la suppression", en: "Deletion failed" }),
        t({ fr: "Impossible de supprimer le document.", en: "Unable to delete the document." }),
      );
    }
  };

  if (loading) {
    return (
      <AdminShell
        title={t({ fr: "Documents", en: "Documents" })}
        description={t({ fr: "Gérer les documents publics.", en: "Manage public documents." })}
      >
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      </AdminShell>
    );
  }

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);
  const paginatedDocs = documents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <AdminShell
      title={t({ fr: "Documents", en: "Documents" })}
      description={t({ fr: "Gérer les documents publics.", en: "Manage public documents." })}
      actions={
        <Button onClick={handleAdd} variant="outline" size="sm">
          <Plus className="mr-2 size-4" />
          {t({ fr: "Nouveau document", en: "New document" })}
        </Button>
      }
    >
      <FormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={
          editing
            ? t({ fr: "Modifier le document", en: "Edit document" })
            : t({ fr: "Nouveau document", en: "New document" })
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
            <Label htmlFor="type">{t({ fr: "Type", en: "Type" })}</Label>
            <Input
              id="type"
              value={form.type}
              onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
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
            <Label htmlFor="descriptionFr">
              {t({ fr: "Description (FR)", en: "Description (FR)" })}
            </Label>
            <Textarea
              id="descriptionFr"
              value={form.descriptionFr}
              onChange={(e) => setForm((f) => ({ ...f, descriptionFr: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="descriptionEn">
              {t({ fr: "Description (EN)", en: "Description (EN)" })}
            </Label>
            <Textarea
              id="descriptionEn"
              value={form.descriptionEn}
              onChange={(e) => setForm((f) => ({ ...f, descriptionEn: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="url">{t({ fr: "URL", en: "URL" })}</Label>
          <Input
            id="url"
            value={form.url}
            onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))}
            required
          />
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={saving}>
            {saving && <Loader2 className="mr-2 size-4 animate-spin" />}
            {t({ fr: "Enregistrer", en: "Save" })}
          </Button>
        </div>
      </FormDialog>

      <div className="grid gap-4">
        {paginatedDocs.map((doc) => (
          <Reveal key={doc.id}>
            <Card className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{doc.title[lang] ?? doc.title.fr}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {doc.description[lang] ?? doc.description.fr}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4"
                    >
                      {doc.url}
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      handleEdit(doc);
                      setDialogOpen(true);
                    }}
                  >
                    <Pencil className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(doc.id)}>
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
