import Image from "next/image";
import AnimateOnView from "./AnimateOnView";

const projects = [
  {
    id: "01",
    name: "NovaPay",
    category: "Digital Banking Platform",
    metric: "+214%",
    metricLabel: "Qualified Lead Growth",
    description:
      "A complete redesign of the core banking onboarding taxonomy, mobile transaction engine, and design system.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400",
    layout: "image-top",
  },
  {
    id: "02",
    name: "Vertex Cloud",
    category: "Enterprise Infrastructure",
    metric: "4.8×",
    metricLabel: "Lead Conversion Rate",
    description:
      "Brand repositioning, high-performance web platform, and automated lead routing for multi-region cloud management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400",
    layout: "text-first",
  },
  {
    id: "03",
    name: "Aether Health",
    category: "AI Medical Diagnostics",
    metric: "72%",
    metricLabel: "Friction Reduction",
    description:
      "Designed an intuitive clinical AI diagnostic workspace that streamlines hospital patient workflows.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1400",
    layout: "split-image-left",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-32 relative border-t border-[#262626] bg-[#0B0B0B]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 border-b border-[#262626] pb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B5B5B5] block mb-3">
              Agency Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F7F7F5] tracking-tight">
              Selected Work.
            </h2>
          </div>
          <p className="text-sm text-[#B5B5B5] max-w-md">
            Cinematic case studies showcasing digital product architecture, brand identity, and scalable growth systems.
          </p>
        </div>

        {/* Project 1: Large Image Top */}
        <div className="space-y-36">
          
          {/* Project 1: NovaPay */}
          <AnimateOnView
            className="group cursor-pointer flex flex-col gap-8"
          >
            <div className="img-zoom w-full h-[420px] sm:h-[600px] rounded-3xl bg-[#151515] border border-[#262626] relative">
              <Image
                src={projects[0].image}
                alt={projects[0].name}
                fill
                sizes="(max-width: 1024px) 100vw, 1360px"
                className="object-cover opacity-90 group-hover:opacity-100 rounded-3xl"
              />
              <div className="absolute top-6 right-6 bg-[#0B0B0B]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#262626] text-xs font-mono font-bold text-[#4F8CFF]">
                {projects[0].id} / 03
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 border-t border-[#262626]">
              <div className="lg:col-span-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B5B5B5] block mb-1">
                  {projects[0].category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#F7F7F5] group-hover:text-[#4F8CFF] transition-colors">
                  {projects[0].name}
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed">
                  {projects[0].description}
                </p>
              </div>

              <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between gap-4">
                <div>
                  <span className="text-3xl font-extrabold text-[#F7F7F5] block">
                    {projects[0].metric}
                  </span>
                  <span className="text-[11px] text-[#B5B5B5] uppercase tracking-wider block">
                    {projects[0].metricLabel}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F7F7F5] group-hover:text-[#4F8CFF] transition-colors">
                  <span>Read Story</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#4F8CFF]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </div>
              </div>
            </div>
          </AnimateOnView>

          {/* Project 2: Text First, Large Image Second */}
          <AnimateOnView
            className="group cursor-pointer flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-4 border-b border-[#262626]">
              <div className="lg:col-span-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B5B5B5] block mb-1">
                  {projects[1].category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#F7F7F5] group-hover:text-[#4F8CFF] transition-colors">
                  {projects[1].name}
                </h3>
              </div>

              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed">
                  {projects[1].description}
                </p>
              </div>

              <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between gap-4">
                <div>
                  <span className="text-3xl font-extrabold text-[#F7F7F5] block">
                    {projects[1].metric}
                  </span>
                  <span className="text-[11px] text-[#B5B5B5] uppercase tracking-wider block">
                    {projects[1].metricLabel}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F7F7F5] group-hover:text-[#4F8CFF] transition-colors">
                  <span>Read Story</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#4F8CFF]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
                </div>
              </div>
            </div>

            <div className="img-zoom w-full h-[420px] sm:h-[550px] rounded-3xl bg-[#151515] border border-[#262626] relative">
              <Image
                src={projects[1].image}
                alt={projects[1].name}
                fill
                sizes="(max-width: 1024px) 100vw, 1360px"
                className="object-cover opacity-90 group-hover:opacity-100 rounded-3xl"
              />
              <div className="absolute top-6 right-6 bg-[#0B0B0B]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#262626] text-xs font-mono font-bold text-[#4F8CFF]">
                {projects[1].id} / 03
              </div>
            </div>
          </AnimateOnView>

          {/* Project 3: Split Image Left, Text Right */}
          <AnimateOnView
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7 img-zoom h-[380px] sm:h-[500px] rounded-3xl bg-[#151515] border border-[#262626] relative">
              <Image
                src={projects[2].image}
                alt={projects[2].name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover opacity-90 group-hover:opacity-100 rounded-3xl"
              />
              <div className="absolute top-6 right-6 bg-[#0B0B0B]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#262626] text-xs font-mono font-bold text-[#4F8CFF]">
                {projects[2].id} / 03
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between gap-6 py-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B5B5B5] block mb-2">
                  {projects[2].category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#F7F7F5] group-hover:text-[#4F8CFF] transition-colors mb-4">
                  {projects[2].name}
                </h3>
                <p className="text-sm sm:text-base text-[#B5B5B5] leading-relaxed mb-6">
                  {projects[2].description}
                </p>

                <div className="p-5 rounded-2xl bg-[#151515] border border-[#262626] w-fit mb-6">
                  <span className="text-3xl font-extrabold text-[#F7F7F5] block">
                    {projects[2].metric}
                  </span>
                  <span className="text-[11px] text-[#B5B5B5] uppercase tracking-wider">
                    {projects[2].metricLabel}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F7F7F5] group-hover:text-[#4F8CFF] transition-colors">
                <span>Read Story</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#4F8CFF]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
              </div>
            </div>
          </AnimateOnView>

        </div>

      </div>
    </section>
  );
}
