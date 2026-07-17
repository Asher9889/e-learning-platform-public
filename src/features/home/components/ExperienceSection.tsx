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
    accent: "bg-primary-fixed",
    iconColor: "text-primary",
    letterColor: "text-primary",
  },
  {
    title: "Teacher",
    features: ["Lesson Planner", "Auto-Attendance", "Gradebook Automation"],
    accent: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    letterColor: "text-tertiary",
  },
  {
    title: "Student",
    features: [
      "Personalized Timeline",
      "Peer Collaboration",
      "Gamified Badges",
    ],
    accent: "bg-primary-fixed",
    iconColor: "text-primary",
    letterColor: "text-primary",
  },
  {
    title: "Parents",
    features: [
      "Real-time Attendance",
      "Fee Payment Portal",
      "Direct Messaging",
    ],
    accent: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    letterColor: "text-tertiary",
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
    <section className="px-8 py-12">
      <div className="container mx-auto max-w-[var(--container-max)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-on-surface mb-4">
            A Tailored Experience for Everyone
          </h2>
          <p className="text-lg text-on-surface-variant max-w-lg mx-auto">
            We understand that one size doesn&apos;t fit all. Our platform adapts
            to the user role.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {roles.map((role) => (
            <motion.div
              key={role.title}
              variants={cardItem}
              className="bg-surface-lowest border border-outline-variant/30 rounded-3xl overflow-hidden cursor-default"
            >
              {/* Color Header */}
              <div className={`h-48 ${role.accent} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
                  <span className={`text-4xl font-extrabold font-display ${role.letterColor}`}>
                    {role.title[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-semibold font-display text-on-surface mb-4">
                  {role.title}
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {role.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-sm text-on-surface-variant"
                    >
                      <CheckCircle2
                        size={18}
                        className={`${role.iconColor} shrink-0`}
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
