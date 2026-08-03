import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-midongy.jpg";
import formationImg from "@/assets/formation.jpg";
import eauImg from "@/assets/eau.jpg";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { impactStats, partners } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/impact")({
  component: Impact,
  head: () => ({
    meta: [
      { title: "Impact & galerie — résultats attendus du PDIMA" },
      {
        name: "description",
        content:
          "Bénéficiaires, emplois, accès à l'eau et formation : les indicateurs d'impact du PDIMA à Midongy Atsimo, illustrés par notre galerie terrain.",
      },
      { property: "og:title", content: "Impact & galerie — PDIMA" },
      {
        property: "og:description",
        content: "Indicateurs d'impact, bénéficiaires et images du terrain à Midongy Atsimo.",
      },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
});

const gallery = [
  {
    src: heroImg,
    alt: { fr: "Habitants revenant des champs", en: "Residents returning from the fields" },
  },
  { src: formationImg, alt: { fr: "Session de formation", en: "Training session" } },
  { src: eauImg, alt: { fr: "Point d'eau communautaire", en: "Community water point" } },
];

function Impact() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Impact", en: "Impact" })}
        title={t({
          fr: "Des résultats mesurables, suivis et publiés",
          en: "Measurable results, monitored and published",
        })}
        description={t({
          fr: "Le dispositif de Suivi, Évaluation, Redevabilité et Apprentissage (SERA) documente chaque indicateur, avec évaluation à mi-parcours (M24) et évaluation finale (M36).",
          en: "The Monitoring, Evaluation, Accountability and Learning (MEAL) system documents every indicator, with a mid-term (M24) and final (M36) evaluation.",
        })}
      />

      <Section>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((s, i) => (
            <Reveal key={s.label.fr} delay={(i % 3) * 0.08}>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-soft card-hover">
                <dt className="sr-only">{t(s.label)}</dt>
                <dd>
                  <span className="block text-4xl font-bold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">{t(s.label)}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t({ fr: "Bénéficiaires", en: "Beneficiaries" })}
          title={t({ fr: "Qui bénéficie du projet", en: "Who benefits from the project" })}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: { fr: "Jeunes de 15 à 35 ans", en: "Young people aged 15-35" },
              text: {
                fr: "Formations qualifiantes, emplois directs et accompagnement à l'entrepreneuriat.",
                en: "Qualifying training, direct jobs and entrepreneurship support.",
              },
            },
            {
              title: { fr: "Femmes", en: "Women" },
              text: {
                fr: "Quota minimum de 50 % des bénéficiaires directs, bourses d'accès et participation à la gouvernance.",
                en: "Minimum 50% of direct beneficiaries, access grants and participation in governance.",
              },
            },
            {
              title: { fr: "Ménages vulnérables", en: "Vulnerable households" },
              text: {
                fr: "Eau potable, produits de première nécessité disponibles et prix stabilisés.",
                en: "Safe water, availability of essential goods and stabilised prices.",
              },
            },
          ].map((b, i) => (
            <Reveal key={b.title.fr} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                <h3 className="text-lg font-bold">{t(b.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(b.text)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t({ fr: "Galerie", en: "Gallery" })}
          title={t({ fr: "Le terrain en images", en: "The field in pictures" })}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img, i) => (
            <Reveal key={img.alt.fr} delay={(i % 3) * 0.08}>
              <figure className="group overflow-hidden rounded-2xl border border-border shadow-soft">
                <img
                  src={img.src}
                  alt={t(img.alt)}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="bg-card px-5 py-4 text-sm text-muted-foreground">
                  {t(img.alt)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t({ fr: "Partenaires", en: "Partners" })}
          title={t({ fr: "Ils accompagnent le projet", en: "They support the project" })}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.fr} delay={(i % 3) * 0.06}>
              <div className="rounded-xl border border-border bg-card px-6 py-8 text-center text-sm font-semibold text-muted-foreground shadow-soft card-hover">
                {t(p)}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
