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
    <section className="bg-surface-low border-y border-outline-variant py-12">
      <div className="container mx-auto text-center px-8 max-w-[var(--container-max)]">
        <p className="text-sm font-semibold font-display text-on-surface-variant mb-8">
          Designed for institutions of every size—from a few hundred learners to
          tens of thousands.
        </p>
        <div className="flex flex-wrap items-center justify-center opacity-60 gap-6 md:gap-12">
          {institutions.map((inst) => (
            <span
              key={inst.label}
              className="flex items-center gap-2 text-xl font-semibold font-display text-on-surface"
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
