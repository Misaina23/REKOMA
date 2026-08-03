import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  Droplets,
  GraduationCap,
  Lightbulb,
  Sprout,
  Store,
  Truck,
} from "lucide-react";
import eauImg from "@/assets/eau.jpg";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { axes, phases, risks } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

const icons = { Building2, Truck, Store, Sprout, GraduationCap, Droplets, Lightbulb };

export const Route = createFileRoute("/pdima")({
  component: Pdima,
  head: () => ({
    meta: [
      { title: "Projet PDIMA — 7 axes d'intervention à Midongy Atsimo" },
      {
        name: "description",
        content:
          "Découvrez les sept axes du Projet de Développement Intégré de Midongy Atsimo : activités, résultats attendus, chronogramme sur 36 mois et gestion des risques.",
      },
      { property: "og:title", content: "Projet PDIMA — 7 axes d'intervention" },
      {
        property: "og:description",
        content:
          "Activités, résultats attendus, phases de mise en œuvre et analyse des risques du PDIMA.",
      },
      { property: "og:url", content: "/pdima" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/pdima" }],
  }),
});

function Pdima() {
  const { t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Projet", en: "Project" })}
        title={t({
          fr: "PDIMA — Projet de Développement Intégré de Midongy Atsimo",
          en: "PDIMA — Integrated Development Project of Midongy Atsimo",
        })}
        description={t({
          fr: "Une réponse structurée et multisectorielle aux déficits chroniques de développement de la commune, articulée autour de sept axes complémentaires et synergiques.",
          en: "A structured, multisectoral response to the commune's chronic development gaps, built around seven complementary and synergistic pillars.",
        })}
      />

      <Section>
        <div className="space-y-8">
          {axes.map((axis, i) => {
            const Icon = icons[axis.icon as keyof typeof icons];
            return (
              <Reveal key={axis.icon} delay={0.04}>
                <article className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft card-hover lg:grid-cols-[auto_1fr_1fr] lg:items-start">
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground">
                      {t({ fr: "AXE", en: "PILLAR" })} 0{i + 1}
                    </span>
                    <h2 className="mt-2 text-xl font-bold text-balance">{t(axis.title)}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(axis.description)}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-secondary p-6">
                    <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      {t({ fr: "Résultats attendus", en: "Expected results" })}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {axis.results.map((r) => (
                        <li key={r.fr} className="flex gap-2.5 text-sm text-secondary-foreground">
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          <span>{t(r)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t({ fr: "Mise en œuvre", en: "Implementation" })}
          title={t({ fr: "Un chronogramme sur 36 mois", en: "A 36-month timeline" })}
        />
        <ol className="relative mt-14 space-y-10 border-l border-border pl-8">
          {phases.map((p, i) => (
            <Reveal key={p.phase.fr} delay={i * 0.1}>
              <li>
                <span
                  className="absolute -left-2.5 grid size-5 place-items-center rounded-full bg-gradient-brand"
                  aria-hidden
                />
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {t(p.period)}
                </span>
                <h3 className="mt-2 text-xl font-bold">{t(p.phase)}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {p.items.map((item) => (
                    <li key={item.fr} className="flex gap-2.5">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={eauImg}
              alt={t({
                fr: "Point d'eau potable alimenté par une pompe solaire dans un village",
                en: "Safe water point powered by a solar pump in a village",
              })}
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-elegant"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t({ fr: "Analyse des risques", en: "Risk analysis" })}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t({
                fr: "Chaque risque identifié est associé à une mesure d'atténuation concrète et suivie dans le système SERA.",
                en: "Every identified risk is paired with a concrete mitigation measure tracked in the MEAL system.",
              })}
            </p>
            <ul className="mt-6 space-y-4">
              {risks.map((r) => (
                <li
                  key={r.risk.fr}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold">{t(r.risk)}</h3>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                      {t(r.level)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t(r.measure)}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
