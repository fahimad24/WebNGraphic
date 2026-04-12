"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { TestimonialCard } from "../card/testimonial-card";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string | null;
  comment: string;
  createdAt: Date;
};
interface TestimonialSectionProops {
  testimonials: Testimonial[];
}
// Testimonial data

export default function TestimonialSlider({
  testimonials,
}: TestimonialSectionProops) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [totalSlides, setTotalSlides] = useState(testimonials.length);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Update visible slides count based on screen size
  const updateVisibleSlides = useCallback(() => {
    if (typeof window === "undefined") return 3;

    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  // Update visible slides on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(updateVisibleSlides());
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateVisibleSlides]);

  // Calculate number of pagination dots needed
  useEffect(() => {
    if (testimonials.length <= visibleSlides) {
      setTotalSlides(1);
    } else {
      // For loop mode, we need one dot per slide
      setTotalSlides(testimonials.length);
    }
  }, [testimonials, visibleSlides]);

  // Set up the carousel API
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Initial setup - make sure to set current after the API is ready
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const scrollToIndex = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  // Generate pagination dots
  const paginationDots = Array.from({ length: totalSlides }, (_, i) => i);

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 !py-5">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute group left-1 md:p-1 bg-white/60">
          <ChevronLeft className="lg:!w-10 group-hover:text-[#00b1dc] md:!w-6 lg:!h-10 md:!h-6 !w-4 !h-4" />
        </CarouselPrevious>
        <CarouselNext className="absolute group right-1 md:p-1 bg-white/60">
          <ChevronRight className="lg:!w-10 group-hover:text-[#00b1dc] md:!w-6 lg:!h-10 md:!h-6 !w-4 !h-4" />
        </CarouselNext>
      </Carousel>

      {/* Pagination dots */}
      {paginationDots.length > 1 && (
        <div className="flex justify-center mt-8">
          {paginationDots.map((index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 cursor-pointer rounded-full mx-1 transition-colors ${
                index === current
                  ? "bg-[#00b1dc]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === current ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
