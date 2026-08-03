import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { D as LoaderCircle, a as Trash2, g as Pencil, m as Plus } from "../_libs/lucide-react.mjs";
import { t as getAppBaseUrl } from "./app-url-Dn8IWfll.mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
import { i as showSuccess, n as showError, t as showConfirm } from "./alerts-FKPi0eTV.mjs";
import { t as getCsrfToken } from "./csrf-Bg1sT1bJ.mjs";
import { t as Label } from "./label-ldTRt_TZ.mjs";
import { t as Textarea } from "./textarea-D8IU9eWQ.mjs";
import { t as Card } from "./card-DvzACnof.mjs";
import { t as AdminShell } from "./AdminShell-CDIQxZ_f.mjs";
import { t as AdminPagination } from "./AdminPagination-BPpY4Eoh.mjs";
import { t as FormDialog } from "./FormDialog-C3ahFde_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actualites-CGoqztSZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminNews() {
	const { t, lang } = useI18n();
	const [news, setNews] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [form, setForm] = (0, import_react.useState)({
		id: "",
		date: "",
		titleFr: "",
		titleEn: "",
		excerptFr: "",
		excerptEn: "",
		tagFr: "",
		tagEn: ""
	});
	(0, import_react.useEffect)(() => {
		const base = getAppBaseUrl();
		fetch(`${base}/api/cms/news`).then((r) => r.json()).then((data) => {
			setNews(data);
			setLoading(false);
		});
	}, []);
	const resetForm = () => {
		setForm({
			id: "",
			date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			titleFr: "",
			titleEn: "",
			excerptFr: "",
			excerptEn: "",
			tagFr: "",
			tagEn: ""
		});
		setEditing(null);
	};
	const handleAdd = () => {
		resetForm();
		setDialogOpen(true);
	};
	const handleEdit = (item) => {
		setEditing(item.id);
		setForm({
			id: item.id,
			date: item.date,
			titleFr: item.title.fr,
			titleEn: item.title.en,
			excerptFr: item.excerpt.fr,
			excerptEn: item.excerpt.en,
			tagFr: item.tag.fr,
			tagEn: item.tag.en
		});
	};
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		try {
			const newItem = {
				id: form.id || `news-${Date.now()}`,
				date: form.date,
				title: {
					fr: form.titleFr,
					en: form.titleEn
				},
				excerpt: {
					fr: form.excerptFr,
					en: form.excerptEn
				},
				tag: {
					fr: form.tagFr,
					en: form.tagEn
				}
			};
			const updated = editing ? news.map((n) => n.id === editing ? newItem : n) : [...news, newItem];
			if (!(await fetch(`${getBaseUrl()}/api/cms/news`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify(updated)
			})).ok) throw new Error("Failed to save article");
			setNews(updated);
			resetForm();
			setDialogOpen(false);
			setCurrentPage(1);
			await showSuccess(t({
				fr: "Actualité enregistrée",
				en: "Article saved"
			}));
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Échec de l'enregistrement",
				en: "Save failed"
			}), t({
				fr: "Impossible d'enregistrer l'actualité.",
				en: "Unable to save the article."
			}));
		} finally {
			setSaving(false);
		}
	};
	const getBaseUrl = () => getAppBaseUrl();
	const handleDelete = async (id) => {
		try {
			if (!await showConfirm({
				title: t({
					fr: "Supprimer cette actualité ?",
					en: "Delete this article?"
				}),
				text: t({
					fr: "Cette action est irréversible.",
					en: "This action is irreversible."
				}),
				confirmText: t({
					fr: "Oui, supprimer",
					en: "Yes, delete"
				})
			})) return;
			if (!(await fetch(`${getBaseUrl()}/api/cms/news`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify({ id })
			})).ok) throw new Error("Failed to delete article");
			setNews(news.filter((n) => n.id !== id));
			setCurrentPage(1);
			await showSuccess(t({
				fr: "Actualité supprimée",
				en: "Article deleted"
			}));
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Échec de la suppression",
				en: "Deletion failed"
			}), t({
				fr: "Impossible de supprimer l'actualité.",
				en: "Unable to delete the article."
			}));
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: t({
			fr: "Actualités",
			en: "News"
		}),
		description: t({
			fr: "Gérer les articles et publications.",
			en: "Manage articles and publications."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-[40vh] items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-muted-foreground" })
		})
	});
	const ITEMS_PER_PAGE = 6;
	const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
	const paginatedNews = news.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: t({
			fr: "Actualités",
			en: "News"
		}),
		description: t({
			fr: "Gérer les articles et publications.",
			en: "Manage articles and publications."
		}),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: handleAdd,
			variant: "outline",
			size: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-4" }), t({
				fr: "Nouvelle actualité",
				en: "New article"
			})]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				title: editing ? t({
					fr: "Modifier l'actualité",
					en: "Edit article"
				}) : t({
					fr: "Nouvelle actualité",
					en: "New article"
				}),
				saving,
				onSubmit: handleSave,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "id",
								children: t({
									fr: "ID (laisser vide pour auto)",
									en: "ID (leave empty for auto)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "id",
								value: form.id,
								onChange: (e) => setForm((f) => ({
									...f,
									id: e.target.value
								})),
								disabled: !!editing
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "date",
								children: t({
									fr: "Date",
									en: "Date"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "date",
								type: "date",
								value: form.date,
								onChange: (e) => setForm((f) => ({
									...f,
									date: e.target.value
								})),
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "titleFr",
								children: t({
									fr: "Titre (FR)",
									en: "Title (FR)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "titleFr",
								value: form.titleFr,
								onChange: (e) => setForm((f) => ({
									...f,
									titleFr: e.target.value
								})),
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "titleEn",
								children: t({
									fr: "Titre (EN)",
									en: "Title (EN)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "titleEn",
								value: form.titleEn,
								onChange: (e) => setForm((f) => ({
									...f,
									titleEn: e.target.value
								})),
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "excerptFr",
								children: t({
									fr: "Extrait (FR)",
									en: "Excerpt (FR)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "excerptFr",
								value: form.excerptFr,
								onChange: (e) => setForm((f) => ({
									...f,
									excerptFr: e.target.value
								})),
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "excerptEn",
								children: t({
									fr: "Extrait (EN)",
									en: "Excerpt (EN)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "excerptEn",
								value: form.excerptEn,
								onChange: (e) => setForm((f) => ({
									...f,
									excerptEn: e.target.value
								})),
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "tagFr",
								children: t({
									fr: "Tag (FR)",
									en: "Tag (FR)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "tagFr",
								value: form.tagFr,
								onChange: (e) => setForm((f) => ({
									...f,
									tagFr: e.target.value
								})),
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "tagEn",
								children: t({
									fr: "Tag (EN)",
									en: "Tag (EN)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "tagEn",
								value: form.tagEn,
								onChange: (e) => setForm((f) => ({
									...f,
									tagEn: e.target.value
								})),
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: saving,
							children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }), t({
								fr: "Enregistrer",
								en: "Save"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: paginatedNews.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: item.title[lang] ?? item.title.fr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1",
								children: item.excerpt[lang] ?? item.excerpt.fr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mt-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.date }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.tag[lang] ?? item.tag.fr })
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => {
									handleEdit(item);
									setDialogOpen(true);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => handleDelete(item.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-destructive" })
							})]
						})]
					})
				}) }, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPagination, {
				currentPage,
				totalPages,
				onPageChange: setCurrentPage
			})
		]
	});
}
//#endregion
export { AdminNews as component };
