import { Search, RotateCcw } from "lucide-react";

const programTypes = [
  "All Programs",
  "School",
  "Diploma",
  "Undergraduate",
  "Postgraduate",
  "Professional Certification",
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
  return (
    <div className="sticky-bar">
      <div
        className="container flex flex--center"
        style={{ padding: "10px var(--spacing-container-padding)", gap: 10 }}
      >
        {/* Search */}
        <div style={{ position: "relative", flex: "0 1 260px" }}>
          <Search
            size={14}
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--on-surface-variant)",
            }}
          />
          <input
            className="input input--search"
            placeholder="search programs..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        {/* Category */}
        <select
          className="select"
          value={categoryFilter}
          onChange={(e) => onCategoryChange(e.target.value)}
          style={{ flex: "0 0 auto", maxWidth: 160 }}
        >
          {programTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Duration */}
        <select
          className="select"
          value={durationFilter}
          onChange={(e) => onDurationChange(e.target.value)}
          style={{ flex: "0 0 auto", maxWidth: 110 }}
        >
          {durations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          style={{ flex: "0 0 auto", maxWidth: 120 }}
        >
          {sortOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>

        {/* Reset */}
        <button
          className="btn btn--secondary btn--icon"
          onClick={onReset}
          title="Reset Filters"
        >
          <RotateCcw size={15} />
        </button>
      </div>
    </div>
  );
}
