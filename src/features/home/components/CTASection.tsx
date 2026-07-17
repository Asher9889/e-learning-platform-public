"use client";
import { motion, easeOut } from "framer-motion";

export function CTASection() {
  return (
    <section className="bg-on-surface text-white relative overflow-hidden pb-32">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary opacity-[0.08] blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10 px-8 max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
        >
          <span className="px-3 py-1 rounded-full text-xs font-bold font-display bg-white/10 text-white">
            More Than an LMS
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white">
            Ready to Modernize Your Institution?
          </h2>

          <p className="text-lg text-white/70 max-w-lg">
            Join 500+ global institutions that have transitioned to a unified
            digital campus. Scalable, secure, and built for the future of
            learning.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-on-primary rounded-xl font-semibold text-lg font-display cursor-pointer border-none hover:bg-on-primary-container hover:shadow-md transition-all duration-fast">
              Book a Personalized Demo
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold text-lg font-display cursor-pointer hover:bg-white/20 transition-all duration-fast">
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
          className="mt-24 max-w-4xl mx-auto rounded-t-[48px] overflow-hidden border border-white/10 border-b-0 bg-surface-lowest aspect-video flex items-center justify-center"
        >
          <div className="text-center opacity-30">
            <p className="text-xl font-semibold font-display">Dashboard Preview</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
