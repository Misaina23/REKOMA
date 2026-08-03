import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const sendDonationConfirmation = createServerFn({ method: "POST" }).handler(async (ctx) => {
  const input = ctx.data as unknown as {
    donorName: string;
    donorEmail: string;
    amount: number;
    method: "stripe" | "mvola";
    transactionId?: string;
  };

  if (!resend) {
    console.warn("RESEND_API_KEY not configured, skipping email send");
    return { success: true, skipped: true };
  }

  try {
    await resend.emails.send({
      from: "REKOMA <donations@rekoma-pdima.org>",
      to: input.donorEmail,
      subject: "Confirmation de votre don — REKOMA / PDIMA",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb;">Merci pour votre don, ${input.donorName} !</h1>
          <p>Votre soutien contribue directement au développement de la commune de Midongy Atsimo.</p>
          <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p><strong>Montant :</strong> ${input.amount.toFixed(2)} €</p>
            <p><strong>Méthode :</strong> ${input.method === "stripe" ? "Carte bancaire (Stripe)" : "MVola"}</p>
            ${input.transactionId ? `<p><strong>Référence :</strong> ${input.transactionId}</p>` : ""}
          </div>
          <p>Vous recevrez un reçu fiscal dans les prochains jours.</p>
          <p>— L'équipe REKOMA</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send donation confirmation email:", error);
    return { success: false, error: "Failed to send email" };
  }
});
