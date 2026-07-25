import Image from "next/image";
import AnimateOnView from "./AnimateOnView";

const testimonials = [
  {
    quote:
      "NorthPeak transformed our digital presence from a standard SaaS look into an iconic, high-converting product experience. Their engineering speed is unmatched.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "CloudScale",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
  {
    quote:
      "Working with NorthPeak felt like having a senior founding design team. They brought ruthless focus on CRO and typography that tripled our organic inbound.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Apex Finance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative border-t border-[#262626] bg-[#0B0B0B]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B5B5B5] block mb-3">
            Client Perspectives
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F7F7F5] tracking-tight">
            Endorsements.
          </h2>
        </div>

        {/* Alternate Image Positions Grid */}
        <div className="space-y-20">
          
          {/* Testimonial 1: Photo Left */}
          <AnimateOnView
            className="p-8 sm:p-12 rounded-3xl bg-[#151515] border border-[#262626] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-4 img-zoom h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#1E1E1E] relative">
              <Image
                src={testimonials[0].avatar}
                alt={testimonials[0].author}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="lg:col-span-8 flex flex-col justify-between gap-6">
              <span className="text-6xl font-garamond italic text-[#4F8CFF] leading-none block">
                &ldquo;
              </span>
              <p className="text-lg sm:text-2xl text-[#F7F7F5] font-medium leading-relaxed italic font-garamond">
                {testimonials[0].quote}
              </p>

              <div className="pt-4 border-t border-[#262626]">
                <h4 className="text-base font-bold text-[#F7F7F5]">{testimonials[0].author}</h4>
                <p className="text-xs text-[#B5B5B5]">
                  {testimonials[0].role} • <span className="text-[#F7F7F5] font-semibold">{testimonials[0].company}</span>
                </p>
              </div>
            </div>
          </AnimateOnView>

          {/* Testimonial 2: Photo Right */}
          <AnimateOnView
            delay={150}
            className="p-8 sm:p-12 rounded-3xl bg-[#151515] border border-[#262626] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 lg:order-1 flex flex-col justify-between gap-6">
              <span className="text-6xl font-garamond italic text-[#4F8CFF] leading-none block">
                &ldquo;
              </span>
              <p className="text-lg sm:text-2xl text-[#F7F7F5] font-medium leading-relaxed italic font-garamond">
                {testimonials[1].quote}
              </p>

              <div className="pt-4 border-t border-[#262626]">
                <h4 className="text-base font-bold text-[#F7F7F5]">{testimonials[1].author}</h4>
                <p className="text-xs text-[#B5B5B5]">
                  {testimonials[1].role} • <span className="text-[#F7F7F5] font-semibold">{testimonials[1].company}</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:order-2 img-zoom h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#1E1E1E] relative">
              <Image
                src={testimonials[1].avatar}
                alt={testimonials[1].author}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </AnimateOnView>

        </div>

      </div>
    </section>
  );
}
