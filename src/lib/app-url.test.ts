import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { getAppBaseUrl } from "./app-url";

describe("getAppBaseUrl", () => {
  const originalViteAppUrl = process.env.VITE_APP_URL;
  const originalVercelUrl = process.env.VERCEL_URL;

  beforeEach(() => {
    delete process.env.VITE_APP_URL;
    delete process.env.VERCEL_URL;
  });

  afterEach(() => {
    if (originalViteAppUrl === undefined) delete process.env.VITE_APP_URL;
    else process.env.VITE_APP_URL = originalViteAppUrl;

    if (originalVercelUrl === undefined) delete process.env.VERCEL_URL;
    else process.env.VERCEL_URL = originalVercelUrl;
  });

  it("uses the Vercel origin when no explicit app URL is configured", () => {
    process.env.VERCEL_URL = "site-rekoma.vercel.app";

    expect(getAppBaseUrl()).toBe("https://site-rekoma.vercel.app");
  });
});
