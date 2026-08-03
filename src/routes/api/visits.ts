import { createFileRoute } from "@tanstack/react-router";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { RateLimiter } from "@/lib/rate-limit";

const VISITS_FILE = resolve(process.cwd(), "visits.json");
const visitLimiter = new RateLimiter({ windowMs: 60_000, max: 60 });

interface Visits {
  total: number;
  days: Record<string, number>;
}

function readVisits(): Visits {
  try {
    const data = readFileSync(VISITS_FILE, "utf-8");
    const parsed = JSON.parse(data) as Partial<Visits>;
    return { total: parsed.total ?? 0, days: parsed.days ?? {} };
  } catch {
    return { total: 0, days: {} };
  }
}

function writeVisits(visits: Visits) {
  writeFileSync(VISITS_FILE, JSON.stringify(visits, null, 2), "utf-8");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export const Route = createFileRoute("/api/visits")({
  server: {
    handlers: {
      GET: async () => {
        const visits = readVisits();
        return new Response(JSON.stringify(visits), {
          headers: { "Content-Type": "application/json" },
        });
      },
      POST: async ({ request }) => {
        const ip = request.headers.get("x-forwarded-for") ?? "local";
        if (!visitLimiter.check(ip)) {
          return new Response(JSON.stringify({ success: false, error: "Too many requests" }), {
            status: 429,
            headers: { "Content-Type": "application/json" },
          });
        }

        const visits = readVisits();
        const key = todayKey();
        visits.total += 1;
        visits.days[key] = (visits.days[key] ?? 0) + 1;
        writeVisits(visits);

        return new Response(JSON.stringify(visits), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
