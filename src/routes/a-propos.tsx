import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, Leaf, ShieldCheck, Users } from "lucide-react";
import formationImg from "@/assets/formation.jpg";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { objectives, org, values } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const icons = { ShieldCheck, Users, Leaf, HeartHandshake };

export const Route = createFileRoute("/a-propos")({
  component: About,
  head: () => ({
    meta: [
      { title: "À propos de REKOMA — histoire, mission, vision et valeurs" },
      {
        name: "description",
        content:
          "REKOMA, association communautaire fondée en 2025 à Midongy Atsimo : histoire, mission, vision, valeurs et objectifs spécifiques du PDIMA.",
      },
      { property: "og:title", content: "À propos de REKOMA" },
      {
        property: "og:description",
        content: "Histoire, mission, vision et valeurs de l'association REKOMA à Madagascar.",
      },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
});

function About() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "À propos", en: "About" })}
        title={t({
          fr: "Une association née de sa communauté",
          en: "An association born of its community",
        })}
        description={t({
          fr: "REKOMA est une association à but non lucratif régie par l'Ordonnance n° 60-133 du 3 octobre 1960, fondée en 2025 à l'initiative de M. Botomanaga Brillant.",
          en: "REKOMA is a non-profit association governed by Ordinance no. 60-133 of 3 October 1960, founded in 2025 at the initiative of Mr Botomanaga Brillant.",
        })}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t({ fr: "Notre histoire", en: "Our story" })}
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                {t({
                  fr: "Face à un isolement géographique persistant, une économie peu diversifiée et un accès insuffisant aux services essentiels, des habitants de Midongy Atsimo se sont regroupés en 2025 pour structurer une réponse collective.",
                  en: "Faced with persistent geographic isolation, a poorly diversified economy and insufficient access to essential services, residents of Midongy Atsimo came together in 2025 to structure a collective response.",
                })}
              </p>
              <p>
                {t({
                  fr: "L'Assemblée Générale Extraordinaire du 27 juillet 2026, réunie à Nosifeno, a adopté à l'unanimité les statuts révisés, confirmé le Bureau Exécutif et validé la feuille de route du PDIMA.",
                  en: "The Extraordinary General Assembly of 27 July 2026, held in Nosifeno, unanimously adopted the revised statutes, confirmed the Executive Board and validated the PDIMA roadmap.",
                })}
              </p>
              <p>
                {t({
                  fr: "Le projet s'inscrit en cohérence avec le Plan Émergence Madagascar et les Objectifs de Développement Durable 1, 2, 6, 8 et 13.",
                  en: "The project is aligned with the Plan Émergence Madagascar and Sustainable Development Goals 1, 2, 6, 8 and 13.",
                })}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src={formationImg}
              alt={t({
                fr: "Session de formation professionnelle à Midongy Atsimo",
                en: "Vocational training session in Midongy Atsimo",
              })}
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-elegant"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t({ fr: "Nos valeurs", en: "Our values" })}
          title={t({
            fr: "Ce qui guide chacune de nos décisions",
            en: "What guides every decision we make",
          })}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = icons[v.icon as keyof typeof icons];
            return (
              <Reveal key={v.icon} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{t(v.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(v.text)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t({ fr: "Objectifs", en: "Objectives" })}
          title={t({ fr: "Nos sept objectifs spécifiques", en: "Our seven specific objectives" })}
          description={t({
            fr: "Objectif général : contribuer au développement économique et social durable de la commune rurale de Midongy Atsimo.",
            en: "Overall objective: contribute to the sustainable economic and social development of the rural commune of Midongy Atsimo.",
          })}
        />
        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {objectives.map((o, i) => (
            <Reveal key={o.code} delay={(i % 2) * 0.06}>
              <li className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft card-hover">
                <span className="shrink-0 rounded-lg bg-gradient-brand px-2.5 py-1 text-xs font-bold text-primary-foreground">
                  {o.code}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(o.text)}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                k: { fr: "Statut juridique", en: "Legal status" },
                v: { fr: "Association à but non lucratif", en: "Non-profit association" },
              },
              {
                k: { fr: "Fondateur", en: "Founder" },
                v: { fr: "M. Botomanaga Brillant", en: "Mr Botomanaga Brillant" },
              },
              {
                k: { fr: "Durée Phase I", en: "Phase I duration" },
                v: { fr: "36 mois", en: "36 months" },
              },
              {
                k: { fr: "Population cible", en: "Target population" },
                v: { fr: "5 000 à 8 000 habitants", en: "5,000 to 8,000 people" },
              },
            ].map((row) => (
              <div key={row.k.fr} className="bg-card p-6">
                <dt className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  {t(row.k)}
                </dt>
                <dd className="mt-2 text-sm font-semibold">{t(row.v)}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">{t(org.location)}</p>
        </Reveal>
      </Section>
    </>
  );
}
