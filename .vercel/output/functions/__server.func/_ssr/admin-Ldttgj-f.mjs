import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { B as FileText, M as Image, _ as PenLine, b as MessageSquareText, i as TrendingUp, n as Users, v as Newspaper } from "../_libs/lucide-react.mjs";
import { t as getAppBaseUrl } from "./app-url-Dn8IWfll.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Card } from "./card-DvzACnof.mjs";
import { t as AdminShell } from "./AdminShell-CDIQxZ_f.mjs";
import { a as Area, c as Cell, i as XAxis, l as ResponsiveContainer, n as BarChart, o as CartesianGrid, r as YAxis, s as Bar, t as AreaChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Ldttgj-f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MODULE_COLORS = [
	"#2563eb",
	"#16a34a",
	"#d97706",
	"#9333ea",
	"#dc2626"
];
function AdminDashboard() {
	const { t } = useI18n();
	const [stats, setStats] = (0, import_react.useState)({
		news: 0,
		documents: 0,
		gallery: 0,
		pages: 0,
		messages: 0
	});
	const [visits, setVisits] = (0, import_react.useState)({
		total: 0,
		days: {}
	});
	(0, import_react.useEffect)(() => {
		const base = getAppBaseUrl();
		Promise.all([
			fetch(`${base}/api/cms/news`).then((r) => r.json()),
			fetch(`${base}/api/cms/documents`).then((r) => r.json()),
			fetch(`${base}/api/cms/gallery`).then((r) => r.json()),
			fetch(`${base}/api/cms/pages`).then((r) => r.json()),
			fetch(`${base}/api/messages`).then((r) => r.json()),
			fetch(`${base}/api/visits`).then((r) => r.json())
		]).then(([news, documents, gallery, pages, messages, visitData]) => {
			setStats({
				news: Array.isArray(news) ? news.length : 0,
				documents: Array.isArray(documents) ? documents.length : 0,
				gallery: Array.isArray(gallery) ? gallery.length : 0,
				pages: Array.isArray(pages) ? pages.length : 0,
				messages: Array.isArray(messages) ? messages.length : 0
			});
			setVisits({
				total: visitData.total ?? 0,
				days: visitData.days ?? {}
			});
		});
	}, []);
	const todayKey = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const todayVisits = visits.days[todayKey] ?? 0;
	const modules = [
		{
			label: {
				fr: "Actualités",
				en: "News"
			},
			value: stats.news,
			icon: Newspaper,
			to: "/admin/actualites"
		},
		{
			label: {
				fr: "Documents",
				en: "Documents"
			},
			value: stats.documents,
			icon: FileText,
			to: "/admin/documents"
		},
		{
			label: {
				fr: "Galerie",
				en: "Gallery"
			},
			value: stats.gallery,
			icon: Image,
			to: "/admin/galerie"
		},
		{
			label: {
				fr: "Pages",
				en: "Pages"
			},
			value: stats.pages,
			icon: PenLine,
			to: "/admin/pages"
		},
		{
			label: {
				fr: "Messages",
				en: "Messages"
			},
			value: stats.messages,
			icon: MessageSquareText,
			to: "/admin/messages"
		}
	];
	const distributionData = modules.map((m) => ({
		name: t(m.label),
		value: m.value
	}));
	const visitData = Array.from({ length: 7 }).map((_, index) => {
		const date = /* @__PURE__ */ new Date();
		date.setDate(date.getDate() - (6 - index));
		const key = date.toISOString().slice(0, 10);
		return {
			date: key,
			label: date.toLocaleDateString("fr-FR", { weekday: "short" }),
			visits: visits.days[key] ?? 0
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: t({
			fr: "Tableau de bord",
			en: "Dashboard"
		}),
		description: t({
			fr: "Vue synthétique du contenu, des messages et de l'audience.",
			en: "Live overview of your content, messages and audience."
		}),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-6 bg-primary/5 border-primary/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t({
								fr: "Visiteurs",
								en: "Visitors"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-bold mt-1",
							children: visits.total.toLocaleString("fr-FR")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3" }),
								todayVisits.toLocaleString("fr-FR"),
								" ",
								t({
									fr: "aujourd'hui",
									en: "today"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-8 text-primary" })]
				})
			}) }), modules.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: stat.to,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-6 hover:shadow-md transition-shadow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t(stat.label)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-3xl font-bold mt-1",
							children: stat.value
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "size-8 text-muted-foreground" })]
					})
				})
			}) }, stat.label.fr))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: t({
							fr: "Visites des 7 derniers jours",
							en: "Visits over the last 7 days"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: visitData,
							margin: {
								top: 10,
								right: 10,
								left: -20,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "visitGradient",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "5%",
										stopColor: "#2563eb",
										stopOpacity: .35
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "95%",
										stopColor: "#2563eb",
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									className: "stroke-border/50"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "label",
									tickLine: false,
									axisLine: false,
									className: "text-xs text-muted-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									allowDecimals: false,
									tickLine: false,
									axisLine: false,
									className: "text-xs text-muted-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									borderRadius: 12,
									border: "1px solid var(--border)",
									background: "var(--background)",
									fontSize: 12
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "visits",
									name: t({
										fr: "Visites",
										en: "Visits"
									}),
									stroke: "#2563eb",
									strokeWidth: 2,
									fill: "url(#visitGradient)"
								})
							]
						})
					})
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-sm font-semibold",
					children: t({
						fr: "Répartition du contenu",
						en: "Content distribution"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: distributionData,
							margin: {
								top: 10,
								right: 10,
								left: -20,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									className: "stroke-border/50"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									tickLine: false,
									axisLine: false,
									className: "text-xs text-muted-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									allowDecimals: false,
									tickLine: false,
									axisLine: false,
									className: "text-xs text-muted-foreground"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									cursor: { fill: "rgba(148,163,184,0.1)" },
									contentStyle: {
										borderRadius: 12,
										border: "1px solid var(--border)",
										background: "var(--background)",
										fontSize: 12
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "value",
									name: t({
										fr: "Éléments",
										en: "Items"
									}),
									radius: [
										6,
										6,
										0,
										0
									],
									children: distributionData.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: MODULE_COLORS[index % MODULE_COLORS.length] }, index))
								})
							]
						})
					})
				})]
			}) })]
		})]
	});
}
//#endregion
export { AdminDashboard as component };
