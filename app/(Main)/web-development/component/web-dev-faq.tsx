import Accordion from "@/components/manual/accordion/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CircleHelp } from "lucide-react";
import Link from "next/link";

export default function WebDevFAQ() {
  const faqItems = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for a website project depends on its complexity. A basic website typically takes 2-4 weeks, while more complex web applications can take 1-3 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we offer ongoing maintenance packages to keep your website secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security monitoring, backups, and technical support.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones and tablets to desktop computers.",
    },
    {
      question: "Do you help with website content?",
      answer:
        "While we primarily focus on design and development, we can provide guidance on content strategy and structure. For comprehensive content creation, we can recommend trusted partners who specialize in copywriting and content development.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, we specialize in website redesigns. We'll evaluate your current site, identify areas for improvement, and develop a strategy to enhance its design, functionality, and performance while preserving your brand identity.",
    },
    {
      question: "Do you offer e-commerce development?",
      answer:
        "Yes, we build custom e-commerce solutions as well as implement platforms like Shopify and WooCommerce. Our e-commerce websites include secure payment processing, inventory management, and a seamless shopping experience.",
    },
  ];

  return (
    <section className="py-16 bg-white px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column - Header */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-2">
              <CircleHelp className="h-6 w-6 text-Ttext" />
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-sm font-medium"
              >
                FAQ
              </Badge>
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our web development services.
              Can&apos;t find the answer you&apos;re looking for?
            </p>
            <Link
              href="/contact"
              className="inline-flex group items-center text-Ttext font-medium hover:underline"
            >
              Contact our team
              <ArrowRight className="group-hover:translate-x-2 ml-2 w-5 h-5 transition duration-200 mt-1" />
            </Link>
          </div>

          {/* Right column - FAQ Items */}
          <div className="md:w-2/3">
            <div className="grid gap-6">
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
