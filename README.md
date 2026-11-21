# Aurora Academy

Marketing website for a fictional private school — **Aurora Academy**. Full-bleed hero with floating 3D geometric forms (orbits, books, a faceted core), programs, faculty teaser, campus life bento grid and an admissions call-to-action.

> Demo project. The school, people, figures and e-mail addresses are fictional.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- three.js via `@react-three/fiber` + `@react-three/drei`
- `framer-motion` for scroll / entrance animations
- `next/font/google`: **Fraunces** (display) + **Playfair Display** (Cyrillic companion) + **Manrope** (text)

## Run locally

Requirements: Node.js 20.9+ (Node 22 LTS recommended) and npm.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export -> ./out
npm run preview    # serve ./out locally (uses npx serve)
npm run typecheck  # tsc --noEmit
```

> Fonts are downloaded from Google Fonts **at build time** by `next/font`, so the first build needs internet access. The fonts are then self-hosted in the output.

## Languages (i18n)

A lightweight dictionary approach — no runtime i18n library is needed, which keeps the export fully static.

| Locale | URL    |
| ------ | ------ |
| `en` (default) | `/`    |
| `uk`   | `/uk/` |

- All copy lives in [`lib/i18n.ts`](lib/i18n.ts) (`en` is the source of truth, `uk` must satisfy the same `Dict` type).
- Each locale has its own root layout (`app/(en)`, `app/uk`) so the `<html lang>` attribute is correct.
- The language switcher is in the header and footer.
- To add a locale: add it to `locales`, add a dictionary, and create `app/<locale>/layout.tsx` + `page.tsx` (copy `app/uk`).

## Static export & GitHub Pages

`next.config.mjs` uses `output: "export"` (plus `trailingSlash` and unoptimised images), so `npm run build` produces a fully static site in `out/`.

For a GitHub Pages **project site** (served from `/<repo>/`), set the base path at build time:

```bash
# PowerShell
$env:NEXT_PUBLIC_BASE_PATH = "/aurora-academy"; npm run build

# bash
NEXT_PUBLIC_BASE_PATH=/aurora-academy npm run build
```

Then publish the `out/` folder (e.g. with `actions/upload-pages-artifact` + `actions/deploy-pages`) and add an empty `.nojekyll` file if you deploy the folder manually. For a user/organisation site or a custom domain, leave `NEXT_PUBLIC_BASE_PATH` unset.

## Project structure

```
app/
  (en)/layout.tsx, page.tsx   English root layout + page
  uk/layout.tsx, page.tsx     Ukrainian root layout + page
  globals.css                 Tailwind v4 theme, keyframes, gradient mesh, grain
components/
  SceneCanvas.tsx             R3F scene (client only)
  HeroScene.tsx               Lazy-loads the canvas, WebGL / reduced-motion / visibility handling
  Hero.tsx, Sections.tsx      Page sections
  Header.tsx, Footer.tsx, LangSwitch.tsx, Reveal.tsx, Marquee.tsx
lib/
  i18n.ts, fonts.ts, metadata.ts
```

## Design notes

- Palette: deep teal ink, aurora mint, amber, coral accents on warm cream — deliberately no purple.
- Animations: staggered hero entrance, drifting aurora light (CSS), scroll-reveal sections, infinite subject marquee, hover-invert programme cards.
- 3D: the canvas is client-only (`next/dynamic`, `ssr: false`); it pauses when off-screen, falls back gracefully without WebGL and renders a still frame when the user prefers reduced motion. No external assets or HDR files are loaded.

## Environment

No environment variables are required. See [`.env.example`](.env.example) for the optional `NEXT_PUBLIC_BASE_PATH`.
