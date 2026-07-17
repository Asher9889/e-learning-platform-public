"use client";
import { motion, easeOut } from "framer-motion";
import { ArrowRight, GraduationCap, BarChart3 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: easeOut },
  }),
};

const floatAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.3 + i * 0.2,
    },
  }),
};

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center pt-16 relative overflow-hidden bg-gradient-to-b from-surface to-surface-low px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[var(--container-max)]">
        {/* Left Content */}
        <div>
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-block mb-6 px-3 py-1 rounded-full text-xs font-bold font-display bg-tertiary-container text-on-tertiary-container"
          >
            Enterprise Solutions
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-extrabold font-display leading-tight tracking-tight text-on-surface mb-4"
          >
            Complete Digital <br />
            <span className="text-primary">Campus.</span>
          </motion.h1>

          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-2xl font-semibold font-display text-on-surface-variant mb-4"
          >
            One Platform for Modern Education.
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-on-surface-variant max-w-md mb-8"
          >
            Whether you manage a school, college, university, or coaching
            institute, our platform transforms every academic operation into a
            seamless digital experience.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-on-primary rounded-xl font-semibold text-sm font-display cursor-pointer border-none hover:bg-on-primary-container hover:shadow-md transition-all duration-fast">
              Book a Demo
              <ArrowRight size={18} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-surface-lowest text-on-surface border border-outline-variant rounded-xl font-semibold text-sm font-display cursor-pointer hover:bg-surface-low hover:shadow-sm transition-all duration-fast">
              Explore Platform
            </button>
          </motion.div>
        </div>

        {/* Right — Floating UI Cards */}
        <div className="hidden lg:block relative h-[500px]">
          {/* Teacher Dashboard Card */}
          <motion.div
            custom={0}
            variants={floatAnim}
            initial="hidden"
            animate="visible"
            className="absolute top-5 right-0 w-80 p-6 bg-white/85 backdrop-blur-xl rounded-3xl border border-outline-variant/50 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold font-display text-on-surface">Teacher Dashboard</p>
                <p className="text-xs text-on-surface-variant">4 Active Classes Today</p>
              </div>
            </div>
            <div className="mb-2">
              <div className="w-full h-1.5 bg-on-surface rounded-full overflow-hidden mb-2">
                <div className="h-full bg-primary rounded-full w-3/4" />
              </div>
              <p className="text-xs text-on-surface-variant text-right">
                75% Syllabus Covered
              </p>
            </div>
          </motion.div>

          {/* Student Schedule Card */}
          <motion.div
            custom={1}
            variants={floatAnim}
            initial="hidden"
            animate="visible"
            className="absolute top-1/2 -translate-y-1/2 left-0 w-72 p-6 bg-white/85 backdrop-blur-xl rounded-3xl border border-outline-variant/50 shadow-lg"
          >
            <p className="text-sm font-semibold font-display text-on-surface mb-3">
              Today&apos;s Schedule
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 border-l-4 border-tertiary pl-3">
                <div>
                  <p className="text-xs font-bold font-display text-on-surface">Applied Physics</p>
                  <p className="text-xs text-on-surface-variant">10:00 AM · Room 402</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-l-4 border-primary pl-3">
                <div>
                  <p className="text-xs font-bold font-display text-on-surface">Digital Arts</p>
                  <p className="text-xs text-on-surface-variant">01:30 PM · Online</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Attendance Card */}
          <motion.div
            custom={2}
            variants={floatAnim}
            initial="hidden"
            animate="visible"
            className="absolute bottom-5 right-10 w-64 p-6 bg-white/85 backdrop-blur-xl rounded-3xl border border-outline-variant/50 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <BarChart3 size={20} className="text-tertiary" />
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-display bg-tertiary-container text-on-tertiary-container">
                LIVE
              </span>
            </div>
            <p className="text-xs font-bold font-display text-on-surface-variant mb-1">
              Daily Attendance
            </p>
            <p className="text-3xl font-extrabold font-display text-on-surface">
              94.2%
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
