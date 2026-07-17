"use client";
import { motion, easeOut } from "framer-motion";
import {
  Users,
  BadgeCheck,
  Video,
  ClipboardCheck,
  Bot,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Management",
    desc: "End-to-end lifecycle management from admission to graduation.",
  },
  {
    icon: BadgeCheck,
    title: "Faculty Management",
    desc: "Schedule tracking, load management, and performance reviews.",
  },
  {
    icon: Video,
    title: "Live Learning",
    desc: "Integrated virtual classrooms with auto-recording and attendance.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessments",
    desc: "Proctored online exams, quizzes, and automated grading systems.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "Personalized learning paths and 24/7 student support queries.",
    accent: true,
  },
  {
    icon: BarChart3,
    title: "Student Analytics",
    desc: "Predictive performance models and behavioral insights.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "Integrated circulars, push notifications, and email automation.",
  },
  {
    icon: Settings,
    title: "Administration",
    desc: "Fee management, inventory, and library automation modules.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function PlatformOverview() {
  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-margin-lg)" }}>
          <h2 className="text-headline-lg" style={{ marginBottom: 16 }}>
            Everything You Need to Run Your Institute
          </h2>
          <p
            className="text-body-lg"
            style={{
              maxWidth: 640,
              margin: "0 auto",
              color: "var(--on-surface-variant)",
            }}
          >
            A comprehensive suite of modules designed to handle academic,
            administrative, and collaborative tasks.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "var(--spacing-gutter)" }}
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardItem}
              className="card"
              style={{ padding: 32, cursor: "default" }}
            >
              <feat.icon
                size={36}
                style={{
                  color: feat.accent ? "var(--tertiary)" : "var(--primary)",
                  marginBottom: 24,
                }}
              />
              <h3
                className="text-headline-sm"
                style={{ marginBottom: 8 }}
              >
                {feat.title}
              </h3>
              <p
                className="text-body-sm"
                style={{ color: "var(--on-surface-variant)" }}
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
