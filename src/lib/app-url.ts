function normalizeBaseUrl(value: string): string {
  const trimmed = value.trim().replace(/\/$/, "");
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export function getAppBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  const configuredBase = [
    process.env.VITE_APP_URL,
    process.env.PUBLIC_APP_URL,
    process.env.NEXT_PUBLIC_APP_URL,
    process.env.VERCEL_URL,
    process.env.VERCEL_BRANCH_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
  ].find((value): value is string => Boolean(value && value.trim()));

  if (configuredBase) {
    return normalizeBaseUrl(configuredBase);
  }

  if (process.env.NODE_ENV === "production") {
    return "https://site-rekoma.vercel.app";
  }

  return "http://localhost:8080";
}
