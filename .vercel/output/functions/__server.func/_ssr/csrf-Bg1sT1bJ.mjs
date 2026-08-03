//#region node_modules/.nitro/vite/services/ssr/assets/csrf-Bg1sT1bJ.js
var CSRF_COOKIE_NAME = "rekoma-csrf-token";
var CSRF_STORAGE_KEY = "rekoma-csrf-token";
function getCookieValue(name) {
	if (typeof document === "undefined") return null;
	const match = document.cookie.split(";").map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith(`${name}=`));
	if (!match) return null;
	return decodeURIComponent(match.slice(name.length + 1));
}
function setCookieValue(value) {
	if (typeof document === "undefined") return;
	document.cookie = `${CSRF_COOKIE_NAME}=${encodeURIComponent(value)}; Path=/; Max-Age=3600; SameSite=Lax`;
}
function getCsrfToken() {
	if (typeof window === "undefined") return "";
	const existing = getCookieValue(CSRF_COOKIE_NAME) ?? window.sessionStorage.getItem(CSRF_STORAGE_KEY);
	if (existing) {
		window.sessionStorage.setItem(CSRF_STORAGE_KEY, existing);
		return existing;
	}
	const token = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
	setCookieValue(token);
	window.sessionStorage.setItem(CSRF_STORAGE_KEY, token);
	return token;
}
function verifyCsrfToken(request) {
	const headerToken = request.headers.get("x-csrf-token");
	const cookieToken = (request.headers.get("cookie") ?? "").match(new RegExp(`${CSRF_COOKIE_NAME}=([^;]+)`))?.[1];
	return Boolean(headerToken && cookieToken && headerToken === decodeURIComponent(cookieToken));
}
//#endregion
export { verifyCsrfToken as n, getCsrfToken as t };
