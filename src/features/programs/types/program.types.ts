export interface Program {
  id: string;
  name: string;
  slug: string;
  programType: "SCHOOL" | "DIPLOMA" | "UNDERGRADUATE" | "POSTGRADUATE" | "PROFESSIONAL";
  thumbnail: string;
  description: string;
  durationMonths: string;
  mode: "Online" | "Offline" | "Hybrid";
  eligibility: string;
  feeAmount: string;
  featured: boolean;
  benefits?: string[];
  feeType?: string;
}
