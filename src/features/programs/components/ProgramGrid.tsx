"use client";
import { motion, easeOut } from "framer-motion";
import type { Program } from "../types/program.types";
import { ProgramCard } from "./ProgramCard";
import { EmptyPrograms } from "./EmptyPrograms";

interface ProgramGridProps {
  programs: Program[];
  onViewDetails: (slug: string) => void;
  onApplyNow: (program: Program) => void;
  onResetFilters: () => void;
  isLoading: boolean;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

function SkeletonCard() {
  return (
    <div className="bg-surface-lowest border border-outline-variant/20 rounded-2xl overflow-hidden" style={{ borderLeftWidth: "4px", borderLeftColor: "var(--color-outline-variant)" }}>
      <div className="p-6 pt-5">
        <div className="skeleton h-6 w-3/4 mb-3 rounded-lg" />
        <div className="skeleton h-3.5 w-full mb-1.5 rounded" />
        <div className="skeleton h-3.5 w-4/5 mb-4 rounded" />
        <div className="flex gap-2 mb-5">
          <div className="skeleton h-5 w-16 rounded-md" />
          <div className="skeleton h-5 w-14 rounded-md" />
          <div className="skeleton h-5 w-20 rounded-md" />
        </div>
        <div className="skeleton h-7 w-28 mb-5 rounded" />
        <div className="flex gap-3">
          <div className="skeleton flex-1 h-10 rounded-xl" />
          <div className="skeleton w-20 h-10 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function ProgramGrid({
  programs,
  onViewDetails,
  onApplyNow,
  onResetFilters,
  isLoading,
}: ProgramGridProps) {
  if (isLoading) {
    return (
      <section className="px-8 py-14">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[var(--container-max)]">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (programs.length === 0) {
    return <EmptyPrograms onResetFilters={onResetFilters} />;
  }

  return (
    <section className="px-8 py-14">
      <div className="container mx-auto max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-on-surface m-0 mb-1 leading-tight">
            all programs
          </h2>
          <p className="text-base text-on-surface-variant">
            showing {programs.length} program{programs.length !== 1 ? "s" : ""}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={cardItem}>
              <ProgramCard
                program={program}
                onViewDetails={onViewDetails}
                onApplyNow={onApplyNow}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
