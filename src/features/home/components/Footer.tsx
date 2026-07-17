"use client";
import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Security", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Status", href: "#" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface-container-lowest)",
        borderTop: "1px solid var(--outline-variant)",
      }}
    >
      <div
        className="container flex flex--between flex--wrap"
        style={{
          padding: "var(--spacing-margin-lg) var(--spacing-container-padding)",
          gap: "var(--spacing-margin-md)",
        }}
      >
        <div style={{ maxWidth: 360 }}>
          <Link
            href="/"
            className="text-headline-sm"
            style={{
              color: "var(--on-surface)",
              fontWeight: 700,
              textDecoration: "none",
              display: "block",
              marginBottom: 8,
            }}
          >
            elearn
          </Link>
          <p className="text-body-sm" style={{ color: "var(--on-surface-variant)" }}>
            Empowering educational institutions through intelligent automation
            and unified technology.
          </p>
        </div>

        <div className="flex flex--wrap" style={{ gap: "16px 32px" }}>
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-label-sm"
              style={{
                color: "var(--on-surface-variant)",
                textDecoration: "underline",
                textDecorationColor: "var(--outline-variant)",
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
      </div>

      <div
        className="container"
        style={{
          padding: "0 var(--spacing-container-padding) 32px",
          borderTop: "1px solid var(--outline-variant)",
          paddingTop: 32,
          textAlign: "center",
        }}
      >
        <p
          className="text-label-sm"
          style={{ color: "var(--on-surface-variant)", opacity: 0.7 }}
        >
          © {new Date().getFullYear()} elearn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
