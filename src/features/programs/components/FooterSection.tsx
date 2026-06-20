export function FooterSection() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-charcoal)",
        background: "var(--color-dew-drop)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="6" width="24" height="20" rx="3" stroke="#171717" strokeWidth="1.5" fill="#fdfbf9" />
            <path d="M16 14L22 18L16 22L10 18L16 14Z" fill="#171717" />
            <circle cx="16" cy="18" r="2" fill="#ff6f1e" />
            <path d="M10 10H22" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-gelica)",
              fontSize: 18,
              color: "var(--color-cocoa-ink)",
              textTransform: "lowercase",
            }}
          >
            elearn
          </span>
        </div>
        <p
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 12,
            color: "var(--color-charcoal)",
            opacity: 0.6,
            textTransform: "lowercase",
            margin: 0,
          }}
        >
          &copy; {new Date().getFullYear()} elearn — building futures through education.
        </p>
      </div>
    </footer>
  );
}
