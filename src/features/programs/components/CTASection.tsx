"use client";
import { motion, easeOut } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  onApplyNow: () => void;
  onContactAdmissions: () => void;
}

export function CTASection({
  onApplyNow,
  onContactAdmissions,
}: CTASectionProps) {
  return (
    <section className="px-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="container mx-auto max-w-[var(--container-max)]"
      >
        <div className="relative bg-primary rounded-3xl px-10 md:px-16 py-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 w-48 h-48 border-4 border-white rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 border-4 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-extrabold font-display text-white/5 leading-none select-none">
              ?
            </div>
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
              className="text-4xl md:text-5xl font-extrabold font-display text-white mx-auto mb-4 max-w-lg leading-tight"
            >
              ready to start?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
              className="text-base text-white/80 mx-auto mb-8 max-w-md leading-relaxed"
            >
              apply today and take the next step toward your academic and professional success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-on-surface rounded-2xl font-bold text-base font-display cursor-pointer border-none hover:bg-white/90 hover:shadow-lg transition-all duration-fast"
                onClick={onApplyNow}
              >
                apply now
                <ArrowRight size={18} />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white rounded-2xl font-bold text-base font-display cursor-pointer border border-white/30 hover:bg-white/25 transition-all duration-fast"
                onClick={onContactAdmissions}
              >
                <Phone size={16} />
                contact admissions
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
