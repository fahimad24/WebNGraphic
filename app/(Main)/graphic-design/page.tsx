import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import { graphicDesignSchema } from "@/scheema";
import { Metadata } from "next";
import BlogCommon from "../components/blog-common";
import ContactCommon from "../components/contact-common";
import Pricing from "../components/pricing";
import TestimonialSection from "../components/testimonial-section";
import GraphicFAQ from "./components/graphic-faq";
import GraphicHero from "./components/graphic-hero";
import GraphicPortfolioSection from "./components/graphic-portfolio-section";
import GraphicService from "./components/graphic-service";
import GraphicTechnology from "./components/graphic-technology";
import HowItsWork from "./components/how-its-work";

export const dynamic = "force-dynamic";
const pricingPlans = [
  {
    title: "Logo & Brand Identity",
    description: "Perfect for new businesses or rebranding projects",
    discountPrice: "$99",
    regularPrice: "$150",
    popularTag: false,
    points: [
      "Logo design (3 concepts)",
      "Color palette",
      "Typography selection",
      "Brand guidelines (basic)",
      "Business card design",
      "Social media profile images",
      "2 rounds of revisions",
    ],
  },
  {
    title: "Comprehensive Branding",
    description: "Complete branding solution for established businesses",
    discountPrice: "$210",
    regularPrice: "$320",
    popularTag: true,
    points: [
      "Logo design (5 concepts)",
      "Extended color palette",
      "Typography system",
      "Comprehensive brand guidelines",
      "Stationery design (cards, letterhead, etc.)",
      "Social media kit",
      "Marketing materials (basic)",
      "3 rounds of revisions",
      "1 month of design support",
    ],
  },
  {
    title: "Custom Design Package",
    description: "Tailored design solutions for specific project needs",
    discountPrice: "$399",
    regularPrice: "$490",
    popularTag: true,
    points: [
      "Custom illustration",
      "Packaging design",
      "Publication design",
      "UI/UX design",
      "Marketing campaign materials",
      "Environmental graphics",
      "Unlimited revisions",
      "Ongoing design support",
    ],
  },
];

export const metadata: Metadata = {
  title: "Graphic Design Services",
  description:
    "Professional graphic design services tailored to elevate your brand. We specialize in logo design, brand identity, print media, UI/UX design, and eye-catching visuals for digital platforms.",
  alternates: {
    canonical: "https://webngraphic.com/graphic-design",
  },
  keywords: [
    "graphic design services",
    "professional logo design",
    "brand identity design",
    "custom graphic design",
    "UI/UX design services",
    "print design agency",
    "social media design",
    "visual identity design",
  ],
  openGraph: {
    title: "Expert Graphic Design Services | WebNGraphic",
    description:
      "Transform your brand with WebNGraphic's expert graphic design solutions including custom logos, cohesive brand identities, and high-impact digital & print visuals.",
    url: "https://webngraphic.com/graphic-design",
    type: "website",
    siteName: "WebNGraphic",
    images: [
      {
        url: "https://webngraphic.com/opengraph/graphic-design.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic Graphic Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Services | Logos, Branding & Visual Identity",
    description:
      "Explore our creative graphic design services — from logos and branding to UI/UX and social media visuals. Build a consistent, professional image.",
    site: "@WebNGraphic",
    creator: "@WebNGraphic",
    images: ["https://webngraphic.com/opengraph/graphic-design.jpg"],
  },
};

export default function page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graphicDesignSchema),
        }}
      />
      <GraphicHero />
      <GraphicService />
      <HowItsWork />
      <Pricing service="Graphic Design" pricing={pricingPlans} />
      <div className="bg-white">
        <BookMeeting />
      </div>
      <GraphicTechnology />
      <GraphicPortfolioSection />
      <TestimonialSection />
      <GraphicFAQ />
      <BlogCommon />
      <ContactCommon />
    </div>
  );
}
