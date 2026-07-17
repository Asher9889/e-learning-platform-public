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
    <footer className="bg-surface-lowest border-t border-outline-variant">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-8 max-w-[var(--container-max)] py-12 gap-6 md:gap-8">
        <div className="max-w-sm">
          <Link
            href="/"
            className="text-xl font-bold font-display text-on-surface no-underline block mb-2"
          >
            elearn
          </Link>
          <p className="text-sm text-on-surface-variant">
            Empowering educational institutions through intelligent automation
            and unified technology.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold font-display text-on-surface-variant underline decoration-outline-variant hover:text-primary transition-colors duration-fast"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 max-w-[var(--container-max)] border-t border-outline-variant py-8 text-center">
        <p className="text-xs font-bold font-display text-on-surface-variant opacity-70">
          © {new Date().getFullYear()} elearn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
