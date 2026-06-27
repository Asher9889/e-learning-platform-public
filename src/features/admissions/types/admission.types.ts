export interface AcademicRecord {
  qualification: string;
  institutionName: string;
  boardOrUniversity: string;
  passingYear: string;
  percentage: string;
}

export interface PersonalDetails {
  fullName: string;
  fatherName: string;
  motherName: string;
  email: string;
  mobile: string;
  gender:  "MALE" | "FEMALE" | "OTHER";
  dob: string;
  address: {
  line1: string;
  city: string;
  state: string;
  zipCode: string;
}
}

export interface DocumentFiles {
  photo: {
    url: string;
    key: string;
  } | null;
  aadhaar:{
    url: string;
    key: string;
  } | null;
  marksheet:{
    url: string;
    key: string ;
  } | null;
}

export interface AdmissionFormData {
  programId: string;
  personal: PersonalDetails;
  academics: AcademicRecord[];
  documents: DocumentFiles;
}