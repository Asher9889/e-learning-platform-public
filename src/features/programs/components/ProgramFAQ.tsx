"use client";
import { motion, easeOut } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
  visible: { transition: { staggerChildren: 0.07 } },
};

const faqItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export function ProgramFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section"
      style={{ background: "var(--surface-container-low)" }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{ marginBottom: 36, textAlign: "center" }}
        >
          <h2
            className="text-headline-lg"
            style={{ margin: "0 0 6px" }}
          >
            frequently asked questions
          </h2>
          <p className="text-body-sm text-muted">
            everything you need to know about our programs and admission
            process.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          style={{ display: "flex", flexDirection: "column", gap: 8 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={faqItem}
                className="card accordion-item"
                style={{ padding: 0, overflow: "hidden" }}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="accordion-item__header">
                  <span
                    className="text-headline-sm"
                    style={{ color: "var(--on-surface)" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: "var(--primary)",
                      transition: "transform var(--duration-normal) var(--ease-out)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="accordion-item__content text-body-sm text-muted">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
