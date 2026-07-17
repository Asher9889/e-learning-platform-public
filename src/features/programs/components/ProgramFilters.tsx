"use client";
import { Search, X } from "lucide-react";

const categories = [
  { label: "All Programs", color: "var(--color-primary)" },
  { label: "School", color: "var(--color-category-school)" },
  { label: "Diploma", color: "var(--color-category-diploma)" },
  { label: "Undergraduate", color: "var(--color-category-undergraduate)" },
  { label: "Postgraduate", color: "var(--color-category-postgraduate)" },
  { label: "Professional", color: "var(--color-category-professional)" },
];

const durations = [
  "All",
  "3 Months",
  "6 Months",
  "1 Year",
  "2 Years",
  "3 Years",
  "4 Years",
];

const sortOptions = ["Newest", "Popular", "Lowest Fee", "Highest Fee", "A-Z"];

interface ProgramFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categoryFilter: string;
  onCategoryChange: (value: string) => void;
  durationFilter: string;
  onDurationChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  onReset: () => void;
}

export function ProgramFilters({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  durationFilter,
  onDurationChange,
  sortBy,
  onSortChange,
  onReset,
}: ProgramFiltersProps) {
  const hasActiveFilters =
    searchQuery || categoryFilter !== "All Programs" || durationFilter !== "All" || sortBy !== "Newest";

  return (
    <div className="sticky top-0 z-[200] bg-surface/95 backdrop-blur-md border-b border-outline-variant/40">
      <div className="container mx-auto px-8 py-4 max-w-[var(--container-max)]">
        {/* Top row: search + sort + reset */}
        <div className="flex items-center gap-3 mb-3">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
            />
            <input
              className="w-full text-sm text-on-surface bg-surface-lowest border border-outline-variant/40 rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-fast placeholder:text-on-surface-variant/50"
              placeholder="search programs..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Sort */}
          <select
            className="text-sm text-on-surface bg-surface-lowest border border-outline-variant/40 rounded-xl py-2.5 px-3 outline-none cursor-pointer focus:border-primary transition-colors duration-fast"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            {sortOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>

          {/* Duration */}
          <select
            className="text-sm text-on-surface bg-surface-lowest border border-outline-variant/40 rounded-xl py-2.5 px-3 outline-none cursor-pointer focus:border-primary transition-colors duration-fast"
            value={durationFilter}
            onChange={(e) => onDurationChange(e.target.value)}
          >
            {durations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          {/* Reset */}
          {hasActiveFilters && (
            <button
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-bold font-display text-primary bg-primary/8 rounded-xl cursor-pointer border-none hover:bg-primary/15 transition-all duration-fast"
              onClick={onReset}
            >
              <X size={13} />
              clear
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive =
              c.label === "All Programs"
                ? categoryFilter === "All Programs"
                : categoryFilter === c.label || (c.label === "Professional" && categoryFilter === "Professional Certification");

            return (
              <button
                key={c.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold font-display cursor-pointer border-2 transition-all duration-fast"
                style={
                  isActive
                    ? {
                        background: c.color,
                        borderColor: c.color,
                        color: "white",
                      }
                    : {
                        background: "transparent",
                        borderColor: "var(--color-outline-variant)",
                        color: "var(--color-on-surface-variant)",
                      }
                }
                onClick={() => {
                  if (c.label === "All Programs") {
                    onCategoryChange("All Programs");
                  } else if (c.label === "Professional") {
                    onCategoryChange("Professional Certification");
                  } else {
                    onCategoryChange(c.label);
                  }
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
