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
    return { cms: { pages: [] } };
  }
}

const pageSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.record(z.string()).refine((value) => Object.keys(value).length > 0),
  content: z.record(z.string()).refine((value) => Object.keys(value).length > 0),
  metaDescription: z.record(z.string()).optional(),
});

const pagesArraySchema = z.array(pageSchema);

function writeCms(data: CmsData) {
  writeFileSync(CMS_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export const Route = createFileRoute("/api/cms/pages")({
  server: {
    handlers: {
      GET: async () => {
        const data = readCms();
        return new Response(JSON.stringify(data.cms?.pages ?? []), {
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
          const parsed = pagesArraySchema.safeParse(body);
          if (!parsed.success) {
            return new Response(JSON.stringify({ success: false, error: "Validation failed" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }
          data.cms.pages = parsed.data;
        } else {
          const parsed = pageSchema.safeParse(body);
          if (!parsed.success) {
            return new Response(JSON.stringify({ success: false, error: "Validation failed" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }
          data.cms.pages = [...(data.cms.pages ?? []).filter((item) => item.id !== parsed.data.id), parsed.data];
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
        data.cms.pages = (data.cms.pages ?? []).filter((item) => item.id !== body.id);
        writeCms(data);
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
