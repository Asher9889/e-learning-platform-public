import Image from "next/image";
import { Clock, GraduationCap, IndianRupee, ArrowRight } from "lucide-react";
import type { Program } from "../types/program.types";

interface ProgramCardProps {
  program: Program;
  onViewDetails: (slug: string) => void;
  onApplyNow: (program: Program) => void;
}

const categoryGradients: Record<string, string> = {
  SCHOOL: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
  DIPLOMA: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
  UNDERGRADUATE: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
  POSTGRADUATE: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
  PROFESSIONAL: "linear-gradient(135deg, #e11d48 0%, #be123c 100%)",
};

const modeLabels: Record<string, string> = {
  Online: "🌐 online",
  Offline: "🏫 offline",
  Hybrid: "🔄 hybrid",
};

export function ProgramCard({ program, onViewDetails, onApplyNow }: ProgramCardProps) {

  console.log(program,"ProgramCard")
  return (
    <div
      className="product-card"
      style={{
        padding: 0,
        overflow: "hidden",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 8px 32px 0px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          aspectRatio: "16/9",
          overflow: "hidden",
          background: categoryGradients[program.programType],
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        
        {program.thumbnail ? (
          <Image
            src={`https://storage.mssplonline.in/e-learning/${program?.thumbnail}`}
            alt={program.name}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center", color: "#fff", opacity: 0.3 }}>
            <GraduationCap size={40} style={{ margin: "0 auto 8px" }} />
            <span
              style={{
                fontFamily: "var(--font-geist)",
                fontSize: 12,
                fontWeight: 500,
                textTransform: "lowercase",
                letterSpacing: "0.05em",
                color: "#fff",
              }}
            >
              {program.name}
            </span>
          </div>
        )}
        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            left: 12,
            top: 12,
            display: "inline-flex",
            alignItems: "center",
            padding: "2px 10px",
            borderRadius: "var(--radius-tags)",
            fontFamily: "var(--font-geist)",
            fontSize: 11,
            fontWeight: 500,
            color: "#fff",
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
            textTransform: "lowercase",
          }}
        >
          {program.programType}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24 }}>
        <h3
          style={{
            fontFamily: "var(--font-gelica)",
            fontSize: 20,
            fontWeight: 400,
            color: "var(--color-cocoa-ink)",
            marginBottom: 8,
            textTransform: "lowercase",
            lineHeight: 1.25,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {program.name}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-geist)",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: "var(--color-charcoal)",
                  marginBottom: 14,
                  opacity: 0.7,

                  whiteSpace: "pre-line", // \n ko newline me convert karega

                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",

                  wordBreak: "break-word",
                  overflowWrap: "break-word",
          }}
        >
          {program.description}
        </p>

        {/* Info rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            marginBottom: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-geist)",
              fontSize: 12,
              color: "var(--color-charcoal)",
              textTransform: "lowercase",
            }}
          >
            <Clock size={14} style={{ opacity: 0.5 }} />
            {program.durationMonths + " months"}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-geist)",
              fontSize: 12,
              color: "var(--color-charcoal)",
              textTransform: "lowercase",
            }}
          >
            {modeLabels[program.mode] || program.mode}
          </div>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-geist)",
              fontSize: 12,
              color: "var(--color-charcoal)",
              gridColumn: "1 / -1",
              textTransform: "lowercase",
            }}
          >
            <GraduationCap size={14} style={{ opacity: 0.5 }} />
            {program.eligibility}
          </div> */}
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
          <IndianRupee
            size={16}
            style={{ color: "var(--color-marker-orange)" }}
          />
          <span
            style={{
              fontFamily: "var(--font-gelica)",
              fontSize: 22,
              color: "var(--color-marker-orange)",
              textTransform: "lowercase",
            }}
          >
            {program.feeAmount + " / " + program.feeType}
          </span>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            className="pill-btn"
            onClick={() => onViewDetails(program.slug)}
            style={{
              flex: 1,
              padding: "8px 16px",
              fontSize: 13,
              fontFamily: "var(--font-gelica)",
            }}
          >
            view details
          </button>
          <button
            className="pill-btn"
            onClick={() => onApplyNow(program)}
            style={{
              flex: 1,
              padding: "8px 16px",
              fontSize: 13,
              fontFamily: "var(--font-gelica)",
              background: "var(--color-marker-orange)",
              color: "#fff",
              borderColor: "var(--color-marker-orange)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            apply now
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
