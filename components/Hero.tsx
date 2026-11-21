"use client";

import { motion, type Variants } from "framer-motion";
import type { Dict } from "@/lib/i18n";
import HeroScene from "./HeroScene";

const ease: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease } },
};

export default function Hero({ dict }: { dict: Dict }) {
  const { hero } = dict;
  return (
    <section className="mesh-hero relative isolate min-h-[100svh] overflow-hidden text-cream">
      {/* drifting aurora light */}
      <div className="pointer-events-none absolute -left-[10%] top-[8%] h-[46vmax] w-[46vmax] animate-drift rounded-full bg-aurora/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-[12%] bottom-[-10%] h-[40vmax] w-[40vmax] animate-drift-slow rounded-full bg-amber/15 blur-[120px]" />

      <HeroScene />

      {/* readability veil for the text column */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent max-md:bg-gradient-to-t max-md:from-ink/90 max-md:via-ink/30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 md:justify-center md:pb-16">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-aurora"
          >
            <span className="h-px w-8 bg-aurora" />
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={item}
            className="text-[clamp(2.9rem,7.6vw,6.6rem)] font-light leading-[0.96]"
          >
            {hero.titleStart}
            <br />
            <em className="text-aurora-gradient pr-2 font-normal italic">{hero.titleEmph}</em>
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {hero.lead}
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#admissions"
              className="group inline-flex items-center gap-3 rounded-full bg-amber px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-aurora hover:shadow-[0_0_40px_-6px] hover:shadow-aurora/60"
            >
              {hero.primary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#programs"
              className="rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold transition-colors hover:border-cream hover:bg-cream/10"
            >
              {hero.secondary}
            </a>
          </motion.div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-14 grid max-w-3xl grid-cols-3 gap-4 border-t border-cream/15 pt-6 md:mt-20"
        >
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-light text-cream sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-cream/60 sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/50 lg:flex">
        <span className="[writing-mode:vertical-rl]">{hero.scroll}</span>
        <span className="h-14 w-px animate-scroll-line bg-cream/60" />
      </div>
    </section>
  );
}
