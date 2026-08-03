import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { r as impactStats, s as partners } from "./content-Z8MbjWaS.mjs";
import { t as formation_default } from "./formation-Y0Mb5fdO.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, r as SectionHeading, t as PageHero } from "./Section-ENPD4XnY.mjs";
import { n as hero_midongy_default, t as Counter } from "./Counter-BN9dDrGb.mjs";
import { t as eau_default } from "./eau-ChRbFufT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impact-CEw-MBZU.js
var import_jsx_runtime = require_jsx_runtime();
var gallery = [
	{
		src: hero_midongy_default,
		alt: {
			fr: "Habitants revenant des champs",
			en: "Residents returning from the fields"
		}
	},
	{
		src: formation_default,
		alt: {
			fr: "Session de formation",
			en: "Training session"
		}
	},
	{
		src: eau_default,
		alt: {
			fr: "Point d'eau communautaire",
			en: "Community water point"
		}
	}
];
function Impact() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t({
				fr: "Impact",
				en: "Impact"
			}),
			title: t({
				fr: "Des résultats mesurables, suivis et publiés",
				en: "Measurable results, monitored and published"
			}),
			description: t({
				fr: "Le dispositif de Suivi, Évaluation, Redevabilité et Apprentissage (SERA) documente chaque indicateur, avec évaluation à mi-parcours (M24) et évaluation finale (M36).",
				en: "The Monitoring, Evaluation, Accountability and Learning (MEAL) system documents every indicator, with a mid-term (M24) and final (M36) evaluation."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: impactStats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-8 shadow-soft card-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "sr-only",
						children: t(s.label)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-4xl font-bold text-gradient",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							value: s.value,
							suffix: s.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block text-sm text-muted-foreground",
						children: t(s.label)
					})] })]
				})
			}, s.label.fr))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t({
					fr: "Bénéficiaires",
					en: "Beneficiaries"
				}),
				title: t({
					fr: "Qui bénéficie du projet",
					en: "Who benefits from the project"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: [
					{
						title: {
							fr: "Jeunes de 15 à 35 ans",
							en: "Young people aged 15-35"
						},
						text: {
							fr: "Formations qualifiantes, emplois directs et accompagnement à l'entrepreneuriat.",
							en: "Qualifying training, direct jobs and entrepreneurship support."
						}
					},
					{
						title: {
							fr: "Femmes",
							en: "Women"
						},
						text: {
							fr: "Quota minimum de 50 % des bénéficiaires directs, bourses d'accès et participation à la gouvernance.",
							en: "Minimum 50% of direct beneficiaries, access grants and participation in governance."
						}
					},
					{
						title: {
							fr: "Ménages vulnérables",
							en: "Vulnerable households"
						},
						text: {
							fr: "Eau potable, produits de première nécessité disponibles et prix stabilisés.",
							en: "Safe water, availability of essential goods and stabilised prices."
						}
					}
				].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: t(b.title)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: t(b.text)
						})]
					})
				}, b.title.fr))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t({
				fr: "Galerie",
				en: "Gallery"
			}),
			title: t({
				fr: "Le terrain en images",
				en: "The field in pictures"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: gallery.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "group overflow-hidden rounded-2xl border border-border shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img.src,
						alt: t(img.alt),
						loading: "lazy",
						className: "aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "bg-card px-5 py-4 text-sm text-muted-foreground",
						children: t(img.alt)
					})]
				})
			}, img.alt.fr))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t({
					fr: "Partenaires",
					en: "Partners"
				}),
				title: t({
					fr: "Ils accompagnent le projet",
					en: "They support the project"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: partners.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-card px-6 py-8 text-center text-sm font-semibold text-muted-foreground shadow-soft card-hover",
						children: t(p)
					})
				}, p.fr))
			})]
		})
	] });
}
//#endregion
export { Impact as component };
