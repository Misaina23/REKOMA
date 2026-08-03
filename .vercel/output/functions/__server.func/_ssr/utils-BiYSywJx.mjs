import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-BiYSywJx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LanguageContext = (0, import_react.createContext)({
	lang: "fr",
	setLang: () => {},
	t: (v) => v.fr
});
var STORAGE_KEY = "rekoma-lang";
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("fr");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored === "fr" || stored === "en") {
			setLangState(stored);
			return;
		}
		if (navigator.language?.toLowerCase().startsWith("en")) setLangState("en");
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	const setLang = (0, import_react.useCallback)((l) => {
		setLangState(l);
		window.localStorage.setItem(STORAGE_KEY, l);
	}, []);
	const t = (0, import_react.useCallback)((v) => v[lang], [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
function useI18n() {
	return (0, import_react.useContext)(LanguageContext);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { cn as n, useI18n as r, LanguageProvider as t };
