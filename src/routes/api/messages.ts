import { createFileRoute } from "@tanstack/react-router";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { z } from "zod";
import { RateLimiter } from "@/lib/rate-limit";
import { ADMIN_ALLOWED_USERS } from "@/lib/admin-auth";
import { sendEmail, fromName } from "@/lib/email";

function verifyCsrf(request: Request) {
  const headerToken = request.headers.get("x-csrf-token");
  const cookieToken = request.headers.get("cookie")?.match(/rekoma-csrf-token=([^;]+)/)?.[1];
  return Boolean(headerToken && cookieToken && headerToken === decodeURIComponent(cookieToken));
}

const MESSAGES_FILE = resolve(process.cwd(), "messages.json");
const messageLimiter = new RateLimiter({ windowMs: 60_000, max: 5 });

const messageSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  subject: z.string().trim().min(1).max(120),
  message: z.string().trim().min(20).max(2000),
});

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

function readMessages(): Message[] {
  try {
    const data = readFileSync(MESSAGES_FILE, "utf-8");
    return JSON.parse(data) as Message[];
  } catch {
    return [];
  }
}

function writeMessages(messages: Message[]) {
  writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
}

export const Route = createFileRoute("/api/messages")({
  server: {
    handlers: {
      GET: async () => {
        const messages = readMessages();
        return new Response(JSON.stringify(messages), {
          headers: { "Content-Type": "application/json" },
        });
      },
      POST: async ({ request }) => {
        const body = await request.json().catch(() => null);
        if (!body || typeof body !== "object") {
          return new Response(JSON.stringify({ success: false, error: "Invalid payload" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const ip = request.headers.get("x-forwarded-for") ?? "local";
        if (!messageLimiter.check(ip)) {
          return new Response(JSON.stringify({ success: false, error: "Too many requests" }), {
            status: 429,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = messageSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ success: false, error: "Validation failed" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const messages = readMessages();

        if (body?.id) {
          const index = messages.findIndex((message) => message.id === body.id);
          if (index >= 0) {
            messages[index] = {
              ...messages[index],
              read: typeof body.read === "boolean" ? body.read : messages[index].read,
            };
            writeMessages(messages);
            return new Response(JSON.stringify({ success: true, message: messages[index] }), {
              headers: { "Content-Type": "application/json" },
            });
          }
        }

        const newMessage: Message = {
          id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          name: parsed.data.name,
          email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
          date: new Date().toISOString(),
          read: false,
        };
        messages.unshift(newMessage);
        writeMessages(messages);

        void sendEmail({
          to: ADMIN_ALLOWED_USERS.map((user) => user.email),
          subject: `Nouveau message — ${newMessage.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #2563eb;">Nouveau message de contact</h1>
              <p><strong>De :</strong> ${newMessage.name} (${newMessage.email})</p>
              <p><strong>Objet :</strong> ${newMessage.subject}</p>
              <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0; white-space: pre-wrap;">
                ${newMessage.message}
              </div>
              <p style="color: #6b7280; font-size: 12px;">
                Reçu le ${new Date(newMessage.date).toLocaleString("fr-FR")} — ${fromName}
              </p>
            </div>
          `,
        }).catch((error) => console.error("Admin notification email failed:", error));

        return new Response(JSON.stringify({ success: true, message: newMessage }), {
          headers: { "Content-Type": "application/json" },
        });
      },
      DELETE: async ({ request }) => {
        if (!verifyCsrf(request)) {
          return new Response(JSON.stringify({ success: false, error: "Invalid CSRF token" }), {
            status: 403,
            headers: { "Content-Type": "application/json" },
          });
        }

        const body = await request.json().catch(() => null);
        const messages = readMessages();
        const filtered = messages.filter((m) => m.id !== body?.id);
        writeMessages(filtered);
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
