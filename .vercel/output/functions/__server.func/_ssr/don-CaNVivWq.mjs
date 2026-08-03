import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, r as useI18n } from "./utils-BiYSywJx.mjs";
import { o as org } from "./content-Z8MbjWaS.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, r as SectionHeading, t as PageHero } from "./Section-ENPD4XnY.mjs";
import { $ as Building, C as Mail, D as LoaderCircle, F as Handshake, I as HandCoins, n as Users, q as Circle } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
import { i as showSuccess, n as showError } from "./alerts-FKPi0eTV.mjs";
import { t as Label } from "./label-ldTRt_TZ.mjs";
import { t as Textarea } from "./textarea-D8IU9eWQ.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DMKlJ7zf.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/radix-ui__react-radio-group.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/don-CaNVivWq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var createDonationCheckout = createServerFn({ method: "POST" }).handler(createSsrRpc("dbbc0987ef5f5582f2b7bea65bca53e81a5841f03937ce12ab5bb89ad29f3784"));
var confirmMvolaDonation = createServerFn({ method: "POST" }).handler(createSsrRpc("c57e3f62f125a817e8bf4a3af62a8ede37427f3c3061072380e041835d6df3c0"));
function Donate() {
	const { t } = useI18n();
	const [method, setMethod] = (0, import_react.useState)("stripe");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		amount: "",
		name: "",
		email: "",
		phone: "",
		message: ""
	});
	const update = (field) => (e) => {
		setForm((f) => ({
			...f,
			[field]: e.target.value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const amount = parseFloat(form.amount);
			if (isNaN(amount) || amount <= 0) {
				await showError(t({
					fr: "Montant invalide",
					en: "Invalid amount"
				}));
				setLoading(false);
				return;
			}
			if (method === "stripe") {
				const result = await createDonationCheckout({ data: {
					amount,
					donorName: form.name,
					donorEmail: form.email,
					method: "stripe"
				} });
				if ("url" in result && result.url) {
					window.location.href = result.url;
					return;
				}
			}
			if (method === "mvola") {
				if ((await confirmMvolaDonation({ data: {
					donorName: form.name,
					donorEmail: form.email,
					amount,
					phoneNumber: form.phone
				} })).success) {
					await showSuccess(t({
						fr: "Merci ! Votre don MVola a été enregistré. Veuillez confirmer votre transaction.",
						en: "Thank you! Your MVola donation has been recorded. Please confirm your transaction."
					}));
					setForm({
						amount: "",
						name: "",
						email: "",
						phone: "",
						message: ""
					});
				}
			}
		} catch (error) {
			console.error(error);
			await showError(t({
				fr: "Une erreur est survenue",
				en: "An error occurred"
			}));
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t({
				fr: "Soutenir",
				en: "Support"
			}),
			title: t({
				fr: "Votre soutien transforme une commune entière",
				en: "Your support transforms an entire commune"
			}),
			description: t({
				fr: "Les fonds mobilisés financent les investissements de départ ; les activités génératrices de revenus prennent ensuite le relais pour assurer la pérennité.",
				en: "Mobilised funds finance the initial investments; income-generating activities then take over to ensure long-term sustainability."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2",
			children: [
				{
					icon: HandCoins,
					title: {
						fr: "Don financier",
						en: "Financial gift"
					},
					text: {
						fr: "Chaque contribution finance directement l'un des sept axes du PDIMA, avec un reporting dédié.",
						en: "Every contribution directly funds one of PDIMA's seven pillars, with dedicated reporting."
					}
				},
				{
					icon: Handshake,
					title: {
						fr: "Partenariat technique",
						en: "Technical partnership"
					},
					text: {
						fr: "Expertise agricole, WASH, formation ou suivi-évaluation : votre savoir-faire accélère le projet.",
						en: "Agricultural, WASH, training or M&E expertise: your know-how accelerates the project."
					}
				},
				{
					icon: Building,
					title: {
						fr: "Mécénat d'entreprise",
						en: "Corporate sponsorship"
					},
					text: {
						fr: "Financez un axe complet et associez votre marque à un impact social mesurable.",
						en: "Fund a complete pillar and associate your brand with measurable social impact."
					}
				},
				{
					icon: Users,
					title: {
						fr: "Nous rejoindre",
						en: "Join us"
					},
					text: {
						fr: "L'adhésion est ouverte à toute personne majeure, après validation par le Bureau Exécutif.",
						en: "Membership is open to any adult, upon validation by the Executive Board."
					}
				}
			].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 2 * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "h-full rounded-2xl border border-border bg-card p-8 shadow-soft card-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, {
								className: "size-5",
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-lg font-bold",
							children: t(w.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: t(w.text)
						})
					]
				})
			}, w.title.fr))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-surface",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t({
						fr: "Passer à l'action",
						en: "Take action"
					}),
					title: t({
						fr: "Faire un don en ligne",
						en: "Donate online"
					}),
					description: t({
						fr: "Choisissez votre méthode de paiement sécurisée et recevez une confirmation par e-mail.",
						en: "Choose your secure payment method and receive an email confirmation."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-10 max-w-2xl mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "rounded-2xl border border-border bg-card p-8 shadow-soft space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "amount",
									children: t({
										fr: "Montant (€)",
										en: "Amount (€)"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "amount",
									type: "number",
									min: "1",
									step: "0.01",
									placeholder: "25",
									value: form.amount,
									onChange: update("amount"),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: t({
										fr: "Nom complet",
										en: "Full name"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									type: "text",
									placeholder: "Jean Dupont",
									value: form.name,
									onChange: update("name"),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: t({
										fr: "Adresse e-mail",
										en: "Email address"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									type: "email",
									placeholder: "jean@exemple.com",
									value: form.email,
									onChange: update("email"),
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t({
									fr: "Méthode de paiement",
									en: "Payment method"
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
									value: method,
									onValueChange: (v) => setMethod(v),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-lg border border-border p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
											value: "stripe",
											id: "stripe"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "stripe",
											className: "flex-1 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold",
												children: "Stripe"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm text-muted-foreground",
												children: t({
													fr: "Carte bancaire (Visa, Mastercard)",
													en: "Credit / debit card"
												})
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-lg border border-border p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
											value: "mvola",
											id: "mvola"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
											htmlFor: "mvola",
											className: "flex-1 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold",
												children: "MVola"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm text-muted-foreground",
												children: t({
													fr: "Mobile Money Madagascar",
													en: "Madagascar Mobile Money"
												})
											})]
										})]
									})]
								})]
							}),
							method === "mvola" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-muted/50 p-4 space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: "MVola"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: t({
											fr: "Envoyez le montant de votre don au numéro MVola suivant :",
											en: "Send your donation to the following MVola number:"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg font-mono font-bold",
										children: "+261 34 533 24 29"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: t({
											fr: "Puis remplissez le formulaire ci-dessous pour confirmer votre paiement.",
											en: "Then fill out the form below to confirm your payment."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "phone",
											children: t({
												fr: "Numéro de téléphone MVola",
												en: "MVola phone number"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "phone",
											type: "tel",
											placeholder: "+261 34 000 00 00",
											value: form.phone,
											onChange: update("phone"),
											required: true
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "message",
									children: t({
										fr: "Message (optionnel)",
										en: "Message (optional)"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "message",
									placeholder: t({
										fr: "Votre message ou dédicace...",
										en: "Your message or dedication..."
									}),
									value: form.message,
									onChange: update("message")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "xl",
								className: "w-full",
								disabled: loading,
								children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }), method === "stripe" ? t({
									fr: "Payer avec Stripe",
									en: "Pay with Stripe"
								}) : t({
									fr: "Confirmer le don MVola",
									en: "Confirm MVola donation"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-10 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "hero",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: t({
								fr: "Contacter REKOMA",
								en: "Contact REKOMA"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${org.email}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-2 size-4" }), org.email]
						})
					})]
				})
			]
		})
	] });
}
//#endregion
export { Donate as component };
