import { Suspense } from "react";
import BlogLists from "./blog-list";
import BlogSidebar from "./blog-sidebar";

type Blog = {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author: {
    name: string;
  };
  category: string;
  imageLink: string;
  imagePublicID: string;
  isPopular: boolean;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
};

type BlogPageProps = {
  blogs: Blog[];
};

export default function BlogPage({ blogs }: BlogPageProps) {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row px-5 md:px-12 py-12 md:py-20 max-w-7xl w-full mx-auto gap-10">
        <Suspense fallback={<div>Loading ...</div>}>
          <BlogLists blogs={blogs} />
          <BlogSidebar blogs={blogs} />
        </Suspense>
      </div>
    </section>
  );
}
