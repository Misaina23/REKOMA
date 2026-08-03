import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, t as PageHero } from "./Section-ENPD4XnY.mjs";
import { t as Route } from "./actualites-BHmRlujT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actualites-BCj-YlU4.js
var import_jsx_runtime = require_jsx_runtime();
function News() {
	const { t, lang } = useI18n();
	const news = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t({
			fr: "Actualités",
			en: "News"
		}),
		title: t({
			fr: "L'avancement du projet, étape par étape",
			en: "Project progress, step by step"
		}),
		description: t({
			fr: "Chaque étape franchie est documentée et partagée avec nos membres, partenaires et bailleurs.",
			en: "Every milestone is documented and shared with our members, partners and donors."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: news.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i * .07,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-4 rounded-2xl border border-border bg-card p-8 shadow-soft card-hover sm:grid-cols-[160px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold tracking-widest text-primary uppercase",
					children: item.tag[lang] ?? item.tag.fr
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					className: "mt-2 block text-sm text-muted-foreground",
					dateTime: item.date,
					children: item.date
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold text-balance",
					children: item.title[lang] ?? item.title.fr
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-muted-foreground",
					children: item.excerpt[lang] ?? item.excerpt.fr
				})] })]
			})
		}, item.id))
	}) })] });
}
//#endregion
export { News as component };
