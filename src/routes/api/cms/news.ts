import { createFileRoute } from "@tanstack/react-router";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { z } from "zod";
import { verifyCsrfToken } from "@/lib/csrf";

const CMS_FILE = resolve(process.cwd(), "public/cms-content.json");

interface CmsData {
  cms?: {
    news?: Array<{
      id: string;
      date: string;
      title: Record<string, string>;
      excerpt: Record<string, string>;
      tag: Record<string, string>;
      image?: string;
    }>;
    documents?: Array<{
      id: string;
      title: Record<string, string>;
      type: string;
      description: Record<string, string>;
      url: string;
    }>;
    gallery?: Array<{
      id: string;
      src: string;
      alt: Record<string, string>;
      caption?: Record<string, string>;
    }>;
    pages?: Array<{
      id: string;
      slug: string;
      title: Record<string, string>;
      content: Record<string, string>;
      metaDescription?: Record<string, string>;
    }>;
  };
}

function readCms(): CmsData {
  try {
    const data = readFileSync(CMS_FILE, "utf-8");
    return JSON.parse(data) as CmsData;
  } catch {
    return { cms: { news: [], documents: [], gallery: [], pages: [] } };
  }
}

function writeCms(data: CmsData) {
  writeFileSync(CMS_FILE, JSON.stringify(data, null, 2), "utf-8");
}

const newsSchema = z.object({
  id: z.string().min(1),
  date: z.string().min(1),
  title: z.record(z.string()).refine((value) => Object.keys(value).length > 0),
  excerpt: z.record(z.string()).refine((value) => Object.keys(value).length > 0),
  tag: z.record(z.string()).refine((value) => Object.keys(value).length > 0),
  image: z.string().optional(),
});

const newsArraySchema = z.array(newsSchema);

export const Route = createFileRoute("/api/cms/news")({
  server: {
    handlers: {
      GET: async () => {
        const data = readCms();
        return new Response(JSON.stringify(data.cms?.news ?? []), {
          headers: { "Content-Type": "application/json" },
        });
      },
      POST: async ({ request }) => {
        if (!verifyCsrfToken(request)) {
          return new Response(JSON.stringify({ success: false, error: "Invalid CSRF token" }), {
            status: 403,
            headers: { "Content-Type": "application/json" },
          });
        }

        const body = await request.json().catch(() => null);
        if (!body) {
          return new Response(JSON.stringify({ success: false, error: "Invalid payload" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const data = readCms();
        data.cms = data.cms ?? {};

        if (Array.isArray(body)) {
          const parsed = newsArraySchema.safeParse(body);
          if (!parsed.success) {
            return new Response(JSON.stringify({ success: false, error: "Validation failed" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }
          data.cms.news = parsed.data;
        } else {
          const parsed = newsSchema.safeParse(body);
          if (!parsed.success) {
            return new Response(JSON.stringify({ success: false, error: "Validation failed" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }
          data.cms.news = [...(data.cms.news ?? []).filter((item) => item.id !== parsed.data.id), parsed.data];
        }

        writeCms(data);
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" },
        });
      },
      DELETE: async ({ request }) => {
        if (!verifyCsrfToken(request)) {
          return new Response(JSON.stringify({ success: false, error: "Invalid CSRF token" }), {
            status: 403,
            headers: { "Content-Type": "application/json" },
          });
        }

        const body = await request.json().catch(() => null);
        if (!body || typeof body.id !== "string") {
          return new Response(JSON.stringify({ success: false, error: "Invalid payload" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const data = readCms();
        data.cms = data.cms ?? {};
        data.cms.news = (data.cms.news ?? []).filter((item) => item.id !== body.id);
        writeCms(data);
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
