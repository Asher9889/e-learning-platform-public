"use client";
import Link from "next/link";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

export function TopNavBar() {
  return (
    <nav className="sticky-bar" style={{ boxShadow: "var(--shadow-sm)" }}>
      <div
        className="container flex flex--between"
        style={{ height: 64 }}
      >
        <Link
          href="/"
          className="text-headline-md"
          style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}
        >
          elearn
        </Link>

        <div className="hide-mobile flex" style={{ alignItems: "center", gap: "var(--spacing-margin-md)" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-label-md"
              style={{
                color: "var(--on-surface-variant)",
                textDecoration: "none",
                transition: "color var(--duration-fast) var(--ease-out)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--on-surface-variant)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex" style={{ alignItems: "center", gap: "var(--spacing-margin-sm)" }}>
          <button
            className="btn btn--ghost hide-mobile"
            style={{ color: "var(--primary)" }}
          >
            Login
          </button>
          <button className="btn btn--primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
