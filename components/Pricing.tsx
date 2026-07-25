"use client";

import { motion } from "framer-motion";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";

const plans = [
  {
    name: "Product Sprint",
    price: "$200",
    period: "/project",
    highlight: false,
    description: "For early stage companies requiring rapid brand identity & Next.js product launch.",
    features: [
      "Custom 5-Page Next.js Architecture",
      "Digital Brand & Design System",
      "99+ Lighthouse Speed Optimization",
      "Basic CRO & Funnel Tracking",
      "2 Weeks Post-Launch SLA Support",
    ],
    cta: "Select Sprint",
  },
  {
    name: "Growth Engine",
    price: "$800",
    period: "/month",
    highlight: true,
    description: "Our core partnership model for scaling companies seeking continuous growth and CRO.",
    features: [
      "End-to-End Product & Web Engineering",
      "Multi-Channel Paid Growth Management",
      "Custom AI Workflow & Lead Automation",
      "Continuous A/B Testing & Funnel CRO",
      "Dedicated Senior Designer & Tech Lead",
      "Weekly Growth Sprints & Slack Sync",
    ],
    cta: "Partner With Us",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: false,
    description: "Bespoke digital transformation for established market leaders and high-volume platforms.",
    features: [
      "Unlimited Component Architecture",
      "Custom Interactive Assets",
      "Dedicated 24/7 Slack & Support SLA",
      "Executive Growth Advisory & CMO Sync",
      "SOC2 Compliance & Custom SLA",
    ],
    cta: "Executive Briefing",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative border-t border-[#262626] bg-[#0B0B0B]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B5B5B5] block mb-3">
            Engagement Options
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F7F7F5] tracking-tight mb-4">
            Transparent Pricing.
          </h2>
          <p className="text-base sm:text-lg text-[#B5B5B5]">
            Structured engagement models designed for clear business outcomes and velocity.
          </p>
        </div>

        {/* Minimal Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`p-8 sm:p-10 rounded-3xl bg-[#151515] border flex flex-col justify-between transition-all duration-300 ${
                p.highlight
                  ? "border-[#4F8CFF] bg-[#1A1A1A]"
                  : "border-[#262626] hover:border-white/[0.2]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#F7F7F5]">{p.name}</h3>
                  {p.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F8CFF] bg-[#4F8CFF]/10 px-3 py-1 rounded-full border border-[#4F8CFF]/30">
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#B5B5B5] leading-relaxed mb-6 min-h-[36px]">
                  {p.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-[#262626]">
                  <span className="text-4xl font-extrabold text-[#F7F7F5] tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-xs text-[#B5B5B5]">{p.period}</span>
                </div>

                <div className="space-y-3.5 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B5B5B5] block">
                    Deliverables:
                  </span>
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-xs text-[#F7F7F5]">
                      <IconCheck className="w-4 h-4 text-[#4F8CFF] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  p.highlight
                    ? "bg-[#4F8CFF] hover:bg-[#3b72e0] text-white"
                    : "bg-[#1E1E1E] hover:bg-[#262626] text-[#F7F7F5] border border-[#262626]"
                }`}
              >
                <span>{p.cta}</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
