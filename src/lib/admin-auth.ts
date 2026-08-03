export type AdminSession = {
  email: string;
  expiresAt: number;
};

const ADMIN_SESSION_KEY = "admin-auth";
const ADMIN_LOGIN_CODE_KEY = "admin-login-code";
const ADMIN_LOGIN_CODE_EXPIRES_KEY = "admin-login-code-expires";
export const ADMIN_SESSION_TTL_MS = 8 * 60 * 60 * 1000;

export const ADMIN_ALLOWED_USERS = [
  {
    email: "botomznanga@gmail.com",
    name: "Botomz Nanga",
    password: "rekoma2026!",
  },
  {
    email: "andrianisaina23@gmail.com",
    name: "Andrianisaina",
    password: "rekoma2026!",
  },
] as const;

function getStorageCandidates(): Storage[] {
  if (typeof window === "undefined") return [];

  const candidates: Storage[] = [];

  try {
    candidates.push(window.sessionStorage);
  } catch {
    // Ignore storage access errors in restricted contexts.
  }

  try {
    if (window.localStorage) {
      candidates.push(window.localStorage);
    }
  } catch {
    // Ignore storage access errors in restricted contexts.
  }

  return candidates;
}

function readStorageItem(key: string): string | null {
  for (const storage of getStorageCandidates()) {
    try {
      const value = storage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch {
      // Ignore storage access errors and continue to the next backend.
    }
  }

  return null;
}

function writeStorageItem(key: string, value: string) {
  for (const storage of getStorageCandidates()) {
    try {
      storage.setItem(key, value);
    } catch {
      // Ignore storage access errors and continue to the next backend.
    }
  }
}

function removeStorageItem(key: string) {
  for (const storage of getStorageCandidates()) {
    try {
      storage.removeItem(key);
    } catch {
      // Ignore storage access errors and continue to the next backend.
    }
  }
}

export function clearAdminCodeState() {
  removeStorageItem(ADMIN_LOGIN_CODE_KEY);
  removeStorageItem(ADMIN_LOGIN_CODE_EXPIRES_KEY);
}

export function getStoredAdminSession(): AdminSession | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = readStorageItem(ADMIN_SESSION_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<AdminSession> | string;
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

    return { email: parsed.email, expiresAt: parsed.expiresAt };
  } catch {
    clearStoredAdminSession();
    return null;
  }
}

export function setStoredAdminSession(email: string, expiresAt = Date.now() + ADMIN_SESSION_TTL_MS) {
  if (typeof window === "undefined") return;

  writeStorageItem(
    ADMIN_SESSION_KEY,
    JSON.stringify({ email, expiresAt } satisfies AdminSession),
  );
  clearAdminCodeState();
}

export function clearStoredAdminSession() {
  if (typeof window === "undefined") return;

  removeStorageItem(ADMIN_SESSION_KEY);
  clearAdminCodeState();
}

export function storeAdminLoginCode(code: string, expiresAt: number) {
  if (typeof window === "undefined") return;

  writeStorageItem(ADMIN_LOGIN_CODE_KEY, code);
  writeStorageItem(ADMIN_LOGIN_CODE_EXPIRES_KEY, String(expiresAt));
}

export function getStoredAdminLoginCode() {
  if (typeof window === "undefined") return null;

  const code = readStorageItem(ADMIN_LOGIN_CODE_KEY);
  const expiresAt = Number(readStorageItem(ADMIN_LOGIN_CODE_EXPIRES_KEY) ?? "0");

  if (!code || !expiresAt || Date.now() > expiresAt) {
    clearAdminCodeState();
    return null;
  }

  return { code, expiresAt };
}
