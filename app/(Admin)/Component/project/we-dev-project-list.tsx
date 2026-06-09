import { getAllWebDevProjects } from "../../action/project-webdev";
import PaginationControl from "../pagination";
import { WebDevProjectCard } from "./web-dev-project-card";

export default async function WebDevProjectList({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const pageSize = 10;
  const { projects, pagination } = await getAllWebDevProjects(
    search,
    page,
    pageSize
  );

  if (projects.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold mb-2">No projects found</h2>
        <p className="text-muted-foreground">
          Try adjusting your search or filter to find what you&apos;re looking
          for.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(
          (project: Awaited<ReturnType<typeof getAllWebDevProjects>>["projects"][number]) => (
          <WebDevProjectCard key={project.id} project={project} />
          )
        )}
      </div>
      <div>
        <PaginationControl
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          searchParams={search ? { q: search } : {}}
        />
      </div>
    </div>
  );
}
