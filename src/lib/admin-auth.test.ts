import { beforeEach, describe, expect, it } from "vitest";

import { getStoredAdminSession, setStoredAdminSession } from "./admin-auth";

describe("admin auth storage", () => {
  beforeEach(() => {
    const store = new Map<string, string>();

    Object.defineProperty(globalThis, "window", {
      value: {
        localStorage: {
          getItem: (key: string) => store.get(key) ?? null,
          setItem: (key: string, value: string) => store.set(key, value),
          removeItem: (key: string) => store.delete(key),
          clear: () => store.clear(),
        },
        sessionStorage: {
          getItem: (key: string) => null,
          setItem: () => undefined,
          removeItem: () => undefined,
          clear: () => undefined,
        },
      },
      configurable: true,
    });
  });

  it("falls back to localStorage when sessionStorage is unavailable", () => {
    const expiresAt = Date.now() + 60_000;

    setStoredAdminSession("admin@example.com", expiresAt);

    expect(getStoredAdminSession()).toEqual({
      email: "admin@example.com",
      expiresAt,
    });
  });
});
