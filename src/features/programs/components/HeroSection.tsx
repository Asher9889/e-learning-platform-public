"use client";
import { motion, easeOut } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onBrowsePrograms: () => void;
  onContactAdmissions: () => void;
}

const categories = [
  { label: "School", color: "var(--color-category-school)" },
  { label: "Diploma", color: "var(--color-category-diploma)" },
  { label: "Undergraduate", color: "var(--color-category-undergraduate)" },
  { label: "Postgraduate", color: "var(--color-category-postgraduate)" },
  { label: "Professional", color: "var(--color-category-professional)" },
];

export function HeroSection({
  onBrowsePrograms,
  onContactAdmissions,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-surface-low">
      {/* Top color strip */}
      <div className="flex h-1.5">
        {categories.map((c) => (
          <div key={c.label} className="flex-1" style={{ background: c.color }} />
        ))}
      </div>

      <div className="px-8 pt-16 pb-20 relative">
        {/* Sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 14, delay: 0.6 }}
          className="absolute top-10 right-[12%] hidden lg:block"
        >
          <div className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-2xl font-display font-bold text-sm rotate-6 shadow-md">
            admissions open 2025-26
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 8 }}
          animate={{ opacity: 1, scale: 1, rotate: 8 }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 14, delay: 0.75 }}
          className="absolute bottom-16 right-[22%] hidden lg:block"
        >
          <div className="bg-category-school text-white px-3 py-1.5 rounded-full font-display font-bold text-xs shadow-md">
            32+ programs
          </div>
        </motion.div>

        <div className="container mx-auto max-w-[var(--container-max)]">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-bold font-display text-on-surface-variant uppercase tracking-wider">
                academic year 2025-26
              </span>
            </motion.div>

            {/* Headline — asymmetric, oversized */}
            <motion.h1
              className="text-6xl md:text-8xl font-extrabold font-display text-on-surface leading-[0.9] tracking-tight mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              explore
              <br />
              <span className="text-primary">our programs</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
            >
              from school to professional certification — find the right program
              to shape your future.
            </motion.p>

            {/* Category strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: easeOut }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {categories.map((c, i) => (
                <motion.span
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-display text-white"
                  style={{ background: c.color }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  {c.label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: easeOut }}
              className="flex flex-wrap gap-4"
            >
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-2xl font-bold text-base font-display cursor-pointer border-none hover:bg-on-primary-container hover:shadow-lg transition-all duration-fast"
                onClick={onBrowsePrograms}
              >
                browse programs
                <ArrowRight size={18} />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface-lowest text-on-surface border-2 border-outline-variant rounded-2xl font-bold text-base font-display cursor-pointer hover:bg-surface-low hover:border-outline transition-all duration-fast"
                onClick={onContactAdmissions}
              >
                talk to admissions
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
