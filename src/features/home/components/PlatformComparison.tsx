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
    <section className="bg-surface-low px-8 py-12">
      <div className="container mx-auto max-w-[var(--container-max)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-on-surface mb-4">
            Unified Student Records vs The Rest
          </h2>
          <p className="text-lg text-on-surface-variant">
            See how our platform consolidates a student&apos;s entire journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="bg-surface-lowest border border-outline-variant/30 rounded-3xl p-10 cursor-default"
          >
            <h4 className="text-xl font-semibold font-display text-on-surface-variant mb-8 flex items-center gap-2">
              <History size={20} />
              Traditional Management
            </h4>
            <div className="flex flex-col gap-8 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-outline-variant opacity-30" />
              {traditionalSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex gap-6 relative"
                >
                  <div className="w-8 h-8 rounded-full bg-outline-variant opacity-30 flex items-center justify-center z-10 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold font-display text-on-surface mb-1">
                      {step.title}
                    </p>
                    <p className="text-sm text-on-surface-variant">
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
            className="p-10 rounded-3xl bg-primary-container border-2 border-primary-container relative overflow-hidden cursor-default"
          >
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary opacity-5" />
            <h4 className="text-xl font-semibold font-display text-on-primary-container mb-8 flex items-center gap-2 relative z-10">
              <Network size={20} />
              Unified Records
            </h4>
            <div className="flex flex-col gap-8 relative z-10">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary opacity-30" />
              {unifiedSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex gap-6 relative"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center z-10 shrink-0 shadow-md">
                    <Check size={16} className="text-on-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-display text-on-primary-container mb-1">
                      {step.title}
                    </p>
                    <p className="text-sm text-on-secondary-container">
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
