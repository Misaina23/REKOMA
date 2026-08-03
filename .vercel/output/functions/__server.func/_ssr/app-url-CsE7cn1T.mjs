//#region node_modules/.nitro/vite/services/ssr/assets/app-url-CsE7cn1T.js
function getAppBaseUrl() {
	if (typeof window !== "undefined") return window.location.origin;
	if (process.env.VITE_APP_URL) return process.env.VITE_APP_URL;
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
	return "http://localhost:8080";
}
//#endregion
export { getAppBaseUrl as t };
