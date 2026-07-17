"use client";
import { motion, easeOut } from "framer-motion";
import { BookOpen, Users, Award, HeadphonesIcon } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "32",
    label: "programs",
    desc: "diverse programs offered",
  },
  {
    icon: Users,
    value: "8,500+",
    label: "active students",
    desc: "currently enrolled learners",
  },
  {
    icon: Award,
    value: "120+",
    label: "expert faculty",
    desc: "industry-experienced mentors",
  },
  {
    icon: HeadphonesIcon,
    value: "24/7",
    label: "placement support",
    desc: "dedicated career assistance",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const countUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 120, damping: 12, delay: 0.2 },
  },
};

export function ProgramStats() {
  return (
    <section className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={container}
        className="container grid grid--auto"
        style={{ gap: 20, position: "relative" }}
      >
        {/* Sticker */}
        <motion.div
          className="badge badge--diploma"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring" as const,
            stiffness: 200,
            damping: 14,
            delay: 0.3,
          }}
          style={{
            position: "absolute",
            top: -20,
            right: "10%",
            transform: "rotate(15deg)",
            padding: 8,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle
              cx="14"
              cy="14"
              r="12"
              fill="var(--category-diploma)"
              stroke="var(--on-surface)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {stats.map((s) => (
          <motion.div key={s.label} variants={item}>
            <div
              className="card"
              style={{
                padding: 28,
                textAlign: "center",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--outline-variant)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                }}
              >
                <s.icon size={20} style={{ color: "var(--primary)" }} />
              </div>
              <motion.div
                variants={countUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-headline-lg"
                style={{
                  color: "var(--on-surface)",
                  marginBottom: 4,
                }}
              >
                {s.value}
              </motion.div>
              <div
                className="text-label-md text-muted"
                style={{ marginBottom: 2 }}
              >
                {s.label}
              </div>
              <div className="text-body-sm text-muted">{s.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
