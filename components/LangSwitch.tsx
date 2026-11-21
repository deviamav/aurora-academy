import Link from "next/link";
import { localePath, locales, type Locale } from "@/lib/i18n";

export default function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-cream/25 p-0.5 text-[11px] font-semibold tracking-[0.12em]"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localePath(l)}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              active ? "bg-cream text-ink" : "text-cream/70 hover:text-cream"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
