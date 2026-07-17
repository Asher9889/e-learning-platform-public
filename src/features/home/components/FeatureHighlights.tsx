"use client";
import { motion, easeOut } from "framer-motion";
import { Video, Shield, BarChart3, FileCheck } from "lucide-react";

export function FeatureHighlights() {
  return (
    <section className="section" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-margin-lg)" }}>
      {/* Live Interactive Classrooms */}
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--spacing-margin-lg)",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          style={{ order: 2 }}
        >
          <div
            style={{
              background: "var(--surface-container-high)",
              borderRadius: 48,
              padding: 32,
              transform: "translateX(48px)",
            }}
          >
            <div
              style={{
                borderRadius: 24,
                background: "var(--surface-container-lowest)",
                aspectRatio: "16/10",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--outline-variant)",
              }}
            >
              <Video
                size={64}
                style={{ color: "var(--primary)", opacity: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          style={{ order: 1 }}
        >
          <h2 className="text-headline-lg" style={{ marginBottom: 16 }}>
            Live Interactive Classrooms
          </h2>
          <p
            className="text-body-lg"
            style={{
              color: "var(--on-surface-variant)",
              marginBottom: 32,
            }}
          >
            Host high-definition virtual classes without ever leaving the
            platform. Includes built-in whiteboard, polls, and breakout rooms
            designed for pedagogical success.
          </p>
          <div className="flex" style={{ gap: 48 }}>
            <div style={{ textAlign: "center" }}>
              <div className="text-display-lg" style={{ color: "var(--primary)", fontSize: 36 }}>
                4K
              </div>
              <p
                className="text-label-sm"
                style={{ textTransform: "uppercase", opacity: 0.6 }}
              >
                Streaming
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="text-display-lg" style={{ color: "var(--primary)", fontSize: 36 }}>
                100+
              </div>
              <p
                className="text-label-sm"
                style={{ textTransform: "uppercase", opacity: 0.6 }}
              >
                Interactions
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Smart Assessments */}
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--spacing-margin-lg)",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div
            style={{
              background: "var(--surface-container-high)",
              borderRadius: 48,
              padding: 32,
              transform: "translateX(-48px)",
            }}
          >
            <div
              style={{
                borderRadius: 24,
                background: "var(--surface-container-lowest)",
                aspectRatio: "16/10",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--outline-variant)",
              }}
            >
              <BarChart3
                size={64}
                style={{ color: "var(--primary)", opacity: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
        >
          <h2 className="text-headline-lg" style={{ marginBottom: 16 }}>
            Smart Assessments
          </h2>
          <p
            className="text-body-lg"
            style={{
              color: "var(--on-surface-variant)",
              marginBottom: 32,
            }}
          >
            Automate the most tedious parts of teaching. Our engine grades
            objective tests instantly and provides rubric-based assistance for
            descriptive answers.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              { icon: Shield, text: "AI Proctoring & Anti-Cheat" },
              { icon: BarChart3, text: "Automatic Grade Scaling" },
              { icon: FileCheck, text: "Rubric-based Grading" },
            ].map((item) => (
              <li
                key={item.text}
                className="flex text-body-md"
                style={{ alignItems: "center", gap: 8 }}
              >
                <item.icon
                  size={20}
                  style={{ color: "var(--primary)", flexShrink: 0 }}
                />
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
