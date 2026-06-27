"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ShieldCheck, AlertCircle } from "lucide-react";

import { stepVariants, stepTransition } from "../../../utils/Motion";
import { useAppSelector } from "@/src/redux/hooks";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

// interface Props {
//   amountInPaise?: number;
//   onSuccess: (paymentId: string) => void;
//   onBack: () => void;
// }

// function loadRazorpayScript(): Promise<boolean> {
//   return new Promise((resolve) => {
//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// }

interface Props {
  onSuccess: (paymentId: string) => Promise<void>;
  onBack: () => void;
}
export function PaymentForm({  onSuccess, onBack }: Props) {
  const program = useAppSelector((state) => state.program?.program);
  console.log(program,"program145")
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
console.log(errorMessage,"xcvbnhgf")
  const handlePayment = async () => {
    // setStatus("loading");
    // console.log(FormData)
    setErrorMessage(null);

    // const loaded = await loadRazorpayScript();
    // if (!loaded) {
    // //   setStatus("error");
    //   setErrorMessage("Couldn't load the payment gateway. Check your connection and try again.");
    //   return;
    // }

    const options = {
      key: "rzp_test_UmUIzzSAIdrrTV",
      amount: Number(program?.feeAmount) * 100,
      currency: "INR",
      name: "Admission fee",
      description: "Application payment",
      handler: async function (response: { razorpay_payment_id: string }) {
       try {
    setStatus("loading");

    await onSuccess(response.razorpay_payment_id);

    setStatus("idle");
  } catch (err: any) {
    setStatus("error");
    setErrorMessage(err?.message ?? "Unable to submit admission");
  }
      },
      modal: {
        ondismiss: function () {
        //   setStatus("idle");
        },
      },
    };

    const rzp = new window.Razorpay!(options);
    (rzp as any).on("payment.failed", function (response:any) {
    //   setStatus("error");
    console.log("awdkjawhdkjawhdkjhawkjdhkjawhd")
      setErrorMessage(
    response?.error?.description ||
    "Payment failed"
  );
    });
    rzp.open();
  };

  return (
    <motion.div
      variants={stepVariants}
      initial="initial"
      animate="animate"
      transition={stepTransition}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold">Payment</h2>
        <p className="text-muted-foreground">Final step — pay the admission fee to submit</p>
      </div>

      <div className="rounded-xl border p-6">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">Admission fee</p>
          <p className="text-xl font-semibold">
            ₹{program?.feeAmount}
          </p>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t pt-4 text-sm text-muted-foreground">
          <ShieldCheck size={15} className="text-emerald-600" />
          Secured by Razorpay · your card details are never stored
        </div>
      </div>

      {status === "error" && errorMessage && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600"
        >
          <AlertCircle size={16} className="shrink-0" />
          {errorMessage}
        </motion.div>
      )}

      <div className="flex gap-3">
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onBack}
          disabled={status === "loading"}
          className="rounded-lg border px-6 py-3 disabled:opacity-60"
        >
          Back
        </motion.button>

        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={handlePayment}
          disabled={status === "loading"}
          className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white disabled:opacity-70"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          {status === "loading" ? "Opening payment..." : "Pay now"}
        </motion.button>
      </div>
    </motion.div>
  );
}