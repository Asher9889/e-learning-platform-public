import { api, apiEndPoints } from "@/src/config";
import { AdmissionSchemaType } from "../schemas/admission.schema";

export async function createAdmission(
  payload: AdmissionSchemaType
) {
  const { url, method } =
    apiEndPoints.ADMISSION.CREATE_ADMISSION;

  const res = await api.request({
    url,
    method,
    data: payload,
  });

  return res.data;
}