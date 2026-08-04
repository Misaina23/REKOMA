import { fileURLToPath } from "node:url";
import { defineNitroConfig } from "nitro/config";

const tslibEntry = fileURLToPath(new URL("./node_modules/tslib/tslib.js", import.meta.url));

export default defineNitroConfig({
  preset: "vercel",
  alias: {
    tslib: tslibEntry,
  },
  // Nitro externalizes some transitive deps (e.g. `tslib`) and expects them to be
  // present in the deployed function's node_modules. On Vercel they are not always
  // traced/copied, which crashes every request with ERR_MODULE_NOT_FOUND at runtime.
  // Inlining them bundles the code directly into the function output.
  externals: {
    inline: ["tslib", "@tanstack/react-start", "@tanstack/start-client-core", "@tanstack/start-server-core"],
  },
  runtimeConfig: {
    nitro: {
      routeRules: {
        "**": {
          headers: {
            "cache-control": "no-store",
          },
        },
      },
    },
  },
});
