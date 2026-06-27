"use client";

import { motion } from "framer-motion";
import { Pencil, FileCheck } from "lucide-react";

import type { AdmissionFormData } from "../types/admission.types";
import { stepVariants, stepTransition } from "../../../utils/Motion";

interface Props {
  data: AdmissionFormData;
  onNext: () => void;
  onBack: () => void;
  onEditStep: (step: number) => void;
}

function SectionCard({
  title,
  step,
  onEdit,
  children,
}: {
  title: string;
  step: number;
  onEdit: (step: number) => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <button
          type="button"
          onClick={() => onEdit(step)}
          className="flex items-center gap-1 text-sm text-primary hover:underline"
        >
          <Pencil size={13} />
          Edit
        </button>
      </div>
      {children}
    </motion.div>
  );
}

export function ReviewForm({ data, onNext, onBack, onEditStep }: Props) {
  const formatAddress = (address: AdmissionFormData["personal"]["address"]) => {
    return `${address.line1}, ${address.city}, ${address.state} - ${address.zipCode}`;
  };

  return (
    <motion.div
      variants={stepVariants}
      initial="initial"
      animate="animate"
      transition={stepTransition}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold">Review your application</h2>
        <p className="text-muted-foreground">
          Check every section carefully — you can&apos;t edit after payment
        </p>
      </div>

      {/* PERSONAL */}
      <SectionCard title="Personal details" step={1} onEdit={onEditStep}>
        <dl className="grid gap-2 text-sm md:grid-cols-2">
          <div className="flex justify-between border-b py-1.5">
            <dt className="text-muted-foreground">Full name</dt>
            <dd className="font-medium">{data.personal.fullName}</dd>
          </div>

          <div className="flex justify-between border-b py-1.5">
            <dt className="text-muted-foreground">{`Father's name`}</dt>
            <dd className="font-medium">{data.personal.fatherName}</dd>
          </div>

          <div className="flex justify-between border-b py-1.5">
            <dt className="text-muted-foreground">{`Mother's name`}</dt>
            <dd className="font-medium">{data.personal.motherName}</dd>
          </div>

          <div className="flex justify-between border-b py-1.5">
            <dt className="text-muted-foreground">Email</dt>
            <dd className="font-medium">{data.personal.email}</dd>
          </div>

          <div className="flex justify-between border-b py-1.5">
            <dt className="text-muted-foreground">Mobile</dt>
            <dd className="font-medium">{data.personal.mobile}</dd>
          </div>

          <div className="flex justify-between border-b py-1.5">
            <dt className="text-muted-foreground">Gender</dt>
            <dd className="font-medium">{data.personal.gender}</dd>
          </div>

          <div className="flex justify-between border-b py-1.5">
            <dt className="text-muted-foreground">Date of birth</dt>
            <dd className="font-medium">{data.personal.dob}</dd>
          </div>

          {/* ADDRESS (OBJECT) */}
          <div className="flex justify-between border-b py-1.5 md:col-span-2">
            <dt className="text-muted-foreground">Address</dt>
            <dd className="text-right font-medium">
              <div>{data.personal.address.line1}</div>
              <div className="text-xs text-muted-foreground">
                {data.personal.address.city}, {data.personal.address.state} -{" "}
                {data.personal.address.zipCode}
              </div>
            </dd>
          </div>
        </dl>
      </SectionCard>

      {/* ACADEMIC */}
      <SectionCard title="Academic details" step={2} onEdit={onEditStep}>
        <div className="space-y-3">
          {data.academics.map((record, i) => (
            <div key={i} className="rounded-lg bg-muted/40 p-3 text-sm">
              <p className="mb-1 font-medium">
                {record.qualification} — {record.institutionName}
              </p>
              <p className="text-muted-foreground">
                {record.boardOrUniversity} · {record.passingYear} ·{" "}
                {record.percentage}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* DOCUMENTS */}
      <SectionCard title="Documents" step={3} onEdit={onEditStep}>
        <div className="grid gap-2 text-sm md:grid-cols-3">
          {[
            { label: "Photo", file: data.documents.photo },
            { label: "Aadhaar card", file: data.documents.aadhaar },
            { label: "Marksheet", file: data.documents.marksheet },
          ].map(({ label, file }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg bg-muted/40 p-2.5"
            >
              <FileCheck size={16} className="text-emerald-600" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="truncate font-medium">
                  {file?.url || "Not uploaded"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ACTIONS */}
      <div className="flex gap-3">
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onBack}
          className="rounded-lg border px-6 py-3"
        >
          Back
        </motion.button>

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="rounded-lg bg-primary px-6 py-3 text-white"
        >
          Proceed to payment
        </motion.button>
      </div>
    </motion.div>
  );
}