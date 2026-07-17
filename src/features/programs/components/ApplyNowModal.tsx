import { useEffect, useRef } from "react";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  IndianRupee,
  X,
} from "lucide-react";
import { sileo } from "sileo";
import type { Program } from "../types/program.types";

interface ApplyNowModalProps {
  program: Program | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApplyNowModal({
  program,
  open,
  onOpenChange,
}: ApplyNowModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  if (!program) return null;

  const handleStartAdmission = () => {
    onOpenChange(false);
    sileo.success({
      title: "Admission flow will be integrated soon.",
    });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-modal-backdrop flex items-center justify-center bg-black/50 p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className="bg-surface-lowest rounded-3xl shadow-lg max-w-md w-full max-h-[90vh] overflow-auto relative"
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-9 h-9 bg-surface-lowest text-on-surface border border-outline-variant rounded-full cursor-pointer hover:bg-surface-low hover:shadow-sm transition-all duration-fast p-0"
          onClick={() => onOpenChange(false)}
        >
          <X size={14} />
        </button>

        {/* Header */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold font-display text-on-surface mb-1 pr-8">
            {program.name}
          </h2>
          <p className="text-sm text-on-surface-variant opacity-70 mb-5">
            review program details before starting your application.
          </p>

          {/* Details grid */}
          <div className="border border-outline-variant rounded-3xl p-5 mb-5 grid grid-cols-2 gap-4">
            {[
              {
                icon: IndianRupee,
                label: "program fee",
                value: program.fee,
                valueColor: "text-primary",
              },
              {
                icon: Clock,
                label: "duration",
                value: program.duration,
                valueColor: "text-on-surface",
              },
              {
                icon: GraduationCap,
                label: "mode",
                value: program.mode,
                valueColor: "text-on-surface",
              },
              {
                icon: CheckCircle2,
                label: "eligibility",
                value: program.eligibility,
                valueColor: "text-on-surface",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2"
              >
                <item.icon
                  size={16}
                  className="text-on-surface-variant opacity-50"
                />
                <div>
                  <p className="text-sm text-on-surface-variant opacity-50 m-0">
                    {item.label}
                  </p>
                  <p className={`text-xl font-semibold font-display m-0 ${item.valueColor}`}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          {program.benefits && program.benefits.length > 0 && (
            <div className="border border-outline-variant rounded-3xl p-5 mb-6">
              <h4 className="text-xl font-semibold font-display text-on-surface mb-3">
                benefits
              </h4>
              <div className="flex flex-col gap-2">
                {program.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-on-surface-variant"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action */}
          <button
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold text-base font-display cursor-pointer border-none hover:bg-on-primary-container hover:shadow-md transition-all duration-fast"
            onClick={handleStartAdmission}
          >
            start admission process
          </button>
        </div>
      </div>
    </div>
  );
}
