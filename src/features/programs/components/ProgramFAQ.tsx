"use client";
import { motion, easeOut } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "how do i apply?",
    answer:
      "you can apply online by clicking the 'apply now' button on any program card. fill out the application form with your details, upload the required documents, and submit. our admissions team will review your application and get back to you within 2-3 business days.",
  },
  {
    question: "can i pay fees online?",
    answer:
      "yes, we offer multiple online payment options including credit/debit cards, net banking, upi, and popular digital wallets. you can pay the full fee upfront or opt for our easy installment plans. all transactions are secured with industry-standard encryption.",
  },
  {
    question: "what documents are required?",
    answer:
      "generally, you'll need your previous academic transcripts, id proof (aadhaar/pan/passport), passport-sized photographs, and any relevant certificates. specific document requirements may vary by program. you'll receive a complete checklist after submitting your application.",
  },
  {
    question: "can i study remotely?",
    answer:
      "absolutely! we offer online and hybrid learning modes for most programs. our online programs feature live interactive classes, recorded lectures, digital study materials, and virtual lab sessions. you can learn from anywhere with a stable internet connection.",
  },
  {
    question: "when does admission start?",
    answer:
      "admissions for the academic year 2025-26 are now open. we have multiple intake cycles throughout the year. early bird applicants receive priority consideration and exclusive scholarship opportunities. contact our admissions team for specific start dates.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const faqItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export function ProgramFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto max-w-[var(--container-max)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4">
              <HelpCircle size={22} className="text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-on-surface m-0 mb-3 leading-tight">
              got
              <br />
              questions?
            </h2>
            <p className="text-base text-on-surface-variant max-w-xs leading-relaxed">
              everything you need to know about our programs and the admission process.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={container}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={faqItem}
                  className="bg-surface-lowest border border-outline-variant/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-fast hover:shadow-md"
                  style={{
                    borderLeftWidth: isOpen ? "4px" : "0px",
                    borderLeftColor: isOpen ? "var(--color-primary)" : "transparent",
                  }}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between py-5 px-6 gap-4">
                    <span className="text-lg font-bold font-display text-on-surface">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className="text-primary shrink-0 transition-transform duration-normal"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
