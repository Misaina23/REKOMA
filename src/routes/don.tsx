import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Building, HandCoins, Handshake, Heart, Loader2, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { org } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { showError, showSuccess } from "@/lib/alerts";
import { createDonationCheckout, confirmMvolaDonation } from "@/lib/actions/donations";

export const Route = createFileRoute("/don")({
  component: Donate,
  head: () => ({
    meta: [
      { title: "Faire un don ou devenir partenaire du PDIMA" },
      {
        name: "description",
        content:
          "Soutenez le PDIMA : don financier, partenariat technique, mécénat d'entreprise ou adhésion à l'association REKOMA à Midongy Atsimo.",
      },
      { property: "og:title", content: "Faire un don ou devenir partenaire — REKOMA" },
      {
        property: "og:description",
        content: "Quatre façons de soutenir le développement de Midongy Atsimo.",
      },
      { property: "og:url", content: "/don" },
    ],
    links: [{ rel: "canonical", href: "/don" }],
  }),
});

type PaymentMethod = "stripe" | "mvola";

function Donate() {
  const { t } = useI18n();
  const [method, setMethod] = useState<PaymentMethod>("stripe");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    amount: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const update =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const amount = parseFloat(form.amount);
      if (isNaN(amount) || amount <= 0) {
        await showError(t({ fr: "Montant invalide", en: "Invalid amount" }));
        setLoading(false);
        return;
      }

      if (method === "stripe") {
        const result = await createDonationCheckout({
          data: {
            amount,
            donorName: form.name,
            donorEmail: form.email,
            method: "stripe",
          },
        } as unknown as Parameters<typeof createDonationCheckout>[0]);

        if ("url" in result && result.url) {
          window.location.href = result.url;
          return;
        }
      }

      if (method === "mvola") {
        const result = await confirmMvolaDonation({
          data: {
            donorName: form.name,
            donorEmail: form.email,
            amount,
            phoneNumber: form.phone,
          },
        } as unknown as Parameters<typeof confirmMvolaDonation>[0]);

        if (result.success) {
          await showSuccess(
            t({
              fr: "Merci ! Votre don MVola a été enregistré. Veuillez confirmer votre transaction.",
              en: "Thank you! Your MVola donation has been recorded. Please confirm your transaction.",
            }),
          );
          setForm({ amount: "", name: "", email: "", phone: "", message: "" });
        }
      }
    } catch (error) {
      console.error(error);
      await showError(t({ fr: "Une erreur est survenue", en: "An error occurred" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Soutenir", en: "Support" })}
        title={t({
          fr: "Votre soutien transforme une commune entière",
          en: "Your support transforms an entire commune",
        })}
        description={t({
          fr: "Les fonds mobilisés financent les investissements de départ ; les activités génératrices de revenus prennent ensuite le relais pour assurer la pérennité.",
          en: "Mobilised funds finance the initial investments; income-generating activities then take over to ensure long-term sustainability.",
        })}
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: HandCoins,
              title: { fr: "Don financier", en: "Financial gift" },
              text: {
                fr: "Chaque contribution finance directement l'un des sept axes du PDIMA, avec un reporting dédié.",
                en: "Every contribution directly funds one of PDIMA's seven pillars, with dedicated reporting.",
              },
            },
            {
              icon: Handshake,
              title: { fr: "Partenariat technique", en: "Technical partnership" },
              text: {
                fr: "Expertise agricole, WASH, formation ou suivi-évaluation : votre savoir-faire accélère le projet.",
                en: "Agricultural, WASH, training or M&E expertise: your know-how accelerates the project.",
              },
            },
            {
              icon: Building,
              title: { fr: "Mécénat d'entreprise", en: "Corporate sponsorship" },
              text: {
                fr: "Financez un axe complet et associez votre marque à un impact social mesurable.",
                en: "Fund a complete pillar and associate your brand with measurable social impact.",
              },
            },
            {
              icon: Users,
              title: { fr: "Nous rejoindre", en: "Join us" },
              text: {
                fr: "L'adhésion est ouverte à toute personne majeure, après validation par le Bureau Exécutif.",
                en: "Membership is open to any adult, upon validation by the Executive Board.",
              },
            },
          ].map((w, i) => (
            <Reveal key={w.title.fr} delay={(i % 2) * 0.08}>
              <article className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft card-hover">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <w.icon className="size-5" aria-hidden />
                </span>
                <h2 className="mt-5 text-lg font-bold">{t(w.title)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(w.text)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t({ fr: "Passer à l'action", en: "Take action" })}
          title={t({ fr: "Faire un don en ligne", en: "Donate online" })}
          description={t({
            fr: "Choisissez votre méthode de paiement sécurisée et recevez une confirmation par e-mail.",
            en: "Choose your secure payment method and receive an email confirmation.",
          })}
        />

        <Reveal className="mt-10 max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 shadow-soft space-y-6"
          >
            <div className="space-y-2">
              <Label htmlFor="amount">{t({ fr: "Montant (€)", en: "Amount (€)" })}</Label>
              <Input
                id="amount"
                type="number"
                min="1"
                step="0.01"
                placeholder="25"
                value={form.amount}
                onChange={update("amount")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">{t({ fr: "Nom complet", en: "Full name" })}</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jean Dupont"
                value={form.name}
                onChange={update("name")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t({ fr: "Adresse e-mail", en: "Email address" })}</Label>
              <Input
                id="email"
                type="email"
                placeholder="jean@exemple.com"
                value={form.email}
                onChange={update("email")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>{t({ fr: "Méthode de paiement", en: "Payment method" })}</Label>
              <RadioGroup value={method} onValueChange={(v) => setMethod(v as PaymentMethod)}>
                <div className="flex items-center gap-3 rounded-lg border border-border p-4">
                  <RadioGroupItem value="stripe" id="stripe" />
                  <Label htmlFor="stripe" className="flex-1 cursor-pointer">
                    <span className="font-semibold">Stripe</span>
                    <span className="block text-sm text-muted-foreground">
                      {t({ fr: "Carte bancaire (Visa, Mastercard)", en: "Credit / debit card" })}
                    </span>
                  </Label>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-border p-4">
                  <RadioGroupItem value="mvola" id="mvola" />
                  <Label htmlFor="mvola" className="flex-1 cursor-pointer">
                    <span className="font-semibold">MVola</span>
                    <span className="block text-sm text-muted-foreground">
                      {t({ fr: "Mobile Money Madagascar", en: "Madagascar Mobile Money" })}
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {method === "mvola" && (
              <div className="rounded-lg border border-border bg-muted/50 p-4 space-y-2">
                <p className="text-sm font-semibold">MVola</p>
                <p className="text-sm text-muted-foreground">
                  {t({
                    fr: "Envoyez le montant de votre don au numéro MVola suivant :",
                    en: "Send your donation to the following MVola number:",
                  })}
                </p>
                <p className="text-lg font-mono font-bold">+261 34 533 24 29</p>
                <p className="text-sm text-muted-foreground">
                  {t({
                    fr: "Puis remplissez le formulaire ci-dessous pour confirmer votre paiement.",
                    en: "Then fill out the form below to confirm your payment.",
                  })}
                </p>
                <div className="space-y-2 pt-2">
                  <Label htmlFor="phone">
                    {t({ fr: "Numéro de téléphone MVola", en: "MVola phone number" })}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+261 34 000 00 00"
                    value={form.phone}
                    onChange={update("phone")}
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">
                {t({ fr: "Message (optionnel)", en: "Message (optional)" })}
              </Label>
              <Textarea
                id="message"
                placeholder={t({
                  fr: "Votre message ou dédicace...",
                  en: "Your message or dedication...",
                })}
                value={form.message}
                onChange={update("message")}
              />
            </div>

            <Button type="submit" size="xl" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
              {method === "stripe"
                ? t({ fr: "Payer avec Stripe", en: "Pay with Stripe" })
                : t({ fr: "Confirmer le don MVola", en: "Confirm MVola donation" })}
            </Button>
          </form>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">{t({ fr: "Contacter REKOMA", en: "Contact REKOMA" })}</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href={`mailto:${org.email}`}>
              <Mail className="mr-2 size-4" />
              {org.email}
            </a>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
