"use client";
import { motion, easeOut } from "framer-motion";
import { Video, Shield, BarChart3, FileCheck } from "lucide-react";

export function FeatureHighlights() {
  return (
    <section className="flex flex-col gap-12 px-8 py-12">
      {/* Live Interactive Classrooms */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="order-2 lg:order-2"
        >
          <div className="bg-surface-container-high rounded-3xl p-8 translate-x-12">
            <div className="rounded-3xl bg-surface-lowest aspect-video flex items-center justify-center border border-outline-variant">
              <Video size={64} className="text-primary opacity-30" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
          className="order-1 lg:order-1"
        >
          <h2 className="text-3xl font-bold font-display text-on-surface mb-4">
            Live Interactive Classrooms
          </h2>
          <p className="text-lg text-on-surface-variant mb-8">
            Host high-definition virtual classes without ever leaving the
            platform. Includes built-in whiteboard, polls, and breakout rooms
            designed for pedagogical success.
          </p>
          <div className="flex gap-12">
            <div className="text-center">
              <div className="text-4xl font-extrabold font-display text-primary">
                4K
              </div>
              <p className="text-xs font-bold font-display uppercase opacity-60">
                Streaming
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold font-display text-primary">
                100+
              </div>
              <p className="text-xs font-bold font-display uppercase opacity-60">
                Interactions
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Smart Assessments */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="bg-surface-container-high rounded-3xl p-8 -translate-x-12">
            <div className="rounded-3xl bg-surface-lowest aspect-video flex items-center justify-center border border-outline-variant">
              <BarChart3 size={64} className="text-primary opacity-30" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
        >
          <h2 className="text-3xl font-bold font-display text-on-surface mb-4">
            Smart Assessments
          </h2>
          <p className="text-lg text-on-surface-variant mb-8">
            Automate the most tedious parts of teaching. Our engine grades
            objective tests instantly and provides rubric-based assistance for
            descriptive answers.
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            {[
              { icon: Shield, text: "AI Proctoring & Anti-Cheat" },
              { icon: BarChart3, text: "Automatic Grade Scaling" },
              { icon: FileCheck, text: "Rubric-based Grading" },
            ].map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2 text-base text-on-surface"
              >
                <item.icon
                  size={20}
                  className="text-primary shrink-0"
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
