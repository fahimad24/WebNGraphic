import TopSectionStatic from "@/components/manual/header/top-section-static";
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

export default function FAQPage() {
  return (
    <div>
      <TopSectionStatic
        title="Frequently Asked Questions"
        description="Find answers to common questions about our design services, process, and support."
        breadcrumb={[{ label: "FAQ", link: "/faq" }]}
      />
      <FaqContent />
    </div>
  );
}
