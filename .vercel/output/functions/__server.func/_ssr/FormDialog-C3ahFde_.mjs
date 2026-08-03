import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { D as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-C00mg3M5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FormDialog-C3ahFde_.js
var import_jsx_runtime = require_jsx_runtime();
function FormDialog({ open, onOpenChange, title, description, saving, onSubmit, submitLabel, children }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-2xl max-h-[90vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: title }), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: description }) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-5",
				children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => onOpenChange(false),
						children: t({
							fr: "Annuler",
							en: "Cancel"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						disabled: saving,
						children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }), submitLabel ?? t({
							fr: "Enregistrer",
							en: "Save"
						})]
					})]
				})]
			})]
		})
	});
}
//#endregion
export { FormDialog as t };
