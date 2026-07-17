"use client";
import { motion, easeOut } from "framer-motion";
import { History, Network, Check } from "lucide-react";

const traditionalSteps = [
  { title: "Admissions", desc: "Paper forms & manual data entry." },
  { title: "Daily Ops", desc: "Separate app for attendance & emails." },
  { title: "Reporting", desc: "End-of-term manual Excel consolidation." },
];

const unifiedSteps = [
  {
    title: "Single CRM Entry",
    desc: "Automated flow from Lead to Enrollment.",
  },
  {
    title: "Integrated Activity Stream",
    desc: "Attendance, LMS, and Behavior in one feed.",
  },
  {
    title: "Real-time Global Analytics",
    desc: "Live institution-wide performance tracking.",
  },
];

export function PlatformComparison() {
  return (
    <section
      className="section"
      style={{ background: "var(--surface-container-low)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-margin-lg)" }}>
          <h2 className="text-headline-lg" style={{ marginBottom: 16 }}>
            Unified Student Records vs The Rest
          </h2>
          <p
            className="text-body-lg"
            style={{ color: "var(--on-surface-variant)" }}
          >
            See how our platform consolidates a student&apos;s entire journey.
          </p>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--spacing-gutter)",
          }}
        >
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="card"
            style={{ padding: 40, cursor: "default" }}
          >
            <h4
              className="text-headline-sm"
              style={{
                marginBottom: 32,
                color: "var(--on-surface-variant)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <History size={20} />
              Traditional Management
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 32,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 15,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: "var(--outline-variant)",
                  opacity: 0.3,
                }}
              />
              {traditionalSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex"
                  style={{ gap: 24, position: "relative" }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "var(--radius-full)",
                      background: "var(--outline-variant)",
                      opacity: 0.3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p className="text-label-md" style={{ marginBottom: 4 }}>
                      {step.title}
                    </p>
                    <p
                      className="text-body-sm"
                      style={{ color: "var(--on-surface-variant)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Unified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
            style={{
              padding: 40,
              borderRadius: 32,
              background: "var(--primary-container)",
              border: "2px solid var(--primary-container)",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: -80,
                bottom: -80,
                width: 256,
                height: 256,
                borderRadius: "var(--radius-full)",
                background: "var(--primary)",
                opacity: 0.05,
              }}
            />
            <h4
              className="text-headline-sm"
              style={{
                marginBottom: 32,
                color: "var(--on-primary-container)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Network size={20} />
              Unified Records
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 32,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 15,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: "var(--primary)",
                  opacity: 0.3,
                }}
              />
              {unifiedSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex"
                  style={{ gap: 24, position: "relative" }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "var(--radius-full)",
                      background: "var(--primary-container)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      flexShrink: 0,
                      boxShadow: "var(--shadow-md)",
                    }}
                  >
                    <Check
                      size={16}
                      style={{ color: "var(--on-primary)" }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-label-md"
                      style={{
                        marginBottom: 4,
                        color: "var(--on-primary-container)",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-body-sm"
                      style={{ color: "var(--on-secondary-container)" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
