import { School, Building2, Landmark, Palette, Award } from "lucide-react";

const institutions = [
  { icon: School, label: "Schools" },
  { icon: Building2, label: "Colleges" },
  { icon: Landmark, label: "Universities" },
  { icon: Palette, label: "Coaching Institutes" },
  { icon: Award, label: "Training Academies" },
];

export function TrustBar() {
  return (
    <section
      style={{
        background: "var(--surface-container-low)",
        padding: "48px 0",
        borderTop: "1px solid var(--outline-variant)",
        borderBottom: "1px solid var(--outline-variant)",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <p
          className="text-label-md"
          style={{
            color: "var(--on-surface-variant)",
            marginBottom: 32,
          }}
        >
          Designed for institutions of every size—from a few hundred learners to
          tens of thousands.
        </p>
        <div
          className="flex flex--center flex--wrap"
          style={{ gap: "24px 48px", opacity: 0.6 }}
        >
          {institutions.map((inst) => (
            <span
              key={inst.label}
              className="text-headline-sm flex"
              style={{ alignItems: "center", gap: 8, fontWeight: 700 }}
            >
              <inst.icon size={20} />
              {inst.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
