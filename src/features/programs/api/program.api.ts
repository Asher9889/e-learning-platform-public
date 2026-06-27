import { api, apiEndPoints } from "@/src/config";
// import { LoginPayload, LoginResponse } from "./auth.types";
type HttpMethod = "get" | "post" | "put" | "patch" | "delete";
export const GetProgram = async (): Promise<any> => {
  const { method, url } = apiEndPoints.PROGRAMS.LIST;

  const axiosMethod = method.toLowerCase() as HttpMethod;

  const { data } = await api[axiosMethod](url);
  return data.programs;
};