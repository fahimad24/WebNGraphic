import { format } from "date-fns";
import { CalendarDays, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Blog = {
  blog: {
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
};

export default function BlogPost({ blog }: Blog) {
  return (
    <div className="w-full lg:w-2/3">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Featured Image */}
        <div className="group overflow-hidden image-anime h-[400px] w-full">
          <Image
            src={blog.imageLink}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 duration-300 transition-all"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
            priority
          />
        </div>

        {/* Post Meta */}
        <div className="p-8">
          <h2 className="md:text-3xl text-2xl font-bold mb-3">{blog.title}</h2>
          <ul className="flex flex-wrap gap-3 text-md !text-[#009dff] mb-4">
            <li className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              <span className="uppercase">{blog.author.name}</span>
            </li>
            <li className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              <span className="uppercase">
                {format(new Date(blog.createdAt), "MMMM d, yyyy")}
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Tag className="h-3.5 w-3.5" />
              <Link
                href={`/blog?category=${encodeURIComponent(blog.category)}`}
                className="uppercase hover:underline"
              >
                {blog.category}
              </Link>
            </li>
          </ul>

          {/* Post Content */}
          <div
            className="prose prose-lg mt-10 max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-[#00b1dc] prose-a:no-underline hover:prose-a:underline prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </div>
  );
}
