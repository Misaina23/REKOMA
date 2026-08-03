import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Pencil, Plus, Trash2, Eye } from "lucide-react";
import { AdminShell } from "@/components/site/AdminShell";
import { AdminPagination } from "@/components/site/AdminPagination";
import { FormDialog } from "@/components/site/FormDialog";
import { showConfirm, showError, showSuccess } from "@/lib/alerts";
import { getStoredAdminSession } from "@/lib/admin-auth";
import { getAppBaseUrl } from "@/lib/app-url";
import { getCsrfToken } from "@/lib/csrf";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin/galerie")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const existingSession = getStoredAdminSession();
      if (!existingSession) {
        throw redirect({
          to: "/admin/login",
          search: { from: "/admin/galerie" },
          replace: true,
        });
      }
    }
  },
  component: AdminGallery,
});

function AdminGallery() {
  const { t, lang } = useI18n();
  const [gallery, setGallery] = useState<
    Array<{
      id: string;
      src: string;
      alt: Record<string, string>;
      caption?: Record<string, string>;
    }>
  >([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [viewItem, setViewItem] = useState<(typeof gallery)[0] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [form, setForm] = useState({
    id: "",
    src: "",
    altFr: "",
    altEn: "",
    captionFr: "",
    captionEn: "",
  });

  useEffect(() => {
    const base = getAppBaseUrl();
    fetch(`${base}/api/cms/gallery`)
      .then((r) => r.json())
      .then((data) => {
        setGallery(data);
        setLoading(false);
      });
  }, []);

  const resetForm = () => {
    setForm({ id: "", src: "", altFr: "", altEn: "", captionFr: "", captionEn: "" });
    setEditing(null);
  };

  const handleAdd = () => {
    resetForm();
    setDialogOpen(true);
  };

  const handleEdit = (item: (typeof gallery)[0]) => {
    setEditing(item.id);
    setForm({
      id: item.id,
      src: item.src,
      altFr: item.alt.fr,
      altEn: item.alt.en,
      captionFr: item.caption?.fr ?? "",
      captionEn: item.caption?.en ?? "",
    });
  };

  const getBaseUrl = () => getAppBaseUrl();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const newItem = {
        id: form.id || `gallery-${Date.now()}`,
        src: form.src,
        alt: { fr: form.altFr, en: form.altEn },
        ...(form.captionFr || form.captionEn
          ? { caption: { fr: form.captionFr, en: form.captionEn } }
          : {}),
      };

      const updated = editing
        ? gallery.map((g) => (g.id === editing ? newItem : g))
        : [...gallery, newItem];
      const response = await fetch(`${getBaseUrl()}/api/cms/gallery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify(updated),
      });
      if (!response.ok) {
        throw new Error("Failed to save image");
      }
      setGallery(updated);
      resetForm();
      setDialogOpen(false);
      setCurrentPage(1);
      await showSuccess(t({ fr: "Image enregistrée", en: "Image saved" }));
    } catch (error) {
      console.error(error);
      await showError(
        t({ fr: "Échec de l'enregistrement", en: "Save failed" }),
        t({ fr: "Impossible d'enregistrer l'image.", en: "Unable to save the image." }),
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const confirmed = await showConfirm({
        title: t({ fr: "Supprimer cette image ?", en: "Delete this image?" }),
        text: t({
          fr: "L’image disparaîtra de la galerie publique.",
          en: "The image will be removed from the public gallery.",
        }),
        confirmText: t({ fr: "Oui, supprimer", en: "Yes, delete" }),
      });
      if (!confirmed) return;
      const deleteResponse = await fetch(`${getBaseUrl()}/api/cms/gallery`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify({ id }),
      });
      if (!deleteResponse.ok) {
        throw new Error("Failed to delete image");
      }
      setGallery(gallery.filter((g) => g.id !== id));
      setCurrentPage(1);
      await showSuccess(t({ fr: "Image supprimée", en: "Image deleted" }));
    } catch (error) {
      console.error(error);
      await showError(
        t({ fr: "Échec de la suppression", en: "Deletion failed" }),
        t({ fr: "Impossible de supprimer l'image.", en: "Unable to delete the image." }),
      );
    }
  };

  if (loading) {
    return (
      <AdminShell
        title={t({ fr: "Galerie", en: "Gallery" })}
        description={t({ fr: "Gérer les images de la galerie.", en: "Manage gallery images." })}
      >
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
        </div>
      </AdminShell>
    );
  }

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(gallery.length / ITEMS_PER_PAGE);
  const paginatedGallery = gallery.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <AdminShell
      title={t({ fr: "Galerie", en: "Gallery" })}
      description={t({ fr: "Gérer les images de la galerie.", en: "Manage gallery images." })}
      actions={
        <Button onClick={handleAdd} variant="outline" size="sm">
          <Plus className="mr-2 size-4" />
          {t({ fr: "Nouvelle image", en: "New image" })}
        </Button>
      }
    >
      <FormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={
          editing
            ? t({ fr: "Modifier l'image", en: "Edit image" })
            : t({ fr: "Nouvelle image", en: "New image" })
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
            <Label htmlFor="src">{t({ fr: "URL de l'image", en: "Image URL" })}</Label>
            <Input
              id="src"
              value={form.src}
              onChange={(e) => setForm((f) => ({ ...f, src: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="altFr">{t({ fr: "Texte alternatif (FR)", en: "Alt text (FR)" })}</Label>
            <Input
              id="altFr"
              value={form.altFr}
              onChange={(e) => setForm((f) => ({ ...f, altFr: e.target.value }))}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="altEn">{t({ fr: "Texte alternatif (EN)", en: "Alt text (EN)" })}</Label>
            <Input
              id="altEn"
              value={form.altEn}
              onChange={(e) => setForm((f) => ({ ...f, altEn: e.target.value }))}
              required
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="captionFr">{t({ fr: "Légende (FR)", en: "Caption (FR)" })}</Label>
            <Input
              id="captionFr"
              value={form.captionFr}
              onChange={(e) => setForm((f) => ({ ...f, captionFr: e.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="captionEn">{t({ fr: "Légende (EN)", en: "Caption (EN)" })}</Label>
            <Input
              id="captionEn"
              value={form.captionEn}
              onChange={(e) => setForm((f) => ({ ...f, captionEn: e.target.value }))}
            />
          </div>
        </div>
      </FormDialog>

      <div className="rounded-xl border border-border/70 bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">N°</TableHead>
              <TableHead className="w-24">{t({ fr: "Photo", en: "Photo" })}</TableHead>
              <TableHead>{t({ fr: "Description", en: "Description" })}</TableHead>
              <TableHead className="text-right">{t({ fr: "Actions", en: "Actions" })}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gallery.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-10 text-center text-sm text-muted-foreground">
                  {t({ fr: "Aucune image pour le moment.", en: "No images yet." })}
                </TableCell>
              </TableRow>
            ) : (
              paginatedGallery.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-muted-foreground">{index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={item.src}
                      alt={item.alt.fr}
                      className="size-14 rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    <p className="text-sm font-medium">{item.alt.fr}</p>
                    <p className="text-xs text-muted-foreground">{item.alt.en}</p>
                    {item.caption && (
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {item.caption.fr}
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setViewItem(item)}
                        title={t({ fr: "Voir", en: "View" })}
                      >
                        <Eye className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          handleEdit(item);
                          setDialogOpen(true);
                        }}
                        title={t({ fr: "Modifier", en: "Edit" })}
                      >
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(item.id)}
                        title={t({ fr: "Supprimer", en: "Delete" })}
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={viewItem !== null} onOpenChange={(open) => !open && setViewItem(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{viewItem ? viewItem.alt.fr : ""}</DialogTitle>
          </DialogHeader>
          {viewItem ? (
            <div className="space-y-3">
              <img
                src={viewItem.src}
                alt={viewItem.alt.fr}
                className="max-h-[60vh] w-full rounded-lg object-contain"
              />
              {viewItem.caption && (
                <p className="text-sm text-muted-foreground">{viewItem.caption.fr}</p>
              )}
              <p className="break-all text-xs text-muted-foreground">{viewItem.src}</p>
            </div>
          ) : null}
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button variant="outline" size="sm">
                {t({ fr: "Fermer", en: "Close" })}
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <AdminPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </AdminShell>
  );
}
