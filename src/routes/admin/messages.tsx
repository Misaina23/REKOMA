import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, MailOpen, MailX, MoreVertical, Search, Trash2, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AdminShell } from "@/components/site/AdminShell";
import { AdminPagination } from "@/components/site/AdminPagination";
import { getStoredAdminSession } from "@/lib/admin-auth";
import { useI18n } from "@/lib/i18n";
import { showConfirm, showError, showInfo, showSuccess } from "@/lib/alerts";
import { getCsrfToken } from "@/lib/csrf";

type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
};

export const Route = createFileRoute("/admin/messages")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      const existingSession = getStoredAdminSession();
      if (!existingSession) {
        throw redirect({
          to: "/admin/login",
          search: { from: "/admin/messages" },
          replace: true,
        });
      }
    }
  },
  component: AdminMessages,
});

function AdminMessages() {
  const { t, lang } = useI18n();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);
  const [sendingId, setSendingId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const base = (() => {
        if (typeof window !== "undefined") return window.location.origin;
        return process.env.VITE_APP_URL ?? "http://localhost:8080";
      })();
      const res = await fetch(`${base}/api/messages`, {
        headers: { "x-csrf-token": getCsrfToken() },
      });
      if (!res.ok) throw new Error("Failed to load messages");
      const data = (await res.json()) as Message[];
      setMessages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const filtered = messages.filter((m) => {
    const matchesSearch =
      !search ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.message.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" ? true : filter === "unread" ? !m.read : m.read;
    return matchesSearch && matchesFilter;
  });

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedFiltered = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const unreadCount = messages.filter((m) => !m.read).length;

  const markAsRead = async (id: string, read: boolean) => {
    const base = (() => {
      if (typeof window !== "undefined") return window.location.origin;
      return process.env.VITE_APP_URL ?? "http://localhost:8080";
    })();
    const response = await fetch(`${base}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": getCsrfToken(),
      },
      body: JSON.stringify({ id, read }),
    });
    if (!response.ok) {
      throw new Error("Failed to update message status");
    }
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read } : m)));
  };

  const replyTo = async (message: Message) => {
    const subject = encodeURIComponent(`Re: ${message.subject}`);
    window.location.href = `mailto:${message.email}?subject=${subject}`;
    await markAsRead(message.id, true);
  };

  const confirmDelete = async (id: string) => {
    const confirmed = await showConfirm({
      title: t({ fr: "Supprimer ce message ?", en: "Delete this message?" }),
      text: t({ fr: "Cette action est irréversible.", en: "This action cannot be undone." }),
      confirmText: t({ fr: "Oui, supprimer", en: "Yes, delete" }),
      cancelText: t({ fr: "Annuler", en: "Cancel" }),
    });
    if (!confirmed) return;
    const base = (() => {
      if (typeof window !== "undefined") return window.location.origin;
      return process.env.VITE_APP_URL ?? "http://localhost:8080";
    })();
    const deleteResponse = await fetch(`${base}/api/messages`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": getCsrfToken(),
      },
      body: JSON.stringify({ id }),
    });
    if (!deleteResponse.ok) {
      throw new Error("Failed to delete message");
    }
    setMessages((prev) => prev.filter((m) => m.id !== id));
    await showSuccess(
      t({ fr: "Message supprimé", en: "Message deleted" }),
      t({
        fr: "Le message a été supprimé avec succès.",
        en: "The message has been successfully deleted.",
      }),
    );
  };

  const markAllAsRead = async () => {
    const confirmed = await showConfirm({
      title: t({ fr: "Tout marquer comme lu ?", en: "Mark all as read?" }),
      text: t({
        fr: "Tous les messages non lus seront marqués comme lus.",
        en: "All unread messages will be marked as read.",
      }),
      confirmText: t({ fr: "Oui, marquer tout", en: "Yes, mark all" }),
      cancelText: t({ fr: "Annuler", en: "Cancel" }),
    });
    if (!confirmed) return;
    const base = (() => {
      if (typeof window !== "undefined") return window.location.origin;
      return process.env.VITE_APP_URL ?? "http://localhost:8080";
    })();
    const updates = await Promise.all(
      messages
        .filter((m) => !m.read)
        .map((m) =>
          fetch(`${base}/api/messages`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-csrf-token": getCsrfToken(),
            },
            body: JSON.stringify({ id: m.id, read: true }),
          }),
        ),
    );
    if (updates.some((response) => !response.ok)) {
      throw new Error("Failed to mark messages as read");
    }
    setMessages((prev) => prev.map((m) => ({ ...m, read: true })));
    await showInfo(
      t({ fr: "Messages à jour", en: "Messages updated" }),
      t({
        fr: "Tous les messages sont maintenant lus.",
        en: "All messages are now marked as read.",
      }),
    );
  };

  if (loading) {
    return (
      <AdminShell
        title={t({ fr: "Messages", en: "Messages" })}
        description={t({ fr: "Messagerie du site", en: "Site inbox" })}
      >
        <div className="flex min-h-[40vh] items-center justify-center">
          <RefreshCcw className="size-8 animate-spin text-muted-foreground" />
        </div>
        <AdminPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </AdminShell>
    );
  }

  return (
    <AdminShell
      title={t({ fr: "Messages", en: "Messages" })}
      description={t({ fr: "Messagerie du site", en: "Site inbox" })}
      actions={
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
            <MailOpen className="mr-2 size-4" />
            {t({ fr: "Tout marquer lu", en: "Mark all read" })}
          </Button>
          <Button variant="outline" size="sm" onClick={load}>
            <RefreshCcw className="mr-2 size-4" />
            {t({ fr: "Actualiser", en: "Refresh" })}
          </Button>
        </div>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <Card className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute inset-y-0 left-3 my-auto size-4 text-muted-foreground" />
            <Input
              placeholder={t({ fr: "Rechercher...", en: "Search..." })}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Button
              variant={filter === "all" ? "secondary" : "ghost"}
              size="sm"
              className="justify-start"
              onClick={() => setFilter("all")}
            >
              {t({ fr: "Tous", en: "All" })}
              <span className="ml-auto text-xs text-muted-foreground">{messages.length}</span>
            </Button>
            <Button
              variant={filter === "unread" ? "secondary" : "ghost"}
              size="sm"
              className="justify-start"
              onClick={() => setFilter("unread")}
            >
              <MailX className="mr-2 size-4" />
              {t({ fr: "Non lus", en: "Unread" })}
              {unreadCount > 0 ? (
                <span className="ml-auto rounded-full bg-destructive px-1.5 py-0.5 text-[10px] text-destructive-foreground">
                  {unreadCount}
                </span>
              ) : null}
            </Button>
            <Button
              variant={filter === "read" ? "secondary" : "ghost"}
              size="sm"
              className="justify-start"
              onClick={() => setFilter("read")}
            >
              <MailOpen className="mr-2 size-4" />
              {t({ fr: "Lus", en: "Read" })}
              <span className="ml-auto text-xs text-muted-foreground">
                {messages.length - unreadCount}
              </span>
            </Button>
          </div>
        </Card>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <Card className="p-8 text-center text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                {t({
                  fr: "Aucun message ne correspond à votre filtre.",
                  en: "No message matches your filter.",
                })}
              </p>
              <p className="mt-2">
                {t({
                  fr: "Essayez une autre recherche ou changez de filtre.",
                  en: "Try another search or change the filter.",
                })}
              </p>
            </Card>
          ) : (
            paginatedFiltered.map((m) => (
              <Card
                key={m.id}
                className={`p-5 transition-colors ${
                  !m.read ? "border-primary/40 bg-primary/[0.03]" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold">{m.name}</p>
                      <span className="text-xs text-muted-foreground">{m.email}</span>
                      {!m.read ? (
                        <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground">
                          {t({ fr: "Nouveau", en: "New" })}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-sm font-medium">{m.subject}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{m.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(m.date).toLocaleString(lang === "fr" ? "fr-FR" : "en-US")}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => replyTo(m)}>
                          {t({ fr: "Répondre par e-mail", en: "Reply by email" })}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => markAsRead(m.id, !m.read)}>
                          {m.read
                            ? t({ fr: "Marquer comme non lu", en: "Mark as unread" })
                            : t({ fr: "Marquer comme lu", en: "Mark as read" })}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => confirmDelete(m.id)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 size-4" />
                          {t({ fr: "Supprimer", en: "Delete" })}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </AdminShell>
  );
}
