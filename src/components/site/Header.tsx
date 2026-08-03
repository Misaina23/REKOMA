import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { Globe, Heart, Menu, Moon, Search, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { nav, org } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { CommandPalette } from "./CommandPalette";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {t({ fr: "Aller au contenu", en: "Skip to content" })}
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "glass shadow-soft" : "bg-transparent",
        )}
      >
        <div className="mx-auto grid h-16 w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-x-10 px-4">
          <Link
            to="/"
            className="group flex items-center gap-2.5 whitespace-nowrap transition-transform duration-150 lg:-translate-x-[90px]"
          >
            <img
              src="/logo.png"
              alt={org.name}
              className="h-9 w-9 rounded-xl object-cover shadow-soft transition-transform duration-150 group-hover:translate-x-1 group-active:-translate-x-1"
            />
            <span className="leading-tight flex items-baseline gap-2">
              <span className="text-sm font-bold tracking-tight text-foreground">{org.name}</span>
              <span className="text-[11px] font-medium text-muted-foreground">{org.project}</span>
            </span>
          </Link>

          <nav
            aria-label="Principal"
            className="hidden items-center justify-center gap-0.5 lg:flex"
          >
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground whitespace-nowrap",
                  pathname === item.to && "bg-secondary text-foreground shadow-sm",
                )}
              >
                {t(item.label)}
                {pathname === item.to ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-1 transition-transform duration-150 lg:translate-x-[90px]">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
              aria-label={t({ fr: "Recherche globale", en: "Global search" })}
              onClick={() => setPaletteOpen(true)}
            >
              <Search />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t({ fr: "Changer de langue", en: "Switch language" })}
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            >
              <Globe />
              <span className="sr-only">{lang}</span>
            </Button>
            <span
              aria-hidden
              className="hidden text-xs font-semibold text-muted-foreground sm:inline"
            >
              {lang.toUpperCase()}
            </span>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t({ fr: "Basculer le thème", en: "Toggle theme" })}
              onClick={toggle}
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="grid place-items-center"
              >
                {theme === "dark" ? <Sun /> : <Moon />}
              </motion.span>
            </Button>
            <Button asChild variant="hero" className="ml-1 hidden sm:inline-flex">
              <Link to="/don">
                <Heart />
                {t({ fr: "Faire un don", en: "Donate" })}
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label={t({ fr: "Ouvrir le menu", en: "Open menu" })}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[86vw] max-w-sm border-l border-border/70 bg-background/95 backdrop-blur-xl"
              >
                <SheetTitle className="text-left">{org.name}</SheetTitle>
                <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
                  {nav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                        pathname === item.to
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                      )}
                    >
                      {t(item.label)}
                    </Link>
                  ))}
                  <Button asChild variant="hero" size="xl" className="mt-4">
                    <Link to="/don" onClick={() => setOpen(false)}>
                      <Heart />
                      {t({ fr: "Faire un don", en: "Donate" })}
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <motion.div
          style={{ scaleX: progress }}
          className="h-0.5 origin-left bg-gradient-brand"
          aria-hidden
        />
      </header>
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
