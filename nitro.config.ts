import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  // Nitro externalizes some transitive deps (e.g. `tslib`) and expects them to be
  // present in the deployed function's node_modules. On Vercel they are not always
  // traced/copied, which crashes every request with ERR_MODULE_NOT_FOUND at runtime.
  // Inlining them bundles the code directly into the function output.
  externals: {
    inline: ["tslib"],
  },
});
