import type { ReactNode } from "react";
import { fraunces, manrope, playfair } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";

/** Shared <html>/<body> wrapper so each locale can be its own root layout (correct lang attribute, fully static). */
export default function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${fraunces.variable} ${playfair.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
