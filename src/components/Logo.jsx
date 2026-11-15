import "../css/logo.css";

/**
 * Hash brand mark and wordmark.
 * Precision engineered badge with geometric hash glyph.
 */
export default function Logo({ className = "", title = "Hash" }) {
  return (
    <span className={`logo ${className}`.trim()} aria-label={title}>
      <svg
        className="logo__mark"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          width="24"
          height="24"
          rx="6"
          fill="var(--bg-surface-raised)"
          stroke="var(--border-default)"
          strokeWidth="1"
        />
        <path
          d="M9.5 5.5L7.5 18.5M16.5 5.5L14.5 18.5M6 9.5H19M5 14.5H18"
          stroke="var(--accent-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo__word">Hash</span>
    </span>
  );
}
