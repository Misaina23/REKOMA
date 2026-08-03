import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { a as objectives, f as values, o as org } from "./content-Z8MbjWaS.mjs";
import { t as formation_default } from "./formation-Y0Mb5fdO.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, r as SectionHeading, t as PageHero } from "./Section-ENPD4XnY.mjs";
import { A as Leaf, P as HeartHandshake, n as Users, u as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/a-propos-C5FK7Cbu.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	ShieldCheck,
	Users,
	Leaf,
	HeartHandshake
};
function About() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t({
				fr: "À propos",
				en: "About"
			}),
			title: t({
				fr: "Une association née de sa communauté",
				en: "An association born of its community"
			}),
			description: t({
				fr: "REKOMA est une association à but non lucratif régie par l'Ordonnance n° 60-133 du 3 octobre 1960, fondée en 2025 à l'initiative de M. Botomanaga Brillant.",
				en: "REKOMA is a non-profit association governed by Ordinance no. 60-133 of 3 October 1960, founded in 2025 at the initiative of Mr Botomanaga Brillant."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-bold sm:text-4xl",
				children: t({
					fr: "Notre histoire",
					en: "Our story"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-4 leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t({
						fr: "Face à un isolement géographique persistant, une économie peu diversifiée et un accès insuffisant aux services essentiels, des habitants de Midongy Atsimo se sont regroupés en 2025 pour structurer une réponse collective.",
						en: "Faced with persistent geographic isolation, a poorly diversified economy and insufficient access to essential services, residents of Midongy Atsimo came together in 2025 to structure a collective response."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t({
						fr: "L'Assemblée Générale Extraordinaire du 27 juillet 2026, réunie à Nosifeno, a adopté à l'unanimité les statuts révisés, confirmé le Bureau Exécutif et validé la feuille de route du PDIMA.",
						en: "The Extraordinary General Assembly of 27 July 2026, held in Nosifeno, unanimously adopted the revised statutes, confirmed the Executive Board and validated the PDIMA roadmap."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t({
						fr: "Le projet s'inscrit en cohérence avec le Plan Émergence Madagascar et les Objectifs de Développement Durable 1, 2, 6, 8 et 13.",
						en: "The project is aligned with the Plan Émergence Madagascar and Sustainable Development Goals 1, 2, 6, 8 and 13."
					}) })
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: formation_default,
					alt: t({
						fr: "Session de formation professionnelle à Midongy Atsimo",
						en: "Vocational training session in Midongy Atsimo"
					}),
					width: 1200,
					height: 800,
					loading: "lazy",
					className: "aspect-4/3 w-full rounded-2xl object-cover shadow-elegant"
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t({
					fr: "Nos valeurs",
					en: "Our values"
				}),
				title: t({
					fr: "Ce qui guide chacune de nos décisions",
					en: "What guides every decision we make"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: values.map((v, i) => {
					const Icon = icons[v.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-bold",
									children: t(v.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t(v.text)
								})
							]
						})
					}, v.icon);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t({
				fr: "Objectifs",
				en: "Objectives"
			}),
			title: t({
				fr: "Nos sept objectifs spécifiques",
				en: "Our seven specific objectives"
			}),
			description: t({
				fr: "Objectif général : contribuer au développement économique et social durable de la commune rurale de Midongy Atsimo.",
				en: "Overall objective: contribute to the sustainable economic and social development of the rural commune of Midongy Atsimo."
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-14 grid gap-4 md:grid-cols-2",
			children: objectives.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 2 * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft card-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 rounded-lg bg-gradient-brand px-2.5 py-1 text-xs font-bold text-primary-foreground",
						children: o.code
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: t(o.text)
					})]
				})
			}, o.code))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						k: {
							fr: "Statut juridique",
							en: "Legal status"
						},
						v: {
							fr: "Association à but non lucratif",
							en: "Non-profit association"
						}
					},
					{
						k: {
							fr: "Fondateur",
							en: "Founder"
						},
						v: {
							fr: "M. Botomanaga Brillant",
							en: "Mr Botomanaga Brillant"
						}
					},
					{
						k: {
							fr: "Durée Phase I",
							en: "Phase I duration"
						},
						v: {
							fr: "36 mois",
							en: "36 months"
						}
					},
					{
						k: {
							fr: "Population cible",
							en: "Target population"
						},
						v: {
							fr: "5 000 à 8 000 habitants",
							en: "5,000 to 8,000 people"
						}
					}
				].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs font-semibold tracking-widest text-muted-foreground uppercase",
						children: t(row.k)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-2 text-sm font-semibold",
						children: t(row.v)
					})]
				}, row.k.fr))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: t(org.location)
			})] })
		})
	] });
}
//#endregion
export { About as component };
