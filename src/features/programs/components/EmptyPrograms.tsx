import { SearchX, RotateCcw } from "lucide-react";

interface EmptyProgramsProps {
  onResetFilters: () => void;
}

export function EmptyPrograms({ onResetFilters }: EmptyProgramsProps) {
  return (
    <section className="section" style={{ paddingBottom: 80 }}>
      <div className="container">
        <div
          className="card"
          style={{
            padding: "56px 40px",
            textAlign: "center",
            cursor: "default",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--outline-variant)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              color: "var(--on-surface-variant)",
            }}
          >
            <SearchX size={24} />
          </div>
          <h2
            className="text-headline-md"
            style={{ marginBottom: 8 }}
          >
            no programs found
          </h2>
          <p
            className="text-body-sm text-muted"
            style={{ marginBottom: 24 }}
          >
            try adjusting your filters or search criteria.
          </p>
          <button
            className="btn btn--secondary"
            onClick={onResetFilters}
            style={{ display: "inline-flex", margin: "0 auto" }}
          >
            <RotateCcw size={14} />
            reset filters
          </button>
        </div>
      </div>
    </section>
  );
}
