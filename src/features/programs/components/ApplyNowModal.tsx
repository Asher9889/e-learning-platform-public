"use client";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  IndianRupee,
  ArrowRight,
} from "lucide-react";
import { sileo } from "sileo";
import type { Program } from "../types/program.types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ApplyNowModalProps {
  program: Program | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categoryTokens: Record<string, { color: string; bg: string; text: string }> = {
  School: {
    color: "var(--color-category-school)",
    bg: "var(--color-category-school-bg)",
    text: "var(--color-category-school-text)",
  },
  Diploma: {
    color: "var(--color-category-diploma)",
    bg: "var(--color-category-diploma-bg)",
    text: "var(--color-category-diploma-text)",
  },
  Undergraduate: {
    color: "var(--color-category-undergraduate)",
    bg: "var(--color-category-undergraduate-bg)",
    text: "var(--color-category-undergraduate-text)",
  },
  Postgraduate: {
    color: "var(--color-category-postgraduate)",
    bg: "var(--color-category-postgraduate-bg)",
    text: "var(--color-category-postgraduate-text)",
  },
  Professional: {
    color: "var(--color-category-professional)",
    bg: "var(--color-category-professional-bg)",
    text: "var(--color-category-professional-text)",
  },
};

export function ApplyNowModal({program, open, onOpenChange}: ApplyNowModalProps) {
  if (!program) return null;

  const t = categoryTokens[program.category] || categoryTokens.School;

  const handleStartAdmission = () => {
    onOpenChange(false);
    sileo.success({
      title: "Admission flow will be integrated soon.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="bg-surface-lowest rounded-3xl shadow-lg w-96  p-0 gap-0 ring-0 border border-outline-variant/20"
      >
        {/* Category color top strip */}
        <div
          className="h-1.5 rounded-t-3xl"
          style={{ background: t.color }}
        />

        {/* Close */}
        <button
          className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-9 h-9 bg-surface-low text-on-surface-variant rounded-full cursor-pointer border border-outline-variant/40 hover:bg-surface-container hover:shadow-sm transition-all duration-fast p-0"
          onClick={() => onOpenChange(false)}
          aria-label="Close"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
        </button>

        <div className="p-7">
          {/* Header */}
          <DialogHeader className="mb-6">
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold font-display w-fit mb-1"
              style={{ background: t.bg, color: t.color }}
            >
              {program.category}
            </span>
            <DialogTitle className="text-2xl font-extrabold font-display text-on-surface leading-snug">
              {program.name}
            </DialogTitle>
            <DialogDescription className="text-sm text-on-surface-variant leading-relaxed">
              review program details before starting your application.
            </DialogDescription>
          </DialogHeader>

          {/* Fee — prominent */}
          <div
            className="rounded-2xl p-4 mb-5 flex items-center gap-3"
            style={{ background: t.bg }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: t.color }}
            >
              <IndianRupee size={18} style={{ color: t.text }} />
            </div>
            <div>
              <p className="text-xs font-bold font-display text-on-surface-variant m-0 mb-0.5">
                program fee
              </p>
              <p
                className="text-2xl font-extrabold font-display m-0 leading-none"
                style={{ color: t.color }}
              >
                {program.fee}
              </p>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { icon: Clock, label: "duration", value: program.duration },
              { icon: GraduationCap, label: "mode", value: program.mode },
              { icon: CheckCircle2, label: "eligibility", value: program.eligibility },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-surface-low rounded-xl p-3.5"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <item.icon size={13} className="text-on-surface-variant" />
                  <p className="text-[11px] font-bold font-display text-on-surface-variant m-0 uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
                <p className="text-sm font-bold font-display text-on-surface m-0">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          {program.benefits && program.benefits.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-bold font-display text-on-surface mb-3 uppercase tracking-wide">
                what you&apos;ll get
              </h4>
              <div className="flex flex-col gap-2">
                {program.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2.5 text-sm text-on-surface-variant leading-relaxed"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: t.color }}
                    />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <button
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm font-display cursor-pointer border-none transition-all duration-fast"
            style={{ background: t.color, color: t.text }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.boxShadow = "none";
            }}
            onClick={handleStartAdmission}
          >
            start admission process
            <ArrowRight size={16} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
