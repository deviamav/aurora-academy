"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { localePath, type Dict, type Locale } from "@/lib/i18n";
import LangSwitch from "./LangSwitch";
import Mark from "./Mark";

export default function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#programs", label: dict.nav.programs },
    { href: "#faculty", label: dict.nav.faculty },
    { href: "#campus", label: dict.nav.campus },
    { href: "#admissions", label: dict.nav.admissions },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled || open ? "border-b border-white/10 bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 text-cream sm:px-8">
        <Link href={localePath(locale)} className="flex items-center gap-2.5" aria-label="Aurora Academy">
          <Mark />
          <span className="font-display text-xl tracking-tight">
            Aurora <span className="italic text-aurora">Academy</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium text-cream/80 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative transition-colors hover:text-cream after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-aurora after:transition-all hover:after:w-full">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch locale={locale} label={dict.footer.language} />
          <a
            href="#admissions"
            className="hidden rounded-full bg-amber px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-aurora sm:inline-block"
          >
            {dict.cta}
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-cream/25 md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-cream transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-5 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-5 bg-cream transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-6 pt-3 text-cream md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 font-display text-2xl"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setOpen(false)}
            className="mt-5 inline-block rounded-full bg-amber px-5 py-3 text-sm font-semibold text-ink"
          >
            {dict.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
