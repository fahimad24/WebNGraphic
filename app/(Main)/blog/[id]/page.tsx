import { getAllBlog, getBlogById } from "@/app/action/action";
import TopSectionStatic from "@/components/manual/header/top-section-static";
import { generateBlogSchema, getBlogBreadcrumbSchema } from "@/scheema";
import { format } from "date-fns";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactCommon from "../../components/contact-common";
import CTASection1 from "../../components/cta-section-1";
import FaqMain from "../../components/faq-main";
import TestimonialSection from "../../components/testimonial-section";
import IndividualBlogPage from "../components/individual-blog-page";

export const dynamic = "force-dynamic";

// Generate metadata for SEO
function getExcerpt(content: string, maxLength = 160): string {
  const plainText = content
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return plainText.length > maxLength
    ? plainText.slice(0, maxLength).trim() + "..."
    : plainText;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { blog } = await getBlogById(id);

  if (!blog) {
    return {
      title: "Blog Not Found | WebNGraphic",
      description: "The requested blog post could not be found.",
    };
  }

  const excerpt = getExcerpt(blog.content);

  return {
    title: `${blog.title} | WebNGraphic`,
    description: excerpt,
    alternates: {
      canonical: `https://webngraphic.com/blog/${id}`,
    },
    openGraph: {
      title: blog.title,
      description: excerpt,
      url: `https://webngraphic.com/blog/${id}`,
      type: "article",
      publishedTime: format(new Date(blog.createdAt), "MMMM d, yyyy"),
      authors: blog.author?.name ? [blog.author.name] : [],
      images: [
        {
          url: blog.imageLink,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: excerpt,
      images: [blog.imageLink],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Fetch data in parallel for better performance
  const [allBlogsData, blogData] = await Promise.all([
    getAllBlog(),
    getBlogById(id),
  ]);

  const { blogs } = allBlogsData;
  const { blog } = blogData;

  // Handle case when blog is not found
  if (!blog) {
    notFound();
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBlogBreadcrumbSchema(blog)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogSchema(blog)),
        }}
      />
      <TopSectionStatic
        title="Blog"
        description={blog.title}
        breadcrumb={[
          { label: "Blog", link: "/blog" },
          { label: blog.title, link: `/blog/${id}` },
        ]}
      />
      <IndividualBlogPage
        blogs={blogs as Array<(typeof blogs)[number] & { author: { name: string } }>}
        blog={blog}
      />

      <CTASection1
        first="Ready to Work With Us?"
        second="Get the Best for Your Business"
      />
      <TestimonialSection />
      <FaqMain />
      <ContactCommon />
    </div>
  );
}
