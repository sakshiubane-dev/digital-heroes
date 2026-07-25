"use client";

import { motion } from "framer-motion";
import {
  IconHexagon,
  IconBrandVercel,
  IconSquareAsterisk,
  IconCloud,
  IconLayersIntersect,
} from "@tabler/icons-react";

const companies = [
  { name: "Nova", icon: IconHexagon },
  { name: "ScaleX", icon: IconBrandVercel },
  { name: "Vertex", icon: IconSquareAsterisk },
  { name: "CloudPeak", icon: IconCloud },
  { name: "Flowly", icon: IconLayersIntersect },
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-white/[0.01]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Trusted by fast-growing startups and industry leaders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-center gap-2.5 text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <Icon className="w-6 h-6 stroke-[1.8] text-slate-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                <span className="font-heading text-lg font-bold tracking-tight text-slate-400 group-hover:text-white transition-colors duration-300">
                  {company.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
