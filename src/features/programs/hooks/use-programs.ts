import { useQuery } from "@tanstack/react-query";
import { GetProgram } from "../api/program.api";

export const usePrograms = () => {
  return useQuery({
    queryKey: ["programs"],
    queryFn: GetProgram,
  });
};