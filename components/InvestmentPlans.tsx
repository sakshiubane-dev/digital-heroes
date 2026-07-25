"use client";

import { motion } from "framer-motion";
import { IconCheck, IconSparkles, IconArrowRight } from "@tabler/icons-react";

const plans = [
  {
    name: "Starter",
    tagline: "Ideal for early-stage startups seeking rapid market validation and premium positioning.",
    price: "$4,500",
    period: "/project",
    popular: false,
    features: [
      "Custom 5-Page Next.js Architecture",
      "Full Brand Identity & Design System",
      "Core SEO & Speed Optimization (95+ LCP)",
      "Basic Analytics & Funnel Tracking",
      "2 Weeks Post-Launch Support",
    ],
    cta: "Start Scale Sprint",
    accent: "border-white/[0.08]",
  },
  {
    name: "Growth",
    tagline: "Designed for scaling brands ready to dominate search, optimize conversions, and automate sales.",
    price: "$8,900",
    period: "/month",
    popular: true,
    features: [
      "Full Web App / Website Design & Dev",
      "End-to-End CRO & A/B Testing Framework",
      "Multi-Channel Paid Media Management",
      "Custom AI Workflow & Lead Automation",
      "Dedicated Growth Lead & Weekly Sprints",
      "Continuous SEO & Content Architecture",
    ],
    cta: "Claim Growth Slot",
    accent: "border-blue-500/50 shadow-2xl shadow-blue-500/20",
  },
  {
    name: "Enterprise",
    tagline: "Bespoke digital transformation for established market leaders and high-volume SaaS platforms.",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Unlimited Component & Page Engineering",
      "Custom WebGL / 3D Interactive Features",
      "Enterprise Multi-Region Infrastructure",
      "Dedicated 24/7 Slack Engine Channel",
      "Executive Growth Advisory & CMO Sync",
      "Custom SLA & Compliance Guarantee",
    ],
    cta: "Schedule Executive Briefing",
    accent: "border-white/[0.08]",
  },
];

export default function InvestmentPlans() {
  return (
    <section id="investment-plans" className="py-28 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
              Predictable ROI
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Investment Plans.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Transparent pricing models tailored for high-growth velocity. No hidden fees, ever.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 bg-[#111827]/90 backdrop-blur-xl border ${plan.accent} flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30">
                  <IconSparkles className="w-3.5 h-3.5" /> Most Popular Choice
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[36px]">
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/[0.08]">
                  <span className="font-heading text-4xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What&apos;s Included:
                  </span>
                  {plan.features.map((feature, fIdx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + fIdx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheck className="w-3.5 h-3.5 text-blue-400 stroke-[2.5]" />
                      </div>
                      <span className="text-xs text-slate-300 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50"
                    : "bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1]"
                }`}
              >
                <span>{plan.cta}</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
