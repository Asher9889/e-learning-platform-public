"use client";
import { motion, easeOut } from "framer-motion";
import { CloudOff, FileText, RefreshCw, Database } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Unified Workflow",
    desc: "Replace fragmented tools with one centralized hub for every stakeholder.",
  },
  {
    icon: Database,
    title: "Single Source of Truth",
    desc: "All student data, from enrollment to alumni status, in one profile.",
  },
];

export function EducationChange() {
  return (
    <section className="section">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--spacing-margin-lg)",
          alignItems: "center",
        }}
      >
        {/* Illustration Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          style={{
            background: "var(--surface-container-high)",
            borderRadius: 32,
            padding: 48,
            position: "relative",
            overflow: "hidden",
            minHeight: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--outline-variant)",
          }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: 320 }}>
            {/* Scattered elements */}
            <div
              style={{
                position: "absolute",
                top: -40,
                left: -40,
                width: 96,
                height: 96,
                background: "var(--error-container)",
                borderRadius: "var(--radius-lg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "rotate(12deg)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <CloudOff size={32} style={{ color: "var(--error)" }} />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                width: 112,
                height: 112,
                background: "var(--surface-variant)",
                borderRadius: "var(--radius-lg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "rotate(-6deg)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <FileText size={32} style={{ color: "var(--on-surface-variant)" }} />
            </div>
            {/* Center card */}
            <div
              style={{
                padding: 40,
                background: "var(--surface-container-lowest)",
                borderRadius: 24,
                border: "2px dashed var(--outline-variant)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ height: 16, width: "75%", background: "var(--outline-variant)", borderRadius: 4, opacity: 0.3 }} />
              <div style={{ height: 16, width: "100%", background: "var(--outline-variant)", borderRadius: 4, opacity: 0.3 }} />
              <div style={{ height: 16, width: "50%", background: "var(--outline-variant)", borderRadius: 4, opacity: 0.3 }} />
              <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--error-container)" }} />
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--surface-variant)" }} />
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--tertiary-container)" }} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          style={{ paddingLeft: "var(--spacing-margin-lg)" }}
        >
          <h2 className="text-headline-lg" style={{ marginBottom: 16 }}>
            Education is changing.
            <br />
            Your software should too.
          </h2>
          <p
            className="text-body-lg"
            style={{
              color: "var(--on-surface-variant)",
              marginBottom: 32,
            }}
          >
            Legacy systems often force administrators to juggle a dozen
            disconnected platforms—attendance software, separate live class
            tools, manual assessment trackers, and clunky reporting sheets.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {features.map((feat) => (
              <div key={feat.title} className="flex" style={{ gap: 16 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius-full)",
                    background: "var(--primary-container)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    opacity: 0.15,
                  }}
                >
                  <feat.icon size={24} style={{ color: "var(--primary)" }} />
                </div>
                <div>
                  <p className="text-label-md" style={{ marginBottom: 4 }}>
                    {feat.title}
                  </p>
                  <p className="text-body-sm" style={{ color: "var(--on-surface-variant)" }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
