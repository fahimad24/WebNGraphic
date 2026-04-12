import { getAllTestimonial } from "../../action/testimonial";
import PaginationControl from "../pagination";
import { TestimonialList } from "./testimonial-list";

export default async function TestimonialDashboard({ page }: { page: number }) {
  const pageSize = 12;
  const { testimonials, pagination } = await getAllTestimonial(page, pageSize);

  return (
    <div className="max-w-7xl ">
      <TestimonialList testimonials={testimonials} />

      <div>
        <PaginationControl
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      </div>
    </div>
  );
}
