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
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        className="modal"
      >
        {/* Close button */}
        <button
          className="btn btn--secondary btn--icon"
          onClick={() => onOpenChange(false)}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 1,
          }}
        >
          <X size={14} />
        </button>

        {/* Header */}
        <div className="modal__body">
          <h2
            className="text-headline-md"
            style={{ marginBottom: 4, paddingRight: 32 }}
          >
            {program.name}
          </h2>
          <p className="text-body-sm text-muted" style={{ marginBottom: 20 }}>
            review program details before starting your application.
          </p>

          {/* Details grid */}
          <div
            style={{
              border: "1px solid var(--outline-variant)",
              borderRadius: "var(--radius-xl)",
              padding: 20,
              marginBottom: 20,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {[
              {
                icon: IndianRupee,
                label: "program fee",
                value: program.fee,
                valueColor: "var(--primary)",
              },
              {
                icon: Clock,
                label: "duration",
                value: program.duration,
                valueColor: "var(--on-surface)",
              },
              {
                icon: GraduationCap,
                label: "mode",
                value: program.mode,
                valueColor: "var(--on-surface)",
              },
              {
                icon: CheckCircle2,
                label: "eligibility",
                value: program.eligibility,
                valueColor: "var(--on-surface)",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <item.icon
                  size={16}
                  style={{ color: "var(--on-surface-variant)", opacity: 0.5 }}
                />
                <div>
                  <p
                    className="text-body-sm text-muted"
                    style={{ margin: 0, opacity: 0.5 }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-headline-sm"
                    style={{
                      margin: 0,
                      color: item.valueColor,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          {program.benefits && program.benefits.length > 0 && (
            <div
              style={{
                border: "1px solid var(--outline-variant)",
                borderRadius: "var(--radius-xl)",
                padding: 20,
                marginBottom: 24,
              }}
            >
              <h4
                className="text-headline-sm"
                style={{ marginBottom: 12 }}
              >
                benefits
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {program.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="text-body-sm text-muted flex"
                    style={{ gap: 8, alignItems: "flex-start" }}
                  >
                    <CheckCircle2
                      size={14}
                      style={{
                        color: "var(--primary)",
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action */}
          <button
            className="btn btn--primary"
            onClick={handleStartAdmission}
            style={{
              width: "100%",
              padding: "12px 24px",
              fontSize: 16,
            }}
          >
            start admission process
          </button>
        </div>
      </div>
    </div>
  );
}
