import { Suspense } from "react";
import GetStartedContent from "../../Component/get-started/get-started-content";
import { MeetingsTableSkeleton } from "../../Component/meeting/meetings-table-skeleton";

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
          <h1 className="text-3xl font-bold">Manage Get Started</h1>
        </div>

        <Suspense fallback={<MeetingsTableSkeleton />} key={`${currentPage}`}>
          <GetStartedContent page={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
