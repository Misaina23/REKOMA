import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, r as useI18n } from "./utils-BiYSywJx.mjs";
import { D as LoaderCircle, H as Eye, a as Trash2, g as Pencil, m as Plus } from "../_libs/lucide-react.mjs";
import { t as getAppBaseUrl } from "./app-url-CsE7cn1T.mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
import { i as showSuccess, n as showError, t as showConfirm } from "./alerts-FKPi0eTV.mjs";
import { t as getCsrfToken } from "./csrf-Bg1sT1bJ.mjs";
import { t as Label } from "./label-ldTRt_TZ.mjs";
import { t as AdminShell } from "./AdminShell-DeEWyhi8.mjs";
import { t as AdminPagination } from "./AdminPagination-BPpY4Eoh.mjs";
import { n as DialogClose, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-C00mg3M5.mjs";
import { t as FormDialog } from "./FormDialog-C3ahFde_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/galerie-D-bca85v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Table = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "relative w-full overflow-auto",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
		ref,
		className: cn("w-full caption-bottom text-sm", className),
		...props
	})
}));
Table.displayName = "Table";
var TableHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
	ref,
	className: cn("[&_tr]:border-b", className),
	...props
}));
TableHeader.displayName = "TableHeader";
var TableBody = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
	ref,
	className: cn("[&_tr:last-child]:border-0", className),
	...props
}));
TableBody.displayName = "TableBody";
var TableFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
	ref,
	className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
	...props
}));
TableFooter.displayName = "TableFooter";
var TableRow = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
	ref,
	className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
	...props
}));
TableRow.displayName = "TableRow";
var TableHead = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
	ref,
	className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableHead.displayName = "TableHead";
