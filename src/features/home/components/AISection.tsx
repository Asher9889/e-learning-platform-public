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
    <section className="bg-inverse-surface text-inverse-on-surface relative overflow-hidden px-8 py-12">
      {/* Glow accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <circle cx="100" cy="50" r="50" fill="var(--color-primary)" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 max-w-[var(--container-max)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-tertiary-fixed" />
              <span className="text-sm font-semibold font-display text-tertiary-fixed uppercase tracking-widest">
                Next-Gen Intelligence
              </span>
            </div>
            <h2 className="text-3xl font-bold font-display text-white">
              AI Built Into Every Classroom
            </h2>
          </div>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold text-sm font-display cursor-pointer border-none hover:bg-on-primary-container hover:shadow-md transition-all duration-fast">
            View AI Roadmap
          </button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {aiFeatures.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardItem}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg cursor-default transition-colors duration-fast hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center mb-6">
                <feat.icon size={24} className="text-on-tertiary-fixed" />
              </div>
              <h3 className="text-xl font-semibold font-display text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-white/70">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
