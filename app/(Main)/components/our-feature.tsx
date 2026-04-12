"use client";

import { Check } from "lucide-react";
import Image from "next/image";

export default function OurFeature() {
  const features = [
    { id: 1, title: "Blazing Fast Loading" },
    { id: 2, title: "Fully Responsive" },
    { id: 3, title: "Advanced Security & Compliance" },
    { id: 4, title: "SEO Optimized" },
    { id: 5, title: "Multiple Payment Gateways" },
    { id: 6, title: "Headless & Custom E-commerce" },
    { id: 7, title: "Scalable & Future-Ready" },
    { id: 8, title: "Ongoing Support & Maintenance" },
  ];

  return (
    <section className="w-full bg-white text-black overflow-hidden">
      <div className="py-16 px-5 md:px-12 mx-auto max-w-7xl">
        <div className="flex max-sm:flex-col-reverse gap-10 items-start">
          <div className="space-y-8 md:w-3/5 w-full">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold  leading-tight">
                Powerful & Scalable Website Features
              </h1>
              <p className="text-black/90 text-lg max-w-xl">
                We build high-performance, secure, and future-ready websites
                with cutting-edge technology to elevate your online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00b1dc]/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#00b1dc]" />
                  </div>
                  <span className="font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative md:w-2/5 w-full flex">
            <Image
              src="/website.svg"
              width={400}
              height={500}
              alt="Website"
              className="w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
