import { useMutation } from "@tanstack/react-query";
import {
  createAdmission,
} from "../api/create-admission";
import { AdmissionSchemaType } from "../schemas/admission.schema";

export function useCreateAdmission() {
  const mutation = useMutation({
    mutationKey: ["create-admission"],

    mutationFn: (payload: AdmissionSchemaType) =>
      createAdmission(payload),

    onSuccess: (data) => {
      console.log(
        "Admission created successfully",
        data
      );
    },

    onError: (error) => {
      console.error(
        "Admission creation failed",
        error
      );
    },
  });

  return {
    createAdmission: mutation.mutate,
    createAdmissionAsync: mutation.mutateAsync,

    isCreating: mutation.isPending,

    createError: mutation.error,

    createdAdmission: mutation.data,
  };
}