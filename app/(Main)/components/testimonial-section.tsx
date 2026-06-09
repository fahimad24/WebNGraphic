import { getAllTestimonials } from "@/app/action/action";
import SectionHeader from "@/components/manual/header/section-header";
import TestimonialSlider from "@/components/manual/slider/testimonial-slider";
export default async function TestimonialSection() {
  const { testimonials } = await getAllTestimonials();
  return (
    testimonials && (
      <div className="bg-muted">
        <div className="px-5 md:px-12 md:py-24 py-16 max-w-7xl mx-auto">
          <SectionHeader
            heading="Testimonials"
            subHeading="What Our Clients Say"
          />
          <div className="mt-12">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    )
  );
}
