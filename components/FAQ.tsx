"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";

const faqs = [
  {
    question: "What makes NorthPeak Digital different from traditional agencies?",
    answer:
      "Unlike traditional agencies that separate design from engineering and marketing, NorthPeak functions as an integrated full-stack growth partner. We combine elite product design, Next.js tech architecture, and quantitative performance marketing under one unified team.",
  },
  {
    question: "How fast can we launch a new website or campaign?",
    answer:
      "Standard web sprint projects launch in 2 to 4 weeks. Full-funnel growth campaigns and custom AI automation pipelines typically go live within 30 days after initial discovery.",
  },
  {
    question: "Do you offer ongoing post-launch support and optimization?",
    answer:
      "Yes. Most of our partners retain us on monthly Growth and Enterprise plans to continuously execute CRO experiments, manage paid media, update technical features, and maintain 99.9% uptime.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We build exclusively using Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion, hosted on Vercel or AWS for maximum speed, security, and SEO score optimization.",
  },
  {
    question: "How does the engagement process start?",
    answer:
      "We begin with a 30-minute Strategy Call to evaluate your product goals, audience metrics, and scaling roadmap. If there's a strong mutual fit, we deliver a custom proposal within 48 hours.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-28 relative bg-[#0B0F19]/40 border-y border-white/[0.06]">
      <div className="container mx-auto px-4 md:px-8 max-w-[900px]">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
              Answers & Clarity
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about partnering with NorthPeak Digital.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#111827] border-blue-500/40 shadow-lg shadow-blue-500/5"
                    : "bg-[#111827]/50 border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-500/20 text-blue-400" : "text-slate-400"
                    }`}
                  >
                    <IconChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
