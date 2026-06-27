"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

import { stepVariants, stepTransition } from "../../../utils/Motion";
import { UploadCard } from "./UploadCard";
import { uploadDocumentsSchema } from "../schemas/admission.schema";

interface UploadResult {
  key: string;
  url: string;
}

export interface DocumentFiles {
  photo: UploadResult | null;
  aadhaar: UploadResult | null;
  marksheet: UploadResult | null;
}

interface Props {
  defaultValues?: DocumentFiles;
  onNext: (files: DocumentFiles) => void;
  onBack: () => void;
}

export function DocumentsForm({ defaultValues, onNext, onBack }: Props) {
  const [photo, setPhoto] = useState<UploadResult | null>(
    defaultValues?.photo ?? null
  );
  const [aadhaar, setAadhaar] = useState<UploadResult | null>(
    defaultValues?.aadhaar ?? null
  );
  const [marksheet, setMarksheet] = useState<UploadResult | null>(
    defaultValues?.marksheet ?? null
  );
  const [showError, setShowError] = useState(false);

  const submit = () => {
   const result = uploadDocumentsSchema.safeParse({
    photo,
    aadhaar,
    marksheet,
  });
    if (!result.success) {
    console.log(result.error.flatten());
    setShowError(true);
    return;
  }
    console.log({ photo, aadhaar, marksheet }, "DocumentsForm");
    onNext({ photo, aadhaar, marksheet });
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
        <h2 className="text-2xl font-bold">Documents</h2>
        <p className="text-muted-foreground">Upload all three required documents</p>
      </div>

      <div className="space-y-4">
        <UploadCard
          label="Passport size photo"
          hint="JPG or PNG, up to 5 MB"
          accept="image/png,image/jpeg"
          value={photo}
          onUploaded={(result) => {
            setPhoto(result);
            setShowError(false);
          }}
        />

        <UploadCard
          label="Aadhaar card"
          hint="JPG or PNG, up to 5 MB"
          accept="image/png,image/jpeg"
          value={aadhaar}
          onUploaded={(result) => {
            setAadhaar(result);
            setShowError(false);
          }}
        />

        <UploadCard
          label="Last marksheet"
          hint="JPG or PNG, up to 5 MB"
          accept="image/png,image/jpeg"
          value={marksheet}
          onUploaded={(result) => {
            setMarksheet(result);
            setShowError(false);
          }}
        />
      </div>

      {showError && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600"
        >
          <AlertCircle size={16} className="shrink-0" />
          All three documents are required to continue
        </motion.div>
      )}

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
          onClick={submit}
          className="rounded-lg bg-primary px-6 py-3 text-white"
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
}