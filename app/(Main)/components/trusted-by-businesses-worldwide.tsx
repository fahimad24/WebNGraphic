import { BadgeCheck, Building2, Globe2, Sparkles } from "lucide-react";

const metrics = [
  { value: "89+", label: "Projects Delivered" },
  { value: "23+", label: "Industries Served" },
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
    <section className="bg-muted border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-5 py-26 md:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" />
              Trusted by Businesses Worldwide
            </div>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Built for ambitious teams that need results, not guesswork.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              We partner with startups and established companies across the globe to design high-performing brands, websites, and growth-ready digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center"
              >
                <p className="text-2xl font-bold text-sky-700 md:text-3xl">{item.value}</p>
                <p className="text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 text-slate-800">
            <BadgeCheck className="h-5 w-5 text-sky-600" />
            <p className="font-semibold">Companies from these sectors trust WebNGraphic</p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-sky-200 bg-white px-3.5 py-1.5 text-sm font-medium text-sky-700"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-sky-600" />
              <span className="text-sm">Serving both local and international clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-sky-600" />
              <span className="text-sm">Reliable remote collaboration across time zones</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}