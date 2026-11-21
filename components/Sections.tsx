import type { Dict } from "@/lib/i18n";
import Reveal from "./Reveal";

function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-aurora" : "text-lagoon"}`}>
          <span className={`h-px w-8 ${dark ? "bg-aurora" : "bg-lagoon"}`} />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-[clamp(2.2rem,4.6vw,4rem)] font-light leading-[1.02]">{title}</h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-cream/70" : "text-ink/65"}`}>{lead}</p>
      </Reveal>
    </div>
  );
}

/* --- small abstract glyphs for program cards ------------------------------------------------ */
function Glyph({ i }: { i: number }) {
  const stroke = "currentColor";
  switch (i % 4) {
    case 0:
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke={stroke} strokeWidth="1.5">
          <circle cx="32" cy="32" r="8" />
          <circle cx="32" cy="32" r="18" strokeDasharray="2 5" />
          <circle cx="32" cy="32" r="28" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke={stroke} strokeWidth="1.5">
          <path d="M8 52 32 10l24 42z" />
          <path d="M20 52 32 31l12 21" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke={stroke} strokeWidth="1.5">
          <path d="M6 44c10-26 42-26 52 0" />
          <path d="M14 44c7-16 29-16 36 0" />
          <path d="M22 44c4-7 16-7 20 0" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" className="h-14 w-14" fill="none" stroke={stroke} strokeWidth="1.5">
          <path d="M32 6l5 21 21 5-21 5-5 21-5-21-21-5 21-5z" />
        </svg>
      );
  }
}

export function Programs({ dict }: { dict: Dict }) {
  const p = dict.programs;
  return (
    <section id="programs" className="mesh-soft relative px-5 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full min-h-[27rem] flex-col overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/55 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:bg-ink hover:text-cream hover:shadow-2xl hover:shadow-ink/30">
                <div className="flex items-start justify-between">
                  <span className="text-lagoon transition-colors duration-500 group-hover:text-aurora">
                    <Glyph i={i} />
                  </span>
                  <span className="font-display text-sm italic text-ink/40 transition-colors group-hover:text-cream/50">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-coral">{it.age}</p>
                <h3 className="mt-2 text-3xl font-normal leading-tight">{it.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/65 transition-colors group-hover:text-cream/70">
                  {it.text}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                  {it.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium transition-colors group-hover:border-cream/25"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faculty({ dict }: { dict: Dict }) {
  const f = dict.faculty;
  const tints = ["from-aurora to-lagoon", "from-amber to-coral", "from-lagoon to-forest"];
  return (
    <section id="faculty" className="relative overflow-hidden bg-paper px-5 py-28 sm:px-8 md:py-36">
      <div className="pointer-events-none absolute -right-40 top-10 h-[36rem] w-[36rem] rounded-full border border-ink/10" />
      <div className="pointer-events-none absolute -right-20 top-30 h-[28rem] w-[28rem] rounded-full border border-ink/10" />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHead eyebrow={f.eyebrow} title={f.title} lead={f.lead} />
          <Reveal delay={0.2}>
            <figure className="mt-14 max-w-lg border-l-2 border-coral pl-6">
              <blockquote className="font-display text-2xl font-light italic leading-snug">{f.quote.text}</blockquote>
              <figcaption className="mt-4 text-sm text-ink/55">— {f.quote.by}</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.28}>
            <a
              href="#admissions"
              className="mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-semibold transition-colors hover:border-coral hover:text-coral"
            >
              {f.more} →
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5">
          {f.people.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article
                className={`flex items-center gap-6 rounded-[1.75rem] bg-cream p-5 shadow-[0_20px_50px_-30px] shadow-ink/30 transition-transform duration-500 hover:-translate-y-1 sm:p-6 ${
                  i === 1 ? "lg:ml-12" : i === 2 ? "lg:ml-24" : ""
                }`}
              >
                <div
                  className={`grid h-24 w-24 shrink-0 place-items-center rounded-full bg-gradient-to-br sm:h-28 sm:w-28 ${tints[i % 3]}`}
                >
                  <span className="font-display text-3xl italic text-cream">{p.initials}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-normal">{p.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-lagoon">{p.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- decorative art for the campus bento tiles --------------------------------------------- */
function TileArt({ i }: { i: number }) {
  const common = "pointer-events-none absolute right-0 bottom-0 h-full w-full opacity-70";
  switch (i) {
    case 0:
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMaxYMax slice">
          {[60, 100, 140, 180, 220].map((r) => (
            <circle key={r} cx="330" cy="260" r={r} stroke="#46d9b4" strokeOpacity={0.35 - r / 900} />
          ))}
          {[[60, 40], [120, 90], [200, 30], [260, 70], [30, 130], [170, 150], [90, 190]].map(([x, y], k) => (
            <circle key={k} cx={x} cy={y} r={k % 3 === 0 ? 2.5 : 1.5} fill="#f8f2e6" />
          ))}
        </svg>
      );
    case 1:
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMaxYMax slice">
          {[0, 1, 2, 3, 4, 5].map((k) => (
            <rect key={k} x={250 + k * 22} y={140 - (k % 3) * 22} width="16" height={160 + (k % 3) * 22} rx="2" fill="#f2b45c" fillOpacity={0.15 + k * 0.05} />
          ))}
        </svg>
      );
    case 2:
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMaxYMax slice">
          {[0, 1, 2, 3, 4].map((k) => (
            <path key={k} d={`M0 ${190 + k * 12} Q 100 ${130 + k * 12} 200 ${190 + k * 12} T 400 ${190 + k * 12}`} stroke="#f8f2e6" strokeOpacity={0.32 - k * 0.05} />
          ))}
        </svg>
      );
    case 3:
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMaxYMax slice">
          {Array.from({ length: 7 }).map((_, r) =>
            Array.from({ length: 12 }).map((__, c) => (
              <circle key={`${r}-${c}`} cx={160 + c * 20} cy={110 + r * 20} r="1.8" fill="#46d9b4" fillOpacity={0.15 + ((r + c) % 5) * 0.1} />
            )),
          )}
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMaxYMax slice">
          <path d="M250 300V190l75-60 75 60v110" stroke="#f2b45c" strokeOpacity="0.4" />
          <path d="M290 300v-70h70v70" stroke="#f8f2e6" strokeOpacity="0.3" />
        </svg>
      );
  }
}

export function Campus({ dict }: { dict: Dict }) {
  const c = dict.campus;
  const spans = [
    "lg:col-span-7 lg:row-span-2",
    "lg:col-span-5",
    "lg:col-span-5",
    "lg:col-span-6",
    "lg:col-span-6",
  ];
  const fills = [
    "bg-gradient-to-br from-lagoon/80 to-forest",
    "bg-forest",
    "bg-gradient-to-tr from-forest to-lagoon/60",
    "bg-gradient-to-br from-forest to-[#0b2b2d]",
    "bg-gradient-to-tl from-lagoon/70 to-forest",
  ];
  return (
    <section id="campus" className="mesh-hero relative overflow-hidden px-5 py-28 text-cream sm:px-8 md:py-36">
      <div className="relative mx-auto max-w-7xl">
        <SectionHead eyebrow={c.eyebrow} title={c.title} lead={c.lead} dark />
        <div className="mt-16 grid auto-rows-[15rem] gap-4 lg:grid-cols-12">
          {c.tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.07} className={`${spans[i]} ${i === 0 ? "min-h-[20rem]" : ""}`}>
              <article
                className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-[1.75rem] border border-cream/10 p-7 transition-transform duration-500 hover:-translate-y-1 ${fills[i]}`}
              >
                <TileArt i={i} />
                <span className="absolute left-7 top-7 rounded-full border border-cream/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/80 backdrop-blur">
                  {t.meta}
                </span>
                <div className="relative">
                  <h3 className={`font-normal leading-tight ${i === 0 ? "text-4xl" : "text-2xl"}`}>{t.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">{t.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Admissions({ dict }: { dict: Dict }) {
  const a = dict.admissions;
  return (
    <section id="admissions" className="mesh-soft px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-ink px-7 py-14 text-cream sm:px-14 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] animate-drift rounded-full bg-aurora/25 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-32 left-10 h-[24rem] w-[24rem] animate-drift-slow rounded-full bg-amber/20 blur-[100px]" />
            <div className="relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-aurora">
                  <span className="h-px w-8 bg-aurora" />
                  {a.eyebrow}
                </p>
                <h2 className="text-[clamp(2.2rem,4.6vw,4rem)] font-light leading-[1.02]">{a.title}</h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">{a.lead}</p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:admissions@aurora-academy.example"
                    className="group inline-flex items-center gap-3 rounded-full bg-amber px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-aurora"
                  >
                    {a.button}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="#programs"
                    className="rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold transition-colors hover:bg-cream/10"
                  >
                    {a.secondary}
                  </a>
                </div>
                <p className="mt-6 text-sm text-cream/50">{a.note}</p>
              </div>

              <ol className="relative space-y-6">
                <span className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-aurora via-amber to-transparent" />
                {a.steps.map((s, i) => (
                  <li key={s.title} className="relative flex gap-6">
                    <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-aurora/60 bg-ink font-display text-lg italic text-aurora">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-2xl font-normal">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream/65">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
