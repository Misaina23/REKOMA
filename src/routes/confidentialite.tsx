import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { org } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/confidentialite")({
  component: Privacy,
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — REKOMA" },
      {
        name: "description",
        content:
          "Comment l'association REKOMA collecte, utilise et protège les données personnelles transmises via son site et son formulaire de contact.",
      },
      { property: "og:title", content: "Politique de confidentialité — REKOMA" },
      {
        property: "og:description",
        content: "Traitement et protection des données personnelles sur le site REKOMA.",
      },
      { property: "og:url", content: "/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/confidentialite" }],
  }),
});

function Privacy() {
  const { t } = useI18n();

  const blocks = [
    {
      h: { fr: "Données collectées", en: "Data collected" },
      p: {
        fr: "Le site collecte uniquement les données que vous transmettez volontairement via le formulaire de contact ou l'inscription à la newsletter : nom, adresse e-mail et contenu du message.",
        en: "The site only collects data you voluntarily submit through the contact form or newsletter subscription: name, email address and message content.",
      },
    },
    {
      h: { fr: "Finalité du traitement", en: "Purpose of processing" },
      p: {
        fr: "Ces données servent exclusivement à répondre à votre demande et, le cas échéant, à vous envoyer nos actualités. Elles ne sont ni vendues ni cédées à des tiers.",
        en: "This data is used solely to answer your request and, where applicable, to send you our news. It is never sold or transferred to third parties.",
      },
    },
    {
      h: { fr: "Durée de conservation", en: "Retention period" },
      p: {
        fr: "Les données sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées.",
        en: "Data is kept for as long as needed to handle your request, then archived or deleted.",
      },
    },
    {
      h: { fr: "Préférences locales", en: "Local preferences" },
      p: {
        fr: "Votre choix de langue et de thème (clair/sombre) est enregistré dans le stockage local de votre navigateur. Aucun cookie publicitaire ni traceur tiers n'est utilisé.",
        en: "Your language and theme (light/dark) preference is stored in your browser's local storage. No advertising cookies or third-party trackers are used.",
      },
    },
    {
      h: { fr: "Vos droits", en: "Your rights" },
      p: {
        fr: `Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à ${org.email}.`,
        en: `You may request access, correction or deletion of your data by writing to ${org.email}.`,
      },
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Confidentialité", en: "Privacy" })}
        title={t({ fr: "Politique de confidentialité", en: "Privacy policy" })}
        description={t({
          fr: "Nous traitons vos données avec la même exigence de transparence que nos comptes.",
          en: "We handle your data with the same transparency standard as our accounts.",
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
