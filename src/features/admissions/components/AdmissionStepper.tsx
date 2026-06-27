"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const steps = ["Personal", "Academic", "Documents", "Review", "Payment"];

interface Props {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function AdmissionStepper({ currentStep, onStepClick }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const progressPercent = Math.min(
    ((currentStep - 1) / (steps.length - 1)) * 100,
    100
  );

  return (
    <div
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={steps.length}
      aria-label={`Application step ${currentStep} of ${steps.length}`}
    >
      <div className="relative flex justify-between">
        <div className="absolute left-4 right-4 top-4 h-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-muted md:left-5 md:right-5">
          <motion.div
            className="relative h-full rounded-full bg-primary"
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 120, damping: 16 }
            }
          >
            {!shouldReduceMotion && (
              <motion.span
                className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 0.15, 0.5],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        </div>

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const completed = currentStep > stepNumber;
          const active = currentStep === stepNumber;
          const reachable = completed || active;

          return (
            <div key={step} className="relative z-10 flex flex-col items-center gap-2">
              <motion.button
                type="button"
                disabled={!reachable}
                onClick={() => reachable && onStepClick?.(stepNumber)}
                aria-label={`${reachable ? "Go to" : ""} step ${stepNumber}: ${step}`}
                aria-current={active ? "step" : undefined}
                whileTap={reachable ? { scale: 0.92 } : undefined}
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition-colors md:h-10 md:w-10 ${
                  completed
                    ? "border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600"
                    : active
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background text-muted-foreground"
                } ${reachable ? "cursor-pointer" : "cursor-not-allowed"}`}
                initial={false}
                animate={
                  active && !shouldReduceMotion
                    ? { scale: [1, 1.12, 1] }
                    : { scale: 1 }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {completed ? (
                  <motion.span
                    initial={shouldReduceMotion ? false : { scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                  >
                    <Check size={16} strokeWidth={2.5} />
                  </motion.span>
                ) : (
                  stepNumber
                )}
              </motion.button>

              <span
                className={`text-xs transition-colors ${
                  active ? "font-medium text-foreground" : "text-muted-foreground"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}