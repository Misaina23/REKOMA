import { createFileRoute } from "@tanstack/react-router";
import Stripe from "stripe";
import { Resend } from "resend";

export const Route = createFileRoute("/api/stripe/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
        if (!stripeSecretKey) {
          return new Response("STRIPE_SECRET_KEY is not configured", { status: 500 });
        }

        const stripe = new Stripe(stripeSecretKey, {
          apiVersion: "2026-06-24.dahlia",
        });

        const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

        const body = await request.text();
        const signature = request.headers.get("stripe-signature");

        if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
          return new Response("Missing signature or webhook secret", { status: 400 });
        }

        let event: Stripe.Event;

        try {
          event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET,
          );
        } catch (error) {
          console.error("Webhook signature verification failed:", error);
          return new Response("Webhook signature verification failed", { status: 400 });
        }

        if (event.type === "checkout.session.completed") {
          const session = event.data.object as Stripe.Checkout.Session;
          const donorName = session.metadata?.donorName ?? "Donateur";
          const donorEmail = session.customer_email ?? session.metadata?.donorEmail ?? "";

          if (donorEmail && resend) {
            const amount = (session.amount_total ?? 0) / 100;
            await resend.emails.send({
              from: "REKOMA <donations@rekoma-pdima.org>",
              to: donorEmail,
              subject: "Confirmation de votre don — REKOMA / PDIMA",
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h1 style="color: #2563eb;">Merci pour votre don, ${donorName} !</h1>
                  <p>Votre soutien contribue directement au développement de la commune de Midongy Atsimo.</p>
                  <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
                    <p><strong>Montant :</strong> ${amount.toFixed(2)} €</p>
                    <p><strong>Méthode :</strong> Carte bancaire (Stripe)</p>
                    <p><strong>Référence :</strong> ${session.id}</p>
                  </div>
                  <p>Vous recevrez un reçu fiscal dans les prochains jours.</p>
                  <p>— L'équipe REKOMA</p>
                </div>
              `,
            });
          }
        }

        return new Response(JSON.stringify({ received: true }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
