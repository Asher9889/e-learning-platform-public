"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { admissionSchema, type AdmissionSchemaType } from "../schemas/admission.schema";
import type { AcademicRecord } from "../types/admission.types";
import { stepVariants, stepTransition } from  "../../../utils/Motion";
import { AcademicCard } from "./AcademicCard";

const emptyRecord: AcademicRecord = {
  qualification: "",
  institutionName: "",
  boardOrUniversity: "",
  passingYear: "",
  percentage: "",
};

interface Props {
  defaultValues?: AcademicRecord[];
  onNext: (data: AcademicRecord[]) => void;
  onBack: () => void;
}

export function AcademicDetailsForm({ defaultValues, onNext, onBack }: Props) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AdmissionSchemaType>({
    // Only validating the academics slice here; personal details are
    // already captured in an earlier step, so we pass a permissive stub.
    resolver: zodResolver(
      admissionSchema.pick({ academics: true })
    ) as any,
    defaultValues: {
      academics:
        defaultValues && defaultValues.length > 0 ? defaultValues : [emptyRecord],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "academics",
  });

  const submit = (data: { academics: AcademicRecord[] }) => {
    onNext(data.academics);
  };

  return (
    <motion.form
      variants={stepVariants}
      initial="initial"
      animate="animate"
      transition={stepTransition}
      onSubmit={handleSubmit(submit)}
      className="space-y-6"
      noValidate
    >
      <div>
        <h2 className="text-2xl font-bold">Academic details</h2>
        <p className="text-muted-foreground">
          Add every qualification, starting with the most recent
        </p>
      </div>

      <div className="space-y-5">
        <AnimatePresence initial={false}>
          {fields.map((field, index) => (
            <AcademicCard
              key={field.id}
              index={index}
              register={register}
              errors={errors.academics}
              remove={remove}
              canRemove={fields.length > 1}
            />
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={() => append(emptyRecord)}
        className="flex items-center gap-2 rounded-lg border px-5 py-3 transition-colors hover:bg-muted/50"
      >
        <Plus size={16} />
        Add qualification
      </motion.button>

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
          type="submit"
          whileTap={{ scale: 0.97 }}
          className="rounded-lg bg-primary px-6 py-3 text-white"
        >
          Continue
        </motion.button>
      </div>
    </motion.form>
  );
}