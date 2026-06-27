
import { api, apiEndPoints } from "@/src/config";


export async function uploadDocument(
  file: File | string
) {
  const formData = new FormData();

  formData.append("avatar", file);

  const { url, method } =
    apiEndPoints.UPLOAD.UPLOAD_DOCUMENT;

  const res = await api.request({
    url,
    method,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

