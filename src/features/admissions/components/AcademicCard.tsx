"use client";

import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

import type { AdmissionSchemaType } from "../schemas/admission.schema";
import { FormField } from "./FormField";

interface Props {
  index: number;
  register: UseFormRegister<AdmissionSchemaType>;
  errors?: FieldErrors<AdmissionSchemaType>["academics"];
  remove: (index: number) => void;
  canRemove: boolean;
}

export function AcademicCard({
  index,
  register,
  errors,
  remove,
  canRemove,
}: Props) {
  const fieldError = errors?.[index];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.25 }}
      className="rounded-xl border bg-card p-6 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-semibold">Qualification #{index + 1}</h3>

        {canRemove && (
          <button
            type="button"
            onClick={() => remove(index)}
            aria-label={`Remove qualification ${index + 1}`}
            className="rounded-md p-1.5 text-red-500 transition-colors hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Qualification" error={fieldError?.qualification?.message}>
          <input
            {...register(`academics.${index}.qualification`)}
            placeholder="e.g. 10th, 12th, B.Sc."
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Institution name" error={fieldError?.institutionName?.message}>
          <input
            {...register(`academics.${index}.institutionName`)}
            placeholder="School / college name"
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Board / university" error={fieldError?.boardOrUniversity?.message}>
          <input
            {...register(`academics.${index}.boardOrUniversity`)}
            placeholder="e.g. CBSE, UP Board"
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Passing year" error={fieldError?.passingYear?.message}>
          <input
            {...register(`academics.${index}.passingYear`)}
            placeholder="e.g. 2023"
            inputMode="numeric"
            maxLength={4}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Percentage / CGPA" error={fieldError?.percentage?.message}>
          <input
            {...register(`academics.${index}.percentage`)}
            placeholder="e.g. 85% or 8.5"
            className="w-full rounded-lg border p-3"
          />
        </FormField>
      </div>
    </motion.div>
  );
}