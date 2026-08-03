import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { org } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/mentions-legales")({
  component: Legal,
  head: () => ({
    meta: [
      { title: "Mentions légales — Association REKOMA" },
      {
        name: "description",
        content:
          "Mentions légales du site de l'association REKOMA : éditeur, statut juridique, hébergement, propriété intellectuelle et contact.",
      },
      { property: "og:title", content: "Mentions légales — REKOMA" },
      {
        property: "og:description",
        content: "Informations légales relatives au site de l'association REKOMA.",
      },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
});

function Legal() {
  const { t } = useI18n();

  const blocks = [
    {
      h: { fr: "Éditeur du site", en: "Site publisher" },
      p: {
        fr: `Association ${org.name} — ${t(org.full)}. Association à but non lucratif régie par l'Ordonnance n° 60-133 du 3 octobre 1960. Président exécutif : M. Botomanaga Brillant.`,
        en: `${org.name} Association — a non-profit association governed by Ordinance no. 60-133 of 3 October 1960. Executive President: Mr Botomanaga Brillant.`,
      },
    },
    { h: { fr: "Siège social", en: "Registered office" }, p: org.location },
    {
      h: { fr: "Contact", en: "Contact" },
      p: {
        fr: `Courriel : ${org.email} — Téléphone : ${org.phone}`,
        en: `Email: ${org.email} — Phone: ${org.phone}`,
      },
    },
    {
      h: { fr: "Propriété intellectuelle", en: "Intellectual property" },
      p: {
        fr: "L'ensemble des contenus (textes, images, logos, documents) est la propriété de l'association REKOMA, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.",
        en: "All content (text, images, logos, documents) is the property of the REKOMA association unless stated otherwise. Reproduction without written permission is prohibited.",
      },
    },
    {
      h: { fr: "Conception & réalisation", en: "Design & development" },
      p: {
        fr: "Site conçu et développé par DevMisaina.",
        en: "Website designed and developed by DevMisaina.",
      },
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Légal", en: "Legal" })}
        title={t({ fr: "Mentions légales", en: "Legal notice" })}
        description={t({
          fr: "Informations relatives à l'éditeur du site et aux conditions d'utilisation.",
          en: "Information about the site publisher and terms of use.",
        })}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {blocks.map((b, i) => (
            <Reveal key={b.h.fr} delay={i * 0.05}>
              <article>
                <h2 className="text-xl font-bold">{t(b.h)}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t(b.p)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
