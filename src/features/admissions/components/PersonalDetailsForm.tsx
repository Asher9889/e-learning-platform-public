"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

import { personalSchema } from "../schemas/admission.schema";
import type { PersonalDetails } from "../types/admission.types";
import { stepVariants, stepTransition } from "../../../utils/Motion";
import { FormField } from "./FormField";

interface Props {
  defaultValues?: Partial<PersonalDetails>;
  onNext: (data: PersonalDetails) => void;
}

export function PersonalDetailsForm({ defaultValues, onNext }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonalDetails>({
    resolver: zodResolver(personalSchema),
    defaultValues,
    mode: "onBlur",
  });

  const submit = (data: PersonalDetails) => {
    onNext(data);
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
        <h2 className="text-2xl font-bold">Personal information</h2>
        <p className="text-muted-foreground">
          Enter your details exactly as they appear on your documents
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Full name" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            placeholder="As per Aadhaar card"
            aria-invalid={!!errors.fullName}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Email" error={errors.email?.message}>
          <input
            type="email"
            {...register("email")}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Father's name" error={errors.fatherName?.message}>
          <input
            {...register("fatherName")}
            placeholder="Father's full name"
            aria-invalid={!!errors.fatherName}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Mother's name" error={errors.motherName?.message}>
          <input
            {...register("motherName")}
            placeholder="Mother's full name"
            aria-invalid={!!errors.motherName}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Mobile number" error={errors.mobile?.message}>
          <input
            type="tel"
            inputMode="numeric"
            {...register("mobile")}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.mobile}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Gender" error={errors.gender?.message}>
          <select
            {...register("gender")}
            aria-invalid={!!errors.gender}
            defaultValue=""
            className="w-full rounded-lg border p-3"
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
        </FormField>

        <FormField label="Date of birth" error={errors.dob?.message}>
          <input
            type="date"
            {...register("dob")}
            aria-invalid={!!errors.dob}
            className="w-full rounded-lg border p-3"
          />
        </FormField>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormField label="Address Line 1" error={errors.address?.line1?.message}>
          <input
            {...register("address.line1")}
            placeholder="House no., street, area"
            aria-invalid={!!errors.address?.line1}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="City" error={errors.address?.city?.message}>
          <input
            {...register("address.city")}
            placeholder="City"
            aria-invalid={!!errors.address?.city}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="State" error={errors.address?.state?.message}>
          <input
            {...register("address.state")}
            placeholder="State"
            aria-invalid={!!errors.address?.state}
            className="w-full rounded-lg border p-3"
          />
        </FormField>

        <FormField label="Zip Code" error={errors.address?.zipCode?.message}>
          <input
            {...register("address.zipCode")}
            placeholder="6-digit ZIP code"
            aria-invalid={!!errors.address?.zipCode}
            className="w-full rounded-lg border p-3"
          />
        </FormField>
      </div>

      {Object.keys(errors).length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600"
        >
          <AlertCircle size={16} className="shrink-0" />
          Please fix the highlighted fields before continuing
        </motion.div>
      )}

      <div className="flex justify-end">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileTap={{ scale: 0.97 }}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-60"
        >
          Continue
        </motion.button>
      </div>
    </motion.form>
  );
}