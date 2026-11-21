import { Fraunces, Manrope, Playfair_Display } from "next/font/google";

/** Expressive soft-serif display face (Latin). */
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

/** Cyrillic companion for the display face (Fraunces has no Cyrillic glyphs). */
export const playfair = Playfair_Display({
  subsets: ["cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});
