import { getBlogForCommon } from "@/app/action/action";
import NormalButton from "@/components/manual/button/NormalButton";
import SectionHeader from "@/components/manual/header/section-header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogCommon() {
  // Sample blog posts data - in a real application, you would fetch this from an API or CMS
  const { blogs } = await getBlogForCommon();

  if (!blogs) return <p>Not found</p>;
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-5 md:px-12">
        <SectionHeader
          heading="Latest from our blog"
          subHeading="Discover insights, tips, and the latest updates from our team."
        />

        <div className="grid mt-16 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {blogs.map((post) => (
            <Card
              key={post.id}
              className="flex relative group gap-2 py-0 pb-6 flex-col overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="image-anime  aspect-video overflow-hidden">
                <Image
                  src={post.imageLink}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="px-4 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(post.createdAt), "MMMM d, yyyy")}
                    </span>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl line-clamp-2 leading-tight">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-2 pt-0 flex-grow">
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="text-muted-foreground line-clamp-2"
                />
              </CardContent>
              <CardFooter className="px-4 pt-0">
                <div className="border-t border-gray-100 pt-3 w-full flex ">
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex !w-full justify-between items-center gap-1 text-sm font-semibold text-Ttext hover:text-TtextH transition-colors duration-200"
                  >
                    <button className="cursor-pointer">Read more</button>

                    <ArrowRight
                      size={25}
                      className="transition-all opacity-0 group-hover:opacity-100 duration-500 group-hover:translate-x-3"
                    />
                  </Link>
                </div>
              </CardFooter>
              <div className="absolute bottom-0 left-0 h-1 bg-Ttext w-0 group-hover:w-full transition-all duration-500" />
            </Card>
          ))}
        </div>
        <div className="flex mt-12 justify-center w-full">
          <Link href="/blog">
            <NormalButton>View all posts</NormalButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
