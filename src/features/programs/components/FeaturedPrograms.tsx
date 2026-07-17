"use client";
import { motion, easeOut } from "framer-motion";
import { Star, ArrowRight, Clock, Wifi, MapPin, Layers } from "lucide-react";
import type { Program } from "../types/program.types";

interface FeaturedProgramsProps {
  programs: Program[];
  onViewDetails: (slug: string) => void;
  onApplyNow: (program: Program) => void;
}

const categoryColors: Record<string, string> = {
  School: "var(--color-category-school)",
  Diploma: "var(--color-category-diploma)",
  Undergraduate: "var(--color-category-undergraduate)",
  Postgraduate: "var(--color-category-postgraduate)",
  Professional: "var(--color-category-professional)",
};

const categoryGradients: Record<string, string> = {
  School: "linear-gradient(135deg, var(--color-category-school) 0%, var(--color-category-school-gradient-end) 100%)",
  Diploma: "linear-gradient(135deg, var(--color-category-diploma) 0%, var(--color-category-diploma-gradient-end) 100%)",
  Undergraduate: "linear-gradient(135deg, var(--color-category-undergraduate) 0%, var(--color-category-undergraduate-gradient-end) 100%)",
  Postgraduate: "linear-gradient(135deg, var(--color-category-postgraduate) 0%, var(--color-category-postgraduate-gradient-end) 100%)",
  Professional: "linear-gradient(135deg, var(--color-category-professional) 0%, var(--color-category-professional-gradient-end) 100%)",
};

const modeIcons: Record<string, typeof Wifi> = {
  Online: Wifi,
  Offline: MapPin,
  Hybrid: Layers,
};

export function FeaturedPrograms({
  programs,
  onViewDetails,
  onApplyNow,
}: FeaturedProgramsProps) {
  if (programs.length === 0) return null;

  const [first, ...rest] = programs.slice(0, 3);

  return (
    <section className="px-8 py-14">
      <div className="container mx-auto max-w-[var(--container-max)]">
        {/* Section header — left-aligned, asymmetric */}
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

        {/* Mixed grid: 1 large + 2 small */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Large featured card */}
          {first && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[340px] flex flex-col justify-end p-8 text-white cursor-default group"
              style={{ background: categoryGradients[first.category] }}
            >
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute top-16 right-16 w-20 h-20 border-2 border-white rounded-full" />
                <div className="absolute bottom-8 left-8 text-8xl font-extrabold font-display text-white/10 leading-none">
                  {first.name.charAt(0)}
                </div>
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-display bg-white/20 backdrop-blur-sm mb-4">
                  <Star size={12} className="mr-1 fill-current" />
                  featured
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold font-display mb-3 leading-tight max-w-lg">
                  {first.name}
                </h3>
                <p className="text-sm text-white/80 mb-5 max-w-md leading-relaxed line-clamp-2">
                  {first.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-sm">
                    <Clock size={12} />
                    {first.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-sm">
                    {first.mode}
                  </span>
                  <span className="text-xl font-extrabold font-display">
                    {first.fee}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-on-surface rounded-xl font-bold text-sm font-display cursor-pointer border-none hover:bg-white/90 hover:shadow-lg transition-all duration-fast"
                    onClick={() => onApplyNow(first)}
                  >
                    apply now
                    <ArrowRight size={15} />
                  </button>
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 text-white rounded-xl font-bold text-sm font-display cursor-pointer border border-white/30 hover:bg-white/25 transition-all duration-fast"
                    onClick={() => onViewDetails(first.slug)}
                  >
                    view details
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Smaller featured cards */}
          <div className="flex flex-col gap-5">
            {rest.map((program, i) => {
              const color = categoryColors[program.category] || "var(--color-outline)";
              const ModeIcon = modeIcons[program.mode] || Wifi;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: easeOut }}
                  className="flex-1 bg-surface-lowest rounded-2xl overflow-hidden border border-outline-variant/20 p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-normal cursor-default group"
                  style={{ borderLeftWidth: "4px", borderLeftColor: color }}
                >
                  <div>
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold font-display text-white mb-3"
                      style={{ background: color }}
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
