import AnimateOnView from "./AnimateOnView";

const steps = [
  {
    step: "01",
    title: "Discover",
    description: "Deep dive into customer behavioral data, unit economics, and competitive gaps.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Architect positioning, technical taxonomy, and multi-channel acquisition funnels.",
  },
  {
    step: "03",
    title: "Design",
    description: "Craft editorial luxury layouts, brand systems, and interactive prototypes.",
  },
  {
    step: "04",
    title: "Build",
    description: "Deploy clean Next.js code, state architecture, and accessible frontend systems.",
  },
  {
    step: "05",
    title: "Optimize",
    description: "Rigorous CRO testing, behavioral heatmap tracking, and performance tuning.",
  },
  {
    step: "06",
    title: "Scale",
    description: "Execute multi-channel growth media, AI automation, and iterative expansion.",
  },
];

export default function GrowthFramework() {
  return (
    <section id="framework" className="py-32 relative border-t border-[#262626] bg-[#0B0B0B]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-[#262626] pb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B5B5B5] block mb-3">
              Deployment Model
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F7F7F5] tracking-tight">
              Growth Framework.
            </h2>
          </div>
          <p className="text-sm text-[#B5B5B5] max-w-md">
            A 6-phase horizontal deployment pipeline built for predictable velocity and measurable momentum.
          </p>
        </div>

        {/* 6-Stage Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {steps.map((s, idx) => (
            <AnimateOnView
              key={s.step}
              delay={idx * 100}
              className="p-6 rounded-2xl bg-[#151515] border border-[#262626] flex flex-col justify-between group hover:border-[#4F8CFF] transition-all duration-300 h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#4F8CFF]">
                    {s.step}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="text-xs text-[#B5B5B5] hidden lg:block">&rarr;</span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#F7F7F5] mb-2 group-hover:text-[#4F8CFF] transition-colors">
                  {s.title}
                </h3>
              </div>

              <p className="text-xs text-[#B5B5B5] leading-relaxed pt-4 border-t border-[#262626]">
                {s.description}
              </p>
            </AnimateOnView>
          ))}
        </div>

      </div>
    </section>
  );
}
