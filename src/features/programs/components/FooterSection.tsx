export function FooterSection() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--outline-variant)",
        background: "var(--surface-container-low)",
      }}
    >
      <div
        className="container flex flex--between"
        style={{
          padding: "32px var(--spacing-container-padding)",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <rect
              x="4"
              y="6"
              width="24"
              height="20"
              rx="3"
              stroke="var(--on-surface)"
              strokeWidth="1.5"
              fill="var(--surface-container-lowest)"
            />
            <path
              d="M16 14L22 18L16 22L10 18L16 14Z"
              fill="var(--on-surface)"
            />
            <circle cx="16" cy="18" r="2" fill="var(--primary)" />
            <path
              d="M10 10H22"
              stroke="var(--on-surface)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span
            className="text-headline-sm"
            style={{ color: "var(--on-surface)" }}
          >
            elearn
          </span>
        </div>
        <p className="text-body-sm text-muted">
          &copy; {new Date().getFullYear()} elearn — building futures through
          education.
        </p>
      </div>
    </footer>
  );
}
