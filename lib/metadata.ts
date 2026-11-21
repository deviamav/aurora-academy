import type { Metadata } from "next";
import { getDict, type Locale } from "./i18n";

const ICON_SVG =
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='#0a2224'/><circle cx='16' cy='16' r='5' fill='#f2b45c'/><ellipse cx='16' cy='16' rx='12' ry='5' fill='none' stroke='#46d9b4' stroke-width='1.6' transform='rotate(-25 16 16)'/></svg>";

export function getMetadata(locale: Locale): Metadata {
  const dict = getDict(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: `data:image/svg+xml,${encodeURIComponent(ICON_SVG)}` },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: locale === "en" ? "en_US" : "uk_UA",
    },
  };
}
