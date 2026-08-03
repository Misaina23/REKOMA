import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { showSuccess } from "@/lib/alerts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { org } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { getCsrfToken } from "@/lib/csrf";
import { getAppBaseUrl } from "@/lib/app-url";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — REKOMA, Midongy Atsimo Madagascar" },
      {
        name: "description",
        content:
          "Contactez l'association REKOMA : partenariat, financement, adhésion ou demande d'information sur le projet PDIMA à Midongy Atsimo.",
      },
      { property: "og:title", content: "Contact — REKOMA" },
      {
        property: "og:description",
        content: "Écrivez-nous pour un partenariat, un financement ou une adhésion.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const schema = z.object({
  name: z.string().min(2, { message: "min" }).max(80),
  email: z.string().email({ message: "email" }),
  subject: z.string().min(1, { message: "min" }),
  message: z.string().min(20, { message: "min20" }).max(2000),
});

type FormValues = z.infer<typeof schema>;

function Contact() {
  const { t } = useI18n();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const messages: Record<string, { fr: string; en: string }> = {
    min: { fr: "Ce champ est requis.", en: "This field is required." },
    email: { fr: "Adresse e-mail invalide.", en: "Invalid email address." },
    min20: {
      fr: "Merci de détailler votre demande (20 caractères min.).",
      en: "Please detail your request (20 characters min.).",
    },
  };
  const err = (key?: string) => (key && messages[key] ? t(messages[key]) : undefined);

  const onSubmit = async (values: FormValues) => {
    try {
      const base = getAppBaseUrl();
      const res = await fetch(`${base}/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": getCsrfToken(),
        },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        throw new Error(data?.error ?? "Failed to send message");
      }
    } catch (error) {
      const storageKey = "rekoma-admin-messages";
      const existing =
        typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null;
      const messages = existing ? JSON.parse(existing) : [];
      const nextMessages = [
        {
          ...values,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          read: false,
        },
        ...messages,
      ];
      if (typeof window !== "undefined") {
        window.localStorage.setItem(storageKey, JSON.stringify(nextMessages));
      }

      await showSuccess(
        t({ fr: "Message enregistré localement", en: "Message saved locally" }),
        t({
          fr: "Le message a été conservé localement car le serveur n’a pas pu le traiter. Réessayez plus tard.",
          en: "The message was saved locally because the server could not process it. Please try again later.",
        }),
      );
      form.reset();
      return;
    }

    await showSuccess(
      t({ fr: "Message envoyé", en: "Message sent" }),
      t({
        fr: "Votre demande a bien été enregistrée et sera traitée rapidement.",
        en: "Your request has been recorded and will be processed shortly.",
      }),
    );
    form.reset();
  };

  const subjects = [
    { value: "partenariat", label: { fr: "Partenariat", en: "Partnership" } },
    { value: "financement", label: { fr: "Financement / bailleur", en: "Funding / donor" } },
    { value: "adhesion", label: { fr: "Adhésion / bénévolat", en: "Membership / volunteering" } },
    { value: "presse", label: { fr: "Presse & information", en: "Press & information" } },
  ];

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Contact", en: "Contact" })}
        title={t({ fr: "Parlons de votre engagement", en: "Let's talk about your involvement" })}
        description={t({
          fr: "Bailleurs, ONG, autorités, investisseurs ou futurs membres : nous répondons à chaque demande sous 5 jours ouvrés.",
          en: "Donors, NGOs, authorities, investors or future members: we answer every request within 5 working days.",
        })}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 rounded-3xl border border-border bg-card p-8 shadow-soft"
                noValidate
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>{t({ fr: "Nom complet", en: "Full name" })}</FormLabel>
                      <FormControl>
                        <Input {...field} autoComplete="name" />
                      </FormControl>
                      <FormMessage>{err(fieldState.error?.message)}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>{t({ fr: "Adresse e-mail", en: "Email address" })}</FormLabel>
                      <FormControl>
                        <Input type="email" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage>{err(fieldState.error?.message)}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>{t({ fr: "Objet", en: "Subject" })}</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t({ fr: "Choisissez un objet", en: "Choose a subject" })}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {subjects.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {t(s.label)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage>{err(fieldState.error?.message)}</FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel>{t({ fr: "Message", en: "Message" })}</FormLabel>
                      <FormControl>
                        <Textarea rows={6} {...field} />
                      </FormControl>
                      <FormMessage>{err(fieldState.error?.message)}</FormMessage>
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  {t({ fr: "Envoyer le message", en: "Send message" })}
                </Button>
              </form>
            </Form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-6">
              <ul className="space-y-4 rounded-2xl border border-border bg-card p-7 shadow-soft">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm text-muted-foreground">{t(org.location)}</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground"
                    href={`mailto:${org.email}`}
                  >
                    {org.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm text-muted-foreground">{org.phone}</span>
                </li>
              </ul>
              <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
                <iframe
                  title={t({ fr: "Carte de Midongy Atsimo", en: "Map of Midongy Atsimo" })}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=46.7%2C-23.85%2C47.35%2C-23.35&layer=mapnik&marker=-23.5833%2C47.0083"
                  className="h-80 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
