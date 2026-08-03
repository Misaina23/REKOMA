import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { getAppBaseUrl } from "@/lib/app-url";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/actualites")({
  loader: async () => {
    const base = getAppBaseUrl();
    const res = await fetch(`${base}/api/cms/news`);
    if (!res.ok) throw new Error("Failed to load news");
    return res.json();
  },
  component: News,
  head: () => ({
    meta: [
      { title: "Actualités REKOMA — avancement du projet PDIMA" },
      {
        name: "description",
        content:
          "Suivez l'avancement du PDIMA : gouvernance, réhabilitation du centre KPSV, accès à l'eau potable et activités de terrain à Midongy Atsimo.",
      },
      { property: "og:title", content: "Actualités REKOMA" },
      {
        property: "og:description",
        content: "Les dernières nouvelles du projet PDIMA à Midongy Atsimo.",
      },
      { property: "og:url", content: "/actualites" },
    ],
    links: [{ rel: "canonical", href: "/actualites" }],
  }),
});

function News() {
  const { t, lang } = useI18n();
  const news = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Actualités", en: "News" })}
        title={t({
          fr: "L'avancement du projet, étape par étape",
          en: "Project progress, step by step",
        })}
        description={t({
          fr: "Chaque étape franchie est documentée et partagée avec nos membres, partenaires et bailleurs.",
          en: "Every milestone is documented and shared with our members, partners and donors.",
        })}
      />
      <Section>
        <div className="space-y-6">
          {news.map(
            (
              item: {
                id: string;
                date: string;
                title: Record<string, string>;
                excerpt: Record<string, string>;
                tag: Record<string, string>;
              },
              i: number,
            ) => (
              <Reveal key={item.id} delay={i * 0.07}>
                <article className="grid gap-4 rounded-2xl border border-border bg-card p-8 shadow-soft card-hover sm:grid-cols-[160px_1fr]">
                  <div>
                    <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                      {item.tag[lang] ?? item.tag.fr}
                    </span>
                    <time className="mt-2 block text-sm text-muted-foreground" dateTime={item.date}>
                      {item.date}
                    </time>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-balance">
                      {item.title[lang] ?? item.title.fr}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {item.excerpt[lang] ?? item.excerpt.fr}
                    </p>
                  </div>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </Section>
    </>
  );
}
