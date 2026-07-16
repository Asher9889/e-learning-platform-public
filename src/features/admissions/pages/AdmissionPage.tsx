"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { AdmissionStepper } from "../components/AdmissionStepper";
import { PersonalDetailsForm } from "../components/PersonalDetailsForm";
import { AcademicDetailsForm } from "../components/AcademicDetailsForm";
import { DocumentsForm } from "../components/DocumentsForm";
import { ReviewForm } from "../components/ReviewForm";
import { PaymentForm } from "../components/PaymentForm";
import { AdmissionSuccess } from "../components/AdmissionSuccess";
import { AdmissionFormData } from "../types/admission.types";
import { useCreateAdmission } from "../hooks/useCreateAdission";
import { AdmissionSchemaType } from "../schemas/admission.schema";
import { useAppSelector } from "@/src/redux/hooks";
import { useProgramsData } from "../../programs/hooks/usePrograms";

interface Props {
    slug: string;
}

const emptyFormData: AdmissionFormData = {
    programId: "",
    personal: {
        fullName: "",
        fatherName: "",
        motherName: "",
        email: "",
        mobile: "",
        gender: "MALE",
        dob: "",
        address: {
            line1: "",
            city: "",
            state: "",
            zipCode: "",
        }
    },
    academics: [],
    documents: {
        photo: {
            key: "",
            url: "",
        },
        aadhaar: {
            key: "",
            url: "",
        },
        marksheet: {
            key: "",
            url: "",
        },
    },
};

export function AdmissionPage({ slug }: Props) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<AdmissionFormData>(emptyFormData);
    const [paymentId, setPaymentId] = useState<string | null>(null);
    const { createAdmissionAsync, isCreating, createError } = useCreateAdmission();

    const goTo = (s: number) => setStep(s);
    const back = () => setStep((s) => Math.max(1, s - 1));
    const selectedProgram = useAppSelector((state) => state.program.program);
    // Only completed steps and the current step are reachable by click —
    // jumping ahead into an unfilled step would show an empty/broken form.
    const handleStepClick = (target: number) => {
        if (target <= step) goTo(target);
    };
    const handleSubmit = async (formData: AdmissionFormData) => {
        if (!formData.documents.photo || !formData.documents.aadhaar || !formData.documents.marksheet || !selectedProgram?.id) {
            // toast.error("Please upload all documents");
            return;
        }
        const updatedData: AdmissionSchemaType = {
            ...formData,
            documents: {
                photo: formData?.documents?.photo?.key,
                aadhaar: formData?.documents?.aadhaar?.key,
                marksheet: formData?.documents?.marksheet?.key,
            },
            programId: selectedProgram?.id,
        };



        return await createAdmissionAsync(updatedData);
    };

    return (
        <div className="container max-w-4xl mx-auto px-6 space-y-10">
            {step <= 5 && (
                <div className="sticky top-16 z-20 -mx-6 border-b bg-white px-6 pb-4 pt-6 shadow-sm">
                    <AdmissionStepper currentStep={step} onStepClick={handleStepClick} />
                </div>
            )}

            <AnimatePresence mode="wait" initial={false}>
                {step === 1 && (
                    <PersonalDetailsForm
                        key="personal"
                        defaultValues={formData.personal}
                        onNext={(personal) => {

                            console.log(formData, "formDataformDataformDataformData")
                            setFormData((prev) => ({ ...prev, personal }));
                            goTo(2);
                        }}
                    />
                )}

                {step === 2 && (
                    <AcademicDetailsForm
                        key="academic"
                        defaultValues={formData.academics}
                        onNext={(academics) => {
                            setFormData((prev) => ({ ...prev, academics }));
                            goTo(3);
                        }}
                        onBack={back}
                    />
                )}

                {step === 3 && (
                    <DocumentsForm
                        key="documents"
                        defaultValues={formData.documents}
                        onNext={(documents) => {
                            console.log(documents, "doc")
                            setFormData((prev) => ({ ...prev, documents }));
                            goTo(4);
                        }}
                        onBack={back}
                    />
                )}

                {step === 4 && (
                    <ReviewForm
                        key="review"
                        data={formData}
                        onNext={() => goTo(5)}
                        onBack={back}
                        onEditStep={goTo}
                    />
                )}

                {step === 5 && (
                    <PaymentForm
                        key="payment"
                        onSuccess={async (id) => {
                            setPaymentId(id);

                            console.log(formData, "formDataformDataformData");
                            const res: any = await handleSubmit(formData);
                            console.log(res, "response")
                            if (!res) {
                                throw new Error("Admission creation failed");
                            }
                            goTo(6);
                        }}
                        onBack={back}

                    />
                )}

                {step === 6 && <AdmissionSuccess key="success" paymentId={paymentId ?? undefined} />}
            </AnimatePresence>
        </div>
    );
}