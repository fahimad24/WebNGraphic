import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import { webDevBreadcrumbSchema, webDevelopmentSchema } from "@/scheema";
import { Metadata } from "next";
import BlogCommon from "../components/blog-common";
import ContactCommon from "../components/contact-common";
import OurFeature from "../components/our-feature";
import PortfolioSection from "../components/portfolio";
import Pricing from "../components/pricing";
import TestimonialSection from "../components/testimonial-section";
import WebDevFAQ from "./component/web-dev-faq";
import WebDevProcess from "./component/web-dev-process";
import WebDevService from "./component/web-dev-service";
import WebDevHero from "./component/WebDevHero";
import WebDevTechnology from "./component/WebDevTechnology";

export const dynamic = "force-dynamic";
const pricingPlans = [
  {
    title: "Basic",
    description:
      "Perfect for small businesses looking to establish an online presence",
    discountPrice: "$499",
    regularPrice: "$650",
    popularTag: false,
    points: [
      "5-page responsive website",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact form",
      "Content management system",
      "Social media integration",
      "1 round of revisions",
    ],
  },
  {
    title: "Business",
    description:
      "Ideal for growing businesses with specific functionality needs",
    discountPrice: "$999",
    regularPrice: "$1200",
    popularTag: true,
    points: [
      "10-15 page responsive website",
      "Advanced SEO optimization",
      "Custom contact forms",
      "Blog/news section",
      "Newsletter integration",
      "Google Analytics setup",
      "Performance optimization",
      "3 rounds of revisions",
      "1 month of support",
    ],
  },
  {
    title: "Custom",
    description:
      "Tailored solutions for businesses requiring complex functionality",
    discountPrice: "$2199",
    regularPrice: "$2500",
    popularTag: true,
    points: [
      "Custom web application",
      "User authentication system",
      "Database design & integration",
      "API development",
      "Third-party integrations",
      "Advanced security features",
      "Comprehensive testing",
      "Unlimited revisions",
      "6 months of priority support",
    ],
  },
];

export const metadata: Metadata = {
  title: "WebNGraphic Custom Website Design & Development for Brands",
  description:
    "Get custom website design, web development, and branding support from WebNGraphic. We build high-performing sites for business projects that convert.",
  alternates: {
    canonical: "https://webngraphic.com/web-development",
    languages: {
      en: "https://webngraphic.com/web-development",
      "x-default": "https://webngraphic.com/web-development",
    },
  },
  keywords: [
    "web development services",
    "responsive website design",
    "custom website development",
    "NDIS website development",
    "e-commerce website development",
    "Next.js development agency",
    "React web development",
    "web application development",
    "frontend and backend development",
  ],
  openGraph: {
    title: "WebNGraphic Custom Website Design & Development for Brands",
    description:
      "Professional web development for businesses and organizations. We build responsive websites, e-commerce solutions, and web apps using the latest frameworks.",
    url: "https://webngraphic.com/web-development",
    type: "website",
    siteName: "WebNGraphic",
    images: [
      {
        url: "https://webngraphic.com/opengraph/web-dev.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Services | WebNGraphic",
    description:
      "Explore WebNGraphic's web development services: custom websites, responsive design, NDIS portals, e-commerce solutions, and more.",
    site: "@WebNGraphic", // Update with your real Twitter handle
    creator: "@WebNGraphic",
    images: ["https://webngraphic.com/opengraph/web-dev.jpg"],
  },
};

export default function page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webDevelopmentSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webDevBreadcrumbSchema),
        }}
      />
      <WebDevHero />
      <WebDevService />
      <WebDevProcess />
      <Pricing pricing={pricingPlans} service="Web Development" />
      <div className="bg-blue-50">
        <BookMeeting />
      </div>
      <PortfolioSection />
      <WebDevTechnology />
      <OurFeature />

      <TestimonialSection />
      <WebDevFAQ />
      <BlogCommon />
      <ContactCommon />
    </div>
  );
}
