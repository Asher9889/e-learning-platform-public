"use client";
import { motion, easeOut } from "framer-motion";
import { ArrowRight, GraduationCap, BarChart3, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: easeOut },
  }),
};

const floatAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.3 + i * 0.2,
    },
  }),
};

export function HeroSection() {
  return (
    <section
      className="section"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 120,
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, var(--surface) 0%, var(--surface-container-low) 100%)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--spacing-margin-lg)",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div>
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="badge badge--tertiary"
            style={{ marginBottom: 24, display: "inline-block" }}
          >
            Enterprise Solutions
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-display-lg"
            style={{ marginBottom: 16 }}
          >
            Complete Digital <br />
            <span style={{ color: "var(--primary)" }}>Campus.</span>
          </motion.h1>

          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-headline-md"
            style={{ marginBottom: 16, color: "var(--on-surface-variant)" }}
          >
            One Platform for Modern Education.
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-body-lg"
            style={{
              maxWidth: 480,
              marginBottom: 32,
              color: "var(--on-surface-variant)",
            }}
          >
            Whether you manage a school, college, university, or coaching
            institute, our platform transforms every academic operation into a
            seamless digital experience.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex--wrap"
            style={{ gap: 16 }}
          >
            <button className="btn btn--primary" style={{ padding: "14px 32px" }}>
              Book a Demo
              <ArrowRight size={18} />
            </button>
            <button
              className="btn btn--secondary"
              style={{ padding: "14px 32px" }}
            >
              Explore Platform
            </button>
          </motion.div>
        </div>

        {/* Right — Floating UI Cards */}
        <div
          className="hide-mobile"
          style={{ position: "relative", height: 500 }}
        >
          {/* Teacher Dashboard Card */}
          <motion.div
            custom={0}
            variants={floatAnim}
            initial="hidden"
            animate="visible"
            className="card"
            style={{
              position: "absolute",
              top: 20,
              right: 0,
              width: 320,
              padding: 24,
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="flex"
              style={{ alignItems: "center", gap: 12, marginBottom: 16 }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-full)",
                  background: "var(--primary-fixed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GraduationCap size={20} style={{ color: "var(--primary)" }} />
              </div>
              <div>
                <p className="text-label-md">Teacher Dashboard</p>
                <p className="text-body-sm text-muted">4 Active Classes Today</p>
              </div>
            </div>
            <div style={{ marginBottom: 8 }}>
              <div className="progress" style={{ marginBottom: 8 }}>
                <div className="progress__fill" style={{ width: "75%" }} />
              </div>
              <p className="text-body-sm text-muted" style={{ textAlign: "right" }}>
                75% Syllabus Covered
              </p>
            </div>
          </motion.div>

          {/* Student Schedule Card */}
          <motion.div
            custom={1}
            variants={floatAnim}
            initial="hidden"
            animate="visible"
            className="card"
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              width: 288,
              padding: 24,
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
            }}
          >
            <p className="text-label-md" style={{ marginBottom: 12 }}>
              Today&apos;s Schedule
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                className="flex"
                style={{
                  alignItems: "center",
                  gap: 12,
                  borderLeft: "4px solid var(--tertiary)",
                  paddingLeft: 12,
                }}
              >
                <div>
                  <p className="text-label-sm">Applied Physics</p>
                  <p className="text-body-sm text-muted">10:00 AM · Room 402</p>
                </div>
              </div>
              <div
                className="flex"
                style={{
                  alignItems: "center",
                  gap: 12,
                  borderLeft: "4px solid var(--primary)",
                  paddingLeft: 12,
                }}
              >
                <div>
                  <p className="text-label-sm">Digital Arts</p>
                  <p className="text-body-sm text-muted">01:30 PM · Online</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Attendance Card */}
          <motion.div
            custom={2}
            variants={floatAnim}
            initial="hidden"
            animate="visible"
            className="card"
            style={{
              position: "absolute",
              bottom: 20,
              right: 40,
              width: 256,
              padding: 24,
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="flex flex--between"
              style={{ marginBottom: 16 }}
            >
              <BarChart3 size={20} style={{ color: "var(--tertiary)" }} />
              <span
                className="badge badge--tertiary"
                style={{ fontSize: 10, padding: "2px 8px" }}
              >
                LIVE
              </span>
            </div>
            <p className="text-label-sm" style={{ color: "var(--on-surface-variant)", marginBottom: 4 }}>
              Daily Attendance
            </p>
            <p
              className="text-display-lg"
              style={{ fontSize: 28 }}
            >
              94.2%
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
