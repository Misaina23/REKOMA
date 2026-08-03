import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Droplets,
  GraduationCap,
  Heart,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sprout,
  Store,
  Target,
  Truck,
  Eye,
} from "lucide-react";
import heroImage from "@/assets/hero-midongy.jpg";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { axes, org, partners, stats } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { getAppBaseUrl } from "@/lib/app-url";

const icons = { Building2, Truck, Store, Sprout, GraduationCap, Droplets, Lightbulb };

export const Route = createFileRoute("/")({
  loader: async () => {
    const base = getAppBaseUrl();
    const res = await fetch(`${base}/api/cms/news`);
    if (!res.ok) return [];
    return res.json();
  },
  component: Home,
  head: () => ({
    meta: [
      { title: "REKOMA — PDIMA, développement intégré à Midongy Atsimo" },
      {
        name: "description",
        content:
          "L'association REKOMA porte le PDIMA : eau potable, agriculture, formation, transport et entrepreneuriat inclusif à Midongy Atsimo, Madagascar.",
      },
      { property: "og:title", content: "REKOMA — PDIMA, développement intégré à Midongy Atsimo" },
      {
        property: "og:description",
        content:
          "Sept axes d'intervention pour 8 000 habitants : infrastructures, mobilité, commerce, agriculture, formation, eau potable et entrepreneuriat.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const { t, lang } = useI18n();
  const news = Route.useLoaderData() as Array<{
    id: string;
    date: string;
    title: Record<string, string>;
    excerpt: Record<string, string>;
    tag: Record<string, string>;
  }>;

  return (
    <>
      <section className="relative isolate min-h-[92svh] overflow-hidden">
        <img
          src={heroImage}
          alt={t({
            fr: "Habitants de Midongy Atsimo revenant des champs au coucher du soleil",
            en: "Residents of Midongy Atsimo returning from the fields at sunset",
          })}
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.12_0.03_255/0.92)_10%,oklch(0.12_0.03_255/0.65)_50%,oklch(0.12_0.03_255/0.35)_100%)]" />
        <div className="relative mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-center px-4 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-md">
              <MapPin className="size-3.5" aria-hidden />
              Midongy Atsimo · Atsimo-Atsinanana · Madagascar
            </span>
            <h1 className="mt-6 text-center text-4xl leading-[1.05] font-bold text-balance text-white sm:text-6xl lg:text-7xl">
              {t({
                fr: "Le développement se construit avec la communauté, pas à sa place.",
                en: "Development is built with the community, not for it.",
              })}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {t({
                fr: "REKOMA porte le PDIMA, un programme intégré de 36 mois autour de sept axes : infrastructures, mobilité rurale, commerce de proximité, agriculture, formation, eau potable et entrepreneuriat inclusif.",
                en: "REKOMA leads PDIMA, a 36-month integrated programme across seven pillars: infrastructure, rural mobility, local retail, agriculture, training, safe water and inclusive entrepreneurship.",
              })}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/pdima">
                  {t({ fr: "Découvrir le projet", en: "Explore the project" })}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="xl" variant="glass">
                <Link to="/don">
                  <Heart />
                  {t({ fr: "Faire un don", en: "Donate" })}
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md lg:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={t(s.label)} className="bg-white/5 p-6">
                <dt className="sr-only">{t(s.label)}</dt>
                <dd>
                  <span className="block text-3xl font-bold text-white sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="mt-1 block text-sm text-white/70">{t(s.label)}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: { fr: "Notre mission", en: "Our mission" },
              text: {
                fr: "Créer des activités génératrices de revenus, améliorer l'accès aux services essentiels et renforcer les compétences locales de la commune rurale de Midongy Atsimo.",
                en: "Create income-generating activities, improve access to essential services and strengthen local skills in the rural commune of Midongy Atsimo.",
              },
            },
            {
              icon: Eye,
              title: { fr: "Notre vision", en: "Our vision" },
              text: {
                fr: "Une commune désenclavée, autonome économiquement, où les jeunes et les femmes trouvent localement un emploi digne et durable.",
                en: "A connected, economically autonomous commune where young people and women find dignified, lasting local employment.",
              },
            },
            {
              icon: ShieldCheck,
              title: { fr: "Notre engagement", en: "Our commitment" },
              text: {
                fr: "Une gouvernance transparente, un suivi-évaluation rigoureux (SERA) et une redevabilité publique envers les bailleurs et la communauté.",
                en: "Transparent governance, rigorous monitoring and evaluation (MEAL) and public accountability to donors and the community.",
              },
            },
          ].map((card, i) => (
            <Reveal key={card.title.fr} delay={i * 0.1}>
              <article className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft card-hover">
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <card.icon className="size-6" aria-hidden />
                </span>
                <h2 className="mt-5 text-xl font-bold">{t(card.title)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(card.text)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t({ fr: "Le projet", en: "The project" })}
          title={t({ fr: "Les 7 axes du PDIMA", en: "The 7 pillars of PDIMA" })}
          description={t({
            fr: "Sept interventions complémentaires et synergiques, conçues pour se financer progressivement par leurs propres activités.",
            en: "Seven complementary and synergistic interventions, designed to progressively finance themselves through their own activities.",
          })}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {axes.map((axis, i) => {
            const Icon = icons[axis.icon as keyof typeof icons];
            return (
              <Reveal key={axis.icon} delay={(i % 3) * 0.08}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="text-xs font-bold tracking-widest text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-balance">{t(axis.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(axis.description)}
                  </p>
                </article>
              </Reveal>
            );
          })}
          <Reveal delay={0.24}>
            <Link
              to="/pdima"
              className="flex h-full flex-col justify-between rounded-2xl bg-gradient-brand p-7 text-primary-foreground shadow-elegant card-hover"
            >
              <h3 className="text-lg font-bold">
                {t({ fr: "Voir le détail des activités", en: "See the detailed activities" })}
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                {t({ fr: "Explorer le PDIMA", en: "Explore PDIMA" })}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              {t({ fr: "Zone d'intervention", en: "Intervention area" })}
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              {t({
                fr: "Midongy Atsimo, une zone enclavée",
                en: "Midongy Atsimo, an isolated area",
              })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t({
                fr: "Située dans le district de Midongy du Sud (318), au cœur de la région Atsimo-Atsinanana, la commune conjugue relief accidenté, éloignement des centres urbains et agriculture de subsistance faiblement mécanisée.",
                en: "Located in the Midongy du Sud district (318), in the heart of the Atsimo-Atsinanana region, the commune combines rugged terrain, remoteness from urban centres and barely mechanised subsistence farming.",
              })}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                { fr: "5 000 à 8 000 habitants ciblés", en: "5,000 to 8,000 people targeted" },
                {
                  fr: "Routes dégradées, transport irrégulier",
                  en: "Degraded roads, irregular transport",
                },
                {
                  fr: "Accès très limité à l'eau potable",
                  en: "Very limited access to safe water",
                },
                {
                  fr: "Faible offre de formation qualifiante",
                  en: "Little access to qualifying training",
                },
              ].map((item) => (
                <li key={item.fr} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-gradient-brand"
                    aria-hidden
                  />
                  <span className="text-muted-foreground">{t(item)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <iframe
                title={t({ fr: "Carte de Midongy Atsimo", en: "Map of Midongy Atsimo" })}
                src="https://www.openstreetmap.org/export/embed.html?bbox=46.7%2C-23.85%2C47.35%2C-23.35&layer=mapnik&marker=-23.5833%2C47.0083"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t({ fr: "Actualités", en: "News" })}
          title={t({ fr: "Dernières nouvelles du terrain", en: "Latest from the field" })}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {news.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {item.tag[lang] ?? item.tag.fr}
                </span>
                <h3 className="mt-3 text-lg font-bold text-balance">
                  {item.title[lang] ?? item.title.fr}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt[lang] ?? item.excerpt.fr}
                </p>
                <time className="mt-5 text-xs text-muted-foreground" dateTime={item.date}>
                  {item.date}
                </time>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/actualites">
              {t({ fr: "Toutes les actualités", en: "All news" })}
              <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t({ fr: "Écosystème", en: "Ecosystem" })}
          title={t({
            fr: "Nos partenaires et parties prenantes",
            en: "Our partners and stakeholders",
          })}
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

      <Section className="pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-8 py-16 text-center text-primary-foreground shadow-elegant sm:px-16">
            <div
              className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-white/10 blur-3xl float-slow"
              aria-hidden
            />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
              {t({
                fr: "Soutenez un développement piloté par la communauté",
                en: "Support development driven by the community",
              })}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              {t({
                fr: "Bailleurs, ONG, investisseurs ou donateurs : construisons ensemble la Phase I du PDIMA.",
                en: "Donors, NGOs, investors or supporters: let's build PDIMA Phase I together.",
              })}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="xl" variant="secondary">
                <Link to="/don">{t({ fr: "Faire un don", en: "Donate" })}</Link>
              </Button>
              <Button asChild size="xl" variant="glass">
                <Link to="/contact">{t({ fr: "Devenir partenaire", en: "Become a partner" })}</Link>
              </Button>
            </div>
            <p className="mt-8 text-xs text-primary-foreground/70">{t(org.location)}</p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
