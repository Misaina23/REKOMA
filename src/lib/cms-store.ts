import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// The CMS content file lives at different paths depending on where the code runs:
// - Local dev / build: <cwd>/public/cms-content.json
// - Vercel (Nitro vercel preset): the function runs from
//   .vercel/output/functions/__server.func, while static assets (including
//   cms-content.json) are emitted to .vercel/output/static
// Resolve the first existing candidate so reads work in every environment.
const CMS_CANDIDATES = [
  resolve(process.cwd(), "public/cms-content.json"),
  resolve(process.cwd(), "static/cms-content.json"),
  resolve(process.cwd(), "../static/cms-content.json"),
  resolve(process.cwd(), "../../static/cms-content.json"),
  resolve(process.cwd(), "../../../static/cms-content.json"),
];

export const CMS_FILE = CMS_CANDIDATES.find((p) => existsSync(p)) ?? CMS_CANDIDATES[0];

export function readCmsFile(): string {
  return readFileSync(CMS_FILE, "utf-8");
}

export function writeCmsFile(data: string): void {
  // Serverless filesystems (e.g. Vercel) are read-only at runtime. Swallow the
  // error so CMS writes don't crash the request; persistence requires a
  // different backing store on those platforms.
  try {
    writeFileSync(CMS_FILE, data, "utf-8");
  } catch (error) {
    console.warn("CMS write skipped (read-only filesystem):", (error as Error).message);
  }
}
