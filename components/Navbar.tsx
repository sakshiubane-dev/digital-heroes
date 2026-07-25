"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { IconMenu2, IconX, IconArrowUpRight } from "@tabler/icons-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Framework", href: "#framework" },
  { name: "Impact", href: "#impact" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#4F8CFF] origin-left z-50"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B0B0B]/80 backdrop-blur-md border-b border-[#262626] py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-[1360px] flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#F7F7F5]"
          >
            <span className="w-2 h-2 rounded-full bg-[#4F8CFF]" />
            <span>
              NorthPeak <span className="text-[#B5B5B5] font-light">Digital</span>
            </span>
          </a>

          {/* Desktop Links with Underline Animation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-[#B5B5B5] hover:text-[#F7F7F5] hover-underline py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#262626] hover:border-[#4F8CFF] text-xs font-medium text-[#F7F7F5] bg-[#151515] hover:bg-[#4F8CFF] hover:text-white transition-all duration-300"
            >
              <span>Start a Project</span>
              <IconArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F7F7F5] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#0B0B0B] border-b border-[#262626] px-6 py-8 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#B5B5B5] hover:text-[#F7F7F5] font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center px-6 py-3 rounded-full bg-[#4F8CFF] text-white text-xs font-bold uppercase tracking-wider"
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </header>
    </>
  );
}
