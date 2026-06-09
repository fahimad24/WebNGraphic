import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Users } from "lucide-react";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12 md:max-w-2xl md:mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00b1dc]/10 text-[#00b1dc] text-sm font-medium mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            Our Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16152f]">
            Our Story
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 items-start">
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="hidden md:block absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 bg-[#00b1dc]/40 rounded-full"></div>
            <div className="hidden md:block absolute -bottom-6 -right-6 w-12 h-12 md:w-16 md:h-16 bg-[#16152f]/30 rounded-full"></div>

            <div className="relative z-10 group rounded-2xl image-anime overflow-hidden shadow-xl">
              <div className="absolute top-0  left-0 w-full h-full bg-gradient-to-r from-[#16152f]/50 to-transparent z-10"></div>
              <Image
                src="/about.jpg"
                alt="Our team working together"
                width={600}
                height={400}
                className="w-full transition-all duration-300 group-hover:scale-105 h-auto object-cover"
              />

              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full shadow-md z-20">
                <span className="text-sm md:text-base text-[#16152f] font-bold">
                  Est. 2020
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
              <Card className="bg-white shadow-md border-none overflow-hidden">
                <CardContent className="p-3 md:p-4 flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00b1dc]/10 flex items-center justify-center mr-2 md:mr-3">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-[#00b1dc]" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">
                      Team Members
                    </p>
                    <p className="text-lg md:text-xl font-bold text-[#16152f]">
                      15+
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-none overflow-hidden">
                <CardContent className="p-3 md:p-4 flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00b1dc]/10 flex items-center justify-center mr-2 md:mr-3">
                    <Award className="h-4 w-4 md:h-5 md:w-5 text-[#00b1dc]" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">Projects</p>
                    <p className="text-lg md:text-xl font-bold text-[#16152f]">
                      200+
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Card className="bg-white border-none relative shadow-xl rounded-2xl overflow-hidden">
              <div className="h-1 md:h-2 absolute top-0 w-full bg-gradient-to-r from-[#00b1dc] to-[#16152f]"></div>
              <CardContent className="p-5 md:p-6">
                <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                  <p>
                    WebNGraphic began its journey in 2020 with a group of
                    passionate designers and developers. Our goal was to bring a
                    creative change in the digital space through smart design
                    and web solutions.
                  </p>
                  <p>
                    We started small, working with local clients, and today we
                    proudly serve businesses around the globe, helping them
                    thrive in the digital era.
                  </p>
                  <p className="hidden sm:block">
                    Our team combines technical expertise with creative vision
                    to deliver solutions that not only look great but also drive
                    real business results. We believe in building lasting
                    relationships with our clients through transparency,
                    quality, and exceptional service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 md:mt-8 bg-[#16152f] rounded-xl p-4 sm:p-5 md:p-6 text-white relative">
              <svg
                className="absolute top-3 left-3 md:top-4 md:left-4 h-6 w-6 md:h-8 md:w-8 text-[#00b1dc]/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="ml-4 md:ml-6">
                <p className="italic text-sm md:text-base text-gray-300">
                  &quot;WebNGraphic transformed our online presence completely.
                  Their team&apos;s creativity and technical expertise exceeded
                  our expectations.&quot;
                </p>
                <div className="mt-3 md:mt-4 flex items-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00b1dc] flex items-center justify-center text-white font-bold text-xs md:text-sm">
                    M
                  </div>
                  <div className="ml-2 md:ml-3">
                    <p className="text-xs md:text-sm font-medium">
                      Michel Clark
                    </p>
                    <p className="text-xs text-gray-400">
                      CEO, InfraRed Company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
