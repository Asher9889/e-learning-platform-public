"use client";
import { motion, easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onApplyNow: () => void;
  onContactAdmissions: () => void;
}

export function CTASection({
  onApplyNow,
  onContactAdmissions,
}: CTASectionProps) {
  return (
    <section className="section" style={{ paddingBottom: 80 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="container"
      >
        <div
          className="card"
          style={{
            padding: "56px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            background: "var(--surface-container-low)",
            cursor: "default",
          }}
        >
          {/* Sticker decorations */}
          <motion.div
            className="badge badge--school"
            initial={{ opacity: 0, scale: 0, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{
              type: "spring" as const,
              stiffness: 200,
              damping: 14,
              delay: 0.3,
            }}
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              padding: 8,
            }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="var(--category-school)"
                stroke="var(--on-surface)"
                strokeWidth="2"
              />
              <path
                d="M12 18L16 22L24 14"
                stroke="var(--on-surface)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <motion.div
            className="badge badge--professional"
            initial={{ opacity: 0, scale: 0, rotate: 12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
            viewport={{ once: true }}
            transition={{
              type: "spring" as const,
              stiffness: 200,
              damping: 14,
              delay: 0.45,
            }}
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              padding: 8,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="6"
                fill="var(--category-professional)"
                stroke="var(--on-surface)"
                strokeWidth="2"
              />
              <path
                d="M16 8V24M8 16H24"
                stroke="var(--on-surface)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          <h2
            className="text-headline-lg"
            style={{
              margin: "0 auto 12px",
              maxWidth: 600,
            }}
          >
            ready to start your learning journey?
          </h2>
          <p
            className="text-body-md text-muted"
            style={{
              maxWidth: 500,
              margin: "0 auto 28px",
            }}
          >
            apply today and take the next step toward your academic and
            professional success.
          </p>
          <div className="flex flex--center flex--wrap gap-sm">
            <button
              className="btn btn--primary"
              onClick={onApplyNow}
            >
              apply now
              <ArrowRight size={16} />
            </button>
            <button
              className="btn btn--secondary"
              onClick={onContactAdmissions}
            >
              contact admissions
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
