import Accordion from "@/components/manual/accordion/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CircleHelp } from "lucide-react";
import Link from "next/link";

export default function GraphicFAQ() {
  const faqs = [
    {
      question: "How does the design process work?",
      answer:
        "Our design process begins with a discovery phase where we learn about your brand and project goals. We then develop concepts, refine the selected direction based on your feedback, and deliver the final designs in all required formats.",
    },
    {
      question: "How many revisions do I get?",
      answer:
        "The number of revisions depends on your package, but we typically include 2-3 rounds of revisions. We're committed to ensuring you're completely satisfied with the final design, so we work closely with you throughout the process.",
    },
    {
      question: "Do you offer rush services?",
      answer:
        "Yes, we can accommodate rush projects for an additional fee, depending on our current workload and the scope of your project. Please contact us to discuss your timeline and requirements.",
    },
    {
      question: "Will I own the rights to my designs?",
      answer:
        "Yes, once the project is complete and final payment is received, you will own the rights to the final designs. We retain the right to showcase the work in our portfolio unless otherwise specified in our agreement.",
    },
    {
      question: "Can you help with printing my designs?",
      answer:
        "While we don't offer printing services directly, we can prepare your designs for print and recommend trusted printing partners. We ensure all files are properly set up with the correct specifications for high-quality printing.",
    },
    {
      question: "Do you offer ongoing design support?",
      answer:
        "Yes, we offer retainer packages for clients who need ongoing design support. These packages can be customized based on your specific needs and the volume of design work required.",
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
              Everything you need to know about our graphic design services.
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
              <Accordion items={faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
