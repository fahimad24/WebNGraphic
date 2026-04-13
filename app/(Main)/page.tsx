import BookMeeting from "@/components/manual/book-meeting/book-meeting";
import { homePageSchema, serviceSchema } from "@/scheema";
import { Metadata } from "next";
import BlogCommon from "./components/blog-common";
import ContactCommon from "./components/contact-common";
import CTASection1 from "./components/cta-section-1";
import FaqMain from "./components/faq-main";
import HomeHero from "./components/home-hero";
import HowWeWork from "./components/how-we-work";
import OurServices from "./components/our-service";
import PortfolioSection from "./components/portfolio";
import TestimonialSection from "./components/testimonial-section";
import WhyChooseUs from "./components/why-choose-us";
import TrustBadges from "./components/trust-badges";
import SponsorMarquee from "./components/sponsor-marquee";
import TrustedByBusinessesWorldwide from "./components/trusted-by-businesses-worldwide";

export const dynamic = "force-dynamic";

const creativeProcess = [
  {
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your goals, audience, and vision. This phase helps us create a solid plan for design and development.",
  },
  {
    title: "Creative Design",
    description:
      "We craft visually stunning and user-friendly designs that align with your brand identity, ensuring a great user experience.",
  },
  {
    title: "Execution & Development",
    description:
      "We turn designs into reality—whether it's coding a website, refining graphics, or finalizing assets for branding and marketing.",
  },
  {
    title: "Review & Finalization",
    description:
      "We refine the work based on feedback, ensuring everything is polished and ready for delivery, whether it's a launch or final design files.",
  },
];
export const metadata: Metadata = {
  description:
    "WebNGraphic provides custom web development and graphic design services to help businesses create stunning websites and visual identities that convert visitors into customers.",
  alternates: {
    canonical: "https://webngraphic.com",
  },
  openGraph: {
    images: [
      {
        url: "opengraph/home.jpg",
        width: 1200,
        height: 630,
        alt: "WebNGraphic Homepage",
      },
    ],
  },
};

export default async function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HomeHero />
      <SponsorMarquee />
      <OurServices />
      <TrustedByBusinessesWorldwide />
      <WhyChooseUs />
      <HowWeWork
        process={creativeProcess}
        title="Our Streamlined Process – From Vision to Completion"
      />
      <div className="bg-muted">
        <BookMeeting />
      </div>

      <PortfolioSection />
      <TestimonialSection />

      <CTASection1
        first="Ready to Work With Us?"
        second="Get the Best for Your Business"
      />
      <BlogCommon />
      <TrustBadges />
      <FaqMain />
      <ContactCommon />
    </div>
  );
}
