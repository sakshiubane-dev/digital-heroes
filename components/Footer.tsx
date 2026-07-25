"use client";

import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandDribbble,
  IconArrowUpRight,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#262626] py-14 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-[#B5B5B5]">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-bold tracking-wider text-xs uppercase text-[#F7F7F5]">
              NorthPeak <span className="text-[#B5B5B5] font-light">Digital</span>
            </span>
            <span className="hidden sm:inline text-[#262626]">•</span>
            <span>&copy; {new Date().getFullYear()} NorthPeak Digital Studio. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: IconBrandTwitter, href: "#", label: "Twitter" },
              { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
              { icon: IconBrandGithub, href: "#", label: "GitHub" },
              { icon: IconBrandDribbble, href: "#", label: "Dribbble" },
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <a
                  key={idx}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center text-[#B5B5B5] hover:text-[#F7F7F5] hover:border-[#4F8CFF] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

            <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#262626] hover:border-[#4F8CFF] text-xs text-[#B5B5B5] hover:text-[#4F8CFF] transition-all font-medium hover-underline"
            >
                <span>Built for Digital Heroes Training Task</span>
                <IconArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#4F8CFF]" />
            </a>

        </div>

      </div>
    </footer>
  );
}
