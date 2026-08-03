import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, r as useI18n } from "./utils-BiYSywJx.mjs";
import { B as FileText, E as LogOut, _ as PenLine, b as MessageSquareText, j as LayoutDashboard, v as Newspaper, x as Menu, z as GalleryThumbnails } from "../_libs/lucide-react.mjs";
import { t as getAppBaseUrl } from "./app-url-CsE7cn1T.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as showConfirm } from "./alerts-FKPi0eTV.mjs";
import { i as SheetTrigger, n as SheetContent, r as SheetTitle, t as Sheet } from "./sheet-Ctremsyt.mjs";
import { i as getStoredAdminSession, n as clearStoredAdminSession } from "./admin-auth-JTTyccoN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminShell-DeEWyhi8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var navItems = [
	{
		to: "/admin",
		label: {
			fr: "Tableau de bord",
			en: "Dashboard"
		},
		icon: LayoutDashboard,
		end: true
	},
	{
		to: "/admin/messages",
		label: {
			fr: "Messages",
			en: "Messages"
		},
		icon: MessageSquareText
	},
	{
		to: "/admin/actualites",
		label: {
			fr: "Actualités",
			en: "News"
		},
		icon: Newspaper
	},
	{
		to: "/admin/documents",
		label: {
			fr: "Documents",
			en: "Documents"
		},
		icon: FileText
	},
	{
		to: "/admin/galerie",
		label: {
			fr: "Galerie",
			en: "Gallery"
		},
		icon: GalleryThumbnails
	},
	{
		to: "/admin/pages",
		label: {
			fr: "Pages",
			en: "Pages"
		},
		icon: PenLine
	}
];
function AdminShell({ title, description, actions, children }) {
	const { t, lang } = useI18n();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [unreadCount, setUnreadCount] = (0, import_react.useState)(0);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [sessionInfo, setSessionInfo] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const load = async () => {
			try {
				const base = getAppBaseUrl();
				const response = await fetch(`${base}/api/messages`);
				if (!response.ok) return;
				const messages = await response.json();
				setUnreadCount(messages.filter((message) => !message.read).length);
			} catch {
				setUnreadCount(0);
			}
		};
		const session = getStoredAdminSession();
		setSessionInfo(session?.email ?? null);
		load();
		const timer = window.setInterval(load, 5e3);
		return () => window.clearInterval(timer);
	}, []);
	const handleLogout = async () => {
		if (await showConfirm({
			title: t({
				fr: "Se déconnecter ?",
				en: "Log out?"
			}),
			text: t({
				fr: "Vous quitterez l’espace d’administration.",
				en: "You’ll leave the admin area."
			}),
			confirmText: t({
				fr: "Oui, quitter",
				en: "Yes, log out"
			}),
			cancelText: t({
				fr: "Rester",
				en: "Stay"
			})
		})) {
			clearStoredAdminSession();
			window.location.href = "/";
		}
	};
	const renderNavItem = (item) => {
		const active = pathname === item.to || (item.end ? pathname === item.to : pathname.startsWith(item.to));
		const Icon = item.icon;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: item.to,
			onClick: () => setMobileOpen(false),
			className: cn("flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all", active ? "bg-primary/10 text-primary shadow-sm" : "text-foreground/70 hover:bg-muted hover:text-foreground"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("size-4", active && "text-primary") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(item.label) }),
				item.to === "/admin/messages" && unreadCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "ml-auto rounded-full bg-destructive px-1.5 py-0.5 text-[10px] text-destructive-foreground",
					children: unreadCount
				}) : null
			]
		}, item.to);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen bg-muted/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-16 items-center gap-3 border-b border-border/70 px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: t({
							fr: "REKOMA",
							en: "REKOMA"
						}),
						className: "size-9 rounded-lg object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold",
							children: "REKOMA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: "Administration"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex-1 overflow-y-auto p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/80",
						children: t({
							fr: "Menu",
							en: "Menu"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-0.5",
						children: navItems.map(renderNavItem)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/60 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: "w-full justify-start text-foreground/75 hover:text-foreground",
						onClick: handleLogout,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 size-4" }), t({
							fr: "Déconnexion",
							en: "Logout"
						})]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-16 shrink-0 items-center justify-between border-b border-border/60 bg-card/80 px-4 backdrop-blur-md lg:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open: mobileOpen,
							onOpenChange: setMobileOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "lg:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
								side: "left",
								className: "w-[88vw] max-w-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
										className: "sr-only",
										children: t({
											fr: "Navigation admin",
											en: "Admin navigation"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/logo.png",
											alt: "REKOMA",
											className: "size-9 rounded-lg object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "leading-tight",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-bold",
												children: "REKOMA"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: t({
													fr: "Administration",
													en: "Administration"
												})
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 space-y-1",
										children: navItems.map(renderNavItem)
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-lg font-semibold",
									children: title
								}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: ["· ", description]
								}) : null]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: actions
							}) : null,
							sessionInfo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-xs text-muted-foreground sm:block",
								children: sessionInfo
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: handleLogout,
								className: "text-foreground/75 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: t({
										fr: "Déconnexion",
										en: "Logout"
									})
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:hidden border-b border-border/60 bg-card/80 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-lg font-semibold",
						children: title
					}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: description
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full overflow-y-auto px-4 py-6 lg:px-8",
						children
					})
				})
			]
		})]
	});
}
//#endregion
export { AdminShell as t };
