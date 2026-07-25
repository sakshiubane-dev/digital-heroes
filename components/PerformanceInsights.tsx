"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconTrendingUp,
  IconClick,
  IconTarget,
  IconArrowUpRight,
  IconChartBar,
} from "@tabler/icons-react";

export default function PerformanceInsights() {
  const [activeTab, setActiveTab] = useState<"revenue" | "traffic" | "conversions">("revenue");

  return (
    <section id="performance-insights" className="py-28 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                Data-Driven Impact
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Performance Insights.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base">
            Real-time analytics and predictive performance models engineered for enterprise transparency.
          </p>
        </div>

        {/* Analytics Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Line Chart & Controls (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl glass-card p-6 md:p-8 border border-white/[0.1] flex flex-col justify-between">
            {/* Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                  <span>Growth Velocity</span>
                  <span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <IconArrowUpRight className="w-3.5 h-3.5" /> +248.5% YoY
                  </span>
                </h3>
                <p className="text-xs text-slate-400">Blended multichannel attribution analytics</p>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] p-1 rounded-xl">
                {(["revenue", "traffic", "conversions"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                      activeTab === tab
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* SVG Line Chart */}
            <div className="h-64 sm:h-72 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                <defs>
                  <linearGradient id="primaryAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="secondaryAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="140" x2="500" y2="140" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="190" x2="500" y2="190" stroke="rgba(255,255,255,0.08)" />

                {/* Gradient Fills */}
                <path
                  d="M0,160 Q80,120 160,140 T320,60 T500,20 L500,190 L0,190 Z"
                  fill="url(#primaryAreaGrad)"
                />

                {/* Animated Primary Line */}
                <motion.path
                  d="M0,160 Q80,120 160,140 T320,60 T500,20"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                />

                {/* Secondary Accent Line */}
                <motion.path
                  d="M0,180 Q100,150 200,130 T400,80 T500,50"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, ease: "easeOut" }}
                />

                {/* Interactive Points */}
                {[
                  { cx: 0, cy: 160 },
                  { cx: 120, cy: 135 },
                  { cx: 240, cy: 100 },
                  { cx: 370, cy: 45 },
                  { cx: 500, cy: 20 },
                ].map((pt, i) => (
                  <g key={i}>
                    <circle cx={pt.cx} cy={pt.cy} r="5" fill="#3B82F6" stroke="#030712" strokeWidth="2" />
                    <circle cx={pt.cx} cy={pt.cy} r="9" fill="none" stroke="#3B82F6" strokeOpacity="0.4" />
                  </g>
                ))}
              </svg>
            </div>

            {/* Bottom Chart Footer Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs text-slate-400">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span>NorthPeak Optimized Target</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                  <span>Industry Baseline Benchmark</span>
                </div>
              </div>
              <span className="font-semibold text-slate-300">Updated 5 minutes ago</span>
            </div>
          </div>

          {/* Side Metrics & Circular Progress (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Metric 1: Circular Progress (ROAS Scale) */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.1] flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Campaign ROI Efficiency
                </span>
                <div className="font-heading text-3xl font-bold text-white mt-1">
                  480%
                </div>
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <IconTrendingUp className="w-3.5 h-3.5" /> High Scalability
                </p>
              </div>

              {/* Circular SVG Progress */}
              <div className="w-20 h-20 relative flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="transparent" />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="#8B5CF6"
                    strokeWidth="6"
                    strokeDasharray="201"
                    strokeDashoffset="35"
                    strokeLinecap="round"
                    fill="transparent"
                    initial={{ strokeDashoffset: 201 }}
                    whileInView={{ strokeDashoffset: 35 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <span className="absolute text-xs font-bold text-white">82%</span>
              </div>
            </div>

            {/* Metric 2: Monthly Traffic Bar Chart */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.1] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                    Monthly Qualified Traffic
                  </span>
                  <IconClick className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="font-heading text-2xl font-bold text-white">
                  1.42M Hits
                </div>
              </div>

              {/* Bar Chart SVG */}
              <div className="h-28 w-full flex items-end justify-between gap-2 pt-4">
                {[40, 55, 35, 70, 85, 60, 95].map((height, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      className="w-full rounded-t-sm bg-gradient-to-t from-blue-600 to-cyan-400"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.08 }}
                    />
                    <span className="text-[9px] text-slate-500">M{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
