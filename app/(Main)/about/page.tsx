import TopSectionStatic from "@/components/manual/header/top-section-static";
import {
  aboutArticleSchema,
  aboutPageSchema,
  aboutPersonSchema,
  aboutWebPageSchema,
} from "@/scheema";
import { Metadata } from "next";
import ContactCommon from "../components/contact-common";
import CTASection1 from "../components/cta-section-1";
import FaqMain from "../components/faq-main";
import TestimonialSection from "../components/testimonial-section";
import WhyChooseUs from "../components/why-choose-us";
import AboutWelcome from "./components/about-welcome";
import OurStory from "./components/our-story";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About WebNGraphic - Our Story & Expertise",
  description:
    "Meet the team behind WebNGraphic — expert web and graphic designers crafting digital solutions that help businesses thrive online.",
  keywords: [
    "About webngraphic",
    "Web design company",
    "Graphic design company",
    "Web development agency",
    "Creative design team",
    "Professional web developers",
    "Experienced graphic designers",
  ],
  alternates: {
    canonical: "https://webngraphic.com/about",
    languages: {
      en: "https://webngraphic.com/about",
      "x-default": "https://webngraphic.com/about",
    },
  },
  openGraph: {
    title: "About WebNGraphic | Our Story & Expertise",
    description:
      "Meet our team of web development and graphic design experts who are dedicated to helping businesses establish a strong online presence.",
    url: "https://webngraphic.com/about",
    type: "article",
    siteName: "WebNGraphic",
    images: [
      {
        url: "opengraph/about.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About WebNGraphic - Our Story & Expertise",
    description:
      "Meet our team of web development and graphic design experts who are dedicated to helping businesses establish a strong online presence.",
    site: "@WebNGraphic",
    creator: "@WebNGraphic",
    images: ["opengraph/about.jpg"],
  },
};

export default function page() {
  const breadcrumb = [{ label: "about", link: "/about" }];
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutArticleSchema) }}
      />
      <TopSectionStatic
        breadcrumb={breadcrumb}
        title="About WebNGraphic"
        description="Passionate about turning ideas into impactful visuals and seamless digital experiences."
      />
      <AboutWelcome />
      <OurStory />
      <WhyChooseUs />
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
