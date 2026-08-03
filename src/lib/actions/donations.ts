import { createServerFn } from "@tanstack/react-start";
import Stripe from "stripe";

export const createDonationCheckout = createServerFn({ method: "POST" }).handler(async (ctx) => {
  const input = ctx.data as unknown as {
    amount: number;
    donorName: string;
    donorEmail: string;
    method: "stripe" | "mvola";
  };

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2026-06-24.dahlia",
  });

  if (input.method === "mvola") {
    return {
      method: "mvola",
      message:
        "Veuillez envoyer votre don via MVola au numéro +261 34 533 24 29, puis confirmer votre paiement ci-dessous.",
      phone: "+261345332429",
    };
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Don à REKOMA / PDIMA",
            description: "Soutenez le développement de Midongy Atsimo",
          },
          unit_amount: Math.round(input.amount * 100),
        },
        quantity: 1,
      },
    ],
    customer_email: input.donorEmail,
    success_url: `${process.env.VITE_APP_URL ?? "http://localhost:3000"}/don?success=1`,
    cancel_url: `${process.env.VITE_APP_URL ?? "http://localhost:3000"}/don?canceled=1`,
    metadata: {
      donorName: input.donorName,
      donorEmail: input.donorEmail,
    },
  });

  return { method: "stripe", url: session.url };
});

export const confirmMvolaDonation = createServerFn({ method: "POST" }).handler(async (ctx) => {
  const input = ctx.data as unknown as {
    donorName: string;
    donorEmail: string;
    amount: number;
    phoneNumber: string;
    transactionId?: string;
  };

  const donation = {
    id: crypto.randomUUID(),
    ...input,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  return { success: true, donation };
});
