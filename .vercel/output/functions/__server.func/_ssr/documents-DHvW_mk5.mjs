import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, r as SectionHeading, t as PageHero } from "./Section-ENPD4XnY.mjs";
import { B as FileText, K as Download } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { r as showInfo } from "./alerts-FKPi0eTV.mjs";
import { t as Route } from "./documents-CZnYQARs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/documents-DHvW_mk5.js
var import_jsx_runtime = require_jsx_runtime();
function Documents() {
	const { t, lang } = useI18n();
	const documents = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t({
				fr: "Transparence",
				en: "Transparency"
			}),
			title: t({
				fr: "Documents officiels en accès libre",
				en: "Official documents, openly available"
			}),
			description: t({
				fr: "Nos statuts, procès-verbaux et rapports sont mis à disposition des membres, bailleurs et partenaires. Contactez-nous pour recevoir la dernière version signée.",
				en: "Our statutes, minutes and reports are available to members, donors and partners. Contact us to receive the latest signed version."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2",
			children: documents.map((doc, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 2 * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft card-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "size-5",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-lg font-bold",
							children: doc.title[lang] ?? doc.title.fr
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
							children: doc.description[lang] ?? doc.description.fr
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "mt-6 self-start",
							onClick: () => void showInfo(t({
								fr: "Document disponible",
								en: "Document available"
							}), t({
								fr: "Demandez-le via notre page Contact et nous vous répondrons rapidement.",
								en: "Request it via our Contact page and we will get back to you shortly."
							})),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}),
								doc.type,
								" · ",
								t({
									fr: "Demander",
									en: "Request"
								})
							]
						})
					]
				})
			}, doc.id))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t({
					fr: "Nos engagements",
					en: "Our commitments"
				}),
				title: t({
					fr: "Comment nous rendons des comptes",
					en: "How we stay accountable"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: [
					{
						t: {
							fr: "Rapports semestriels",
							en: "Half-year reports"
						},
						d: {
							fr: "Publication régulière de l'avancement technique et financier du projet.",
							en: "Regular publication of the project's technical and financial progress."
						}
					},
					{
						t: {
							fr: "Évaluations externes",
							en: "External evaluations"
						},
						d: {
							fr: "Évaluation à mi-parcours (M24) et évaluation finale (M36) du PDIMA.",
							en: "Mid-term (M24) and final (M36) evaluations of PDIMA."
						}
					},
					{
						t: {
							fr: "Assemblées générales",
							en: "General assemblies"
						},
						d: {
							fr: "Décisions et comptes soumis au vote des membres, avec procès-verbaux publiés.",
							en: "Decisions and accounts submitted to a members' vote, with published minutes."
						}
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: t(c.t)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: t(c.d)
						})]
					})
				}, c.t.fr))
			})]
		})
	] });
}
//#endregion
export { Documents as component };
