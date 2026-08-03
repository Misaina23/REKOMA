import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { h as Slot, y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as cn, r as useI18n } from "./utils-BiYSywJx.mjs";
import { o as org } from "./content-Z8MbjWaS.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, t as PageHero } from "./Section-ENPD4XnY.mjs";
import { C as Mail, Q as Check, S as MapPin, Y as ChevronUp, Z as ChevronDown, h as Phone } from "../_libs/lucide-react.mjs";
import { t as getAppBaseUrl } from "./app-url-CsE7cn1T.mjs";
import { t as Button } from "./button-Cs3-OmTj.mjs";
import { t as Input } from "./input-CS4HctI8.mjs";
import { i as showSuccess } from "./alerts-FKPi0eTV.mjs";
import { t as getCsrfToken } from "./csrf-Bg1sT1bJ.mjs";
import { t as Label } from "./label-ldTRt_TZ.mjs";
import { t as Textarea } from "./textarea-D8IU9eWQ.mjs";
import { i as stringType, n as objectType } from "../_libs/zod.mjs";
import { a as useFormContext, i as useForm, n as Controller, r as FormProvider, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CMzmIR2U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Form = FormProvider;
var FormFieldContext = import_react.createContext(null);
var FormField = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormFieldContext.Provider, {
		value: { name: props.name },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controller, { ...props })
	});
};
var useFormField = () => {
	const fieldContext = import_react.useContext(FormFieldContext);
	const itemContext = import_react.useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();
	if (!fieldContext) throw new Error("useFormField should be used within <FormField>");
	if (!itemContext) throw new Error("useFormField should be used within <FormItem>");
	const fieldState = getFieldState(fieldContext.name, formState);
	const { id } = itemContext;
	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState
	};
};
var FormItemContext = import_react.createContext(null);
var FormItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const id = import_react.useId();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormItemContext.Provider, {
		value: { id },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("space-y-2", className),
			...props
		})
	});
});
FormItem.displayName = "FormItem";
var FormLabel = import_react.forwardRef(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		ref,
		className: cn(error && "text-destructive", className),
		htmlFor: formItemId,
		...props
	});
});
FormLabel.displayName = "FormLabel";
var FormControl = import_react.forwardRef(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
		ref,
		id: formItemId,
		"aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
		"aria-invalid": !!error,
		...props
	});
});
FormControl.displayName = "FormControl";
var FormDescription = import_react.forwardRef(({ className, ...props }, ref) => {
	const { formDescriptionId } = useFormField();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		id: formDescriptionId,
		className: cn("text-[0.8rem] text-muted-foreground", className),
		...props
	});
});
FormDescription.displayName = "FormDescription";
var FormMessage = import_react.forwardRef(({ className, children, ...props }, ref) => {
	const { error, formMessageId } = useFormField();
	const body = error ? String(error?.message ?? "") : children;
	if (!body) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		id: formMessageId,
		className: cn("text-[0.8rem] font-medium text-destructive", className),
		...props,
		children: body
	});
});
FormMessage.displayName = "FormMessage";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var schema = objectType({
	name: stringType().min(2, { message: "min" }).max(80),
	email: stringType().email({ message: "email" }),
	subject: stringType().min(1, { message: "min" }),
	message: stringType().min(20, { message: "min20" }).max(2e3)
});
function Contact() {
	const { t } = useI18n();
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: ""
		}
	});
	const messages = {
		min: {
			fr: "Ce champ est requis.",
			en: "This field is required."
		},
		email: {
			fr: "Adresse e-mail invalide.",
			en: "Invalid email address."
		},
		min20: {
			fr: "Merci de détailler votre demande (20 caractères min.).",
			en: "Please detail your request (20 characters min.)."
		}
	};
	const err = (key) => key && messages[key] ? t(messages[key]) : void 0;
	const onSubmit = async (values) => {
		try {
			const base = getAppBaseUrl();
			const res = await fetch(`${base}/api/messages`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": getCsrfToken()
				},
				body: JSON.stringify(values)
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data?.success) throw new Error(data?.error ?? "Failed to send message");
		} catch (error) {
			const storageKey = "rekoma-admin-messages";
			const existing = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
			const messages = existing ? JSON.parse(existing) : [];
			const nextMessages = [{
				...values,
				id: crypto.randomUUID(),
				date: (/* @__PURE__ */ new Date()).toISOString(),
				read: false
			}, ...messages];
			if (typeof window !== "undefined") window.localStorage.setItem(storageKey, JSON.stringify(nextMessages));
			await showSuccess(t({
				fr: "Message enregistré localement",
				en: "Message saved locally"
			}), t({
				fr: "Le message a été conservé localement car le serveur n’a pas pu le traiter. Réessayez plus tard.",
				en: "The message was saved locally because the server could not process it. Please try again later."
			}));
			form.reset();
			return;
		}
		await showSuccess(t({
			fr: "Message envoyé",
			en: "Message sent"
		}), t({
			fr: "Votre demande a bien été enregistrée et sera traitée rapidement.",
			en: "Your request has been recorded and will be processed shortly."
		}));
		form.reset();
	};
	const subjects = [
		{
			value: "partenariat",
			label: {
				fr: "Partenariat",
				en: "Partnership"
			}
		},
		{
			value: "financement",
			label: {
				fr: "Financement / bailleur",
				en: "Funding / donor"
			}
		},
		{
			value: "adhesion",
			label: {
				fr: "Adhésion / bénévolat",
				en: "Membership / volunteering"
			}
		},
		{
			value: "presse",
			label: {
				fr: "Presse & information",
				en: "Press & information"
			}
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t({
			fr: "Contact",
			en: "Contact"
		}),
		title: t({
			fr: "Parlons de votre engagement",
			en: "Let's talk about your involvement"
		}),
		description: t({
			fr: "Bailleurs, ONG, autorités, investisseurs ou futurs membres : nous répondons à chaque demande sous 5 jours ouvrés.",
			en: "Donors, NGOs, authorities, investors or future members: we answer every request within 5 working days."
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-[1.2fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form, {
			...form,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: form.handleSubmit(onSubmit),
				className: "space-y-5 rounded-3xl border border-border bg-card p-8 shadow-soft",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "name",
						render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: t({
								fr: "Nom complet",
								en: "Full name"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...field,
								autoComplete: "name"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { children: err(fieldState.error?.message) })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "email",
						render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: t({
								fr: "Adresse e-mail",
								en: "Email address"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "email",
								autoComplete: "email",
								...field
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { children: err(fieldState.error?.message) })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "subject",
						render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: t({
								fr: "Objet",
								en: "Subject"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								onValueChange: field.onChange,
								value: field.value,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: t({
									fr: "Choisissez un objet",
									en: "Choose a subject"
								}) }) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: subjects.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: s.value,
									children: t(s.label)
								}, s.value)) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { children: err(fieldState.error?.message) })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						control: form.control,
						name: "message",
						render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormItem, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: t({
								fr: "Message",
								en: "Message"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 6,
								...field
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormMessage, { children: err(fieldState.error?.message) })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "hero",
						size: "xl",
						className: "w-full",
						children: t({
							fr: "Envoyer le message",
							en: "Send message"
						})
					})
				]
			})
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .12,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-4 rounded-2xl border border-border bg-card p-7 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "mt-0.5 size-5 shrink-0 text-primary",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: t(org.location)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "mt-0.5 size-5 shrink-0 text-primary",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-sm text-muted-foreground hover:text-foreground",
								href: `mailto:${org.email}`,
								children: org.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "mt-0.5 size-5 shrink-0 text-primary",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: org.phone
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: t({
							fr: "Carte de Midongy Atsimo",
							en: "Map of Midongy Atsimo"
						}),
						src: "https://www.openstreetmap.org/export/embed.html?bbox=46.7%2C-23.85%2C47.35%2C-23.35&layer=mapnik&marker=-23.5833%2C47.0083",
						className: "h-80 w-full",
						loading: "lazy"
					})
				})]
			})
		})]
	}) })] });
}
//#endregion
export { Contact as component };
