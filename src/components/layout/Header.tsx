"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky-bar">
      <div
        className="container"
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
            <path d="M16 14L22 18L16 22L10 18L16 14Z" fill="var(--on-surface)" />
            <circle cx="16" cy="18" r="2" fill="var(--primary)" />
            <path
              d="M10 10H22"
              stroke="var(--on-surface)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-headline-sm" style={{ color: "var(--on-surface)" }}>
            elearn
          </span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["features", "programs", "live classes", "why us", "contact"].map(
            (item) => (
              <a
                key={item}
                href={item === "programs" ? "/programs" : `#${item}`}
                className="text-body-sm"
                style={{
                  color: "var(--on-surface)",
                  textDecoration: "none",
                  textTransform: "lowercase",
                  transition: "opacity var(--duration-fast) var(--ease-out)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {item}
              </a>
            )
          )}
          <button className="btn btn--secondary btn--sm">get started</button>
        </nav>
      </div>
    </header>
  );
}
