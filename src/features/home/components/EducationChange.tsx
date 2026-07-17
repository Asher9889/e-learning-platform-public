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
    <section className="px-8 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[var(--container-max)]">
        {/* Illustration Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="bg-surface-container-high rounded-3xl p-12 relative overflow-hidden min-h-[360px] flex items-center justify-center border border-outline-variant"
        >
          <div className="relative w-full max-w-sm">
            {/* Scattered elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-error-container rounded-lg flex items-center justify-center rotate-12 shadow-md">
              <CloudOff size={32} className="text-error" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-surface-variant rounded-lg flex items-center justify-center -rotate-6 shadow-md">
              <FileText size={32} className="text-on-surface-variant" />
            </div>
            {/* Center card */}
            <div className="p-10 bg-surface-lowest rounded-3xl border-2 border-dashed border-outline-variant flex flex-col gap-4">
              <div className="h-4 w-3/4 bg-outline-variant rounded opacity-30" />
              <div className="h-4 w-full bg-outline-variant rounded opacity-30" />
              <div className="h-4 w-1/2 bg-outline-variant rounded opacity-30" />
              <div className="flex gap-2 mt-4">
                <div className="w-8 h-8 rounded-lg bg-error-container" />
                <div className="w-8 h-8 rounded-lg bg-surface-variant" />
                <div className="w-8 h-8 rounded-lg bg-tertiary-container" />
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
          className="lg:pl-12"
        >
          <h2 className="text-3xl font-bold font-display text-on-surface mb-4">
            Education is changing.
            <br />
            Your software should too.
          </h2>
          <p className="text-lg text-on-surface-variant mb-8">
            Legacy systems often force administrators to juggle a dozen
            disconnected platforms—attendance software, separate live class
            tools, manual assessment trackers, and clunky reporting sheets.
          </p>

          <div className="flex flex-col gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0 opacity-15">
                  <feat.icon size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold font-display text-on-surface mb-1">
                    {feat.title}
                  </p>
                  <p className="text-sm text-on-surface-variant">
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
