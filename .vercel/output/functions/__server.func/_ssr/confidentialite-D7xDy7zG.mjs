import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./utils-BiYSywJx.mjs";
import { o as org } from "./content-Z8MbjWaS.mjs";
import { t as Reveal } from "./Reveal-Cgd08xya.mjs";
import { n as Section, t as PageHero } from "./Section-ENPD4XnY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confidentialite-D7xDy7zG.js
var import_jsx_runtime = require_jsx_runtime();
function Privacy() {
	const { t } = useI18n();
	const blocks = [
		{
			h: {
				fr: "Données collectées",
				en: "Data collected"
			},
			p: {
				fr: "Le site collecte uniquement les données que vous transmettez volontairement via le formulaire de contact ou l'inscription à la newsletter : nom, adresse e-mail et contenu du message.",
				en: "The site only collects data you voluntarily submit through the contact form or newsletter subscription: name, email address and message content."
			}
		},
		{
			h: {
				fr: "Finalité du traitement",
				en: "Purpose of processing"
			},
			p: {
				fr: "Ces données servent exclusivement à répondre à votre demande et, le cas échéant, à vous envoyer nos actualités. Elles ne sont ni vendues ni cédées à des tiers.",
				en: "This data is used solely to answer your request and, where applicable, to send you our news. It is never sold or transferred to third parties."
			}
		},
		{
			h: {
				fr: "Durée de conservation",
				en: "Retention period"
			},
			p: {
				fr: "Les données sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées.",
				en: "Data is kept for as long as needed to handle your request, then archived or deleted."
			}
		},
		{
			h: {
				fr: "Préférences locales",
				en: "Local preferences"
			},
			p: {
				fr: "Votre choix de langue et de thème (clair/sombre) est enregistré dans le stockage local de votre navigateur. Aucun cookie publicitaire ni traceur tiers n'est utilisé.",
				en: "Your language and theme (light/dark) preference is stored in your browser's local storage. No advertising cookies or third-party trackers are used."
			}
		},
		{
			h: {
				fr: "Vos droits",
				en: "Your rights"
			},
			p: {
				fr: `Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à ${org.email}.`,
				en: `You may request access, correction or deletion of your data by writing to ${org.email}.`
			}
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t({
			fr: "Confidentialité",
			en: "Privacy"
		}),
		title: t({
			fr: "Politique de confidentialité",
			en: "Privacy policy"
		}),
		description: t({
			fr: "Nous traitons vos données avec la même exigence de transparence que nos comptes.",
			en: "We handle your data with the same transparency standard as our accounts."
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
export { Privacy as component };
