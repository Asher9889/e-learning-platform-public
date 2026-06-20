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
    transition: { type: "spring" as const, stiffness: 200, damping: 14, delay: 0.4 + i * 0.15 },
  }),
};

export function HeroSection({ onBrowsePrograms, onContactAdmissions }: HeroSectionProps) {
  return (
    <section
      className="superr"
      style={{
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
        background: "var(--color-dew-drop)",
      }}
    >
      {/* Sticker decorations */}
      <motion.div
        className="sticker"
        custom={0}
        variants={stickerFloat}
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          top: 30,
          right: "10%",
          transform: "rotate(12deg)",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            fill="#ff66cf"
            stroke="#171717"
            strokeWidth="2"
          />
          <path
            d="M14 20L18 24L26 16"
            stroke="#171717"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <motion.div
        className="sticker"
        custom={1}
        variants={stickerFloat}
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          bottom: 40,
          left: "8%",
          transform: "rotate(-8deg)",
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path
            d="M18 0L23 10L34 11L26 19L28 30L18 25L8 30L10 19L2 11L13 10L18 0Z"
            fill="#3b82f6"
            stroke="#171717"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
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
          <div
            className="tag"
            style={{
              border: "1.5px solid var(--color-sprout-sticker)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 14px",
              borderRadius: "var(--radius-tags)",
              fontFamily: "var(--font-geist)",
              fontSize: 13,
              fontWeight: 500,
              color: "var(--color-charcoal)",
              textTransform: "lowercase",
            }}
          >
            <GraduationCap size={14} />
            academic year 2025-26 admissions open
          </div>
        </motion.div>

        <motion.h1
          className="display-headline"
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
          <span style={{ color: "var(--color-marker-orange)" }}>programs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
          style={{
            fontFamily: "var(--font-geist)",
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--color-charcoal)",
            maxWidth: 580,
            margin: "0 auto 36px",
          }}
        >
          choose from school, diploma, undergraduate, and professional programs
          designed to help you achieve your academic and career goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: easeOut }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <button className="pill-btn" onClick={onBrowsePrograms}>
            browse programs →
          </button>
          <button
            className="pill-btn"
            onClick={onContactAdmissions}
            style={{ background: "var(--color-marker-orange)", color: "#fff", borderColor: "var(--color-marker-orange)" }}
          >
            contact admissions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
