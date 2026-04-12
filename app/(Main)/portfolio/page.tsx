import TopSectionStatic from "@/components/manual/header/top-section-static";
import { Metadata } from "next";
import CTASection1 from "../components/cta-section-1";
import TestimonialSection from "../components/testimonial-section";
import ProjectGraphic from "./components/project-graphic";
import ProjectWebDev from "./components/project-web-dev";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of successful web development and graphic design projects. See how we've helped businesses across various industries establish a strong online presence.",
  alternates: {
    canonical: "https://webngraphic.com/portfolio",
  },
  openGraph: {
    title: "WebNGraphic Portfolio | Our Best Work",
    description:
      "Explore our showcase of web development and graphic design projects that demonstrate our expertise and creative approach.",
    url: "https://webngraphic.com/portfolio",
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
export default function Page() {
  return (
    <div>
      <TopSectionStatic
        title="Portfolio"
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
