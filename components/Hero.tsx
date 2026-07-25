import AnimateOnView from "./AnimateOnView";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-36 pb-16 flex flex-col justify-between">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px] my-auto">
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Editorial Typography (7 cols) */}
          <AnimateOnView
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#B5B5B5]">
                Digital Growth & Product Studio
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-bold text-[#F7F7F5] leading-[1.04] tracking-tight">
              Building Digital <br />
              Experiences <br />
              That <br />
              <span className="font-garamond italic font-normal text-[#B5B5B5] tracking-normal">
                People Remember.
              </span>
            </h1>
          </AnimateOnView>

          {/* Right Column: Introduction & Refined Metrics (5 cols) */}
          <AnimateOnView
            delay={200}
            className="lg:col-span-5 flex flex-col gap-10 lg:pt-10"
          >
            <p className="text-base sm:text-lg text-[#B5B5B5] leading-relaxed font-normal">
              NorthPeak Digital is a digital growth studio helping ambitious companies build better digital products, brands, and marketing systems.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#F7F7F5] text-[#0B0B0B] hover:bg-[#4F8CFF] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <span>Start a Conversation</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
              </a>

              <a
                href="#work"
                className="text-xs font-semibold text-[#B5B5B5] hover:text-[#F7F7F5] hover-underline transition-colors py-1"
              >
                View Selected Work &rarr;
              </a>
            </div>

            {/* Three Refined Metrics with Dividers */}
            <div className="pt-8 border-t border-[#262626] grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#F7F7F5] tracking-tight">
                  $140M+
                </span>
                <span className="text-[10px] text-[#B5B5B5] uppercase tracking-wider mt-1">
                  Client Market Value
                </span>
              </div>
              <div className="flex flex-col border-l border-[#262626] pl-4">
                <span className="text-2xl font-bold text-[#F7F7F5] tracking-tight">
                  42
                </span>
                <span className="text-[10px] text-[#B5B5B5] uppercase tracking-wider mt-1">
                  Products Shipped
                </span>
              </div>
              <div className="flex flex-col border-l border-[#262626] pl-4">
                <span className="text-2xl font-bold text-[#F7F7F5] tracking-tight">
                  98.4%
                </span>
                <span className="text-[10px] text-[#B5B5B5] uppercase tracking-wider mt-1">
                  Client Retention
                </span>
              </div>
            </div>

          </AnimateOnView>
        </div>

      </div>

      {/* Minimal Scroll Indicator */}
      <AnimateOnView
        delay={800}
        className="container mx-auto px-6 lg:px-12 max-w-[1360px] pt-12 flex items-center justify-between text-[#B5B5B5] text-xs uppercase tracking-widest border-t border-[#262626]"
      >
        <span>San Francisco &amp; Global Studio</span>
        <a href="#work" className="flex items-center gap-2 hover:text-[#F7F7F5] transition-colors">
          <span>Scroll to explore</span>
          <span style={{ animation: "bounce 2s infinite" }}>&darr;</span>
        </a>
      </AnimateOnView>
    </section>
  );
}