var TableCell = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
	ref,
	className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
	...props
}));
TableCell.displayName = "TableCell";
var TableCaption = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
	ref,
	className: cn("mt-4 text-sm text-muted-foreground", className),
	...props
}));
TableCaption.displayName = "TableCaption";
function AdminGallery() {
	const { t, lang } = useI18n();
	const [gallery, setGallery] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const [viewItem, setViewItem] = (0, import_react.useState)(null);
	const [currentPage, setCurrentPage] = (0, import_react.useState)(1);
	const [form, setForm] = (0, import_react.useState)({
		id: "",
		src: "",
		altFr: "",
		altEn: "",
		captionFr: "",
		captionEn: ""
	});
	(0, import_react.useEffect)(() => {
		const base = getAppBaseUrl();
		fetch(`${base}/api/cms/gallery`).then((r) => r.json()).then((data) => {
			setGallery(data);
			setLoading(false);
		});
	}, []);
	const resetForm = () => {
		setForm({
			id: "",
			src: "",
			altFr: "",
			altEn: "",
			captionFr: "",
			captionEn: ""
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
			src: item.src,
			altFr: item.alt.fr,
			altEn: item.alt.en,
			captionFr: item.caption?.fr ?? "",
			captionEn: item.caption?.en ?? ""
		});
	};
	const getBaseUrl = () => getAppBaseUrl();
	const handleSave = async (e) => {
		e.preventDefault();
		setSaving(true);
		try {
			const newItem = {
				id: form.id || `gallery-${Date.now()}`,
				src: form.src,
				alt: {
					fr: form.altFr,
					en: form.altEn
				},
				...form.captionFr || form.captionEn ? { caption: {
					fr: form.captionFr,
					en: form.captionEn
				} } : {}
			};
			const updated = editing ? gallery.map((g) => g.id === editing ? newItem : g) : [...gallery, newItem];
			if (!(await fetch(`${getBaseUrl()}/api/cms/gallery`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify(updated)
			})).ok) throw new Error("Failed to save image");
			setGallery(updated);
			resetForm();
			setDialogOpen(false);
			setCurrentPage(1);
			await showSuccess(t({
				fr: "Image enregistrée",
				en: "Image saved"
			}));
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Échec de l'enregistrement",
				en: "Save failed"
			}), t({
				fr: "Impossible d'enregistrer l'image.",
				en: "Unable to save the image."
			}));
		} finally {
			setSaving(false);
		}
	};
	const handleDelete = async (id) => {
		try {
			if (!await showConfirm({
				title: t({
					fr: "Supprimer cette image ?",
					en: "Delete this image?"
				}),
				text: t({
					fr: "L’image disparaîtra de la galerie publique.",
					en: "The image will be removed from the public gallery."
				}),
				confirmText: t({
					fr: "Oui, supprimer",
					en: "Yes, delete"
				})
			})) return;
			if (!(await fetch(`${getBaseUrl()}/api/cms/gallery`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify({ id })
			})).ok) throw new Error("Failed to delete image");
			setGallery(gallery.filter((g) => g.id !== id));
			setCurrentPage(1);
			await showSuccess(t({
				fr: "Image supprimée",
				en: "Image deleted"
			}));
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Échec de la suppression",
				en: "Deletion failed"
			}), t({
				fr: "Impossible de supprimer l'image.",
				en: "Unable to delete the image."
			}));
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: t({
			fr: "Galerie",
			en: "Gallery"
		}),
		description: t({
			fr: "Gérer les images de la galerie.",
			en: "Manage gallery images."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-[40vh] items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-muted-foreground" })
		})
	});
	const ITEMS_PER_PAGE = 6;
	const totalPages = Math.ceil(gallery.length / ITEMS_PER_PAGE);
	const paginatedGallery = gallery.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: t({
			fr: "Galerie",
			en: "Gallery"
		}),
		description: t({
			fr: "Gérer les images de la galerie.",
			en: "Manage gallery images."
		}),
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: handleAdd,
			variant: "outline",
			size: "sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-4" }), t({
				fr: "Nouvelle image",
				en: "New image"
			})]
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				title: editing ? t({
					fr: "Modifier l'image",
					en: "Edit image"
				}) : t({
					fr: "Nouvelle image",
					en: "New image"
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
								htmlFor: "src",
								children: t({
									fr: "URL de l'image",
									en: "Image URL"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "src",
								value: form.src,
								onChange: (e) => setForm((f) => ({
									...f,
									src: e.target.value
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
								htmlFor: "altFr",
								children: t({
									fr: "Texte alternatif (FR)",
									en: "Alt text (FR)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "altFr",
								value: form.altFr,
								onChange: (e) => setForm((f) => ({
									...f,
									altFr: e.target.value
								})),
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "altEn",
								children: t({
									fr: "Texte alternatif (EN)",
									en: "Alt text (EN)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "altEn",
								value: form.altEn,
								onChange: (e) => setForm((f) => ({
									...f,
									altEn: e.target.value
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
								htmlFor: "captionFr",
								children: t({
									fr: "Légende (FR)",
									en: "Caption (FR)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "captionFr",
								value: form.captionFr,
								onChange: (e) => setForm((f) => ({
									...f,
									captionFr: e.target.value
								}))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "captionEn",
								children: t({
									fr: "Légende (EN)",
									en: "Caption (EN)"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "captionEn",
								value: form.captionEn,
								onChange: (e) => setForm((f) => ({
									...f,
									captionEn: e.target.value
								}))
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border border-border/70 bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "w-12",
						children: "N°"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "w-24",
						children: t({
							fr: "Photo",
							en: "Photo"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: t({
						fr: "Description",
						en: "Description"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: t({
							fr: "Actions",
							en: "Actions"
						})
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: gallery.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 4,
					className: "py-10 text-center text-sm text-muted-foreground",
					children: t({
						fr: "Aucune image pour le moment.",
						en: "No images yet."
					})
				}) }) : paginatedGallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium text-muted-foreground",
						children: index + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: item.alt.fr,
						className: "size-14 rounded-md object-cover"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: item.alt.fr
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: item.alt.en
						}),
						item.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
							children: item.caption.fr
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => setViewItem(item),
								title: t({
									fr: "Voir",
									en: "View"
								}),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => {
									handleEdit(item);
									setDialogOpen(true);
								},
								title: t({
									fr: "Modifier",
									en: "Edit"
								}),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								onClick: () => handleDelete(item.id),
								title: t({
									fr: "Supprimer",
									en: "Delete"
								}),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-destructive" })
							})
						]
					}) })
				] }, item.id)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: viewItem !== null,
				onOpenChange: (open) => !open && setViewItem(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "sm:max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: viewItem ? viewItem.alt.fr : "" }) }),
						viewItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: viewItem.src,
									alt: viewItem.alt.fr,
									className: "max-h-[60vh] w-full rounded-lg object-contain"
								}),
								viewItem.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: viewItem.caption.fr
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "break-all text-xs text-muted-foreground",
									children: viewItem.src
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									children: t({
										fr: "Fermer",
										en: "Close"
									})
								})
							})
						})
					]
				})
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
export { AdminGallery as component };
