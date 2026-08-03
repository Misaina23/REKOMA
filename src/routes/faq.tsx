import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { faq } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  component: Faq,
  head: () => ({
    meta: [
      { title: "FAQ — questions fréquentes sur REKOMA et le PDIMA" },
      {
        name: "description",
        content:
          "Statut juridique, utilisation des fonds, alignement ODD, adhésion et partenariats : toutes les réponses sur l'association REKOMA et le projet PDIMA.",
      },
      { property: "og:title", content: "FAQ — REKOMA / PDIMA" },
      {
        property: "og:description",
        content: "Les réponses aux questions les plus fréquentes sur le projet.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q.fr,
            acceptedAnswer: { "@type": "Answer", text: f.a.fr },
          })),
        }),
      },
    ],
  }),
});

function Faq() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");

  const filtered = faq.filter((f) =>
    `${t(f.q)} ${t(f.a)}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={t({ fr: "Questions fréquentes", en: "Frequently asked questions" })}
        description={t({
          fr: "Une question sans réponse ici ? Écrivez-nous, nous complétons cette page en continu.",
          en: "A question not answered here? Write to us — we keep this page growing.",
        })}
      />
      <Section>
        <Reveal className="mx-auto max-w-3xl">
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <label className="sr-only" htmlFor="faq-search">
              {t({ fr: "Rechercher dans la FAQ", en: "Search the FAQ" })}
            </label>
            <Input
              id="faq-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t({ fr: "Rechercher une question...", en: "Search a question..." })}
              className="pl-9"
            />
          </div>

          <Accordion type="single" collapsible className="mt-8">
            {filtered.map((f, i) => (
              <AccordionItem key={f.q.fr} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {t(f.q)}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {t(f.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filtered.length === 0 ? (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              {t({
                fr: "Aucune question ne correspond à votre recherche.",
                en: "No question matches your search.",
              })}
            </p>
          ) : null}
        </Reveal>
      </Section>
    </>
  );
}
