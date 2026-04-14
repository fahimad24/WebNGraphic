import TopSectionStatic from "@/components/manual/header/top-section-static";
import { createBreadcrumbSchema, createWebPageSchema } from "@/scheema";
import FaqContent from "./components/faq-content";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about our web development & graphic design services, process, costs, and more.",
  alternates: {
    canonical: "https://webngraphic.com/faq",
  },
};

const faqWebPageSchema = createWebPageSchema({
  id: "https://webngraphic.com/faq#webpage",
  name: "Frequently Asked Questions | WebNGraphic",
  url: "https://webngraphic.com/faq",
  description:
    "Find answers to common questions about WebNGraphic web development and graphic design services.",
});

const faqBreadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", item: "https://webngraphic.com" },
  { name: "FAQ", item: "https://webngraphic.com/faq" },
]);

export default function FAQPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqWebPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqBreadcrumbSchema) }}
      />
      <TopSectionStatic
        title="Frequently Asked Questions"
        description="Find answers to common questions about our design services, process, and support."
        breadcrumb={[{ label: "FAQ", link: "/faq" }]}
      />
      <FaqContent />
    </div>
  );
}
