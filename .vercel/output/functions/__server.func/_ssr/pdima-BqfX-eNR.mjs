import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { c as phases, l as risks, t as axes } from "./content-Z8MbjWaS.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, r as SectionHeading, t as PageHero } from "./Section-ENPD4XnY.mjs";
import { G as Droplets, J as CircleCheck, L as GraduationCap, c as Store, et as Building2, k as Lightbulb, l as Sprout, r as Truck } from "../_libs/lucide-react.mjs";
import { t as eau_default } from "./eau-ChRbFufT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pdima-BqfX-eNR.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	Building2,
	Truck,
	Store,
	Sprout,
	GraduationCap,
	Droplets,
	Lightbulb
};
function Pdima() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t({
				fr: "Projet",
				en: "Project"
			}),
			title: t({
				fr: "PDIMA — Projet de Développement Intégré de Midongy Atsimo",
				en: "PDIMA — Integrated Development Project of Midongy Atsimo"
			}),
			description: t({
				fr: "Une réponse structurée et multisectorielle aux déficits chroniques de développement de la commune, articulée autour de sept axes complémentaires et synergiques.",
				en: "A structured, multisectoral response to the commune's chronic development gaps, built around seven complementary and synergistic pillars."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-8",
			children: axes.map((axis, i) => {
				const Icon = icons[axis.icon];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft card-hover lg:grid-cols-[auto_1fr_1fr] lg:items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-bold tracking-widest text-muted-foreground",
									children: [
										t({
											fr: "AXE",
											en: "PILLAR"
										}),
										" 0",
										i + 1
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-xl font-bold text-balance",
									children: t(axis.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: t(axis.description)
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-secondary p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold tracking-widest text-muted-foreground uppercase",
									children: t({
										fr: "Résultats attendus",
										en: "Expected results"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2.5",
									children: axis.results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2.5 text-sm text-secondary-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											className: "mt-0.5 size-4 shrink-0 text-primary",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(r) })]
									}, r.fr))
								})]
							})
						]
					})
				}, axis.icon);
			})
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t({
					fr: "Mise en œuvre",
					en: "Implementation"
				}),
				title: t({
					fr: "Un chronogramme sur 36 mois",
					en: "A 36-month timeline"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative mt-14 space-y-10 border-l border-border pl-8",
				children: phases.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -left-2.5 grid size-5 place-items-center rounded-full bg-gradient-brand",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-widest text-primary uppercase",
							children: t(p.period)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-xl font-bold",
							children: t(p.phase)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: p.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(item) })]
							}, item.fr))
						})
					] })
				}, p.phase.fr))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: eau_default,
				alt: t({
					fr: "Point d'eau potable alimenté par une pompe solaire dans un village",
					en: "Safe water point powered by a solar pump in a village"
				}),
				width: 1200,
				height: 800,
				loading: "lazy",
				className: "aspect-4/3 w-full rounded-2xl object-cover shadow-elegant"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .12,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold sm:text-4xl",
						children: t({
							fr: "Analyse des risques",
							en: "Risk analysis"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: t({
							fr: "Chaque risque identifié est associé à une mesure d'atténuation concrète et suivie dans le système SERA.",
							en: "Every identified risk is paired with a concrete mitigation measure tracked in the MEAL system."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: risks.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold",
									children: t(r.risk)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground",
									children: t(r.level)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t(r.measure)
							})]
						}, r.risk.fr))
					})
				]
			})]
		}) })
	] });
}
//#endregion
export { Pdima as component };
