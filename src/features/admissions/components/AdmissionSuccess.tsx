"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Props {
  paymentId?: string;
}

export function AdmissionSuccess({ paymentId }: Props) {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "backOut" }}
      className="flex flex-col items-center justify-center space-y-4 py-10 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, duration: 0.35, ease: "backOut" }}
      >
        <CheckCircle2 size={60} className="text-emerald-500" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold"
      >
        Application submitted!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-md text-muted-foreground"
      >
        Your admission form has been submitted successfully. We&apos;ll review it
        and contact you on your registered email and mobile number soon.
      </motion.p>

      {paymentId && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="rounded-lg bg-muted px-3 py-1.5 font-mono text-xs text-muted-foreground"
        >
          Reference: {paymentId}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <Link
          href="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-white"
        >
          Go to dashboard
        </Link>
      </motion.div>
    </motion.div>
  );
}