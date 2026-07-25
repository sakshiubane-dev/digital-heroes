"use client";

import { useState } from "react";
import AnimateOnView from "./AnimateOnView";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid email address is required";
    }
    if (!formData.message.trim()) errs.message = "Project overview is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 relative border-t border-[#262626] bg-[#0B0B0B]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Large Closing Statement (5 cols) */}
          <AnimateOnView
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#B5B5B5]">
              Initiate Partnership
            </span>

            <h2 className="text-4xl sm:text-6xl font-bold text-[#F7F7F5] tracking-tight leading-[1.08]">
              Let&apos;s Build <br />
              Something <br />
              <span className="font-garamond italic font-normal text-[#B5B5B5]">
                Worth Remembering.
              </span>
            </h2>

            <p className="text-base text-[#B5B5B5] leading-relaxed pt-2">
              Share a brief overview of your product, brand, or growth goals. A founding partner will review your inquiry and respond within 24 hours.
            </p>

            <div className="space-y-4 pt-6 border-t border-[#262626] text-sm text-[#B5B5B5]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#F7F7F5] font-semibold block mb-1">
                  Direct Inquiries
                </span>
                <a href="mailto:hello@northpeakdigital.com" className="hover:text-[#4F8CFF] transition-colors">
                  hello@northpeakdigital.com
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#F7F7F5] font-semibold block mb-1">
                  Global Studio
                </span>
                <span>San Francisco, CA & Remote Global</span>
              </div>
            </div>
          </AnimateOnView>

          {/* Right Column: Floating Labels Form (7 cols) */}
          <AnimateOnView
            delay={200}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-[#151515] border border-[#262626]">
              
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#4F8CFF]/20 text-[#4F8CFF] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-[3]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F7F7F5]">Inquiry Received</h3>
                  <p className="text-sm text-[#B5B5B5] max-w-sm">
                    Thank you! We will review your project details and reply to{" "}
                    <span className="text-[#F7F7F5] font-semibold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", company: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full border border-[#262626] text-xs font-semibold text-[#F7F7F5] hover:bg-[#1E1E1E]"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                  
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder=" "
                      className={`peer w-full px-4 py-4 rounded-xl bg-[#0B0B0B] border text-sm text-[#F7F7F5] focus:outline-none transition-all ${
                        errors.name ? "border-rose-500" : "border-[#262626] focus:border-[#4F8CFF]"
                      }`}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-4 text-xs text-[#B5B5B5] transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#4F8CFF] peer-focus:bg-[#151515] peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#151515] peer-[:not(:placeholder-shown)]:px-1"
                    >
                      Full Name *
                    </label>
                    {errors.name && <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder=" "
                      className={`peer w-full px-4 py-4 rounded-xl bg-[#0B0B0B] border text-sm text-[#F7F7F5] focus:outline-none transition-all ${
                        errors.email ? "border-rose-500" : "border-[#262626] focus:border-[#4F8CFF]"
                      }`}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 text-xs text-[#B5B5B5] transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#4F8CFF] peer-focus:bg-[#151515] peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#151515] peer-[:not(:placeholder-shown)]:px-1"
                    >
                      Work Email *
                    </label>
                    {errors.email && <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 py-4 rounded-xl bg-[#0B0B0B] border border-[#262626] focus:border-[#4F8CFF] text-sm text-[#F7F7F5] focus:outline-none transition-all"
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-4 top-4 text-xs text-[#B5B5B5] transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#4F8CFF] peer-focus:bg-[#151515] peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#151515] peer-[:not(:placeholder-shown)]:px-1"
                    >
                      Company / Brand Name
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder=" "
                      className={`peer w-full px-4 py-4 rounded-xl bg-[#0B0B0B] border text-sm text-[#F7F7F5] focus:outline-none transition-all resize-none ${
                        errors.message ? "border-rose-500" : "border-[#262626] focus:border-[#4F8CFF]"
                      }`}
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 text-xs text-[#B5B5B5] transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#4F8CFF] peer-focus:bg-[#151515] peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-[#151515] peer-[:not(:placeholder-shown)]:px-1"
                    >
                      Project Brief & Growth Objectives *
                    </label>
                    {errors.message && <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#4F8CFF] hover:bg-[#3b72e0] transition-all duration-300 shadow-lg disabled:opacity-60"
                  >
                    {loading ? (
                      <span>Submitting Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateOnView>

        </div>
      </div>
    </section>
  );
}
