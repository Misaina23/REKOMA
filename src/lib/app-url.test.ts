import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { getAppBaseUrl } from "./app-url";

describe("getAppBaseUrl", () => {
  const originalViteAppUrl = process.env.VITE_APP_URL;
  const originalPublicAppUrl = process.env.PUBLIC_APP_URL;
  const originalNextPublicAppUrl = process.env.NEXT_PUBLIC_APP_URL;
  const originalVercelUrl = process.env.VERCEL_URL;
  const originalVercelBranchUrl = process.env.VERCEL_BRANCH_URL;
  const originalVercelProjectProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const originalNodeEnv = process.env.NODE_ENV;

  beforeEach(() => {
    delete process.env.VITE_APP_URL;
    delete process.env.PUBLIC_APP_URL;
    delete process.env.NEXT_PUBLIC_APP_URL;
    delete process.env.VERCEL_URL;
    delete process.env.VERCEL_BRANCH_URL;
    delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    process.env.NODE_ENV = "test";
  });

  afterEach(() => {
    if (originalViteAppUrl === undefined) delete process.env.VITE_APP_URL;
    else process.env.VITE_APP_URL = originalViteAppUrl;

    if (originalPublicAppUrl === undefined) delete process.env.PUBLIC_APP_URL;
    else process.env.PUBLIC_APP_URL = originalPublicAppUrl;

    if (originalNextPublicAppUrl === undefined) delete process.env.NEXT_PUBLIC_APP_URL;
    else process.env.NEXT_PUBLIC_APP_URL = originalNextPublicAppUrl;

    if (originalVercelUrl === undefined) delete process.env.VERCEL_URL;
    else process.env.VERCEL_URL = originalVercelUrl;

    if (originalVercelBranchUrl === undefined) delete process.env.VERCEL_BRANCH_URL;
    else process.env.VERCEL_BRANCH_URL = originalVercelBranchUrl;

    if (originalVercelProjectProductionUrl === undefined) delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
    else process.env.VERCEL_PROJECT_PRODUCTION_URL = originalVercelProjectProductionUrl;

    if (originalNodeEnv === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = originalNodeEnv;
  });

  it("uses the provided Vercel origin when no explicit app URL is configured", () => {
    process.env.VERCEL_URL = "site-rekoma.vercel.app";

    expect(getAppBaseUrl()).toBe("https://site-rekoma.vercel.app");
  });

  it("falls back to the production domain when running in production without any host env var", () => {
    process.env.NODE_ENV = "production";

    expect(getAppBaseUrl()).toBe("https://site-rekoma.vercel.app");
  });
});
