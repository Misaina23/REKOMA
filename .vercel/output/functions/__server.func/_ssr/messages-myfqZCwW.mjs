import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, r as useI18n } from "./utils-BiYSywJx.mjs";
import { Q as Check, T as MailOpen, W as EllipsisVertical, X as ChevronRight, a as Trash2, f as Search, p as RefreshCcw, q as Circle, w as MailX } from "../_libs/lucide-react.mjs";
import { t as getAppBaseUrl } from "./app-url-CsE7cn1T.mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
import { i as showSuccess, r as showInfo, t as showConfirm } from "./alerts-FKPi0eTV.mjs";
import { t as getCsrfToken } from "./csrf-Bg1sT1bJ.mjs";
import { t as Card } from "./card-DvzACnof.mjs";
import { t as AdminShell } from "./AdminShell-DeEWyhi8.mjs";
import { t as AdminPagination } from "./AdminPagination-BPpY4Eoh.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages-myfqZCwW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function AdminMessages() {
	const { t, lang } = useI18n();
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		setCurrentPage(1);
	}, [search, filter]);
	const [sendingId, setSendingId] = (0, import_react.useState)(null);
	const load = async () => {
		setLoading(true);
		try {
			const base = getAppBaseUrl();
			const res = await fetch(`${base}/api/messages`, { headers: { "x-csrf-token": getCsrfToken() } });
			if (!res.ok) throw new Error("Failed to load messages");
			const data = await res.json();
			setMessages(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const filtered = messages.filter((m) => {
		const matchesSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.email.toLowerCase().includes(search.toLowerCase()) || m.subject.toLowerCase().includes(search.toLowerCase()) || m.message.toLowerCase().includes(search.toLowerCase());
		const matchesFilter = filter === "all" ? true : filter === "unread" ? !m.read : m.read;
		return matchesSearch && matchesFilter;
	});
	const ITEMS_PER_PAGE = 6;
	const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
	const paginatedFiltered = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
	const unreadCount = messages.filter((m) => !m.read).length;
	const markAsRead = async (id, read) => {
		const base = getAppBaseUrl();
		if (!(await fetch(`${base}/api/messages`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-csrf-token": getCsrfToken()
			},
			body: JSON.stringify({
				id,
				read
			})
		})).ok) throw new Error("Failed to update message status");
		setMessages((prev) => prev.map((m) => m.id === id ? {
			...m,
			read
		} : m));
	};
	const replyTo = async (message) => {
		const subject = encodeURIComponent(`Re: ${message.subject}`);
		window.location.href = `mailto:${message.email}?subject=${subject}`;
		await markAsRead(message.id, true);
	};
	const confirmDelete = async (id) => {
		if (!await showConfirm({
			title: t({
				fr: "Supprimer ce message ?",
				en: "Delete this message?"
			}),
			text: t({
				fr: "Cette action est irréversible.",
				en: "This action cannot be undone."
			}),
			confirmText: t({
				fr: "Oui, supprimer",
				en: "Yes, delete"
			}),
			cancelText: t({
				fr: "Annuler",
				en: "Cancel"
			})
		})) return;
		const base = getAppBaseUrl();
		if (!(await fetch(`${base}/api/messages`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"x-csrf-token": getCsrfToken()
			},
			body: JSON.stringify({ id })
		})).ok) throw new Error("Failed to delete message");
		setMessages((prev) => prev.filter((m) => m.id !== id));
		await showSuccess(t({
			fr: "Message supprimé",
			en: "Message deleted"
		}), t({
			fr: "Le message a été supprimé avec succès.",
			en: "The message has been successfully deleted."
		}));
	};
	const markAllAsRead = async () => {
		if (!await showConfirm({
			title: t({
				fr: "Tout marquer comme lu ?",
				en: "Mark all as read?"
			}),
			text: t({
				fr: "Tous les messages non lus seront marqués comme lus.",
				en: "All unread messages will be marked as read."
			}),
			confirmText: t({
				fr: "Oui, marquer tout",
				en: "Yes, mark all"
			}),
			cancelText: t({
				fr: "Annuler",
				en: "Cancel"
			})
		})) return;
		const base = getAppBaseUrl();
		if ((await Promise.all(messages.filter((m) => !m.read).map((m) => fetch(`${base}/api/messages`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-csrf-token": getCsrfToken()
			},
			body: JSON.stringify({
				id: m.id,
				read: true
			})
		})))).some((response) => !response.ok)) throw new Error("Failed to mark messages as read");
		setMessages((prev) => prev.map((m) => ({
			...m,
			read: true
		})));
		await showInfo(t({
			fr: "Messages à jour",
			en: "Messages updated"
		}), t({
			fr: "Tous les messages sont maintenant lus.",
			en: "All messages are now marked as read."
		}));
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: t({
			fr: "Messages",
			en: "Messages"
		}),
		description: t({
			fr: "Messagerie du site",
			en: "Site inbox"
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-[40vh] items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "size-8 animate-spin text-muted-foreground" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPagination, {
			currentPage,
			totalPages,
			onPageChange: setCurrentPage
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: t({
			fr: "Messages",
			en: "Messages"
		}),
		description: t({
			fr: "Messagerie du site",
			en: "Site inbox"
		}),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: markAllAsRead,
				disabled: unreadCount === 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailOpen, { className: "mr-2 size-4" }), t({
					fr: "Tout marquer lu",
					en: "Mark all read"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: load,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "mr-2 size-4" }), t({
					fr: "Actualiser",
					en: "Refresh"
				})]
			})]
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[280px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute inset-y-0 left-3 my-auto size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: t({
							fr: "Rechercher...",
							en: "Search..."
						}),
						value: search,
						onChange: (e) => setSearch(e.target.value),
						className: "pl-9"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: filter === "all" ? "secondary" : "ghost",
							size: "sm",
							className: "justify-start",
							onClick: () => setFilter("all"),
							children: [t({
								fr: "Tous",
								en: "All"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto text-xs text-muted-foreground",
								children: messages.length
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: filter === "unread" ? "secondary" : "ghost",
							size: "sm",
							className: "justify-start",
							onClick: () => setFilter("unread"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailX, { className: "mr-2 size-4" }),
								t({
									fr: "Non lus",
									en: "Unread"
								}),
								unreadCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto rounded-full bg-destructive px-1.5 py-0.5 text-[10px] text-destructive-foreground",
									children: unreadCount
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: filter === "read" ? "secondary" : "ghost",
							size: "sm",
							className: "justify-start",
							onClick: () => setFilter("read"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailOpen, { className: "mr-2 size-4" }),
								t({
									fr: "Lus",
									en: "Read"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto text-xs text-muted-foreground",
									children: messages.length - unreadCount
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-8 text-center text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: t({
							fr: "Aucun message ne correspond à votre filtre.",
							en: "No message matches your filter."
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: t({
							fr: "Essayez une autre recherche ou changez de filtre.",
							en: "Try another search or change the filter."
						})
					})]
				}) : paginatedFiltered.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: `p-5 transition-colors ${!m.read ? "border-primary/40 bg-primary/[0.03]" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold",
											children: m.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: m.email
										}),
										!m.read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground",
											children: t({
												fr: "Nouveau",
												en: "New"
											})
										}) : null
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: m.subject
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground line-clamp-2",
									children: m.message
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: new Date(m.date).toLocaleString(lang === "fr" ? "fr-FR" : "en-US")
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "size-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "size-4" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
								align: "end",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										onClick: () => replyTo(m),
										children: t({
											fr: "Répondre par e-mail",
											en: "Reply by email"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										onClick: () => markAsRead(m.id, !m.read),
										children: m.read ? t({
											fr: "Marquer comme non lu",
											en: "Mark as unread"
										}) : t({
											fr: "Marquer comme lu",
											en: "Mark as read"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
										onClick: () => confirmDelete(m.id),
										className: "text-destructive focus:text-destructive",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 size-4" }), t({
											fr: "Supprimer",
											en: "Delete"
										})]
									})
								]
							})] })
						})]
					})
				}, m.id))
			})]
		})
	});
}
//#endregion
export { AdminMessages as component };
