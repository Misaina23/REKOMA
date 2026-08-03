import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { o as org } from "./content-Z8MbjWaS.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, t as PageHero } from "./Section-ENPD4XnY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mentions-legales-C-1jTmCl.js
var import_jsx_runtime = require_jsx_runtime();
function Legal() {
	const { t } = useI18n();
	const blocks = [
		{
			h: {
				fr: "Éditeur du site",
				en: "Site publisher"
			},
			p: {
				fr: `Association ${org.name} — ${t(org.full)}. Association à but non lucratif régie par l'Ordonnance n° 60-133 du 3 octobre 1960. Président exécutif : M. Botomanaga Brillant.`,
				en: `${org.name} Association — a non-profit association governed by Ordinance no. 60-133 of 3 October 1960. Executive President: Mr Botomanaga Brillant.`
			}
		},
		{
			h: {
				fr: "Siège social",
				en: "Registered office"
			},
			p: org.location
		},
		{
			h: {
				fr: "Contact",
				en: "Contact"
			},
			p: {
				fr: `Courriel : ${org.email} — Téléphone : ${org.phone}`,
				en: `Email: ${org.email} — Phone: ${org.phone}`
			}
		},
		{
			h: {
				fr: "Propriété intellectuelle",
				en: "Intellectual property"
			},
			p: {
				fr: "L'ensemble des contenus (textes, images, logos, documents) est la propriété de l'association REKOMA, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.",
				en: "All content (text, images, logos, documents) is the property of the REKOMA association unless stated otherwise. Reproduction without written permission is prohibited."
			}
		},
		{
			h: {
				fr: "Conception & réalisation",
				en: "Design & development"
			},
			p: {
				fr: "Site conçu et développé par DevMisaina.",
				en: "Website designed and developed by DevMisaina."
			}
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t({
			fr: "Légal",
			en: "Legal"
		}),
		title: t({
			fr: "Mentions légales",
			en: "Legal notice"
		}),
		description: t({
			fr: "Informations relatives à l'éditeur du site et aux conditions d'utilisation.",
			en: "Information about the site publisher and terms of use."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl space-y-8",
		children: blocks.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i * .05,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold",
				children: t(b.h)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 leading-relaxed text-muted-foreground",
				children: t(b.p)
			})] })
		}, b.h.fr))
	}) })] });
}
//#endregion
export { Legal as component };
