import { z } from "zod";

export const personalSchema = z.object({
  fullName: z.string().trim().min(3, "Enter your full name"),
  fatherName: z.string().trim().min(3, "Enter father's name"),
  motherName: z.string().trim().min(3, "Enter mother's name"),

  email: z.string().trim().email("Enter a valid email address"),

  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

 gender: z.enum(["MALE", "FEMALE", "OTHER"], {
    error: "Select a gender",
  }),

  dob: z.string().min(1, "Select your date of birth"),

  address: z.object({
  line1: z.string().min(2),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(1),
}),
});

export const academicSchema = z.object({
  qualification: z.string().trim().min(1, "Required"),

  institutionName: z.string().trim().min(2, "Required"),

  boardOrUniversity: z.string().trim().min(2, "Required"),

  passingYear: z
    .string()
    .trim()
    .regex(/^(19|20)\d{2}$/, "Enter a valid 4-digit year"),

  percentage: z.string().trim().min(1, "Required"),
});

export const documentsSchema = z.object({
  photo: z.string({ error: "Photo is required" }).min(1, "Upload your photo"),
  aadhaar: z.string({ error: "Aadhaar is required" }).min(1, "Upload Aadhaar card"),
  marksheet: z.string({ error: "Marksheet is required" }).min(1, "Upload marksheet"),
});

export const admissionSchema = z.object({
   programId: z.string().min(1, "Program is required"),
  personal: personalSchema,

  academics: z.array(academicSchema).min(1, "Add at least one qualification"),

  documents: documentsSchema,
});


export const uploadFileSchema = z.object({
  key: z.string().min(1, "File upload is required"),
  url: z.string().url("Invalid file URL"),
});

export const uploadDocumentsSchema = z.object({
  photo: uploadFileSchema,
  aadhaar: uploadFileSchema,
  marksheet: uploadFileSchema,
});

export type DocumentsSchemaType = z.infer<typeof documentsSchema>;
export type AdmissionSchemaType = z.infer<typeof admissionSchema>;