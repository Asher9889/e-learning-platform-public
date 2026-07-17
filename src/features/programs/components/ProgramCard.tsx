import Image from "next/image";
import { Clock, GraduationCap, IndianRupee, ArrowRight } from "lucide-react";
import type { Program } from "../types/program.types";

interface ProgramCardProps {
  program: Program;
  onViewDetails: (slug: string) => void;
  onApplyNow: (program: Program) => void;
}

const categoryGradients: Record<string, string> = {
  School: "linear-gradient(135deg, var(--category-school) 0%, #1d4ed8 100%)",
  Diploma: "linear-gradient(135deg, var(--category-diploma) 0%, #15803d 100%)",
  Undergraduate:
    "linear-gradient(135deg, var(--category-undergraduate) 0%, #7c3aed 100%)",
  Postgraduate:
    "linear-gradient(135deg, var(--category-postgraduate) 0%, #ea580c 100%)",
  Professional:
    "linear-gradient(135deg, var(--category-professional) 0%, #be123c 100%)",
};

const modeLabels: Record<string, string> = {
  Online: "online",
  Offline: "offline",
  Hybrid: "hybrid",
};

export function ProgramCard({
  program,
  onViewDetails,
  onApplyNow,
}: ProgramCardProps) {
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      {/* Thumbnail */}
      <div
        style={{
          aspectRatio: "16/9",
          overflow: "hidden",
          background: categoryGradients[program.category],
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {program.thumbnail ? (
          <Image
            src={program.thumbnail}
            alt={program.name}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "#fff",
              opacity: 0.3,
            }}
          >
            <GraduationCap size={40} style={{ margin: "0 auto 8px" }} />
            <span
              className="text-label-sm"
              style={{
                color: "#fff",
                letterSpacing: "0.05em",
              }}
            >
              {program.name}
            </span>
          </div>
        )}
        {/* Category badge */}
        <div
          className="badge"
          style={{
            position: "absolute",
            left: 12,
            top: 12,
            color: "#fff",
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
          }}
        >
          {program.category}
        </div>
      </div>

      {/* Content */}
      <div className="card__body">
        <h3
          className="text-headline-sm"
          style={{
            marginBottom: 8,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {program.name}
        </h3>

        <p
          className="text-body-sm text-muted"
          style={{
            marginBottom: 18,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {program.description}
        </p>

        {/* Info rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginBottom: 14,
          }}
        >
          <div
            className="text-label-sm"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--on-surface-variant)",
            }}
          >
            <Clock size={14} />
            {program.duration}
          </div>
          <div
            className="text-label-sm"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--on-surface-variant)",
            }}
          >
            {modeLabels[program.mode] || program.mode}
          </div>
          <div
            className="text-label-sm"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              gridColumn: "1 / -1",
              color: "var(--on-surface-variant)",
            }}
          >
            <GraduationCap size={14} />
            {program.eligibility}
          </div>
        </div>

        {/* Fee */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 18,
          }}
        >
          <IndianRupee size={16} style={{ color: "var(--primary)" }} />
          <span className="text-headline-sm" style={{ color: "var(--primary)" }}>
            {program.fee}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-sm">
          <button
            className="btn btn--secondary btn--sm"
            onClick={() => onViewDetails(program.slug)}
            style={{ flex: 1 }}
          >
            view details
          </button>
          <button
            className="btn btn--primary btn--sm"
            onClick={() => onApplyNow(program)}
            style={{ flex: 1 }}
          >
            apply now
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
