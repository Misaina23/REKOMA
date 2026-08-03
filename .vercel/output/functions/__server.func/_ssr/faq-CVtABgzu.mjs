import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, r as useI18n } from "./utils-BiYSywJx.mjs";
import { n as faq } from "./content-Z8MbjWaS.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, t as PageHero } from "./Section-ENPD4XnY.mjs";
import { Z as ChevronDown, f as Search } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-CVtABgzu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Faq() {
	const { t } = useI18n();
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = faq.filter((f) => `${t(f.q)} ${t(f.a)}`.toLowerCase().includes(query.trim().toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "FAQ",
		title: t({
			fr: "Questions fréquentes",
			en: "Frequently asked questions"
		}),
		description: t({
			fr: "Une question sans réponse ici ? Écrivez-nous, nous complétons cette page en continu.",
			en: "A question not answered here? Write to us — we keep this page growing."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mx-auto max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "faq-search",
						children: t({
							fr: "Rechercher dans la FAQ",
							en: "Search the FAQ"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "faq-search",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: t({
							fr: "Rechercher une question...",
							en: "Search a question..."
						}),
						className: "pl-9"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-8",
				children: filtered.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `item-${i}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left text-base font-semibold",
						children: t(f.q)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: t(f.a)
					})]
				}, f.q.fr))
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-center text-sm text-muted-foreground",
				children: t({
					fr: "Aucune question ne correspond à votre recherche.",
					en: "No question matches your search."
				})
			}) : null
		]
	}) })] });
}
//#endregion
export { Faq as component };
