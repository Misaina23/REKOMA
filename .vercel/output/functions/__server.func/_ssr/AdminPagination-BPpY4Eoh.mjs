import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminPagination-BPpY4Eoh.js
var import_jsx_runtime = require_jsx_runtime();
function AdminPagination({ currentPage, totalPages, onPageChange }) {
	if (totalPages <= 1) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between border-t border-border/60 px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs text-muted-foreground",
			children: [
				currentPage,
				" / ",
				totalPages
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				disabled: currentPage === 1,
				onClick: () => onPageChange(currentPage - 1),
				children: "Précédent"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				disabled: currentPage === totalPages,
				onClick: () => onPageChange(currentPage + 1),
				children: "Suivant"
			})]
		})]
	});
}
//#endregion
export { AdminPagination as t };
