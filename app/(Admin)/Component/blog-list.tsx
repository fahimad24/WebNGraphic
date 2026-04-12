import { getAllBlogs } from "../action/blog";
import { BlogCard } from "./blog-admin-card";
import PaginationControl from "./pagination";

export default async function AdminBlogList({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const pageSize = 12;
  const { blogs, pagination } = await getAllBlogs(search, page, pageSize);

  if (blogs.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold mb-2">No responses found</h2>
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
        {blogs.map((blog: Awaited<ReturnType<typeof getAllBlogs>>["blogs"][number]) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
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
