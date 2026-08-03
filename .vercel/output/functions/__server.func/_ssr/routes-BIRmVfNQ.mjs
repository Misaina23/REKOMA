import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { o as org, s as partners, t as axes, u as stats } from "./content-Z8MbjWaS.mjs";
import { i as motion } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, r as SectionHeading } from "./Section-ENPD4XnY.mjs";
import { G as Droplets, H as Eye, L as GraduationCap, N as Heart, S as MapPin, c as Store, et as Building2, k as Lightbulb, l as Sprout, o as Target, r as Truck, tt as ArrowRight, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { n as hero_midongy_default, t as Counter } from "./Counter-BN9dDrGb.mjs";
import { t as Route } from "./routes-BE57ilOY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BIRmVfNQ.js
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
function Home() {
	const { t, lang } = useI18n();
	const news = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[92svh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_midongy_default,
					alt: t({
						fr: "Habitants de Midongy Atsimo revenant des champs au coucher du soleil",
						en: "Residents of Midongy Atsimo returning from the fields at sunset"
					}),
					width: 1920,
					height: 1088,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(100deg,oklch(0.12_0.03_255/0.92)_10%,oklch(0.12_0.03_255/0.65)_50%,oklch(0.12_0.03_255/0.35)_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-center px-4 pt-28 pb-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 28
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-3.5",
									"aria-hidden": true
								}), "Midongy Atsimo · Atsimo-Atsinanana · Madagascar"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 text-center text-4xl leading-[1.05] font-bold text-balance text-white sm:text-6xl lg:text-7xl",
								children: t({
									fr: "Le développement se construit avec la communauté, pas à sa place.",
									en: "Development is built with the community, not for it."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg leading-relaxed text-white/80",
								children: t({
									fr: "REKOMA porte le PDIMA, un programme intégré de 36 mois autour de sept axes : infrastructures, mobilité rurale, commerce de proximité, agriculture, formation, eau potable et entrepreneuriat inclusif.",
									en: "REKOMA leads PDIMA, a 36-month integrated programme across seven pillars: infrastructure, rural mobility, local retail, agriculture, training, safe water and inclusive entrepreneurship."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "hero",
									size: "xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/pdima",
										children: [t({
											fr: "Découvrir le projet",
											en: "Explore the project"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "xl",
									variant: "glass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/don",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {}), t({
											fr: "Faire un don",
											en: "Donate"
										})]
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.dl, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .25,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md lg:grid-cols-4",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-white/5 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: t(s.label)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-3xl font-bold text-white sm:text-4xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									value: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-white/70",
								children: t(s.label)
							})] })]
						}, t(s.label)))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [
				{
					icon: Target,
					title: {
						fr: "Notre mission",
						en: "Our mission"
					},
					text: {
						fr: "Créer des activités génératrices de revenus, améliorer l'accès aux services essentiels et renforcer les compétences locales de la commune rurale de Midongy Atsimo.",
						en: "Create income-generating activities, improve access to essential services and strengthen local skills in the rural commune of Midongy Atsimo."
					}
				},
				{
					icon: Eye,
					title: {
						fr: "Notre vision",
						en: "Our vision"
					},
					text: {
						fr: "Une commune désenclavée, autonome économiquement, où les jeunes et les femmes trouvent localement un emploi digne et durable.",
						en: "A connected, economically autonomous commune where young people and women find dignified, lasting local employment."
					}
				},
				{
					icon: ShieldCheck,
					title: {
						fr: "Notre engagement",
						en: "Our commitment"
					},
					text: {
						fr: "Une gouvernance transparente, un suivi-évaluation rigoureux (SERA) et une redevabilité publique envers les bailleurs et la communauté.",
						en: "Transparent governance, rigorous monitoring and evaluation (MEAL) and public accountability to donors and the community."
					}
				}
			].map((card, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full rounded-2xl border border-border bg-card p-8 shadow-soft card-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, {
								className: "size-6",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-xl font-bold",
							children: t(card.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: t(card.text)
						})
					]
				})
			}, card.title.fr))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t({
					fr: "Le projet",
					en: "The project"
				}),
				title: t({
					fr: "Les 7 axes du PDIMA",
					en: "The 7 pillars of PDIMA"
				}),
				description: t({
					fr: "Sept interventions complémentaires et synergiques, conçues pour se financer progressivement par leurs propres activités.",
					en: "Seven complementary and synergistic interventions, designed to progressively finance themselves through their own activities."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: [axes.map((axis, i) => {
					const Icon = icons[axis.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											"aria-hidden": true
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-bold tracking-widest text-muted-foreground",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-bold text-balance",
									children: t(axis.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: t(axis.description)
								})
							]
						})
					}, axis.icon);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .24,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/pdima",
						className: "flex h-full flex-col justify-between rounded-2xl bg-gradient-brand p-7 text-primary-foreground shadow-elegant card-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: t({
								fr: "Voir le détail des activités",
								en: "See the detailed activities"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold",
							children: [t({
								fr: "Explorer le PDIMA",
								en: "Explore PDIMA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-1" })]
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold tracking-widest text-muted-foreground uppercase",
					children: t({
						fr: "Zone d'intervention",
						en: "Intervention area"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-bold sm:text-4xl",
					children: t({
						fr: "Midongy Atsimo, une zone enclavée",
						en: "Midongy Atsimo, an isolated area"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted-foreground",
					children: t({
						fr: "Située dans le district de Midongy du Sud (318), au cœur de la région Atsimo-Atsinanana, la commune conjugue relief accidenté, éloignement des centres urbains et agriculture de subsistance faiblement mécanisée.",
						en: "Located in the Midongy du Sud district (318), in the heart of the Atsimo-Atsinanana region, the commune combines rugged terrain, remoteness from urban centres and barely mechanised subsistence farming."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3 text-sm",
					children: [
						{
							fr: "5 000 à 8 000 habitants ciblés",
							en: "5,000 to 8,000 people targeted"
						},
						{
							fr: "Routes dégradées, transport irrégulier",
							en: "Degraded roads, irregular transport"
						},
						{
							fr: "Accès très limité à l'eau potable",
							en: "Very limited access to safe water"
						},
						{
							fr: "Faible offre de formation qualifiante",
							en: "Little access to qualifying training"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1.5 size-2 shrink-0 rounded-full bg-gradient-brand",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: t(item)
						})]
					}, item.fr))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: t({
							fr: "Carte de Midongy Atsimo",
							en: "Map of Midongy Atsimo"
						}),
						src: "https://www.openstreetmap.org/export/embed.html?bbox=46.7%2C-23.85%2C47.35%2C-23.35&layer=mapnik&marker=-23.5833%2C47.0083",
						className: "h-[420px] w-full",
						loading: "lazy"
					})
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t({
						fr: "Actualités",
						en: "News"
					}),
					title: t({
						fr: "Dernières nouvelles du terrain",
						en: "Latest from the field"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: news.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft card-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold tracking-widest text-primary uppercase",
									children: item.tag[lang] ?? item.tag.fr
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-lg font-bold text-balance",
									children: item.title[lang] ?? item.title.fr
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
									children: item.excerpt[lang] ?? item.excerpt.fr
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
									className: "mt-5 text-xs text-muted-foreground",
									dateTime: item.date,
									children: item.date
								})
							]
						})
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/actualites",
							children: [t({
								fr: "Toutes les actualités",
								en: "All news"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: t({
				fr: "Écosystème",
				en: "Ecosystem"
			}),
			title: t({
				fr: "Nos partenaires et parties prenantes",
				en: "Our partners and stakeholders"
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
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl bg-gradient-brand px-8 py-16 text-center text-primary-foreground shadow-elegant sm:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-white/10 blur-3xl float-slow",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto max-w-2xl text-3xl font-bold text-balance sm:text-4xl",
						children: t({
							fr: "Soutenez un développement piloté par la communauté",
							en: "Support development driven by the community"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-primary-foreground/85",
						children: t({
							fr: "Bailleurs, ONG, investisseurs ou donateurs : construisons ensemble la Phase I du PDIMA.",
							en: "Donors, NGOs, investors or supporters: let's build PDIMA Phase I together."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "xl",
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/don",
								children: t({
									fr: "Faire un don",
									en: "Donate"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "xl",
							variant: "glass",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: t({
									fr: "Devenir partenaire",
									en: "Become a partner"
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-xs text-primary-foreground/70",
						children: t(org.location)
					})
				]
			}) })
		})
	] });
}
//#endregion
export { Home as component };
