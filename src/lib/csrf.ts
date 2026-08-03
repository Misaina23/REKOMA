const CSRF_COOKIE_NAME = "rekoma-csrf-token";
const CSRF_STORAGE_KEY = "rekoma-csrf-token";

function getCookieValue(name: string): string | null {
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie.split(";");
  const match = cookies
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`));

  if (!match) {
    return null;
  }

  return decodeURIComponent(match.slice(name.length + 1));
}

function setCookieValue(value: string) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${CSRF_COOKIE_NAME}=${encodeURIComponent(value)}; Path=/; Max-Age=3600; SameSite=Lax`;
}

export function getCsrfToken(): string {
  if (typeof window === "undefined") {
    return "";
  }

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

export function verifyCsrfToken(request: Request): boolean {
  const headerToken = request.headers.get("x-csrf-token");
  const cookieHeader = request.headers.get("cookie") ?? "";
  const cookieTokenMatch = cookieHeader.match(new RegExp(`${CSRF_COOKIE_NAME}=([^;]+)`));
  const cookieToken = cookieTokenMatch?.[1];
  return Boolean(headerToken && cookieToken && headerToken === decodeURIComponent(cookieToken));
}
