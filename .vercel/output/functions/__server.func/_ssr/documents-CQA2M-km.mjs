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
//#region node_modules/.nitro/vite/services/ssr/assets/documents-CQA2M-km.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDocuments() {
	const { t, lang } = useI18n();
	const [documents, setDocuments] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [form, setForm] = (0, import_react.useState)({
		id: "",
		titleFr: "",
		titleEn: "",
		type: "PDF",
		descriptionFr: "",
		descriptionEn: "",
		url: ""
	});
	(0, import_react.useEffect)(() => {
		const base = getAppBaseUrl();
		fetch(`${base}/api/cms/documents`).then((r) => r.json()).then((data) => {
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
			url: ""
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
			titleFr: item.title.fr,
			titleEn: item.title.en,
			type: item.type,
			descriptionFr: item.description.fr,
			descriptionEn: item.description.en,
			url: item.url
		});
	};
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		try {
			const newItem = {
				id: form.id || `doc-${Date.now()}`,
				title: {
					fr: form.titleFr,
					en: form.titleEn
				},
				type: form.type,
				description: {
					fr: form.descriptionFr,
					en: form.descriptionEn
				},
				url: form.url
			};
			const updated = editing ? documents.map((d) => d.id === editing ? newItem : d) : [...documents, newItem];
			if (!(await fetch(`${getBaseUrl()}/api/cms/documents`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify(updated)
			})).ok) throw new Error("Failed to save document");
			setDocuments(updated);
			resetForm();
			setDialogOpen(false);
			setCurrentPage(1);
			await showSuccess(t({
				fr: "Document enregistré",
				en: "Document saved"
			}));
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Échec de l'enregistrement",
				en: "Save failed"
			}), t({
				fr: "Impossible d'enregistrer le document.",
				en: "Unable to save the document."
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
					fr: "Supprimer ce document ?",
					en: "Delete this document?"
				}),
				text: t({
					fr: "Le document sera retiré de la liste publique.",
					en: "The document will be removed from the public list."
				}),
				confirmText: t({
					fr: "Oui, supprimer",
					en: "Yes, delete"
				})
			})) return;
			if (!(await fetch(`${getBaseUrl()}/api/cms/documents`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify({ id })
			})).ok) throw new Error("Failed to delete document");
			setDocuments(documents.filter((d) => d.id !== id));
			setCurrentPage(1);
			await showSuccess(t({
				fr: "Document supprimé",
				en: "Document deleted"
			}));
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Échec de la suppression",
				en: "Deletion failed"
			}), t({
				fr: "Impossible de supprimer le document.",
				en: "Unable to delete the document."
			}));
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: t({
			fr: "Documents",
			en: "Documents"
		}),
		description: t({
			fr: "Gérer les documents publics.",
			en: "Manage public documents."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-[40vh] items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-muted-foreground" })
		})
	});
	const ITEMS_PER_PAGE = 6;
	const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);
	const paginatedDocs = documents.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: t({
			fr: "Documents",
			en: "Documents"
		}),
		description: t({
			fr: "Gérer les documents publics.",
			en: "Manage public documents."
		}),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: handleAdd,
			variant: "outline",
			size: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-4" }), t({
				fr: "Nouveau document",
				en: "New document"
			})]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				title: editing ? t({
					fr: "Modifier le document",
					en: "Edit document"
				}) : t({
					fr: "Nouveau document",
					en: "New document"
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
								htmlFor: "type",
								children: t({
									fr: "Type",
									en: "Type"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "type",
								value: form.type,
								onChange: (e) => setForm((f) => ({
									...f,
									type: e.target.value
								}))
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
								htmlFor: "descriptionFr",
								children: t({
									fr: "Description (FR)",
									en: "Description (FR)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "descriptionFr",
								value: form.descriptionFr,
								onChange: (e) => setForm((f) => ({
									...f,
									descriptionFr: e.target.value
								})),
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "descriptionEn",
								children: t({
									fr: "Description (EN)",
									en: "Description (EN)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "descriptionEn",
								value: form.descriptionEn,
								onChange: (e) => setForm((f) => ({
									...f,
									descriptionEn: e.target.value
								})),
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "url",
							children: t({
								fr: "URL",
								en: "URL"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "url",
							value: form.url,
							onChange: (e) => setForm((f) => ({
								...f,
								url: e.target.value
							})),
							required: true
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
				children: paginatedDocs.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: doc.title[lang] ?? doc.title.fr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1",
								children: doc.description[lang] ?? doc.description.fr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mt-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: doc.type }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: doc.url,
										target: "_blank",
										rel: "noreferrer",
										className: "underline underline-offset-4",
										children: doc.url
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => {
									handleEdit(doc);
									setDialogOpen(true);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => handleDelete(doc.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-destructive" })
							})]
						})]
					})
				}) }, doc.id))
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
export { AdminDocuments as component };
