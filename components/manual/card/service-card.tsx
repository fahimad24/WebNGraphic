"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  service: {
    title: string;
    points: Array<{ name: string; link: string }>;
    imageSrc: string;
    href: string;
    className?: string;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white mb-6 relative shadow-lg rounded-xl max-w-[450px] w-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Card with image on top for all screen sizes */}
      <Link href={service.href}>
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={service.imageSrc || "/placeholder.svg"}
            alt={`${service.title} image`}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white drop-shadow-sm">
              {service.title}
            </h3>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="space-y-3 relative mb-4">
          {service.points.slice(0, 4).map((point, index) => (
            <Link
              key={index}
              href={`/service/${point.link}`}
              className="block group/point"
            >
              <div className="flex items-center">
                <ChevronRight
                  size={18}
                  className="text-Ttext group-hover/point:translate-x-1 transition-all duration-200 mr-2 flex-shrink-0"
                />
                <p className="text-sm font-medium text-gray-700 group-hover/point:text-Ttext transition-colors duration-200 line-clamp-1">
                  {point.name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-3 flex ">
          <Link
            href={`/service/${service.href}`}
            className="flex w-full justify-between items-center gap-1 text-sm font-semibold text-Ttext hover:text-TtextH transition-colors duration-200"
          >
            <button className="cursor-pointer">Learn more</button>

            <ArrowRight
              size={25}
              className="transition-all opacity-0 group-hover:opacity-100 duration-500 group-hover:translate-x-3"
            />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-Ttext w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );
}
