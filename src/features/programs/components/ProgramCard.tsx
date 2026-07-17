import { Clock, GraduationCap, IndianRupee, ArrowRight, Wifi, MapPin, Layers } from "lucide-react";
import type { Program } from "../types/program.types";

interface ProgramCardProps {
  program: Program;
  onViewDetails: (slug: string) => void;
  onApplyNow: (program: Program) => void;
}

const categoryBorders: Record<string, string> = {
  School: "var(--color-category-school)",
  Diploma: "var(--color-category-diploma)",
  Undergraduate: "var(--color-category-undergraduate)",
  Postgraduate: "var(--color-category-postgraduate)",
  Professional: "var(--color-category-professional)",
};

const categoryBg: Record<string, string> = {
  School: "var(--color-category-school-bg)",
  Diploma: "var(--color-category-diploma-bg)",
  Undergraduate: "var(--color-category-undergraduate-bg)",
  Postgraduate: "var(--color-category-postgraduate-bg)",
  Professional: "var(--color-category-professional-bg)",
};

const modeIcons: Record<string, typeof Wifi> = {
  Online: Wifi,
  Offline: MapPin,
  Hybrid: Layers,
};

export function ProgramCard({
  program,
  onViewDetails,
  onApplyNow,
}: ProgramCardProps) {
  const border = categoryBorders[program.category] || "var(--color-outline)";
  const bg = categoryBg[program.category] || "var(--color-surface-low)";
  const ModeIcon = modeIcons[program.mode] || Wifi;

  return (
    <div
      className="group relative bg-surface-lowest rounded-2xl overflow-hidden transition-all duration-normal hover:-translate-y-1 hover:shadow-lg border border-outline-variant/20"
      style={{ borderLeftWidth: "4px", borderLeftColor: border }}
    >
      {/* Category pill — top right */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold font-display text-white shadow-sm"
          style={{ background: border }}
        >
          {program.category}
        </span>
      </div>

      <div className="p-6 pt-5">
        {/* Program name — large, bold */}
        <h3 className="text-xl font-bold font-display text-on-surface mb-2.5 pr-16 leading-snug">
          {program.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
          {program.description}
        </p>

        {/* Metadata pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold font-display bg-surface-low text-on-surface-variant">
            <Clock size={11} />
            {program.duration}
          </span>
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold font-display"
            style={{ background: bg, color: border }}
          >
            <ModeIcon size={11} />
            {program.mode}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold font-display bg-surface-low text-on-surface-variant">
            <GraduationCap size={11} />
            {program.eligibility}
          </span>
        </div>

        {/* Fee — prominent */}
        <div className="flex items-center gap-1.5 mb-5">
          <IndianRupee size={18} className="text-primary" />
          <span className="text-2xl font-extrabold font-display text-primary leading-none">
            {program.fee}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold font-display bg-primary text-on-primary rounded-xl cursor-pointer border-none hover:bg-on-primary-container hover:shadow-md transition-all duration-fast"
            onClick={() => onApplyNow(program)}
          >
            apply now
            <ArrowRight size={13} />
          </button>
          <button
            className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold font-display text-on-surface-variant bg-transparent border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-low hover:text-on-surface transition-all duration-fast"
            onClick={() => onViewDetails(program.slug)}
          >
            details
          </button>
        </div>
      </div>
    </div>
  );
}
