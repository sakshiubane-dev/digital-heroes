"use client";

import { motion } from "framer-motion";
import {
  IconSearch,
  IconCompass,
  IconCode,
  IconRocket,
} from "@tabler/icons-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: IconSearch,
    description:
      "Deep dive into your industry, audience behavioral data, unit economics, and competitive gaps to uncover high-leverage growth levers.",
  },
  {
    number: "02",
    title: "Strategize",
    icon: IconCompass,
    description:
      "Architect a bespoke growth blueprint detailing product positioning, brand messaging, tech stack, and multi-channel acquisition funnels.",
  },
  {
    number: "03",
    title: "Build",
    icon: IconCode,
    description:
      "Engineers and designers rapidly deploy pixel-perfect digital assets, high-converting Next.js applications, and custom AI automations.",
  },
  {
    number: "04",
    title: "Scale",
    icon: IconRocket,
    description:
      "Execute data-driven paid media campaigns, continuous conversion rate optimization, and iterative performance scaling to maximize ROI.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-28 relative bg-[#0B0F19]/50 border-y border-white/[0.06]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
              Growth Framework
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            How We Partner & Deliver.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A systematic four-phase execution engine built to transform ambitious brands into category leaders.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connector Line */}
          <div className="absolute top-1/4 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 -z-0 opacity-30" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10 flex flex-col group"
              >
                {/* Step Circle & Number */}
                <div className="w-16 h-16 rounded-2xl bg-[#111827] border border-white/[0.12] group-hover:border-blue-500/50 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="font-heading text-xl font-bold text-blue-400">
                    {step.number}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 rounded-2xl bg-[#111827]/60 border border-white/[0.08] hover:border-white/[0.2] transition-all flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-purple-400" />
                    <h3 className="font-heading text-xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-8 relative pl-6 border-l border-white/[0.1]">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Dot on line */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030712]" />

                <div className="p-6 rounded-2xl bg-[#111827]/80 border border-white/[0.08]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading text-sm font-bold text-blue-400">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                      <Icon className="w-4 h-4 text-purple-400" />
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
