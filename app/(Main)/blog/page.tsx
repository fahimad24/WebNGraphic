import { getAllBlog } from "@/app/action/action";
import TopSectionStatic from "@/components/manual/header/top-section-static";
import { blogPageSchema } from "@/scheema";
import { Metadata } from "next";
import ContactCommon from "../components/contact-common";
import CTASection1 from "../components/cta-section-1";
import FaqMain from "../components/faq-main";
import TestimonialSection from "../components/testimonial-section";
import BlogPage from "./components/blog-page";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover expert insights, design inspiration, and the latest trends in web development, graphic design, and digital marketing. Stay ahead with WebNGraphic's blog.",
  alternates: {
    canonical: "https://webngraphic.com/blog",
  },
  openGraph: {
    title: "WebNGraphic Blog | Web Design & Development Resources",
    description:
      "Explore expert articles and tutorials on web design, development, branding, and visual storytelling. Your go-to resource for digital success with WebNGraphic.",
    url: "https://webngraphic.com/blog",
    type: "website",
    images: [
      {
        url: "https://webngraphic.com/opengraph/blog.jpg", // Make sure it's the full URL
        width: 1200,
        height: 630,
        alt: "WebNGraphic Blog - Web & Graphic Design Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNGraphic Blog | Web & Graphic Design Insights",
    description:
      "Tips, trends, and strategies in design and development — all from the WebNGraphic blog.",
    images: ["https://webngraphic.com/opengraph/blog.jpg"],
  },
};

export default async function Page() {
  const allBlogs = await getAllBlog();
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />
      <TopSectionStatic
        title="Blog"
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
