//#region node_modules/.nitro/vite/services/ssr/assets/admin-auth-JTTyccoN.js
var ADMIN_SESSION_KEY = "admin-auth";
var ADMIN_LOGIN_CODE_KEY = "admin-login-code";
var ADMIN_LOGIN_CODE_EXPIRES_KEY = "admin-login-code-expires";
var ADMIN_SESSION_TTL_MS = 480 * 60 * 1e3;
var ADMIN_ALLOWED_USERS = [{
	email: "botomznanga@gmail.com",
	name: "Botomz Nanga",
	password: "rekoma2026!"
}, {
	email: "andrianisaina23@gmail.com",
	name: "Andrianisaina",
	password: "rekoma2026!"
}];
function getStorageCandidates() {
	if (typeof window === "undefined") return [];
	const candidates = [];
	try {
		candidates.push(window.sessionStorage);
	} catch {}
	try {
		if (window.localStorage) candidates.push(window.localStorage);
	} catch {}
	return candidates;
}
function readStorageItem(key) {
	for (const storage of getStorageCandidates()) try {
		const value = storage.getItem(key);
		if (value !== null) return value;
	} catch {}
	return null;
}
function writeStorageItem(key, value) {
	for (const storage of getStorageCandidates()) try {
		storage.setItem(key, value);
	} catch {}
}
function removeStorageItem(key) {
	for (const storage of getStorageCandidates()) try {
		storage.removeItem(key);
	} catch {}
}
function clearAdminCodeState() {
	removeStorageItem(ADMIN_LOGIN_CODE_KEY);
	removeStorageItem(ADMIN_LOGIN_CODE_EXPIRES_KEY);
}
function getStoredAdminSession() {
	if (typeof window === "undefined") return null;
	try {
		const raw = readStorageItem(ADMIN_SESSION_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (typeof parsed === "string") {
			clearStoredAdminSession();
			return null;
		}
		if (!parsed.email || typeof parsed.expiresAt !== "number") {
			clearStoredAdminSession();
			return null;
		}
		if (Date.now() >= parsed.expiresAt) {
			clearStoredAdminSession();
			return null;
		}
		return {
			email: parsed.email,
			expiresAt: parsed.expiresAt
		};
	} catch {
		clearStoredAdminSession();
		return null;
	}
}
function setStoredAdminSession(email, expiresAt = Date.now() + ADMIN_SESSION_TTL_MS) {
	if (typeof window === "undefined") return;
	writeStorageItem(ADMIN_SESSION_KEY, JSON.stringify({
		email,
		expiresAt
	}));
	clearAdminCodeState();
}
function clearStoredAdminSession() {
	if (typeof window === "undefined") return;
	removeStorageItem(ADMIN_SESSION_KEY);
	clearAdminCodeState();
}
function storeAdminLoginCode(code, expiresAt) {
	if (typeof window === "undefined") return;
	writeStorageItem(ADMIN_LOGIN_CODE_KEY, code);
	writeStorageItem(ADMIN_LOGIN_CODE_EXPIRES_KEY, String(expiresAt));
}
function getStoredAdminLoginCode() {
	if (typeof window === "undefined") return null;
	const code = readStorageItem(ADMIN_LOGIN_CODE_KEY);
	const expiresAt = Number(readStorageItem(ADMIN_LOGIN_CODE_EXPIRES_KEY) ?? "0");
	if (!code || !expiresAt || Date.now() > expiresAt) {
		clearAdminCodeState();
		return null;
	}
	return {
		code,
		expiresAt
	};
}
//#endregion
export { setStoredAdminSession as a, getStoredAdminSession as i, clearStoredAdminSession as n, storeAdminLoginCode as o, getStoredAdminLoginCode as r, ADMIN_ALLOWED_USERS as t };
