import type { Dict, Locale } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";
import Mark from "./Mark";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const f = dict.footer;
  return (
    <footer className="bg-ink px-5 py-14 text-cream sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Mark className="h-9 w-9" />
            <span className="font-display text-2xl">
              Aurora <span className="italic text-aurora">Academy</span>
            </span>
          </div>
          <p className="mt-4 font-display text-lg italic text-cream/60">{f.tagline}</p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <LangSwitch locale={locale} label={f.language} />
          <p className="max-w-md text-xs leading-relaxed text-cream/45 md:text-right">{f.demo}</p>
          <p className="text-xs text-cream/45">{f.rights}</p>
        </div>
      </div>
    </footer>
  );
}
