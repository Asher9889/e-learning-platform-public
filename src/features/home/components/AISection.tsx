"use client";
import { motion, easeOut } from "framer-motion";
import {
  Sparkles,
  ClipboardList,
  GitBranch,
  StickyNote,
  Headphones,
  TrendingUp,
} from "lucide-react";

const aiFeatures = [
  {
    icon: ClipboardList,
    title: "AI Quiz Generation",
    desc: "Generate contextually relevant quizzes from any lecture video or document instantly.",
  },
  {
    icon: ClipboardList,
    title: "AI Assignment Generator",
    desc: "Create varied assignments with difficulty scaling based on student historical data.",
  },
  {
    icon: GitBranch,
    title: "AI Question Bank",
    desc: "Maintain a massive repository of smart questions tagged by cognitive level and Bloom's taxonomy.",
  },
  {
    icon: StickyNote,
    title: "AI Notes",
    desc: "Automatic summary generation from live sessions for students who need extra support.",
  },
  {
    icon: Headphones,
    title: "AI Learning Assistant",
    desc: "24/7 tutor that answers subject-specific questions within the platform sandbox.",
  },
  {
    icon: TrendingUp,
    title: "AI Performance Insights",
    desc: "Detect early signs of student burnout or learning gaps using behavioral pattern analysis.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function AISection() {
  return (
    <section
      className="section"
      style={{
        background: "var(--inverse-surface)",
        color: "var(--inverse-on-surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "33%",
          height: "100%",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      >
        <svg
          style={{ width: "100%", height: "100%" }}
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <circle cx="100" cy="50" r="50" fill="var(--primary)" opacity="0.3" />
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="flex flex--between flex--wrap"
          style={{
            marginBottom: "var(--spacing-margin-lg)",
            alignItems: "flex-end",
            gap: 24,
          }}
        >
          <div style={{ maxWidth: 560 }}>
            <div
              className="flex"
              style={{ alignItems: "center", gap: 8, marginBottom: 16 }}
            >
              <Sparkles size={20} style={{ color: "var(--tertiary-fixed)" }} />
              <span
                className="text-label-md"
                style={{
                  color: "var(--tertiary-fixed)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Next-Gen Intelligence
              </span>
            </div>
            <h2 className="text-headline-lg" style={{ color: "#ffffff" }}>
              AI Built Into Every Classroom
            </h2>
          </div>
          <button className="btn btn--primary">View AI Roadmap</button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "var(--spacing-gutter)",
          }}
        >
          {aiFeatures.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardItem}
              style={{
                padding: 32,
                borderRadius: 24,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                transition: "background var(--duration-fast) var(--ease-out)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-md)",
                  background: "var(--tertiary-fixed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <feat.icon size={24} style={{ color: "var(--on-tertiary-fixed)" }} />
              </div>
              <h3
                className="text-headline-sm"
                style={{ color: "#ffffff", marginBottom: 8 }}
              >
                {feat.title}
              </h3>
              <p
                className="text-body-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
