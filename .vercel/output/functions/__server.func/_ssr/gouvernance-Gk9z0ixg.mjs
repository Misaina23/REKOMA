import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { d as team } from "./content-Z8MbjWaS.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, r as SectionHeading, t as PageHero } from "./Section-ENPD4XnY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gouvernance-Gk9z0ixg.js
var import_jsx_runtime = require_jsx_runtime();
function Governance() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t({
				fr: "Gouvernance",
				en: "Governance"
			}),
			title: t({
				fr: "Une gouvernance associative et participative",
				en: "Participatory associative governance"
			}),
			description: t({
				fr: "Statuts adoptés par l'Assemblée Générale Extraordinaire du 27 juillet 2026, avec une participation équitable des femmes et des jeunes aux décisions.",
				en: "Statutes adopted by the Extraordinary General Assembly of 27 July 2026, with equitable participation of women and youth in decision-making."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2",
			children: [
				{
					title: {
						fr: "Assemblée Générale",
						en: "General Assembly"
					},
					text: {
						fr: "Organe souverain : adopte les statuts, valide les comptes et élit le Bureau Exécutif.",
						en: "Sovereign body: adopts the statutes, approves the accounts and elects the Executive Board."
					}
				},
				{
					title: {
						fr: "Bureau Exécutif",
						en: "Executive Board"
					},
					text: {
						fr: "Assure la gestion courante, met en œuvre les décisions de l'AG et valide les adhésions.",
						en: "Handles day-to-day management, implements Assembly decisions and validates memberships."
					}
				},
				{
					title: {
						fr: "Coordination SERA",
						en: "MEAL Coordination"
					},
					text: {
						fr: "Pilote le suivi, l'évaluation, la redevabilité et l'apprentissage tout au long du projet.",
						en: "Leads monitoring, evaluation, accountability and learning throughout the project."
					}
				},
				{
					title: {
						fr: "Comités locaux",
						en: "Local committees"
					},
					text: {
						fr: "Comités de gestion communautaire (dont le CGCE pour l'eau) ancrés dans les villages.",
						en: "Community management committees (including the CGCE for water) rooted in the villages."
					}
				}
			].map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 2 * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold",
						children: t(o.title)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: t(o.text)
					})]
				})
			}, o.title.fr))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t({
					fr: "Équipe",
					en: "Team"
				}),
				title: t({
					fr: "Le Bureau Exécutif",
					en: "The Executive Board"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: team.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-2xl border border-border bg-card p-7 text-center shadow-soft card-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto grid size-16 place-items-center rounded-full bg-gradient-brand text-xl font-bold text-primary-foreground",
								children: m.name === "—" ? "•" : m.name.charAt(0)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-base font-bold",
								children: m.name === "—" ? t({
									fr: "Poste à pourvoir",
									en: "Position open"
								}) : m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t(m.role)
							})
						]
					})
				}, `${m.name}-${m.role.fr}`))
			})]
		})
	] });
}
//#endregion
export { Governance as component };
