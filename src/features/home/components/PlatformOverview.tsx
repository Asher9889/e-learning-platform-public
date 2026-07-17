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
    <section className="bg-surface px-8 py-12">
      <div className="container mx-auto max-w-[var(--container-max)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-on-surface mb-4">
            Everything You Need to Run Your Institute
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            A comprehensive suite of modules designed to handle academic,
            administrative, and collaborative tasks.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardItem}
              className="bg-surface-lowest border border-outline-variant/30 rounded-3xl p-8 cursor-default transition-all duration-normal hover:-translate-y-1 hover:shadow-lg"
            >
              <feat.icon
                size={36}
                className={`mb-6 ${feat.accent ? "text-tertiary" : "text-primary"}`}
              />
              <h3 className="text-xl font-semibold font-display text-on-surface mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-on-surface-variant">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
