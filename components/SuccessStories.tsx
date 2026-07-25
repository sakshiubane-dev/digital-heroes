"use client";

import { motion } from "framer-motion";
import { IconStarFilled, IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    quote:
      "NorthPeak Digital completely revamped our SaaS brand and acquisition engine. Within 90 days of launching the new site, our conversion rate jumped from 3.2% to 11.4%.",
    author: "Elena Rostova",
    role: "VP of Growth",
    company: "CloudScale Tech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    metrics: "+256% MRR Lift",
  },
  {
    quote:
      "The level of design fidelity and engineering rigor NorthPeak brings is unmatched. They feel less like an outside agency and more like our core founding design team.",
    author: "Marcus Vance",
    role: "Co-Founder & CEO",
    company: "Apex Finance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    metrics: "4.9x ROAS Achieved",
  },
  {
    quote:
      "Their AI automation framework cut our client onboarding friction by 70% while our organic pipeline doubled. Partnering with NorthPeak was our best decision this year.",
    author: "Sophia Lin",
    role: "Chief Marketing Officer",
    company: "Nexus AI Labs",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    metrics: "70% Onboarding Speedup",
  },
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-28 relative bg-[#0B0F19]/40 border-y border-white/[0.06]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">
              Proven Impact
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Success Stories.
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Read how we help high-growth founders and executive teams unlock sustainable revenue expansion.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-white/[0.04] group-hover:text-blue-500/10 transition-colors">
                <IconQuote className="w-14 h-14" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <IconStarFilled key={i} className="w-4 h-4" />
                  ))}
                </div>

                {/* Metric pill */}
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
                  {t.metrics}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-8 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30 group-hover:border-blue-500 transition-colors"
                />
                <div>
                  <h4 className="font-heading text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} • <span className="text-slate-300 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
