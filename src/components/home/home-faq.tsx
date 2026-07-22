"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/layout/section";

const faqs = [
  {
    question: "What types of properties do you offer?",
    answer: "We offer a diverse range of properties including apartments, villas, houses, penthouses, commercial spaces, and plots across prime locations in Pakistan.",
  },
  {
    question: "How can I book a site visit?",
    answer: "You can book a site visit through our website by filling out the appointment form, calling our team directly, or chatting with our AI assistant. We'll arrange a convenient time for you.",
  },
  {
    question: "What payment plans are available?",
    answer: "We offer flexible payment plans tailored to your budget. These include installment plans, bank financing assistance, and custom payment schedules. Contact us for detailed information.",
  },
  {
    question: "Are the properties legally verified?",
    answer: "Yes, all properties listed with us are thoroughly verified for legal compliance, clear titles, and necessary approvals from relevant authorities.",
  },
  {
    question: "How do I get started with investing?",
    answer: "Simply contact us through any of our channels - phone, email, website form, or AI assistant. Our team will guide you through the entire investment process.",
  },
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
      />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-navy-900 font-medium pr-8">{faq.question}</span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
