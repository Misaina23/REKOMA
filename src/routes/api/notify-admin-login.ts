import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
import { RateLimiter } from "@/lib/rate-limit";

function verifyCsrf(request: Request) {
  const headerToken = request.headers.get("x-csrf-token");
  const cookieToken = request.headers.get("cookie")?.match(/rekoma-csrf-token=([^;]+)/)?.[1];
  return Boolean(headerToken && cookieToken && headerToken === decodeURIComponent(cookieToken));
}

const resendApiKey = process.env.RESEND_API_KEY ?? process.env.VITE_RESEND_API_KEY;
const adminLoginLimiter = new RateLimiter({ windowMs: 60_000, max: 5 });
const fromEmail = process.env.RESEND_FROM_EMAIL ?? process.env.VITE_RESEND_FROM_EMAIL ?? "donations@rekoma-pdima.org";
const fromName = process.env.RESEND_FROM_NAME ?? process.env.VITE_RESEND_FROM_NAME ?? "REKOMA";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const Route = createFileRoute("/api/notify-admin-login")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!verifyCsrf(request)) {
          return new Response(JSON.stringify({ success: false, error: "Invalid CSRF token" }), {
            status: 403,
            headers: { "Content-Type": "application/json" },
          });
        }

        const body = await request.json().catch(() => null);
        const { email, code } = (body ?? {}) as { email?: string; code?: string };
        const ip = request.headers.get("x-forwarded-for") ?? "local";

        if (!adminLoginLimiter.check(ip)) {
          return new Response(JSON.stringify({ success: false, error: "Too many requests" }), {
            status: 429,
            headers: { "Content-Type": "application/json" },
          });
        }

        if (!email || !code) {
          return new Response(
            JSON.stringify({ success: false, error: "Missing email or code" }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        if (!resend) {
          console.warn("RESEND_API_KEY not configured, using fallback admin login code flow");
          return new Response(
            JSON.stringify({
              success: true,
              fallback: true,
              code,
              message: "Email service is not configured. Use the code shown in the app.",
            }),
            { headers: { "Content-Type": "application/json" } },
          );
        }

        try {
          await resend.emails.send({
            from: `${fromName} <${fromEmail}>`,
            to: email,
            subject: "Code de vérification — Connexion administration REKOMA / PDIMA",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h1 style="color: #2563eb;">Code de vérification</h1>
                <p>Vous avez demandé à vous connecter à l'interface d'administration de REKOMA / PDIMA.</p>
                <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0; text-align: center;">
                  <p style="font-size: 2rem; font-weight: bold; letter-spacing: 0.25em;">${code}</p>
                </div>
                <p>Ce code est valable 5 minutes.</p>
                <p>Si vous n'avez pas demandé cette connexion, vous pouvez ignorer cet e-mail.</p>
                <p>— L'équipe REKOMA</p>
              </div>
            `,
          });

          return new Response(
            JSON.stringify({ success: true }),
            { headers: { "Content-Type": "application/json" } },
          );
        } catch (error) {
          console.error("Failed to send admin login code email:", error);
          return new Response(
            JSON.stringify({
              success: true,
              fallback: true,
              code,
              message: "Email delivery failed. Use the code shown in the app.",
            }),
            { headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});