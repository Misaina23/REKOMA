import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { showInfo } from "@/lib/alerts";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/documents")({
  loader: async () => {
    const base = (() => {
      if (typeof window !== "undefined") return window.location.origin;
      return process.env.VITE_APP_URL ?? "http://localhost:8080";
    })();
    const res = await fetch(`${base}/api/cms/documents`);
    if (!res.ok) throw new Error("Failed to load documents");
    return res.json();
  },
  component: Documents,
  head: () => ({
    meta: [
      { title: "Documents & transparence — REKOMA / PDIMA" },
      {
        name: "description",
        content:
          "Statuts, procès-verbaux, dossier de projet et plan stratégique : les documents officiels de l'association REKOMA en accès libre.",
      },
      { property: "og:title", content: "Documents & transparence — REKOMA" },
      {
        property: "og:description",
        content: "Documents officiels et engagements de transparence de REKOMA.",
      },
      { property: "og:url", content: "/documents" },
    ],
    links: [{ rel: "canonical", href: "/documents" }],
  }),
});

function Documents() {
  const { t, lang } = useI18n();
  const documents = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={t({ fr: "Transparence", en: "Transparency" })}
        title={t({
          fr: "Documents officiels en accès libre",
          en: "Official documents, openly available",
        })}
        description={t({
          fr: "Nos statuts, procès-verbaux et rapports sont mis à disposition des membres, bailleurs et partenaires. Contactez-nous pour recevoir la dernière version signée.",
          en: "Our statutes, minutes and reports are available to members, donors and partners. Contact us to receive the latest signed version.",
        })}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {documents.map(
            (
              doc: {
                id: string;
                title: Record<string, string>;
                type: string;
                description: Record<string, string>;
                url: string;
              },
              i: number,
            ) => (
              <Reveal key={doc.id} delay={(i % 2) * 0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <FileText className="size-5" aria-hidden />
                  </span>
                  <h2 className="mt-5 text-lg font-bold">{doc.title[lang] ?? doc.title.fr}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {doc.description[lang] ?? doc.description.fr}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 self-start"
                    onClick={() =>
                      void showInfo(
                        t({ fr: "Document disponible", en: "Document available" }),
                        t({
                          fr: "Demandez-le via notre page Contact et nous vous répondrons rapidement.",
                          en: "Request it via our Contact page and we will get back to you shortly.",
                        }),
                      )
                    }
                  >
                    <Download />
                    {doc.type} · {t({ fr: "Demander", en: "Request" })}
                  </Button>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={t({ fr: "Nos engagements", en: "Our commitments" })}
          title={t({ fr: "Comment nous rendons des comptes", en: "How we stay accountable" })}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: { fr: "Rapports semestriels", en: "Half-year reports" },
              d: {
                fr: "Publication régulière de l'avancement technique et financier du projet.",
                en: "Regular publication of the project's technical and financial progress.",
              },
            },
            {
              t: { fr: "Évaluations externes", en: "External evaluations" },
              d: {
                fr: "Évaluation à mi-parcours (M24) et évaluation finale (M36) du PDIMA.",
                en: "Mid-term (M24) and final (M36) evaluations of PDIMA.",
              },
            },
            {
              t: { fr: "Assemblées générales", en: "General assemblies" },
              d: {
                fr: "Décisions et comptes soumis au vote des membres, avec procès-verbaux publiés.",
                en: "Decisions and accounts submitted to a members' vote, with published minutes.",
              },
            },
          ].map((c, i) => (
            <Reveal key={c.t.fr} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                <h3 className="text-lg font-bold">{t(c.t)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(c.d)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
