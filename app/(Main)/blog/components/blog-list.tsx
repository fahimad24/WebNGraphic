"use client";

import NormalButton from "@/components/manual/button/NormalButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { format } from "date-fns";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Tag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

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

type BlogListsProps = {
  blogs: Blog[];
};

export default function BlogLists({ blogs }: BlogListsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const currentPage = Number(searchParams.get("page") || "1");
  const listRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const ITEMS_PER_PAGE = 8;

  // Filter blogs by selected category
  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  // Calculate total pages
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  // Get current blogs for the page
  const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Scroll to top when URL parameters change (except on initial mount)
  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [searchParams]);

  // Update URL with new page parameter
  const updatePage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  // Clear category filter
  const clearCategory = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    router.push(`${pathname}?${params.toString()}`);
  };

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      updatePage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  return (
    <div className="w-full lg:w-2/3 space-y-10" ref={listRef}>
      {/* Category filter indicator */}
      {selectedCategory && (
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Filtered by category:</span>
            <Badge className="bg-Ttext">{selectedCategory}</Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearCategory}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4 mr-1" />
            Clear filter
          </Button>
        </div>
      )}

      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600 mb-4">
            No blog posts found
          </h3>
          {selectedCategory && (
            <Button onClick={clearCategory} variant="outline">
              Clear category filter
            </Button>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentBlogs.map((item, i) => (
              <Card
                key={i}
                className="overflow-hidden p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full group h-[220px] image-anime rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.imageLink || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 relative transition-all duration-300"
                  />
                </div>
                <CardHeader className="p-0 pb-3">
                  <ul className="flex flex-wrap gap-3 text-xs text-Ttext mb-3">
                    <li className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      <span className="uppercase">{item.author.name}</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      <span className="uppercase">
                        {format(new Date(item.createdAt), "MMMM d, yyyy")}
                      </span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Tag className="h-3.5 w-3.5" />
                      <Link
                        href={`${pathname}?category=${encodeURIComponent(
                          item.category
                        )}`}
                        className="uppercase hover:underline"
                      >
                        {item.category}
                      </Link>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${item.id}`} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                </CardHeader>
                <CardContent className="p-0 pb-4">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content }}
                    className="text-muted-foreground text-sm line-clamp-3"
                  />
                </CardContent>
                <CardFooter className="p-0">
                  <Link href={`/blog/${item.id}`}>
                    <NormalButton>Read More</NormalButton>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                disabled={currentPage === 1}
                className="h-9 w-9"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <Button
                      key={number}
                      variant={currentPage === number ? "default" : "outline"}
                      size="icon"
                      onClick={() => updatePage(number)}
                      className={`h-9 w-9 ${
                        currentPage === number ? "bg-Ttext" : ""
                      }`}
                    >
                      {number}
                    </Button>
                  )
                )}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="h-9 w-9"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
