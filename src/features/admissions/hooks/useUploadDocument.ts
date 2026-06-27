// src/pages/Teacher/hooks/useUploadAvatar.ts

import { useMutation } from "@tanstack/react-query";
import { uploadDocument } from "../api/upload.document";

export function useUploadDocument() {
  const mutation = useMutation({
    mutationKey: ["upload-avatar"],

    mutationFn: (file: File | string) =>
      uploadDocument(file),

    onSuccess: (data) => {
      console.log(
        "Avatar uploaded successfully",
        data
      );
    },

    onError: (error) => {
      console.error(
        "Avatar upload failed",
        error
      );
    },
  });

  return {
    uploadAvatar: mutation.mutate,
    uploadAvatarAsync:
      mutation.mutateAsync,

    isUploading:
      mutation.isPending,

    uploadError:
      mutation.error,

    uploadedAvatar:
      mutation.data,
  };
}