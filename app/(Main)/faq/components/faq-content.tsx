"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FaqContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does WebnGraphics offer?",
          answer:
            "WebnGraphics offers a comprehensive range of web development and graphic design services. Our web development services include custom website development, e-commerce solutions, web application development, and website maintenance. Our graphic design services include brand identity design, UI/UX design, print and digital marketing materials, and social media graphics.",
        },
        {
          question: "How long does it take to complete a project?",
          answer:
            "The timeline for each project varies depending on its scope and complexity. A simple website might take 2-4 weeks, while a complex web application or comprehensive branding project could take several months. During our initial consultation, we'll provide you with a more accurate timeline based on your specific requirements.",
        },
        {
          question: "Do you offer ongoing maintenance and support?",
          answer:
            "Yes, we offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and functioning optimally. Our maintenance packages include regular updates, security checks, backups, and technical support.",
        },
      ],
    },
    {
      category: "Web Development",
      questions: [
        {
          question: "What technologies do you use for web development?",
          answer:
            "We use a variety of modern technologies and frameworks depending on the project requirements. Our tech stack typically includes HTML5, CSS3, JavaScript, React, Next.js, Node.js, and various content management systems like WordPress. We stay up-to-date with the latest technologies to ensure we deliver high-quality, future-proof solutions.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones and tablets to desktop computers. Responsive design is a standard feature of all our web development projects.",
        },
        {
          question: "Can you help with SEO for my website?",
          answer:
            "Yes, we implement SEO best practices in all our web development projects. This includes optimized code structure, fast loading times, mobile responsiveness, and proper meta tags. We can also provide more comprehensive SEO services, including keyword research, content optimization, and ongoing SEO strategy.",
        },
      ],
    },
    {
      category: "Graphic Design",
      questions: [
        {
          question: "What is your design process like?",
          answer:
            "Our design process begins with understanding your brand, target audience, and goals. We then create concept designs based on this information, gather your feedback, refine the designs, and finalize them. Throughout the process, we maintain open communication to ensure the final product aligns with your vision.",
        },
        {
          question: "Do you provide source files for the designs?",
          answer:
            "Yes, upon project completion and final payment, we provide you with the source files for your designs. This typically includes editable files in formats like AI, PSD, or XD, depending on the software used for your project.",
        },
        {
          question: "Can you help with printing my designs?",
          answer:
            "While we don't offer printing services directly, we can prepare your designs for print with the correct specifications (bleed, margins, color profiles, etc.) and recommend reliable printing services. We can also liaise with your chosen printer to ensure the final printed materials meet your expectations.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How much do your services cost?",
          answer:
            "Our pricing varies depending on the scope, complexity, and requirements of each project. We provide customized quotes based on your specific needs. Contact us for a free consultation and quote for your project.",
        },
        {
          question: "What are your payment terms?",
          answer:
            "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we may establish a payment schedule with milestones. We accept payments via bank transfer, credit card, and PayPal.",
        },
        {
          question: "Do you offer any guarantees?",
          answer:
            "We stand behind the quality of our work and are committed to your satisfaction. If there are any issues with the deliverables that don't meet the agreed-upon requirements, we'll make the necessary revisions at no additional cost. We also offer a 30-day support period after project completion to address any minor issues or questions.",
        },
      ],
    },
  ];

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 pl-4 pr-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-3.5 h-5 w-5 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <h2 className="mb-4 text-2xl font-bold">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${category.category}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h3 className="mb-2 text-xl font-medium">No results found</h3>
              <p className="text-muted-foreground">
                We couldn&apos;t find any FAQs matching your search. Try a
                different search term or browse all categories.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </Button>
            </div>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-lg border bg-card p-8 text-center shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">Still have questions?</h2>
          <p className="mb-6 text-muted-foreground">
            If you couldn&apos;t find the answer to your question, feel free to
            contact us directly. We&apos;re here to help!
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
