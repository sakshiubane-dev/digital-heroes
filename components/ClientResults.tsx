"use client";

import { motion } from "framer-motion";

const impactStats = [
  {
    number: "212%",
    label: "Increase in Qualified Leads",
    detail: "Average lift measured across enterprise B2B SaaS partners within 60 days post-launch.",
  },
  {
    number: "3.8×",
    label: "Average Return on Ad Spend",
    detail: "Data-driven multi-channel media allocation across LinkedIn, Search, and Meta.",
  },
  {
    number: "98%",
    label: "Client Retention Rate",
    detail: "Long-term growth partnerships built on measurable commercial outcomes.",
  },
];

export default function ClientResults() {
  return (
    <section id="impact" className="py-32 relative border-t border-[#262626] bg-[#0B0B0B]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B5B5B5] block mb-3">
            Quantifiable Impact
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F7F7F5] tracking-tight">
            Measured by Outcomes.
          </h2>
        </div>

        {/* Huge Typography Numbers Stacked (NO CARDS) */}
        <div className="space-y-16">
          {impactStats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="border-b border-[#262626] pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline"
            >
              {/* Huge Number (5 cols) */}
              <div className="lg:col-span-5">
                <span className="text-6xl sm:text-8xl lg:text-[7.5rem] font-extrabold text-[#F7F7F5] leading-none tracking-tight block">
                  {item.number}
                </span>
              </div>

              {/* Label & Detail (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#4F8CFF] tracking-tight">
                  {item.label}
                </h3>
                <p className="text-sm sm:text-base text-[#B5B5B5] max-w-xl leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
