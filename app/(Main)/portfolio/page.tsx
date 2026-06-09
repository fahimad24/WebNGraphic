import TopSectionStatic from "@/components/manual/header/top-section-static";
import { createBreadcrumbSchema, createWebPageSchema } from "@/scheema";
import { Metadata } from "next";
import CTASection1 from "../components/cta-section-1";
import TestimonialSection from "../components/testimonial-section";
import ProjectGraphic from "./components/project-graphic";
import ProjectWebDev from "./components/project-web-dev";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "WebNGraphic Portfolio | Showing Our Best Work",
  description:
    "Explore WebNGraphic's portfolio of web development and graphic design projects that helped businesses grow with modern, conversion-focused digital work.",
  alternates: {
    canonical: "https://webngraphic.com/portfolio",
    languages: {
      en: "https://webngraphic.com/portfolio",
      "x-default": "https://webngraphic.com/portfolio",
    },
  },
  openGraph: {
    title: "WebNGraphic Portfolio | Our Best Work",
    description:
      "Explore our showcase of web development and graphic design projects that demonstrate our expertise and creative approach.",
    url: "https://webngraphic.com/portfolio",
    type: "article",
    siteName: "WebNGraphic",
    images: [
      {
        url: "opengraph/blog.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic Portfolio Projects",
      },

    ],
  },
};

const portfolioWebPageSchema = createWebPageSchema({
  id: "https://webngraphic.com/portfolio#webpage",
  name: "WebNGraphic Portfolio",
  url: "https://webngraphic.com/portfolio",
  description:
    "Browse WebNGraphic's portfolio of web development and graphic design projects.",
  imageUrl: "https://webngraphic.com/opengraph/blog.jpg",
});

const portfolioBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", item: "https://webngraphic.com" },
  { name: "Portfolio", item: "https://webngraphic.com/portfolio" },
]);

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioBreadcrumbSchema) }}
      />
      <TopSectionStatic
        title="Our Portfolio"
        description="A curated collection of web and graphic design work that blends strategy, aesthetics, and functionality."
        breadcrumb={[{ label: "portfolio", link: "/portfolio" }]}
      />
      <ProjectWebDev />
      <ProjectGraphic />
      <CTASection1
        first="Ready to Work With Us?"
        second="Get the Best for Your Business"
      />
      <TestimonialSection />
    </div>
  );
}
