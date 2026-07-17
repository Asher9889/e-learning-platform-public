"use client";

interface HeroSectionProps {
  scrollTo?: (id: string) => void;
}

export function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <section
      className="section"
      style={{
        padding: "80px var(--spacing-container-padding) 64px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sticker decorations */}
      <div
        className="badge badge--school"
        style={{
          position: "absolute",
          top: 40,
          right: "12%",
          transform: "rotate(12deg)",
          padding: "8px 12px",
        }}
      >
        <svg width="40" height="56" viewBox="0 0 40 56" fill="none">
          <path
            d="M20 0L26 18L40 20L28 32L32 52L20 42L8 52L12 32L0 20L14 18L20 0Z"
            fill="var(--category-school)"
            stroke="var(--on-surface)"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div
        className="badge badge--professional"
        style={{
          position: "absolute",
          bottom: 40,
          left: "8%",
          transform: "rotate(-8deg)",
          padding: "8px 12px",
        }}
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle
            cx="22"
            cy="22"
            r="20"
            fill="var(--category-professional)"
            stroke="var(--on-surface)"
            strokeWidth="2"
          />
          <circle cx="14" cy="18" r="3" fill="var(--on-surface)" />
          <circle cx="30" cy="18" r="3" fill="var(--on-surface)" />
          <path
            d="M14 30C17 34 27 34 30 30"
            stroke="var(--on-surface)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left Column */}
        <div>
          <h1
            className="text-display-lg"
            style={{ margin: 0, marginBottom: 16 }}
          >
            learn smarter,
            <br />
            together
          </h1>

          <p
            className="text-body-lg text-primary"
            style={{ marginBottom: 24 }}
          >
            built for universities, coaching institutes &amp; enterprises
          </p>

          <p
            className="text-body-lg"
            style={{
              maxWidth: 460,
              marginBottom: 32,
              color: "var(--on-surface-variant)",
            }}
          >
            a complete learning management system with live classes, uploaded
            content, assessments, and progress tracking — all in one place.{" "}
            <span style={{ color: "var(--primary)", fontWeight: 500 }}>
              no more juggling tools.
            </span>
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 16,
            }}
          >
            <button
              className="btn btn--primary"
              onClick={() => scrollTo?.("contact")}
            >
              start your journey →
            </button>
            <button
              className="btn btn--secondary"
              onClick={() => scrollTo?.("features")}
            >
              explore features
            </button>
          </div>

          <p className="text-body-sm text-muted">
            free consultation · setup in 48 hours · no credit card needed
          </p>
        </div>

        {/* Right Column — Product Notebook Visual */}
        <div
          className="card"
          style={{
            transform: "rotate(3deg)",
            padding: 0,
            overflow: "hidden",
            maxWidth: 460,
            justifySelf: "end",
          }}
        >
          {/* Notebook cover */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)",
              padding: 40,
              position: "relative",
            }}
          >
            {/* Name Label Sticker */}
            <div
              style={{
                background: "var(--surface-container-lowest)",
                padding: 20,
                maxWidth: 240,
                border: "1px solid var(--on-surface)",
                borderRadius: "var(--radius-md)",
                margin: "0 auto",
                transform: "rotate(-2deg)",
              }}
            >
              <div
                className="text-headline-sm"
                style={{ color: "var(--on-surface)", marginBottom: 4 }}
              >
                name: sarah
              </div>
              <div
                className="text-body-sm"
                style={{ color: "var(--on-surface-variant)", marginBottom: 2 }}
              >
                class: b.sc. computer science
              </div>
              <div
                className="text-body-sm"
                style={{ color: "var(--on-surface-variant)" }}
              >
                roll no: 2024/CS/045
              </div>
            </div>
          </div>

          {/* Notebook content preview */}
          <div style={{ padding: 24 }}>
            {[
              { dot: "var(--primary)", text: "8 courses enrolled" },
              { dot: "var(--category-diploma)", text: "next live class in 30 min" },
              { dot: "var(--category-school)", text: "87% overall progress" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "var(--radius-full)",
                    background: item.dot,
                    flexShrink: 0,
                  }}
                />
                <span className="text-body-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
