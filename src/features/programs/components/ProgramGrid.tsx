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
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      <div className="skeleton" style={{ aspectRatio: "16/9" }} />
      <div style={{ padding: 24 }}>
        <div
          className="skeleton"
          style={{ height: 20, width: "70%", marginBottom: 12 }}
        />
        <div
          className="skeleton"
          style={{ height: 12, width: "100%", marginBottom: 6 }}
        />
        <div
          className="skeleton"
          style={{ height: 12, width: "80%", marginBottom: 18 }}
        />
        <div
          className="skeleton"
          style={{ height: 14, width: "40%", marginBottom: 18 }}
        />
        <div className="flex gap-sm">
          <div className="skeleton" style={{ flex: 1, height: 36 }} />
          <div className="skeleton" style={{ flex: 1, height: 36 }} />
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
      <section className="section">
        <div className="container grid grid--auto" style={{ gap: 20 }}>
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
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ marginBottom: 28 }}
        >
          <h2
            className="text-headline-lg"
            style={{ margin: "0 0 4px" }}
          >
            all programs
          </h2>
          <p className="text-body-sm text-muted">
            showing {programs.length} program
            {programs.length !== 1 ? "s" : ""}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid grid--auto"
          style={{ gap: 20 }}
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
