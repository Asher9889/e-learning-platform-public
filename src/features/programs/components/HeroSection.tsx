"use client";
import { motion, easeOut } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface HeroSectionProps {
  onBrowsePrograms: () => void;
  onContactAdmissions: () => void;
}

const stickerFloat = {
  hidden: { opacity: 0, scale: 0.6, rotate: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: i === 0 ? 12 : -8,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 14,
      delay: 0.4 + i * 0.15,
    },
  }),
};

export function HeroSection({
  onBrowsePrograms,
  onContactAdmissions,
}: HeroSectionProps) {
  return (
    <section
      className="section"
      style={{
        padding: "80px var(--spacing-container-padding)",
        position: "relative",
        overflow: "hidden",
        background: "var(--surface-container-low)",
      }}
    >
      {/* Sticker decorations */}
      <motion.div
        className="badge badge--professional"
        custom={0}
        variants={stickerFloat}
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          top: 30,
          right: "10%",
          transform: "rotate(12deg)",
          padding: 8,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            fill="var(--category-professional)"
            stroke="var(--on-surface)"
            strokeWidth="2"
          />
          <path
            d="M14 20L18 24L26 16"
            stroke="var(--on-surface)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <motion.div
        className="badge badge--school"
        custom={1}
        variants={stickerFloat}
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          bottom: 40,
          left: "8%",
          transform: "rotate(-8deg)",
          padding: 8,
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M18 0L23 10L34 11L26 19L28 30L18 25L8 30L10 19L2 11L13 10L18 0Z"
            fill="var(--category-school)"
            stroke="var(--on-surface)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <div
        className="container"
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <span className="badge badge--tertiary">
            <GraduationCap size={14} />
            academic year 2025-26 admissions open
          </span>
        </motion.div>

        <motion.h1
          className="text-display-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            margin: "0 auto 16px",
            maxWidth: 800,
          }}
        >
          explore our
          <br />
          <span style={{ color: "var(--primary)" }}>programs</span>
        </motion.h1>

        <motion.p
          className="text-body-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
          style={{
            maxWidth: 580,
            margin: "0 auto 36px",
            color: "var(--on-surface-variant)",
          }}
        >
          choose from school, diploma, undergraduate, and professional programs
          designed to help you achieve your academic and career goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: easeOut }}
          className="flex flex--center flex--wrap gap-sm"
        >
          <button className="btn btn--primary" onClick={onBrowsePrograms}>
            browse programs →
          </button>
          <button
            className="btn btn--secondary"
            onClick={onContactAdmissions}
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              borderColor: "var(--primary)",
            }}
          >
            contact admissions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
