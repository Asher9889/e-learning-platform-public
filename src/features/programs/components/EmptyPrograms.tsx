import { SearchX, RotateCcw } from "lucide-react";

interface EmptyProgramsProps {
  onResetFilters: () => void;
}

export function EmptyPrograms({ onResetFilters }: EmptyProgramsProps) {
  return (
    <section className="px-8 py-20">
      <div className="container mx-auto max-w-[var(--container-max)]">
        <div className="bg-surface-lowest border border-outline-variant/20 rounded-3xl px-10 py-16 text-center cursor-default max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <SearchX size={28} className="text-primary" />
          </div>
          <h2 className="text-3xl font-extrabold font-display text-on-surface mb-2">
            no programs found
          </h2>
          <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
            try adjusting your filters or search criteria to find what you&apos;re looking for.
          </p>
          <button
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-bold text-sm font-display cursor-pointer border-none hover:bg-on-primary-container hover:shadow-md transition-all duration-fast"
            onClick={onResetFilters}
          >
            <RotateCcw size={14} />
            reset all filters
          </button>
        </div>
      </div>
    </section>
  );
}
