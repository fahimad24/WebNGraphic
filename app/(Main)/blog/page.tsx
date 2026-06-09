import { getAllBlog } from "@/app/action/action";
import TopSectionStatic from "@/components/manual/header/top-section-static";
import {
  blogPageSchema,
  createBreadcrumbSchema,
  createWebPageSchema,
} from "@/scheema";
import { Metadata } from "next";
import ContactCommon from "../components/contact-common";
import CTASection1 from "../components/cta-section-1";
import FaqMain from "../components/faq-main";
import TestimonialSection from "../components/testimonial-section";
import BlogPage from "./components/blog-page";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "WebNGraphic Blog | Design & Development Insights",
  description:
    "Expert insights on web design, development, branding, and digital marketing. Stay updated with WebNGraphic's latest trends and tutorials.",
  alternates: {
    canonical: "https://webngraphic.com/blog",
    languages: {
      en: "https://webngraphic.com/blog",
      "x-default": "https://webngraphic.com/blog",
    },
  },
  openGraph: {
    title: "WebNGraphic Blog | Design & Development Insights",
    description:
      "Explore articles on web design, development, and visual storytelling for digital success.",
    url: "https://webngraphic.com/blog",
    type: "website",
    siteName: "WebNGraphic",
    images: [
      {
        url: "https://webngraphic.com/opengraph/blog.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic Blog - Design & Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNGraphic Blog | Design & Development Insights",
    description: "Tips, trends, and strategies in design and development from WebNGraphic.",
    site: "@WebNGraphic",
    creator: "@WebNGraphic",
    images: ["https://webngraphic.com/opengraph/blog.jpg"],
  },
};

const blogWebPageSchema = createWebPageSchema({
  id: "https://webngraphic.com/blog#webpage",
  name: "WebNGraphic Blog",
  url: "https://webngraphic.com/blog",
  description:
    "Explore articles on web design, development, branding, and digital marketing by WebNGraphic.",
  imageUrl: "https://webngraphic.com/opengraph/blog.jpg",
});

const blogBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", item: "https://webngraphic.com" },
  { name: "Blog", item: "https://webngraphic.com/blog" },
]);

export default async function Page() {
  const allBlogs = await getAllBlog();
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />
      <TopSectionStatic
        title="WebNGraphic Blog"
        description="Design tips, creative thoughts, and everything in between — straight from my desk to yours."
        breadcrumb={[{ label: "blog", link: "/blog" }]}
      />
      <BlogPage
        blogs={allBlogs.blogs as Array<
          (typeof allBlogs.blogs)[number] & { author: { name: string } }
        >}
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
