"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";

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

type Category = {
  name: string;
  count: number;
};

type BlogSidebarProps = {
  blogs: Blog[];
};

export default function BlogSidebar({ blogs }: BlogSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Blog[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();

    blogs.forEach((blog) => {
      const category = blog.category;
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
    });

    return Array.from(categoryMap).map(([name, count]) => ({
      name,
      count,
    }));
  }, [blogs]);

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

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    // Filter blogs based on search term
    const filteredResults = blogs
      .filter(
        (blog) =>
          blog.title.toLowerCase().includes(value.toLowerCase()) ||
          blog.content.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 5); // Limit to 5 results

    setSearchResults(filteredResults);
    setShowResults(true);
  };

  // Handle click outside search results to close them
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setShowResults(false);
  };

  // Handle category selection
  const handleCategoryClick = (categoryName: string) => {
    // Create a new URLSearchParams object based on the current params
    const params = new URLSearchParams(searchParams.toString());

    if (categoryName) {
      params.set("category", categoryName);
      // Reset to page 1 when changing category
      params.set("page", "1");
    } else {
      params.delete("category");
    }

    // Update the URL with the new search params
    router.push(`/blog?${params.toString()}`);

    // Close search results if open
    setShowResults(false);
  };

  // Clear category filter
  const clearCategory = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    router.push(`${pathname}?${params.toString()}`);
  };

  // Get popular posts
  const popularPosts = blogs.filter((blog) => blog.isPopular).slice(0, 4);

  return (
    <div className="w-full lg:w-1/3 relative" ref={sidebarRef}>
      {/* Search Bar */}
      <div className="sticky w-full top-30 z-10 space-y-8">
        <Card className="overflow-visible border-0 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)] p-7">
          <CardContent className="p-0 border-0 shadow-none">
            <div className="relative" ref={searchRef}>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search blog posts..."
                  className="border-0 p-6 shadow-none bg-[#f6fbff]"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchTerm && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={clearSearch}
                    className="absolute right-14 top-1/2 -translate-y-1/2 h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Clear search</span>
                  </Button>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute px-6 rounded-l-none right-0 bg-Ttext hover:bg-TtextH transition-opacity top-0 h-full"
                >
                  <Search className="h-4 text-white font-semibold w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>

              {/* Live Search Results */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-100 max-h-[400px] overflow-y-auto">
                  <div className="p-2">
                    <h4 className="text-sm font-medium text-gray-500 px-3 py-2">
                      Search Results
                    </h4>
                    {searchResults.map((result) => (
                      <Link
                        href={`/blog/${result.id}`}
                        key={result.id}
                        className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => setShowResults(false)}
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={result.imageLink || "/placeholder.svg"}
                            alt={result.title}
                            fill
                            className="object-cover rounded-md"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-1">
                            {result.title}
                          </h4>
                          <div
                            className="text-xs text-muted-foreground mt-1 line-clamp-2"
                            dangerouslySetInnerHTML={{
                              __html: result.content,
                            }}
                          ></div>

                          <Badge className="mt-1" variant="secondary">
                            {result.category}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results Message */}
              {showResults && searchTerm && searchResults.length === 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-100">
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">
                      No results found for &quot;{searchTerm}&quot;
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Popular Posts */}
        <Card className="border-0 py-5 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)]">
          <CardHeader>
            <h3 className="text-xl font-bold">Popular Posts</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            {popularPosts.map((post) => (
              <div key={post.id} className="flex gap-3">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={post.imageLink || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h4 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {format(new Date(post.createdAt), "MMMM d, yyyy")}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Categories */}
        <Card className="border-0 py-5 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)]">
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-xl mb-3 font-bold">Categories</h3>
            {selectedCategory && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCategory}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Show All
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="flex justify-between items-center">
                  <button
                    onClick={() => handleCategoryClick(category.name)}
                    className={`text-left hover:text-primary cursor-pointer transition-colors hover:underline ${
                      selectedCategory === category.name
                        ? "text-primary font-medium"
                        : ""
                    }`}
                  >
                    {category.name}
                  </button>
                  <Badge
                    variant={
                      selectedCategory === category.name
                        ? "default"
                        : "secondary"
                    }
                    className={
                      selectedCategory === category.name ? "bg-Ttext" : ""
                    }
                  >
                    {category.count}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
