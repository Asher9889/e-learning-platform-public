"use client";
import { motion, easeOut } from "framer-motion";
import { Star, GraduationCap, ArrowRight } from "lucide-react";
import type { Program } from "../types/program.types";

interface FeaturedProgramsProps {
  programs: Program[];
  onViewDetails: (slug: string) => void;
  onApplyNow: (program: Program) => void;
}

const categoryColors: Record<string, string> = {
  School: "var(--category-school)",
  Diploma: "var(--category-diploma)",
  Undergraduate: "var(--category-undergraduate)",
  Postgraduate: "var(--category-postgraduate)",
  Professional: "var(--category-professional)",
};

const categoryGradients: Record<string, string> = {
  School: "linear-gradient(135deg, var(--category-school) 0%, #1d4ed8 100%)",
  Diploma: "linear-gradient(135deg, var(--category-diploma) 0%, #15803d 100%)",
  Undergraduate:
    "linear-gradient(135deg, var(--category-undergraduate) 0%, #7c3aed 100%)",
  Postgraduate:
    "linear-gradient(135deg, var(--category-postgraduate) 0%, #ea580c 100%)",
  Professional:
    "linear-gradient(135deg, var(--category-professional) 0%, #be123c 100%)",
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function FeaturedPrograms({
  programs,
  onViewDetails,
  onApplyNow,
}: FeaturedProgramsProps) {
  if (programs.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ marginBottom: 32 }}
        >
          <div
            className="flex flex--center"
            style={{ gap: 8, marginBottom: 4 }}
          >
            <Star
              size={18}
              style={{
                fill: "var(--primary)",
                color: "var(--primary)",
              }}
            />
            <h2
              className="text-headline-lg"
              style={{ margin: 0 }}
            >
              featured programs
            </h2>
          </div>
          <p className="text-body-sm text-muted">
            most popular programs among students.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid grid--auto"
          style={{ gap: 16 }}
        >
          {programs.slice(0, 4).map((program) => (
            <motion.div
              key={program.id}
              variants={cardItem}
              className="card"
              style={{
                padding: 24,
                cursor: "default",
              }}
            >
              {/* Category badge */}
              <span
                className="badge"
                style={{
                  color: "#fff",
                  background: categoryColors[program.category] || "#666",
                  marginBottom: 12,
                }}
              >
                {program.category}
              </span>

              {/* Thumbnail */}
              <div
                style={{
                  aspectRatio: "16/9",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  background: categoryGradients[program.category],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <GraduationCap
                  size={32}
                  style={{ color: "#fff", opacity: 0.3 }}
                />
              </div>

              <h3
                className="text-headline-sm"
                style={{
                  marginBottom: 8,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {program.name}
              </h3>

              <p
                className="text-body-sm text-muted"
                style={{
                  marginBottom: 14,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {program.description}
              </p>

              <div
                className="flex flex--between"
                style={{ marginBottom: 16 }}
              >
                <span
                  className="text-headline-sm"
                  style={{ color: "var(--primary)" }}
                >
                  {program.fee}
                </span>
                <span className="text-body-sm text-muted">
                  {program.duration}
                </span>
              </div>

              <div className="flex gap-sm">
                <button
                  className="btn btn--secondary btn--sm"
                  onClick={() => onViewDetails(program.slug)}
                  style={{ flex: 1 }}
                >
                  details
                </button>
                <button
                  className="btn btn--primary btn--sm"
                  onClick={() => onApplyNow(program)}
                  style={{ flex: 1 }}
                >
                  apply
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
