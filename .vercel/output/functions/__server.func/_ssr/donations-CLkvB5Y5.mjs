import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as Stripe } from "../_libs/stripe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donations-CLkvB5Y5.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var createDonationCheckout_createServerFn_handler = createServerRpc({
	id: "dbbc0987ef5f5582f2b7bea65bca53e81a5841f03937ce12ab5bb89ad29f3784",
	name: "createDonationCheckout",
	filename: "src/lib/actions/donations.ts"
}, (opts) => createDonationCheckout.__executeServer(opts));
var createDonationCheckout = createServerFn({ method: "POST" }).handler(createDonationCheckout_createServerFn_handler, async (ctx) => {
	const input = ctx.data;
	const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
	if (!stripeSecretKey) throw new Error("STRIPE_SECRET_KEY is not configured");
	const stripe = new Stripe(stripeSecretKey, { apiVersion: "2026-06-24.dahlia" });
	if (input.method === "mvola") return {
		method: "mvola",
		message: "Veuillez envoyer votre don via MVola au numéro +261 34 533 24 29, puis confirmer votre paiement ci-dessous.",
		phone: "+261345332429"
	};
	return {
		method: "stripe",
		url: (await stripe.checkout.sessions.create({
			mode: "payment",
			payment_method_types: ["card"],
			line_items: [{
				price_data: {
					currency: "eur",
					product_data: {
						name: "Don à REKOMA / PDIMA",
						description: "Soutenez le développement de Midongy Atsimo"
					},
					unit_amount: Math.round(input.amount * 100)
				},
				quantity: 1
			}],
			customer_email: input.donorEmail,
			success_url: `${process.env.VITE_APP_URL ?? "http://localhost:3000"}/don?success=1`,
			cancel_url: `${process.env.VITE_APP_URL ?? "http://localhost:3000"}/don?canceled=1`,
			metadata: {
				donorName: input.donorName,
				donorEmail: input.donorEmail
			}
		})).url
	};
});
var confirmMvolaDonation_createServerFn_handler = createServerRpc({
	id: "c57e3f62f125a817e8bf4a3af62a8ede37427f3c3061072380e041835d6df3c0",
	name: "confirmMvolaDonation",
	filename: "src/lib/actions/donations.ts"
}, (opts) => confirmMvolaDonation.__executeServer(opts));
var confirmMvolaDonation = createServerFn({ method: "POST" }).handler(confirmMvolaDonation_createServerFn_handler, async (ctx) => {
	const input = ctx.data;
	return {
		success: true,
		donation: {
			id: crypto.randomUUID(),
			...input,
			status: "pending",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		}
	};
});
//#endregion
export { confirmMvolaDonation_createServerFn_handler, createDonationCheckout_createServerFn_handler };
