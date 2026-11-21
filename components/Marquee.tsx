/** Infinite CSS marquee (pure CSS, no JS). The list is duplicated so -50% translate loops seamlessly. */
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-amber py-5 text-ink" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl font-light italic sm:text-4xl">
            {w}
            <svg viewBox="0 0 24 24" className="h-5 w-5 animate-spin-slow text-ink/70" fill="currentColor">
              <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
