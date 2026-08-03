import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, r as useI18n, t as LanguageProvider } from "./utils-BiYSywJx.mjs";
import { i as nav, n as faq, o as org, t as axes } from "./content-Z8MbjWaS.mjs";
import { i as motion, n as useSpring, r as useScroll } from "../_libs/framer-motion.mjs";
import { C as Mail, N as Heart, O as Linkedin, R as Globe, S as MapPin, V as Facebook, d as Send, f as Search, h as Phone, s as Sun, x as Menu, y as Moon } from "../_libs/lucide-react.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$26 } from "./actualites-BHmRlujT.mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
import { i as showSuccess } from "./alerts-FKPi0eTV.mjs";
import { n as verifyCsrfToken } from "./csrf-Bg1sT1bJ.mjs";
import { i as SheetTrigger, n as SheetContent, r as SheetTitle, t as Sheet } from "./sheet-Ctremsyt.mjs";
import { i as getStoredAdminSession, t as ADMIN_ALLOWED_USERS } from "./admin-auth-JTTyccoN.mjs";
import { r as DialogContent, t as Dialog } from "./dialog-C00mg3M5.mjs";
import { i as stringType, n as objectType, r as recordType, t as arrayType } from "../_libs/zod.mjs";
import { t as Route$27 } from "./documents-g-El5dE-.mjs";
import { t as Stripe } from "../_libs/stripe.mjs";
import { t as Route$28 } from "./routes-LYx0EF4K.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D2jBWWyW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BuH9iccG.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var ThemeContext = (0, import_react.createContext)({
	theme: "light",
	toggle: () => {}
});
var STORAGE_KEY = "rekoma-theme";
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const next = window.localStorage.getItem(STORAGE_KEY) ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setTheme(next);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);
	const toggle = (0, import_react.useCallback)(() => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			window.localStorage.setItem(STORAGE_KEY, next);
			return next;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
function useTheme() {
	return (0, import_react.useContext)(ThemeContext);
}
var Command$1 = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}));
Command$1.displayName = _e.displayName;
var CommandDialog = ({ children, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command$1, {
				className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children
			})
		})
	});
};
var CommandInput = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = _e.Input.displayName;
var CommandList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}));
CommandList.displayName = _e.List.displayName;
var CommandEmpty = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}));
CommandEmpty.displayName = _e.Empty.displayName;
var CommandGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = _e.Group.displayName;
var CommandSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = _e.Separator.displayName;
var CommandItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}));
CommandItem.displayName = _e.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
CommandShortcut.displayName = "CommandShortcut";
function CommandPalette({ open, onOpenChange }) {
	const { t } = useI18n();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				onOpenChange(!open);
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open, onOpenChange]);
	const go = (to) => {
		onOpenChange(false);
		navigate({ to });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandDialog, {
		open,
		onOpenChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: t({
			fr: "Rechercher une page, un axe...",
			en: "Search a page, a pillar..."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: t({
				fr: "Aucun résultat.",
				en: "No results."
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandGroup, {
				heading: t({
					fr: "Pages",
					en: "Pages"
				}),
				children: [
					nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
						value: t(item.label),
						onSelect: () => go(item.to),
						children: t(item.label)
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
						value: t({
							fr: "Faire un don",
							en: "Donate"
						}),
						onSelect: () => go("/don"),
						children: t({
							fr: "Faire un don",
							en: "Donate"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
						value: "FAQ",
						onSelect: () => go("/faq"),
						children: "FAQ"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
				heading: t({
					fr: "Axes du PDIMA",
					en: "PDIMA pillars"
				}),
				children: axes.map((axis) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandItem, {
					value: t(axis.title),
					onSelect: () => go("/pdima"),
					children: t(axis.title)
				}, axis.icon))
			})
		] })]
	});
}
function Header() {
	const { t, lang, setLang } = useI18n();
	const { theme, toggle } = useTheme();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [paletteOpen, setPaletteOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .2
	});
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
			children: t({
				fr: "Aller au contenu",
				en: "Skip to content"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "glass shadow-soft" : "bg-transparent"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid h-16 w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-x-10 px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-2.5 whitespace-nowrap transition-transform duration-150 lg:-translate-x-[90px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.png",
							alt: org.name,
							className: "h-9 w-9 rounded-xl object-cover shadow-soft transition-transform duration-150 group-hover:translate-x-1 group-active:-translate-x-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-bold tracking-tight text-foreground",
								children: org.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium text-muted-foreground",
								children: org.project
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Principal",
						className: "hidden items-center justify-center gap-0.5 lg:flex",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("relative rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground whitespace-nowrap", pathname === item.to && "bg-secondary text-foreground shadow-sm"),
							children: [t(item.label), pathname === item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-active",
								className: "absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand"
							}) : null]
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-end gap-1 transition-transform duration-150 lg:translate-x-[90px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "hidden sm:inline-flex",
								"aria-label": t({
									fr: "Recherche globale",
									en: "Global search"
								}),
								onClick: () => setPaletteOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t({
									fr: "Changer de langue",
									en: "Switch language"
								}),
								onClick: () => setLang(lang === "fr" ? "en" : "fr"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: lang
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "hidden text-xs font-semibold text-muted-foreground sm:inline",
								children: lang.toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": t({
									fr: "Basculer le thème",
									en: "Toggle theme"
								}),
								onClick: toggle,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										rotate: -90,
										opacity: 0,
										scale: .6
									},
									animate: {
										rotate: 0,
										opacity: 1,
										scale: 1
									},
									transition: { duration: .35 },
									className: "grid place-items-center",
									children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {})
								}, theme)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "hero",
								className: "ml-1 hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/don",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), t({
										fr: "Faire un don",
										en: "Donate"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
								open,
								onOpenChange: setOpen,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "icon",
										className: "lg:hidden",
										"aria-label": t({
											fr: "Ouvrir le menu",
											en: "Open menu"
										}),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
									side: "right",
									className: "w-[86vw] max-w-sm border-l border-border/70 bg-background/95 backdrop-blur-xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
										className: "text-left",
										children: org.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
										"aria-label": "Mobile",
										className: "mt-6 flex flex-col gap-1",
										children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: item.to,
											onClick: () => setOpen(false),
											className: cn("rounded-xl px-3 py-3 text-base font-medium transition-colors", pathname === item.to ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"),
											children: t(item.label)
										}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "hero",
											size: "xl",
											className: "mt-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/don",
												onClick: () => setOpen(false),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), t({
													fr: "Faire un don",
													en: "Donate"
												})]
											})
										})]
									})]
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { scaleX: progress },
				className: "h-0.5 origin-left bg-gradient-brand",
				"aria-hidden": true
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {
			open: paletteOpen,
			onOpenChange: setPaletteOpen
		})
	] });
}
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 bg-mesh opacity-40",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto w-full max-w-6xl px-4 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground",
								children: "R"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-bold",
								children: org.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: [
								t(org.full),
								" — ",
								t(org.projectFull),
								" (",
								org.project,
								")."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "glass",
									size: "icon",
									"aria-label": "Facebook",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://facebook.com",
										target: "_blank",
										rel: "noreferrer noopener",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "glass",
									size: "icon",
									"aria-label": "LinkedIn",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://linkedin.com",
										target: "_blank",
										rel: "noreferrer noopener",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "glass",
									size: "icon",
									"aria-label": "Email",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${org.email}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {})
									})
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": t({
							fr: "Navigation du pied de page",
							en: "Footer navigation"
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: t({
								fr: "Navigation",
								en: "Navigation"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2.5 text-sm",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: t(item.label)
							}) }, item.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: t({
							fr: "Liens utiles",
							en: "Useful links"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/don",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: t({
									fr: "Faire un don",
									en: "Donate"
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/faq",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: "FAQ"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/documents",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: t({
									fr: "Transparence",
									en: "Transparency"
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/mentions-legales",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: t({
									fr: "Mentions légales",
									en: "Legal notice"
								})
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/confidentialite",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: t({
									fr: "Confidentialité",
									en: "Privacy"
								})
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: t({
								fr: "Newsletter",
								en: "Newsletter"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: t({
								fr: "Recevez nos rapports d'avancement et nos actualités terrain.",
								en: "Receive our progress reports and field news."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4 flex gap-2",
							onSubmit: async (e) => {
								e.preventDefault();
								const form = e.currentTarget;
								await showSuccess(t({
									fr: "Merci ! Inscription enregistrée.",
									en: "Thank you! You're subscribed."
								}));
								form.reset();
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "sr-only",
									htmlFor: "newsletter-email",
									children: t({
										fr: "Adresse e-mail",
										en: "Email address"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "newsletter-email",
									type: "email",
									required: true,
									placeholder: t({
										fr: "vous@exemple.com",
										en: "you@example.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									variant: "hero",
									"aria-label": t({
										fr: "S'inscrire",
										en: "Subscribe"
									}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "mt-0.5 size-4 shrink-0",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(org.location) })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "mt-0.5 size-4 shrink-0",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: org.phone })]
							})]
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					org.name,
					".",
					" ",
					t({
						fr: "Tous droits réservés.",
						en: "All rights reserved."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
					href: "https://devmisaina.com",
					target: "_blank",
					rel: "noreferrer noopener",
					className: "group inline-flex items-center gap-2",
					whileHover: { y: -2 },
					transition: {
						type: "spring",
						stiffness: 300,
						damping: 18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Designed & Developed by" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative font-semibold text-gradient",
						children: ["DevMisaina", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-brand transition-all duration-500 group-hover:w-full" })]
					})]
				})]
			})]
		})]
	});
}
var SESSION_KEY = "rekoma-visit-counted";
function VisitorTracker() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.sessionStorage.getItem(SESSION_KEY)) return;
		window.sessionStorage.setItem(SESSION_KEY, "1");
		fetch(`${window.location.origin}/api/visits`, { method: "POST" }).catch(() => {});
	}, []);
	return null;
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$25 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "REKOMA — Projet de Développement Intégré de Midongy Atsimo" },
			{
				name: "description",
				content: "REKOMA porte le PDIMA : sept axes de développement intégré à Midongy Atsimo, Madagascar."
			},
			{
				name: "author",
				content: "Association REKOMA"
			},
			{
				property: "og:site_name",
				content: "REKOMA — PDIMA"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/logo.png",
				type: "image/png"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "NGO",
				name: "REKOMA — Regroupement des Kidobo Opportunistes de Midongy Atsimo",
				description: "Association communautaire porteuse du Projet de Développement Intégré de Midongy Atsimo (PDIMA).",
				foundingDate: "2025",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Nosifeno",
					addressRegion: "Midongy Atsimo",
					addressCountry: "MG"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$25.useRouteContext();
	const isAdminRoute = useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LanguageProvider, { children: [
			!isAdminRoute ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			!isAdminRoute ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitorTracker, {}) : null,
			!isAdminRoute ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
				position: "top-center",
				richColors: true
			})
		] }) })
	});
}
var $$splitComponentImporter$15 = () => import("./a-propos-C5FK7Cbu.mjs");
var Route$24 = createFileRoute("/a-propos")({
	component: lazyRouteComponent($$splitComponentImporter$15, "component"),
	head: () => ({
		meta: [
			{ title: "À propos de REKOMA — histoire, mission, vision et valeurs" },
			{
				name: "description",
				content: "REKOMA, association communautaire fondée en 2025 à Midongy Atsimo : histoire, mission, vision, valeurs et objectifs spécifiques du PDIMA."
			},
			{
				property: "og:title",
				content: "À propos de REKOMA"
			},
			{
				property: "og:description",
				content: "Histoire, mission, vision et valeurs de l'association REKOMA à Madagascar."
			},
			{
				property: "og:url",
				content: "/a-propos"
			}
		],
		links: [{
			rel: "canonical",
			href: "/a-propos"
		}]
	})
});
var $$splitComponentImporter$14 = () => import("./confidentialite-D7xDy7zG.mjs");
var Route$23 = createFileRoute("/confidentialite")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => ({
		meta: [
			{ title: "Politique de confidentialité — REKOMA" },
			{
				name: "description",
				content: "Comment l'association REKOMA collecte, utilise et protège les données personnelles transmises via son site et son formulaire de contact."
			},
			{
				property: "og:title",
				content: "Politique de confidentialité — REKOMA"
			},
			{
				property: "og:description",
				content: "Traitement et protection des données personnelles sur le site REKOMA."
			},
			{
				property: "og:url",
				content: "/confidentialite"
			}
		],
		links: [{
			rel: "canonical",
			href: "/confidentialite"
		}]
	})
});
var $$splitComponentImporter$13 = () => import("./contact-BiEhJSVL.mjs");
var Route$22 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({
		meta: [
			{ title: "Contact — REKOMA, Midongy Atsimo Madagascar" },
			{
				name: "description",
				content: "Contactez l'association REKOMA : partenariat, financement, adhésion ou demande d'information sur le projet PDIMA à Midongy Atsimo."
			},
			{
				property: "og:title",
				content: "Contact — REKOMA"
			},
			{
				property: "og:description",
				content: "Écrivez-nous pour un partenariat, un financement ou une adhésion."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	})
});
objectType({
	name: stringType().min(2, { message: "min" }).max(80),
	email: stringType().email({ message: "email" }),
	subject: stringType().min(1, { message: "min" }),
	message: stringType().min(20, { message: "min20" }).max(2e3)
});
var $$splitComponentImporter$12 = () => import("./don-CaNVivWq.mjs");
var Route$21 = createFileRoute("/don")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({
		meta: [
			{ title: "Faire un don ou devenir partenaire du PDIMA" },
			{
				name: "description",
				content: "Soutenez le PDIMA : don financier, partenariat technique, mécénat d'entreprise ou adhésion à l'association REKOMA à Midongy Atsimo."
			},
			{
				property: "og:title",
				content: "Faire un don ou devenir partenaire — REKOMA"
			},
			{
				property: "og:description",
				content: "Quatre façons de soutenir le développement de Midongy Atsimo."
			},
			{
				property: "og:url",
				content: "/don"
			}
		],
		links: [{
			rel: "canonical",
			href: "/don"
		}]
	})
});
var $$splitComponentImporter$11 = () => import("./faq-CVtABgzu.mjs");
var Route$20 = createFileRoute("/faq")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({
		meta: [
			{ title: "FAQ — questions fréquentes sur REKOMA et le PDIMA" },
			{
				name: "description",
				content: "Statut juridique, utilisation des fonds, alignement ODD, adhésion et partenariats : toutes les réponses sur l'association REKOMA et le projet PDIMA."
			},
			{
				property: "og:title",
				content: "FAQ — REKOMA / PDIMA"
			},
			{
				property: "og:description",
				content: "Les réponses aux questions les plus fréquentes sur le projet."
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faq.map((f) => ({
					"@type": "Question",
					name: f.q.fr,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a.fr
					}
				}))
			})
		}]
	})
});
var $$splitComponentImporter$10 = () => import("./gouvernance-Gk9z0ixg.mjs");
var Route$19 = createFileRoute("/gouvernance")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({
		meta: [
			{ title: "Gouvernance & équipe — Association REKOMA" },
			{
				name: "description",
				content: "Organes de gouvernance de REKOMA : Assemblée Générale, Bureau Exécutif, Commissariat aux comptes, et présentation de l'équipe dirigeante."
			},
			{
				property: "og:title",
				content: "Gouvernance & équipe — REKOMA"
			},
			{
				property: "og:description",
				content: "Structure de gouvernance et équipe dirigeante de l'association REKOMA."
			},
			{
				property: "og:url",
				content: "/gouvernance"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gouvernance"
		}]
	})
});
var $$splitComponentImporter$9 = () => import("./impact-CEw-MBZU.mjs");
var Route$18 = createFileRoute("/impact")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({
		meta: [
			{ title: "Impact & galerie — résultats attendus du PDIMA" },
			{
				name: "description",
				content: "Bénéficiaires, emplois, accès à l'eau et formation : les indicateurs d'impact du PDIMA à Midongy Atsimo, illustrés par notre galerie terrain."
			},
			{
				property: "og:title",
				content: "Impact & galerie — PDIMA"
			},
			{
				property: "og:description",
				content: "Indicateurs d'impact, bénéficiaires et images du terrain à Midongy Atsimo."
			},
			{
				property: "og:url",
				content: "/impact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/impact"
		}]
	})
});
var $$splitComponentImporter$8 = () => import("./mentions-legales-C-1jTmCl.mjs");
var Route$17 = createFileRoute("/mentions-legales")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({
		meta: [
			{ title: "Mentions légales — Association REKOMA" },
			{
				name: "description",
				content: "Mentions légales du site de l'association REKOMA : éditeur, statut juridique, hébergement, propriété intellectuelle et contact."
			},
			{
				property: "og:title",
				content: "Mentions légales — REKOMA"
			},
			{
				property: "og:description",
				content: "Informations légales relatives au site de l'association REKOMA."
			},
			{
				property: "og:url",
				content: "/mentions-legales"
			}
		],
		links: [{
			rel: "canonical",
			href: "/mentions-legales"
		}]
	})
});
var $$splitComponentImporter$7 = () => import("./pdima-BqfX-eNR.mjs");
var Route$16 = createFileRoute("/pdima")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({
		meta: [
			{ title: "Projet PDIMA — 7 axes d'intervention à Midongy Atsimo" },
			{
				name: "description",
				content: "Découvrez les sept axes du Projet de Développement Intégré de Midongy Atsimo : activités, résultats attendus, chronogramme sur 36 mois et gestion des risques."
			},
			{
				property: "og:title",
				content: "Projet PDIMA — 7 axes d'intervention"
			},
			{
				property: "og:description",
				content: "Activités, résultats attendus, phases de mise en œuvre et analyse des risques du PDIMA."
			},
			{
				property: "og:url",
				content: "/pdima"
			},
			{
				property: "og:type",
				content: "article"
			}
		],
		links: [{
			rel: "canonical",
			href: "/pdima"
		}]
	})
});
var BASE_URL = "";
var Route$15 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/a-propos",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/pdima",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/impact",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/actualites",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/documents",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/gouvernance",
				changefreq: "yearly",
				priority: "0.6"
			},
			{
				path: "/don",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/faq",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "yearly",
				priority: "0.7"
			},
			{
				path: "/mentions-legales",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/confidentialite",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$6 = () => import("./admin-Ldttgj-f.mjs");
var Route$14 = createFileRoute("/admin/")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (!getStoredAdminSession()) throw redirect({
				to: "/admin/login",
				search: { from: "/admin" },
				replace: true
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./actualites-CGoqztSZ.mjs");
var Route$13 = createFileRoute("/admin/actualites")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (!getStoredAdminSession()) throw redirect({
				to: "/admin/login",
				search: { from: "/admin/actualites" },
				replace: true
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./documents-BqNu1ps5.mjs");
var Route$12 = createFileRoute("/admin/documents")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (!getStoredAdminSession()) throw redirect({
				to: "/admin/login",
				search: { from: "/admin/documents" },
				replace: true
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./galerie-BeAudamG.mjs");
var Route$11 = createFileRoute("/admin/galerie")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (!getStoredAdminSession()) throw redirect({
				to: "/admin/login",
				search: { from: "/admin/galerie" },
				replace: true
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./login-DMPme_Q_.mjs");
var Route$10 = createFileRoute("/admin/login")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (getStoredAdminSession()) throw redirect({ to: "/admin" });
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./messages-0PpKaBb5.mjs");
var Route$9 = createFileRoute("/admin/messages")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (!getStoredAdminSession()) throw redirect({
				to: "/admin/login",
				search: { from: "/admin/messages" },
				replace: true
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./pages-q-eGMSh5.mjs");
var Route$8 = createFileRoute("/admin/pages")({
	beforeLoad: () => {
		if (typeof window !== "undefined") {
			if (!getStoredAdminSession()) throw redirect({
				to: "/admin/login",
				search: { from: "/admin/pages" },
				replace: true
			});
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RateLimiter = class {
	windowMs;
	max;
	entries = /* @__PURE__ */ new Map();
	constructor(options) {
		this.windowMs = options.windowMs;
		this.max = options.max;
	}
	check(key) {
		const now = Date.now();
		const recent = (this.entries.get(key) ?? []).filter((timestamp) => now - timestamp < this.windowMs);
		if (recent.length >= this.max) {
			this.entries.set(key, recent);
			return false;
		}
		recent.push(now);
		this.entries.set(key, recent);
		return true;
	}
};
var resendApiKey$1 = process.env.RESEND_API_KEY ?? process.env.VITE_RESEND_API_KEY;
var fromEmail$1 = process.env.RESEND_FROM_EMAIL ?? process.env.VITE_RESEND_FROM_EMAIL ?? "donations@rekoma-pdima.org";
var fromName$1 = process.env.RESEND_FROM_NAME ?? process.env.VITE_RESEND_FROM_NAME ?? "REKOMA";
var resend$1 = resendApiKey$1 ? new Resend(resendApiKey$1) : null;
async function sendEmail(opts) {
	if (!resend$1) {
		console.warn("RESEND_API_KEY not configured, skipping email send");
		return {
			success: true,
			fallback: true,
			message: "Email service is not configured."
		};
	}
	try {
		await resend$1.emails.send({
			from: `${fromName$1} <${fromEmail$1}>`,
			to: opts.to,
			subject: opts.subject,
			html: opts.html
		});
		return { success: true };
	} catch (error) {
		console.error("Failed to send email:", error);
		return {
			success: false,
			fallback: true,
			message: "Email delivery failed."
		};
	}
}
function verifyCsrf$1(request) {
	const headerToken = request.headers.get("x-csrf-token");
	const cookieToken = request.headers.get("cookie")?.match(/rekoma-csrf-token=([^;]+)/)?.[1];
	return Boolean(headerToken && cookieToken && headerToken === decodeURIComponent(cookieToken));
}
var MESSAGES_FILE = resolve(process.cwd(), "messages.json");
var messageLimiter = new RateLimiter({
	windowMs: 6e4,
	max: 5
});
var messageSchema = objectType({
	name: stringType().trim().min(2).max(80),
	email: stringType().trim().email(),
	subject: stringType().trim().min(1).max(120),
	message: stringType().trim().min(20).max(2e3)
});
function readMessages() {
	try {
		const data = readFileSync(MESSAGES_FILE, "utf-8");
		return JSON.parse(data);
	} catch {
		return [];
	}
}
function writeMessages(messages) {
	writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
}
var Route$7 = createFileRoute("/api/messages")({ server: { handlers: {
	GET: async () => {
		const messages = readMessages();
		return new Response(JSON.stringify(messages), { headers: { "Content-Type": "application/json" } });
	},
	POST: async ({ request }) => {
		const body = await request.json().catch(() => null);
		if (!body || typeof body !== "object") return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const ip = request.headers.get("x-forwarded-for") ?? "local";
		if (!messageLimiter.check(ip)) return new Response(JSON.stringify({
			success: false,
			error: "Too many requests"
		}), {
			status: 429,
			headers: { "Content-Type": "application/json" }
		});
		const parsed = messageSchema.safeParse(body);
		if (!parsed.success) return new Response(JSON.stringify({
			success: false,
			error: "Validation failed"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const messages = readMessages();
		if (body?.id) {
			const index = messages.findIndex((message) => message.id === body.id);
			if (index >= 0) {
				messages[index] = {
					...messages[index],
					read: typeof body.read === "boolean" ? body.read : messages[index].read
				};
				writeMessages(messages);
				return new Response(JSON.stringify({
					success: true,
					message: messages[index]
				}), { headers: { "Content-Type": "application/json" } });
			}
		}
		const newMessage = {
			id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
			name: parsed.data.name,
			email: parsed.data.email,
			subject: parsed.data.subject,
			message: parsed.data.message,
			date: (/* @__PURE__ */ new Date()).toISOString(),
			read: false
		};
		messages.unshift(newMessage);
		writeMessages(messages);
		sendEmail({
			to: ADMIN_ALLOWED_USERS.map((user) => user.email),
			subject: `Nouveau message — ${newMessage.subject}`,
			html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #2563eb;">Nouveau message de contact</h1>
              <p><strong>De :</strong> ${newMessage.name} (${newMessage.email})</p>
              <p><strong>Objet :</strong> ${newMessage.subject}</p>
              <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0; white-space: pre-wrap;">
                ${newMessage.message}
              </div>
              <p style="color: #6b7280; font-size: 12px;">
                Reçu le ${new Date(newMessage.date).toLocaleString("fr-FR")} — ${fromName$1}
              </p>
            </div>
          `
		}).catch((error) => console.error("Admin notification email failed:", error));
		return new Response(JSON.stringify({
			success: true,
			message: newMessage
		}), { headers: { "Content-Type": "application/json" } });
	},
	DELETE: async ({ request }) => {
		if (!verifyCsrf$1(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		writeMessages(readMessages().filter((m) => m.id !== body?.id));
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	}
} } });
function verifyCsrf(request) {
	const headerToken = request.headers.get("x-csrf-token");
	const cookieToken = request.headers.get("cookie")?.match(/rekoma-csrf-token=([^;]+)/)?.[1];
	return Boolean(headerToken && cookieToken && headerToken === decodeURIComponent(cookieToken));
}
var resendApiKey = process.env.RESEND_API_KEY ?? process.env.VITE_RESEND_API_KEY;
var adminLoginLimiter = new RateLimiter({
	windowMs: 6e4,
	max: 5
});
var fromEmail = process.env.RESEND_FROM_EMAIL ?? process.env.VITE_RESEND_FROM_EMAIL ?? "donations@rekoma-pdima.org";
var fromName = process.env.RESEND_FROM_NAME ?? process.env.VITE_RESEND_FROM_NAME ?? "REKOMA";
var resend = resendApiKey ? new Resend(resendApiKey) : null;
var Route$6 = createFileRoute("/api/notify-admin-login")({ server: { handlers: { POST: async ({ request }) => {
	if (!verifyCsrf(request)) return new Response(JSON.stringify({
		success: false,
		error: "Invalid CSRF token"
	}), {
		status: 403,
		headers: { "Content-Type": "application/json" }
	});
	const { email, code } = await request.json().catch(() => null) ?? {};
	const ip = request.headers.get("x-forwarded-for") ?? "local";
	if (!adminLoginLimiter.check(ip)) return new Response(JSON.stringify({
		success: false,
		error: "Too many requests"
	}), {
		status: 429,
		headers: { "Content-Type": "application/json" }
	});
	if (!email || !code) return new Response(JSON.stringify({
		success: false,
		error: "Missing email or code"
	}), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	if (!resend) {
		console.warn("RESEND_API_KEY not configured, using fallback admin login code flow");
		return new Response(JSON.stringify({
			success: true,
			fallback: true,
			code,
			message: "Email service is not configured. Use the code shown in the app."
		}), { headers: { "Content-Type": "application/json" } });
	}
	try {
		await resend.emails.send({
			from: `${fromName} <${fromEmail}>`,
			to: email,
			subject: "Code de vérification — Connexion administration REKOMA / PDIMA",
			html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #2563eb;">Code de vérification</h1>
                <p>Vous avez demandé à vous connecter à l'interface d'administration de REKOMA / PDIMA.</p>
                <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0; text-align: center;">
                  <p style="font-size: 2rem; font-weight: bold; letter-spacing: 0.25em;">${code}</p>
                </div>
                <p>Ce code est valable 5 minutes.</p>
                <p>Si vous n'avez pas demandé cette connexion, vous pouvez ignorer cet e-mail.</p>
                <p>— L'équipe REKOMA</p>
              </div>
            `
		});
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	} catch (error) {
		console.error("Failed to send admin login code email:", error);
		return new Response(JSON.stringify({
			success: true,
			fallback: true,
			code,
			message: "Email delivery failed. Use the code shown in the app."
		}), { headers: { "Content-Type": "application/json" } });
	}
} } } });
var VISITS_FILE = resolve(process.cwd(), "visits.json");
var visitLimiter = new RateLimiter({
	windowMs: 6e4,
	max: 60
});
function readVisits() {
	try {
		const data = readFileSync(VISITS_FILE, "utf-8");
		const parsed = JSON.parse(data);
		return {
			total: parsed.total ?? 0,
			days: parsed.days ?? {}
		};
	} catch {
		return {
			total: 0,
			days: {}
		};
	}
}
function writeVisits(visits) {
	writeFileSync(VISITS_FILE, JSON.stringify(visits, null, 2), "utf-8");
}
function todayKey() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
var Route$5 = createFileRoute("/api/visits")({ server: { handlers: {
	GET: async () => {
		const visits = readVisits();
		return new Response(JSON.stringify(visits), { headers: { "Content-Type": "application/json" } });
	},
	POST: async ({ request }) => {
		const ip = request.headers.get("x-forwarded-for") ?? "local";
		if (!visitLimiter.check(ip)) return new Response(JSON.stringify({
			success: false,
			error: "Too many requests"
		}), {
			status: 429,
			headers: { "Content-Type": "application/json" }
		});
		const visits = readVisits();
		const key = todayKey();
		visits.total += 1;
		visits.days[key] = (visits.days[key] ?? 0) + 1;
		writeVisits(visits);
		return new Response(JSON.stringify(visits), { headers: { "Content-Type": "application/json" } });
	}
} } });
var CMS_CANDIDATES = [
	resolve(process.cwd(), "public/cms-content.json"),
	resolve(process.cwd(), "static/cms-content.json"),
	resolve(process.cwd(), "../static/cms-content.json"),
	resolve(process.cwd(), "../../static/cms-content.json"),
	resolve(process.cwd(), "../../../static/cms-content.json")
];
var CMS_FILE = CMS_CANDIDATES.find((p) => existsSync(p)) ?? CMS_CANDIDATES[0];
function readCmsFile() {
	return readFileSync(CMS_FILE, "utf-8");
}
function writeCmsFile(data) {
	try {
		writeFileSync(CMS_FILE, data, "utf-8");
	} catch (error) {
		console.warn("CMS write skipped (read-only filesystem):", error.message);
	}
}
function readCms$3() {
	try {
		const data = readCmsFile();
		return JSON.parse(data);
	} catch {
		return { cms: {
			news: [],
			documents: [],
			gallery: [],
			pages: []
		} };
	}
}
function writeCms$3(data) {
	writeCmsFile(JSON.stringify(data, null, 2));
}
var documentSchema = objectType({
	id: stringType().min(1),
	title: recordType(stringType()).refine((value) => Object.keys(value).length > 0),
	type: stringType().min(1),
	description: recordType(stringType()).refine((value) => Object.keys(value).length > 0),
	url: stringType().url()
});
var documentsArraySchema = arrayType(documentSchema);
var Route$4 = createFileRoute("/api/cms/documents")({ server: { handlers: {
	GET: async () => {
		const data = readCms$3();
		return new Response(JSON.stringify(data.cms?.documents ?? []), { headers: { "Content-Type": "application/json" } });
	},
	POST: async ({ request }) => {
		if (!verifyCsrfToken(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body) return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const data = readCms$3();
		data.cms = data.cms ?? {};
		if (Array.isArray(body)) {
			const parsed = documentsArraySchema.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				success: false,
				error: "Validation failed"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			data.cms.documents = parsed.data;
		} else {
			const parsed = documentSchema.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				success: false,
				error: "Validation failed"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			data.cms.documents = [...(data.cms.documents ?? []).filter((item) => item.id !== parsed.data.id), parsed.data];
		}
		writeCms$3(data);
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	},
	DELETE: async ({ request }) => {
		if (!verifyCsrfToken(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body || typeof body.id !== "string") return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const data = readCms$3();
		data.cms = data.cms ?? {};
		data.cms.documents = (data.cms.documents ?? []).filter((item) => item.id !== body.id);
		writeCms$3(data);
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	}
} } });
function readCms$2() {
	try {
		const data = readCmsFile();
		return JSON.parse(data);
	} catch {
		return { cms: {
			news: [],
			documents: [],
			gallery: [],
			pages: []
		} };
	}
}
function writeCms$2(data) {
	writeCmsFile(JSON.stringify(data, null, 2));
}
var galleryItemSchema = objectType({
	id: stringType().min(1),
	src: stringType().url(),
	alt: recordType(stringType()).refine((value) => Object.keys(value).length > 0),
	caption: recordType(stringType()).optional()
});
var galleryArraySchema = arrayType(galleryItemSchema);
var Route$3 = createFileRoute("/api/cms/gallery")({ server: { handlers: {
	GET: async () => {
		const data = readCms$2();
		return new Response(JSON.stringify(data.cms?.gallery ?? []), { headers: { "Content-Type": "application/json" } });
	},
	POST: async ({ request }) => {
		if (!verifyCsrfToken(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body) return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const data = readCms$2();
		data.cms = data.cms ?? {};
		if (Array.isArray(body)) {
			const parsed = galleryArraySchema.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				success: false,
				error: "Validation failed"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			data.cms.gallery = parsed.data;
		} else {
			const parsed = galleryItemSchema.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				success: false,
				error: "Validation failed"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			data.cms.gallery = [...(data.cms.gallery ?? []).filter((item) => item.id !== parsed.data.id), parsed.data];
		}
		writeCms$2(data);
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	},
	DELETE: async ({ request }) => {
		if (!verifyCsrfToken(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body || typeof body.id !== "string") return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const data = readCms$2();
		data.cms = data.cms ?? {};
		data.cms.gallery = (data.cms.gallery ?? []).filter((item) => item.id !== body.id);
		writeCms$2(data);
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	}
} } });
function readCms$1() {
	try {
		const data = readCmsFile();
		return JSON.parse(data);
	} catch {
		return { cms: {
			news: [],
			documents: [],
			gallery: [],
			pages: []
		} };
	}
}
function writeCms$1(data) {
	writeCmsFile(JSON.stringify(data, null, 2));
}
var newsSchema = objectType({
	id: stringType().min(1),
	date: stringType().min(1),
	title: recordType(stringType()).refine((value) => Object.keys(value).length > 0),
	excerpt: recordType(stringType()).refine((value) => Object.keys(value).length > 0),
	tag: recordType(stringType()).refine((value) => Object.keys(value).length > 0),
	image: stringType().optional()
});
var newsArraySchema = arrayType(newsSchema);
var Route$2 = createFileRoute("/api/cms/news")({ server: { handlers: {
	GET: async () => {
		const data = readCms$1();
		return new Response(JSON.stringify(data.cms?.news ?? []), { headers: { "Content-Type": "application/json" } });
	},
	POST: async ({ request }) => {
		if (!verifyCsrfToken(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body) return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const data = readCms$1();
		data.cms = data.cms ?? {};
		if (Array.isArray(body)) {
			const parsed = newsArraySchema.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				success: false,
				error: "Validation failed"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			data.cms.news = parsed.data;
		} else {
			const parsed = newsSchema.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				success: false,
				error: "Validation failed"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			data.cms.news = [...(data.cms.news ?? []).filter((item) => item.id !== parsed.data.id), parsed.data];
		}
		writeCms$1(data);
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	},
	DELETE: async ({ request }) => {
		if (!verifyCsrfToken(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body || typeof body.id !== "string") return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const data = readCms$1();
		data.cms = data.cms ?? {};
		data.cms.news = (data.cms.news ?? []).filter((item) => item.id !== body.id);
		writeCms$1(data);
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	}
} } });
function readCms() {
	try {
		const data = readCmsFile();
		return JSON.parse(data);
	} catch {
		return { cms: { pages: [] } };
	}
}
var pageSchema = objectType({
	id: stringType().min(1),
	slug: stringType().min(1),
	title: recordType(stringType()).refine((value) => Object.keys(value).length > 0),
	content: recordType(stringType()).refine((value) => Object.keys(value).length > 0),
	metaDescription: recordType(stringType()).optional()
});
var pagesArraySchema = arrayType(pageSchema);
function writeCms(data) {
	writeCmsFile(JSON.stringify(data, null, 2));
}
var Route$1 = createFileRoute("/api/cms/pages")({ server: { handlers: {
	GET: async () => {
		const data = readCms();
		return new Response(JSON.stringify(data.cms?.pages ?? []), { headers: { "Content-Type": "application/json" } });
	},
	POST: async ({ request }) => {
		if (!verifyCsrfToken(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body) return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const data = readCms();
		data.cms = data.cms ?? {};
		if (Array.isArray(body)) {
			const parsed = pagesArraySchema.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				success: false,
				error: "Validation failed"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			data.cms.pages = parsed.data;
		} else {
			const parsed = pageSchema.safeParse(body);
			if (!parsed.success) return new Response(JSON.stringify({
				success: false,
				error: "Validation failed"
			}), {
				status: 400,
				headers: { "Content-Type": "application/json" }
			});
			data.cms.pages = [...(data.cms.pages ?? []).filter((item) => item.id !== parsed.data.id), parsed.data];
		}
		writeCms(data);
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	},
	DELETE: async ({ request }) => {
		if (!verifyCsrfToken(request)) return new Response(JSON.stringify({
			success: false,
			error: "Invalid CSRF token"
		}), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const body = await request.json().catch(() => null);
		if (!body || typeof body.id !== "string") return new Response(JSON.stringify({
			success: false,
			error: "Invalid payload"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const data = readCms();
		data.cms = data.cms ?? {};
		data.cms.pages = (data.cms.pages ?? []).filter((item) => item.id !== body.id);
		writeCms(data);
		return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
	}
} } });
var Route = createFileRoute("/api/stripe/webhook")({ server: { handlers: { POST: async ({ request }) => {
	const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
	if (!stripeSecretKey) return new Response("STRIPE_SECRET_KEY is not configured", { status: 500 });
	const stripe = new Stripe(stripeSecretKey, { apiVersion: "2026-06-24.dahlia" });
	const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
	const body = await request.text();
	const signature = request.headers.get("stripe-signature");
	if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) return new Response("Missing signature or webhook secret", { status: 400 });
	let event;
	try {
		event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
	} catch (error) {
		console.error("Webhook signature verification failed:", error);
		return new Response("Webhook signature verification failed", { status: 400 });
	}
	if (event.type === "checkout.session.completed") {
		const session = event.data.object;
		const donorName = session.metadata?.donorName ?? "Donateur";
		const donorEmail = session.customer_email ?? session.metadata?.donorEmail ?? "";
		if (donorEmail && resend) {
			const amount = (session.amount_total ?? 0) / 100;
			await resend.emails.send({
				from: "REKOMA <donations@rekoma-pdima.org>",
				to: donorEmail,
				subject: "Confirmation de votre don — REKOMA / PDIMA",
				html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h1 style="color: #2563eb;">Merci pour votre don, ${donorName} !</h1>
                  <p>Votre soutien contribue directement au développement de la commune de Midongy Atsimo.</p>
                  <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
                    <p><strong>Montant :</strong> ${amount.toFixed(2)} €</p>
                    <p><strong>Méthode :</strong> Carte bancaire (Stripe)</p>
                    <p><strong>Référence :</strong> ${session.id}</p>
                  </div>
                  <p>Vous recevrez un reçu fiscal dans les prochains jours.</p>
                  <p>— L'équipe REKOMA</p>
                </div>
              `
			});
		}
	}
	return new Response(JSON.stringify({ received: true }), { headers: { "Content-Type": "application/json" } });
} } } });
var IndexRoute = Route$28.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$25
});
var AProposRoute = Route$24.update({
	id: "/a-propos",
	path: "/a-propos",
	getParentRoute: () => Route$25
});
var ActualitesRoute = Route$26.update({
	id: "/actualites",
	path: "/actualites",
	getParentRoute: () => Route$25
});
var ConfidentialiteRoute = Route$23.update({
	id: "/confidentialite",
	path: "/confidentialite",
	getParentRoute: () => Route$25
});
var ContactRoute = Route$22.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$25
});
var DocumentsRoute = Route$27.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => Route$25
});
var DonRoute = Route$21.update({
	id: "/don",
	path: "/don",
	getParentRoute: () => Route$25
});
var FaqRoute = Route$20.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$25
});
var GouvernanceRoute = Route$19.update({
	id: "/gouvernance",
	path: "/gouvernance",
	getParentRoute: () => Route$25
});
var ImpactRoute = Route$18.update({
	id: "/impact",
	path: "/impact",
	getParentRoute: () => Route$25
});
var MentionsLegalesRoute = Route$17.update({
	id: "/mentions-legales",
	path: "/mentions-legales",
	getParentRoute: () => Route$25
});
var PdimaRoute = Route$16.update({
	id: "/pdima",
	path: "/pdima",
	getParentRoute: () => Route$25
});
var SitemapDotxmlRoute = Route$15.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$25
});
var AdminIndexRoute = Route$14.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$25
});
var rootRouteChildren = {
	IndexRoute,
	AProposRoute,
	ActualitesRoute,
	ConfidentialiteRoute,
	ContactRoute,
	DocumentsRoute,
	DonRoute,
	FaqRoute,
	GouvernanceRoute,
	ImpactRoute,
	MentionsLegalesRoute,
	PdimaRoute,
	SitemapDotxmlRoute,
	AdminActualitesRoute: Route$13.update({
		id: "/admin/actualites",
		path: "/admin/actualites",
		getParentRoute: () => Route$25
	}),
	AdminDocumentsRoute: Route$12.update({
		id: "/admin/documents",
		path: "/admin/documents",
		getParentRoute: () => Route$25
	}),
	AdminGalerieRoute: Route$11.update({
		id: "/admin/galerie",
		path: "/admin/galerie",
		getParentRoute: () => Route$25
	}),
	AdminLoginRoute: Route$10.update({
		id: "/admin/login",
		path: "/admin/login",
		getParentRoute: () => Route$25
	}),
	AdminMessagesRoute: Route$9.update({
		id: "/admin/messages",
		path: "/admin/messages",
		getParentRoute: () => Route$25
	}),
	AdminPagesRoute: Route$8.update({
		id: "/admin/pages",
		path: "/admin/pages",
		getParentRoute: () => Route$25
	}),
	ApiMessagesRoute: Route$7.update({
		id: "/api/messages",
		path: "/api/messages",
		getParentRoute: () => Route$25
	}),
	ApiNotifyAdminLoginRoute: Route$6.update({
		id: "/api/notify-admin-login",
		path: "/api/notify-admin-login",
		getParentRoute: () => Route$25
	}),
	ApiVisitsRoute: Route$5.update({
		id: "/api/visits",
		path: "/api/visits",
		getParentRoute: () => Route$25
	}),
	AdminIndexRoute,
	ApiCmsDocumentsRoute: Route$4.update({
		id: "/api/cms/documents",
		path: "/api/cms/documents",
		getParentRoute: () => Route$25
	}),
	ApiCmsGalleryRoute: Route$3.update({
		id: "/api/cms/gallery",
		path: "/api/cms/gallery",
		getParentRoute: () => Route$25
	}),
	ApiCmsNewsRoute: Route$2.update({
		id: "/api/cms/news",
		path: "/api/cms/news",
		getParentRoute: () => Route$25
	}),
	ApiCmsPagesRoute: Route$1.update({
		id: "/api/cms/pages",
		path: "/api/cms/pages",
		getParentRoute: () => Route$25
	}),
	ApiStripeWebhookRoute: Route.update({
		id: "/api/stripe/webhook",
		path: "/api/stripe/webhook",
		getParentRoute: () => Route$25
	})
};
var routeTree = Route$25._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
