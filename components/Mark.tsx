export default function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="5.5" fill="#f2b45c" />
      <ellipse
        cx="16"
        cy="16"
        rx="13.5"
        ry="5.5"
        fill="none"
        stroke="#46d9b4"
        strokeWidth="1.6"
        transform="rotate(-25 16 16)"
      />
      <circle cx="27.2" cy="10.6" r="2" fill="#46d9b4" />
    </svg>
  );
}
