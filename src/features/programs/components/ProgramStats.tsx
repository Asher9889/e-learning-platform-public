"use client";
import { motion, easeOut } from "framer-motion";

const stats = [
  { value: "32", label: "programs", desc: "across 5 categories" },
  { value: "8,500+", label: "students", desc: "currently learning" },
  { value: "120+", label: "faculty", desc: "industry experts" },
  { value: "24/7", label: "support", desc: "always here for you" },
];

export function ProgramStats() {
  return (
    <section className="px-8 py-10">
      <div className="container mx-auto max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="bg-surface-lowest border border-outline-variant/20 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: easeOut }}
                className={`relative px-8 py-7 text-center ${
                  i < stats.length - 1 ? "lg:border-r border-outline-variant/20" : ""
                } ${i === 0 ? "" : "border-t lg:border-t-0 border-outline-variant/20"}`}
              >
                <div className="text-4xl md:text-5xl font-extrabold font-display text-on-surface leading-none mb-1.5">
                  {s.value}
                </div>
                <div className="text-sm font-bold font-display text-primary uppercase tracking-wide mb-0.5">
                  {s.label}
                </div>
                <div className="text-xs text-on-surface-variant opacity-60">
                  {s.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
