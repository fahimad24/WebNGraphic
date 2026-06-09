import BlogCardSkeleton from "@/app/(Admin)/Component/blog-card-skeleton";
import WebDevProjectList from "@/app/(Admin)/Component/project/we-dev-project-list";
import WebDebProjectCreateButton from "@/app/(Admin)/Component/project/web-dev-project-create-btn";
import SearchForm from "@/app/(Admin)/Component/search-form";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  // Use await to resolve the Promise
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const search = params.q || "";

  return (
    <div className="max-w-7xl w-full mx-auto px-5 py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Manage Portfolio</h1>
          <div className="flex w-full justify-between flex-wrap gap-5 items-center space-x-2">
            <SearchForm initialValue={search} />
            <WebDebProjectCreateButton />
          </div>
        </div>

        <Suspense
          fallback={
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          }
          key={`${search}-${currentPage}`}
        >
          <WebDevProjectList search={search} page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
