import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY ?? process.env.VITE_RESEND_API_KEY;
const fromEmail =
  process.env.RESEND_FROM_EMAIL ??
  process.env.VITE_RESEND_FROM_EMAIL ??
  "donations@rekoma-pdima.org";
const fromName = process.env.RESEND_FROM_NAME ?? process.env.VITE_RESEND_FROM_NAME ?? "REKOMA";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export type EmailResult = { success: boolean; fallback?: boolean; message?: string };

export function isEmailConfigured(): boolean {
  return Boolean(resend);
}

export async function sendEmail(opts: {
  to: string | string[];
  subject: string;
  html: string;
}): Promise<EmailResult> {
  if (!resend) {
    console.warn("RESEND_API_KEY not configured, skipping email send");
    return { success: true, fallback: true, message: "Email service is not configured." };
  }

  try {
    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, fallback: true, message: "Email delivery failed." };
  }
}

export { fromEmail, fromName };
