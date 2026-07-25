"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowUpRight, IconPlus, IconMinus } from "@tabler/icons-react";

const capabilities = [
  {
    num: "01",
    title: "Digital Products",
    description:
      "Full-cycle product design, user taxonomy architecture, and design systems built to turn complex business logic into intuitive user experiences.",
    tags: ["UX Strategy", "Design Systems", "Prototyping"],
  },
  {
    num: "02",
    title: "Brand Systems",
    description:
      "Iconic brand identity, visual guidelines, typography direction, and editorial asset libraries that command immediate category authority.",
    tags: ["Visual Identity", "Brand Strategy", "Editorial Direction"],
  },
  {
    num: "03",
    title: "AI Automation",
    description:
      "Bespoke AI agent integration, lead qualification workflows, and intelligent automated pipelines that scale operational capacity 24/7.",
    tags: ["AI Agents", "Automated Pipelines", "Workflow Integration"],
  },
  {
    num: "04",
    title: "Web Development",
    description:
      "High-performance Next.js web applications, custom micro-interactions, and accessible frontend engineering optimized for 99+ Lighthouse scores.",
    tags: ["Next.js (App Router)", "TypeScript", "Micro-Interactions"],
  },
  {
    num: "05",
    title: "Performance Marketing",
    description:
      "Data-backed multi-channel customer acquisition campaigns across Meta, LinkedIn, and Search engineered for maximum blended ROAS.",
    tags: ["Paid Media", "Funnel Architecture", "Attribution Modeling"],
  },
  {
    num: "06",
    title: "Analytics & CRO",
    description:
      "Full-funnel conversion rate optimization, behavioral heatmap analysis, and quantitative A/B testing frameworks that continuously unlock revenue.",
    tags: ["CRO Frameworks", "Behavioral Heatmaps", "A/B Testing"],
  },
];

export default function Capabilities() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="capabilities" className="py-32 relative border-t border-[#262626] bg-[#0B0B0B]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B5B5B5] block mb-3">
              Core Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F7F7F5] tracking-tight">
              Capabilities.
            </h2>
          </div>
          <p className="text-sm text-[#B5B5B5] max-w-md">
            An editorial list of strategic design and precision engineering capabilities tailored for market leaders.
          </p>
        </div>

        {/* Editorial Accordion List */}
        <div className="border-t border-[#262626]">
          {capabilities.map((cap, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div
                key={cap.num}
                className={`border-b border-[#262626] transition-colors duration-300 ${
                  isOpen ? "bg-[#151515]" : "hover:bg-[#151515]/50"
                }`}
              >
                <button
                  onClick={() => setActiveIdx(isOpen ? null : idx)}
                  className="w-full py-8 px-4 sm:px-8 text-left flex items-center justify-between gap-6 focus:outline-none"
                >
                  <div className="flex items-center gap-6 sm:gap-12">
                    <span className="text-sm font-mono font-bold text-[#4F8CFF]">
                      {cap.num}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-bold text-[#F7F7F5] tracking-tight">
                      {cap.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#262626] flex items-center justify-center text-[#B5B5B5] shrink-0">
                    {isOpen ? (
                      <IconMinus className="w-5 h-5 text-[#4F8CFF]" />
                    ) : (
                      <IconPlus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-start-3 lg:col-span-7">
                          <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mb-6">
                            {cap.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {cap.tags.map((t) => (
                              <span
                                key={t}
                                className="text-[11px] font-medium uppercase tracking-wider text-[#B5B5B5] bg-[#1E1E1E] border border-[#262626] px-3 py-1 rounded-full"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-3 flex justify-start lg:justify-end pt-4 lg:pt-0">
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4F8CFF] hover:text-white transition-colors"
                          >
                            <span>Discuss Capability</span>
                            <IconArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
