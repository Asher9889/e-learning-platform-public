export function FooterSection() {
  return (
    <footer className="border-t border-outline-variant bg-surface-low">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-8 py-8 flex-wrap gap-4 max-w-[var(--container-max)]">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="6" width="24" height="20" rx="3" stroke="var(--color-on-surface)" strokeWidth="1.5" fill="var(--color-surface-lowest)" />
            <path d="M16 14L22 18L16 22L10 18L16 14Z" fill="var(--color-on-surface)" />
            <circle cx="16" cy="18" r="2" fill="var(--color-primary)" />
            <path d="M10 10H22" stroke="var(--color-on-surface)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xl font-semibold font-display text-on-surface">
            elearn
          </span>
        </div>
        <p className="text-sm text-on-surface-variant opacity-70">
          &copy; {new Date().getFullYear()} elearn — building futures through
          education.
        </p>
      </div>
    </footer>
  );
}
