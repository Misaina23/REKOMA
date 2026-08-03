import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { nav, axes } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { t } = useI18n();
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const go = (to: string) => {
    onOpenChange(false);
    void navigate({ to });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder={t({ fr: "Rechercher une page, un axe...", en: "Search a page, a pillar..." })}
      />
      <CommandList>
        <CommandEmpty>{t({ fr: "Aucun résultat.", en: "No results." })}</CommandEmpty>
        <CommandGroup heading={t({ fr: "Pages", en: "Pages" })}>
          {nav.map((item) => (
            <CommandItem key={item.to} value={t(item.label)} onSelect={() => go(item.to)}>
              {t(item.label)}
            </CommandItem>
          ))}
          <CommandItem value={t({ fr: "Faire un don", en: "Donate" })} onSelect={() => go("/don")}>
            {t({ fr: "Faire un don", en: "Donate" })}
          </CommandItem>
          <CommandItem value="FAQ" onSelect={() => go("/faq")}>
            FAQ
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading={t({ fr: "Axes du PDIMA", en: "PDIMA pillars" })}>
          {axes.map((axis) => (
            <CommandItem key={axis.icon} value={t(axis.title)} onSelect={() => go("/pdima")}>
              {t(axis.title)}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
