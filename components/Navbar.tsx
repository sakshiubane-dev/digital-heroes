"use client";

import { useState, useEffect } from "react";

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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    let cachedScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Cache the height on resize to avoid forced reflow on every scroll
    const handleResize = () => {
      cachedScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 40);
          
          if (cachedScrollHeight > 0) {
            setScrollProgress(scrollY / cachedScrollHeight);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#4F8CFF] origin-left z-50 transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B0B0B]/80 backdrop-blur-sm border-b border-[#262626] py-3.5"
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
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F7F7F5] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#0B0B0B] border-b border-[#262626] px-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[400px] py-8 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
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
        </div>
      </header>
    </>
  );
}
