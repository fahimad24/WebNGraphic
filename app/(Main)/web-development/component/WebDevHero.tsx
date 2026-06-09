import ResponseForm from "@/components/manual/form/ResponseForm";
import { Home } from "lucide-react";
import Link from "next/link";

export default function WebDevHero() {
  return (
    <div className="bg-Mbg section-background">
      <section className="w-full md:px-16 px-5 max-w-7xl mx-auto py-12 md:py-20">
        <div className="flex md:items-end flex-col md:flex-row justify-between gap-10  ">
          <div className="space-y-6 md:space-y-8 lg:space-y-10">
            <section className=" text-white relative">
              <h1 className="text-4xl md:text-5xl font-bold  mb-4">
                Web Development
              </h1>

              <div className="flex items-center text-sm">
                <Link
                  href="/"
                  className="text-white hover:text-Ttext flex items-center"
                >
                  <Home className="h-4 w-4 mr-1" /> Home
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-[#18B3C7]">Web Development</span>
              </div>

              <p className="text-lg md:text-xl mt-5 max-w-3xl mx-auto mb-8">
                At WebNGraphic, we craft stunning and functional websites that
                bring brands to life. Our expert team combines innovative design
                with cutting-edge development to create seamless digital
                experiences. Whether you&apos;re launching a new site or
                refining your online presence, we ensure every pixel aligns with
                your vision, helping you stand out in the digital world
              </p>
            </section>
            <div className="grid grid-cols-3 mt-10 gap-3 md:gap-5">
              {/* Experience Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white -translate-y-1 rounded-lg shadow-xl p-2 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-slate-900  mb-2">
                    5+
                  </h3>
                  <p className="text-slate-600 max-w-20 text-center font-medium">
                    Year Of Experience
                  </p>
                </div>
              </div>

              {/* Projects Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white -translate-y-1  rounded-lg shadow-xl p-1 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-slate-900  mb-2">
                    20+
                  </h3>
                  <p className="text-slate-600 max-w-20 text-center font-medium">
                    Countries
                  </p>
                </div>
              </div>

              {/* Clients Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-500  rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white -translate-y-1  rounded-lg shadow-xl p-1 h-full flex flex-col items-center justify-center transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-slate-900  mb-2">
                    500+
                  </h3>
                  <p className="text-slate-600 max-w-20 text-center font-medium">
                    Satisfied Client
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ResponseForm interest="service" />
          </div>
        </div>
      </section>
    </div>
  );
}
