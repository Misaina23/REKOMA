//#region node_modules/.nitro/vite/services/ssr/assets/app-url-Dn8IWfll.js
function normalizeBaseUrl(value) {
	const trimmed = value.trim().replace(/\/$/, "");
	return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}
function getAppBaseUrl() {
	if (typeof window !== "undefined") return window.location.origin;
	const configuredBase = [
		process.env.VITE_APP_URL,
		process.env.PUBLIC_APP_URL,
		process.env.NEXT_PUBLIC_APP_URL,
		process.env.VERCEL_URL,
		process.env.VERCEL_BRANCH_URL,
		process.env.VERCEL_PROJECT_PRODUCTION_URL
	].find((value) => Boolean(value && value.trim()));
	if (configuredBase) return normalizeBaseUrl(configuredBase);
	return "https://site-rekoma.vercel.app";
}
//#endregion
export { getAppBaseUrl as t };
