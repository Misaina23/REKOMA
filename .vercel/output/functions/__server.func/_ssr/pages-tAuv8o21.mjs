import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { D as LoaderCircle, a as Trash2, g as Pencil, m as Plus } from "../_libs/lucide-react.mjs";
import { t as getAppBaseUrl } from "./app-url-CsE7cn1T.mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
import { i as showSuccess, n as showError, t as showConfirm } from "./alerts-FKPi0eTV.mjs";
import { t as getCsrfToken } from "./csrf-Bg1sT1bJ.mjs";
import { t as Label } from "./label-ldTRt_TZ.mjs";
import { t as Textarea } from "./textarea-D8IU9eWQ.mjs";
import { t as Card } from "./card-DvzACnof.mjs";
import { t as AdminShell } from "./AdminShell-DeEWyhi8.mjs";
import { t as AdminPagination } from "./AdminPagination-BPpY4Eoh.mjs";
import { t as FormDialog } from "./FormDialog-C3ahFde_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages-tAuv8o21.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPages() {
	const { t, lang } = useI18n();
	const [pages, setPages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [form, setForm] = (0, import_react.useState)({
		id: "",
		slug: "",
		titleFr: "",
		titleEn: "",
		contentFr: "",
		contentEn: "",
		metaDescriptionFr: "",
		metaDescriptionEn: ""
	});
	(0, import_react.useEffect)(() => {
		const base = getAppBaseUrl();
		fetch(`${base}/api/cms/pages`).then((r) => r.json()).then((data) => {
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
			metaDescriptionEn: ""
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
			slug: item.slug,
			titleFr: item.title.fr,
			titleEn: item.title.en,
			contentFr: item.content.fr,
			contentEn: item.content.en,
			metaDescriptionFr: item.metaDescription?.fr ?? "",
			metaDescriptionEn: item.metaDescription?.en ?? ""
		});
	};
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		try {
			const newPage = {
				id: form.id || `page-${Date.now()}`,
				slug: form.slug,
				title: {
					fr: form.titleFr,
					en: form.titleEn
				},
				content: {
					fr: form.contentFr,
					en: form.contentEn
				},
				...form.metaDescriptionFr || form.metaDescriptionEn ? { metaDescription: {
					fr: form.metaDescriptionFr,
					en: form.metaDescriptionEn
				} } : {}
			};
			if (!(await fetch(`${getBaseUrl()}/api/cms/pages`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify(newPage)
			})).ok) throw new Error("Failed to save page");
			const updated = editing ? pages.map((p) => p.id === editing ? newPage : p) : [...pages, newPage];
			setPages(updated);
			resetForm();
			setDialogOpen(false);
			setCurrentPage(1);
			await showSuccess(t({
				fr: "Page enregistrée",
				en: "Page saved"
			}));
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Échec de l'enregistrement",
				en: "Save failed"
			}), t({
				fr: "Impossible d'enregistrer la page.",
				en: "Unable to save the page."
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
					fr: "Supprimer cette page ?",
					en: "Delete this page?"
				}),
				text: t({
					fr: "La page sera retirée du site public.",
					en: "The page will be removed from the public site."
				}),
				confirmText: t({
					fr: "Oui, supprimer",
					en: "Yes, delete"
				})
			})) return;
			if (!(await fetch(`${getBaseUrl()}/api/cms/pages`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify({ id })
			})).ok) throw new Error("Failed to delete page");
			setPages(pages.filter((p) => p.id !== id));
			setCurrentPage(1);
			await showSuccess(t({
				fr: "Page supprimée",
				en: "Page deleted"
			}));
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Échec de la suppression",
				en: "Deletion failed"
			}), t({
				fr: "Impossible de supprimer la page.",
				en: "Unable to delete the page."
			}));
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: t({
			fr: "Pages",
			en: "Pages"
		}),
		description: t({
			fr: "Gérer les pages du site.",
			en: "Manage site pages."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-[40vh] items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-muted-foreground" })
		})
	});
	const ITEMS_PER_PAGE = 6;
	const totalPages = Math.ceil(pages.length / ITEMS_PER_PAGE);
	const paginatedPages = pages.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: t({
			fr: "Pages",
			en: "Pages"
		}),
		description: t({
			fr: "Gérer les pages du site.",
			en: "Manage site pages."
		}),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: handleAdd,
			variant: "outline",
			size: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-4" }), t({
				fr: "Nouvelle page",
				en: "New page"
			})]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				title: editing ? t({
					fr: "Modifier la page",
					en: "Edit page"
				}) : t({
					fr: "Nouvelle page",
					en: "New page"
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
								htmlFor: "slug",
								children: t({
									fr: "Slug (ex: /ma-page)",
									en: "Slug (e.g. /my-page)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "slug",
								value: form.slug,
								onChange: (e) => setForm((f) => ({
									...f,
									slug: e.target.value
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
								htmlFor: "contentFr",
								children: t({
									fr: "Contenu (FR)",
									en: "Content (FR)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "contentFr",
								value: form.contentFr,
								onChange: (e) => setForm((f) => ({
									...f,
									contentFr: e.target.value
								})),
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "contentEn",
								children: t({
									fr: "Contenu (EN)",
									en: "Content (EN)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "contentEn",
								value: form.contentEn,
								onChange: (e) => setForm((f) => ({
									...f,
									contentEn: e.target.value
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
								htmlFor: "metaDescriptionFr",
								children: t({
									fr: "Meta description (FR)",
									en: "Meta description (FR)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "metaDescriptionFr",
								value: form.metaDescriptionFr,
								onChange: (e) => setForm((f) => ({
									...f,
									metaDescriptionFr: e.target.value
								}))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "metaDescriptionEn",
								children: t({
									fr: "Meta description (EN)",
									en: "Meta description (EN)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "metaDescriptionEn",
								value: form.metaDescriptionEn,
								onChange: (e) => setForm((f) => ({
									...f,
									metaDescriptionEn: e.target.value
								}))
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
				children: paginatedPages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: page.title[lang] ?? page.title.fr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1",
								children: page.slug
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1 line-clamp-2",
								children: page.content[lang] ?? page.content.fr
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => {
									handleEdit(page);
									setDialogOpen(true);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => handleDelete(page.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-destructive" })
							})]
						})]
					})
				}) }, page.id))
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
export { AdminPages as component };
