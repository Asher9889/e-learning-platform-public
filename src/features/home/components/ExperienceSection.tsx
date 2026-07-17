"use client";
import { motion, easeOut } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const roles = [
  {
    title: "Administrator",
    features: [
      "Institution ROI Reports",
      "User Access Control",
      "Finance & Fee Tracking",
    ],
    accent: "var(--primary-fixed)",
    iconColor: "var(--primary)",
  },
  {
    title: "Teacher",
    features: ["Lesson Planner", "Auto-Attendance", "Gradebook Automation"],
    accent: "var(--tertiary-fixed)",
    iconColor: "var(--tertiary)",
  },
  {
    title: "Student",
    features: [
      "Personalized Timeline",
      "Peer Collaboration",
      "Gamified Badges",
    ],
    accent: "var(--primary-fixed)",
    iconColor: "var(--primary)",
  },
  {
    title: "Parents",
    features: [
      "Real-time Attendance",
      "Fee Payment Portal",
      "Direct Messaging",
    ],
    accent: "var(--tertiary-fixed)",
    iconColor: "var(--tertiary)",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function ExperienceSection() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-margin-lg)" }}>
          <h2 className="text-headline-lg" style={{ marginBottom: 16 }}>
            A Tailored Experience for Everyone
          </h2>
          <p
            className="text-body-lg"
            style={{
              color: "var(--on-surface-variant)",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            We understand that one size doesn&apos;t fit all. Our platform adapts
            to the user role.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "var(--spacing-gutter)",
          }}
        >
          {roles.map((role) => (
            <motion.div
              key={role.title}
              variants={cardItem}
              className="card"
              style={{ padding: 0, overflow: "hidden", cursor: "default" }}
            >
              {/* Color Header */}
              <div
                style={{
                  height: 192,
                  background: role.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "var(--radius-full)",
                    background: "rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="text-display-lg" style={{ color: role.iconColor, fontSize: 32 }}>
                    {role.title[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <h4
                  className="text-headline-sm"
                  style={{ marginBottom: 16 }}
                >
                  {role.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {role.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex text-body-sm"
                      style={{ alignItems: "center", gap: 8, color: "var(--on-surface-variant)" }}
                    >
                      <CheckCircle2
                        size={18}
                        style={{ color: role.iconColor, flexShrink: 0 }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
