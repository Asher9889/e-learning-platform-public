"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-[200] bg-surface border-b border-outline-variant">
      <div className="container mx-auto flex items-center justify-between h-16 px-8 max-w-[var(--container-max)]">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="6" width="24" height="20" rx="3" stroke="var(--color-on-surface)" strokeWidth="1.5" fill="var(--color-surface-lowest)" />
            <path d="M16 14L22 18L16 22L10 18L16 14Z" fill="var(--color-on-surface)" />
            <circle cx="16" cy="18" r="2" fill="var(--color-primary)" />
            <path d="M10 10H22" stroke="var(--color-on-surface)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xl font-semibold font-display text-on-surface">
            elearn
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          {["features", "programs", "live classes", "why us", "contact"].map(
            (item) => (
              <a
                key={item}
                href={item === "programs" ? "/programs" : `#${item}`}
                className="text-sm text-on-surface no-underline lowercase hover:opacity-60 transition-opacity duration-fast"
              >
                {item}
              </a>
            )
          )}
          <button className="inline-flex items-center justify-center gap-2 px-4 py-1.5 text-xs font-bold font-display bg-surface-lowest text-on-surface border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-low hover:shadow-sm transition-all duration-fast">
            get started
          </button>
        </nav>
      </div>
    </header>
  );
}
