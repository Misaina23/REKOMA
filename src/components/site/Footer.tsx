import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { nav, org } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { showSuccess } from "@/lib/alerts";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground">
                R
              </span>
              <span className="text-base font-bold">{org.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t(org.full)} — {t(org.projectFull)} ({org.project}).
            </p>
            <div className="mt-5 flex gap-2">
              <Button variant="glass" size="icon" aria-label="Facebook" asChild>
                <a href="https://facebook.com" target="_blank" rel="noreferrer noopener">
                  <Facebook />
                </a>
              </Button>
              <Button variant="glass" size="icon" aria-label="LinkedIn" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
                  <Linkedin />
                </a>
              </Button>
              <Button variant="glass" size="icon" aria-label="Email" asChild>
                <a href={`mailto:${org.email}`}>
                  <Mail />
                </a>
              </Button>
            </div>
          </div>

          <nav aria-label={t({ fr: "Navigation du pied de page", en: "Footer navigation" })}>
            <h2 className="text-sm font-semibold">{t({ fr: "Navigation", en: "Navigation" })}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold">
              {t({ fr: "Liens utiles", en: "Useful links" })}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/don"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t({ fr: "Faire un don", en: "Donate" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/documents"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t({ fr: "Transparence", en: "Transparency" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t({ fr: "Mentions légales", en: "Legal notice" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/confidentialite"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t({ fr: "Confidentialité", en: "Privacy" })}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">{t({ fr: "Newsletter", en: "Newsletter" })}</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              {t({
                fr: "Recevez nos rapports d'avancement et nos actualités terrain.",
                en: "Receive our progress reports and field news.",
              })}
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                await showSuccess(
                  t({
                    fr: "Merci ! Inscription enregistrée.",
                    en: "Thank you! You're subscribed.",
                  }),
                );
                form.reset();
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                {t({ fr: "Adresse e-mail", en: "Email address" })}
              </label>
              <Input
                id="newsletter-email"
                type="email"
                required
                placeholder={t({ fr: "vous@exemple.com", en: "you@example.com" })}
              />
              <Button
                type="submit"
                variant="hero"
                aria-label={t({ fr: "S'inscrire", en: "Subscribe" })}
              >
                <Send />
              </Button>
            </form>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{t(org.location)}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{org.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {org.name}.{" "}
            {t({ fr: "Tous droits réservés.", en: "All rights reserved." })}
          </p>
          <motion.a
            href="https://devmisaina.com"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <span>Designed &amp; Developed by</span>
            <span className="relative font-semibold text-gradient">
              DevMisaina
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-brand transition-all duration-500 group-hover:w-full" />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
