"use client";
import { motion, easeOut } from "framer-motion";
import { Star, ArrowRight, Clock, Wifi, MapPin, Layers } from "lucide-react";
import type { Program } from "../types/program.types";

interface FeaturedProgramsProps {
  programs: Program[];
  onViewDetails: (slug: string) => void;
  onApplyNow: (program: Program) => void;
}

const categoryTokens: Record<string, { color: string; text: string; bg: string; gradient: string }> = {
  School: {
    color: "var(--color-category-school)",
    text: "var(--color-category-school-text)",
    bg: "var(--color-category-school-bg)",
    gradient: "linear-gradient(135deg, var(--color-category-school) 0%, var(--color-category-school-gradient-end) 100%)",
  },
  Diploma: {
    color: "var(--color-category-diploma)",
    text: "var(--color-category-diploma-text)",
    bg: "var(--color-category-diploma-bg)",
    gradient: "linear-gradient(135deg, var(--color-category-diploma) 0%, var(--color-category-diploma-gradient-end) 100%)",
  },
  Undergraduate: {
    color: "var(--color-category-undergraduate)",
    text: "var(--color-category-undergraduate-text)",
    bg: "var(--color-category-undergraduate-bg)",
    gradient: "linear-gradient(135deg, var(--color-category-undergraduate) 0%, var(--color-category-undergraduate-gradient-end) 100%)",
  },
  Postgraduate: {
    color: "var(--color-category-postgraduate)",
    text: "var(--color-category-postgraduate-text)",
    bg: "var(--color-category-postgraduate-bg)",
    gradient: "linear-gradient(135deg, var(--color-category-postgraduate) 0%, var(--color-category-postgraduate-gradient-end) 100%)",
  },
  Professional: {
    color: "var(--color-category-professional)",
    text: "var(--color-category-professional-text)",
    bg: "var(--color-category-professional-bg)",
    gradient: "linear-gradient(135deg, var(--color-category-professional) 0%, var(--color-category-professional-gradient-end) 100%)",
  },
};

const modeIcons: Record<string, typeof Wifi> = {
  Online: Wifi,
  Offline: MapPin,
  Hybrid: Layers,
};

function getTokens(category: string) {
  return categoryTokens[category] || categoryTokens.School;
}

export function FeaturedPrograms({
  programs,
  onViewDetails,
  onApplyNow,
}: FeaturedProgramsProps) {
  if (programs.length === 0) return null;

  const [hero, ...rest] = programs;

  return (
    <section className="px-8 py-14">
      <div className="container mx-auto max-w-[var(--container-max)]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Star size={20} className="text-primary fill-primary" />
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-on-surface m-0 leading-tight">
              most popular
            </h2>
          </div>
          <p className="text-base text-on-surface-variant ml-8">
            programs our students love most.
          </p>
        </motion.div>

        {/* Hero card — always first featured program */}
        <HeroCard program={hero} onApplyNow={onApplyNow} onViewDetails={onViewDetails} />

        {/* Remaining programs — adaptive grid */}
        {rest.length > 0 && (
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((program, i) => (
              <CompactCard
                key={program.id}
                program={program}
                index={i}
                onApplyNow={onApplyNow}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Hero Card (first featured) ─── */

function HeroCard({
  program,
  onApplyNow,
  onViewDetails,
}: {
  program: Program;
  onApplyNow: (p: Program) => void;
  onViewDetails: (slug: string) => void;
}) {
  const t = getTokens(program.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-3xl overflow-hidden min-h-[320px] md:min-h-[380px] flex flex-col justify-end p-8 md:p-10 cursor-default group"
      style={{ background: t.gradient }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-8 right-8 w-36 h-36 rounded-full opacity-10"
          style={{ border: `2px solid ${t.text}` }}
        />
        <div
          className="absolute top-20 right-20 w-24 h-24 rounded-full opacity-10"
          style={{ border: `2px solid ${t.text}` }}
        />
        <div
          className="absolute bottom-6 left-8 text-[120px] md:text-[160px] font-extrabold font-display leading-none select-none opacity-10"
          style={{ color: t.text }}
        >
          {program.name.charAt(0)}
        </div>
      </div>

      <div className="relative z-10">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-display backdrop-blur-sm mb-4"
          style={{ background: `color-mix(in srgb, ${t.text} 20%, transparent)`, color: t.text }}
        >
          <Star size={12} className="fill-current" />
          featured
        </span>

        {/* Name */}
        <h3
          className="text-3xl md:text-4xl font-extrabold font-display mb-3 leading-tight max-w-2xl"
          style={{ color: t.text }}
        >
          {program.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-5 max-w-lg leading-relaxed line-clamp-2"
          style={{ color: `color-mix(in srgb, ${t.text} 80%, transparent)` }}
        >
          {program.description}
        </p>

        {/* Meta pills */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
            style={{ background: `color-mix(in srgb, ${t.text} 15%, transparent)`, color: t.text }}
          >
            <Clock size={12} />
            {program.duration}
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
            style={{ background: `color-mix(in srgb, ${t.text} 15%, transparent)`, color: t.text }}
          >
            {program.mode}
          </span>
          <span
            className="text-xl font-extrabold font-display"
            style={{ color: t.text }}
          >
            {program.fee}
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm font-display cursor-pointer border-none transition-all duration-fast"
            style={{
              background: t.text,
              color: t.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={() => onApplyNow(program)}
          >
            apply now
            <ArrowRight size={15} />
          </button>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm font-display cursor-pointer border transition-all duration-fast"
            style={{
              background: `color-mix(in srgb, ${t.text} 15%, transparent)`,
              color: t.text,
              borderColor: `color-mix(in srgb, ${t.text} 30%, transparent)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `color-mix(in srgb, ${t.text} 25%, transparent)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `color-mix(in srgb, ${t.text} 15%, transparent)`;
            }}
            onClick={() => onViewDetails(program.slug)}
          >
            view details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Compact Card (remaining featured) ─── */

function CompactCard({
  program,
  index,
  onApplyNow,
  onViewDetails,
}: {
  program: Program;
  index: number;
  onApplyNow: (p: Program) => void;
  onViewDetails: (slug: string) => void;
}) {
  const t = getTokens(program.category);
  const ModeIcon = modeIcons[program.mode] || Wifi;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: easeOut }}
      className="bg-surface-lowest rounded-2xl overflow-hidden border border-outline-variant/20 p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-normal cursor-default"
      style={{ borderLeftWidth: "4px", borderLeftColor: t.color }}
    >
      <div>
        <span
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-display mb-3"
          style={{ background: t.color, color: t.text }}
        >
          {program.category}
        </span>
        <h3 className="text-lg font-bold font-display text-on-surface mb-2 leading-snug">
          {program.name}
        </h3>
        <p className="text-sm text-on-surface-variant line-clamp-2 mb-3 leading-relaxed">
          {program.description}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-extrabold font-display text-primary">
            {program.fee}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-on-surface-variant">
            <ModeIcon size={12} />
            {program.mode}
          </span>
        </div>
        <div className="flex gap-3">
          <button
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold font-display bg-primary text-on-primary rounded-xl cursor-pointer border-none hover:bg-on-primary-container hover:shadow-md transition-all duration-fast"
            onClick={() => onApplyNow(program)}
          >
            apply
            <ArrowRight size={12} />
          </button>
          <button
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold font-display text-on-surface-variant bg-transparent border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-low transition-all duration-fast"
            onClick={() => onViewDetails(program.slug)}
          >
            details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
