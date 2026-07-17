"use client";
import { motion, easeOut } from "framer-motion";

export function CTASection() {
  return (
    <section
      className="section"
      style={{
        padding: "128px 0",
        background: "var(--on-surface)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "var(--radius-full)",
          background: "var(--primary)",
          opacity: 0.08,
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          style={{
            maxWidth: 768,
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
          }}
        >
          <span
            className="badge"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#ffffff",
            }}
          >
            More Than an LMS
          </span>

          <h2 className="text-display-lg" style={{ color: "#ffffff" }}>
            Ready to Modernize Your Institution?
          </h2>

          <p
            className="text-body-lg"
            style={{
              color: "rgba(255,255,255,0.7)",
              maxWidth: 600,
            }}
          >
            Join 500+ global institutions that have transitioned to a unified
            digital campus. Scalable, secure, and built for the future of
            learning.
          </p>

          <div className="flex flex--wrap flex--center" style={{ gap: 16 }}>
            <button
              className="btn btn--primary"
              style={{ padding: "16px 40px", fontSize: 18 }}
            >
              Book a Personalized Demo
            </button>
            <button
              className="btn"
              style={{
                padding: "16px 40px",
                fontSize: 18,
                background: "rgba(255,255,255,0.1)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              Contact Sales
            </button>
          </div>
        </motion.div>

        {/* Dashboard Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          style={{
            marginTop: 96,
            maxWidth: 1024,
            margin: "96px auto 0",
            borderRadius: "48px 48px 0 0",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "none",
            background: "var(--surface-container-lowest)",
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", opacity: 0.3 }}>
            <p className="text-headline-sm">Dashboard Preview</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
