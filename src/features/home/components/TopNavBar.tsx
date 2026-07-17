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
    <nav className="sticky top-0 z-[200] bg-surface border-b border-outline-variant shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-8 max-w-[var(--container-max)]">
        <Link
          href="/"
          className="text-2xl font-bold font-display text-primary no-underline"
        >
          elearn
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold font-display text-on-surface-variant no-underline hover:text-primary transition-colors duration-fast"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-on-surface bg-transparent hover:bg-surface-low rounded-xl font-semibold text-sm font-display transition-colors duration-fast cursor-pointer border-none">
            Login
          </button>
          <button className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold text-sm font-display cursor-pointer border-none hover:bg-on-primary-container hover:shadow-md transition-all duration-fast">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
