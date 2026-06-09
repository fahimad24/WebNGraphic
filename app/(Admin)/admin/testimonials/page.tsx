import { Suspense } from "react";
import TestimonialCreateButton from "../../Component/testimonial/testimonial-create-btn";
import TestimonialDashboard from "../../Component/testimonial/testimonial-dashboard";
import { TestimonialsTableSkeleton } from "../../Component/testimonial/testimonials-table-skeleton";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  // Use await to resolve the Promise
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  return (
    <div className="max-w-7xl w-full mx-auto px-5 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Manage Testimonial</h1>
          <div className="flex w-full justify-end items-center">
            <TestimonialCreateButton />
          </div>
        </div>

        <Suspense
          fallback={<TestimonialsTableSkeleton />}
          key={`${currentPage}`}
        >
          <TestimonialDashboard page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
