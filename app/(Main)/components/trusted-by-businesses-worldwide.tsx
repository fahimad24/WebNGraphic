import { BadgeCheck, Building2, Globe2, Sparkles } from "lucide-react";

const metrics = [
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Industries Served" },
  { value: "12+", label: "Countries Reached" },
  { value: "98%", label: "Client Satisfaction" },
];

const industries = [
  "Technology",
  "E-commerce",
  "Healthcare",
  "Education",
  "Construction",
  "Hospitality",
  "Finance",
  "Professional Services",
];

export default function TrustedByBusinessesWorldwide() {
  return (
    <section className="bg-[#031425] border-y border-[#00b1dc22]">
      <div className="mx-auto max-w-7xl px-5 py-26 md:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00b1dc44] bg-[#00b1dc1a] px-4 py-1.5 text-sm font-semibold text-[#83eeff]">
              <Sparkles className="h-4 w-4" />
              Trusted by Businesses Worldwide
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Built for ambitious teams that need results, not guesswork.
            </h2>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              We partner with startups and established companies across the globe to design high-performing brands, websites, and growth-ready digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-[#87f2ff] md:text-3xl">{item.value}</p>
                <p className="text-sm font-medium text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-[#091f35] p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 text-slate-200">
            <BadgeCheck className="h-5 w-5 text-[#87f2ff]" />
            <p className="font-semibold">Companies from these sectors trust WebNGraphic</p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#00b1dc55] bg-[#00b1dc1a] px-3.5 py-1.5 text-sm font-medium text-[#b8f8ff]"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#87f2ff]" />
              <span className="text-sm">Serving both local and international clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-[#87f2ff]" />
              <span className="text-sm">Reliable remote collaboration across time zones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}