import Accordion from "@/components/manual/accordion/accordion";
import SectionHeader from "@/components/manual/header/section-header";
import Link from "next/link";

const topBuyerQuestions = [
  {
    question: "Do you build fully custom websites?",
    answer:
      "Yes - full custom builds and theme-based sites are both available, based on your budget and timeline.",
  },
  {
    question: "How quickly can we launch?",
    answer:
      "Most projects go live in 4-6 weeks depending on scope, and we provide a clear milestone plan from day one.",
  },
  {
    question: "Will this help generate more leads?",
    answer:
      "Our process focuses on conversion-first design, fast performance, and clear messaging to increase inquiries.",
  },
];

const FaqData = [
  {
    question: "What services do you offer?",
    answer:
      "Web development, web design, and graphic design - including custom websites, UI/UX, branding, and visual assets.",
  },
  {
    question: "How long does it take to complete a website or design project?",
    answer:
      "Most projects take 4-6 weeks, while larger builds take longer. We share a clear timeline after your discovery call.",
  },
  {
    question: "Do you offer custom website designs or use templates?",
    answer:
      "Both options are available: fully custom websites and theme-based builds tailored to your goals, budget, and timeline.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Pricing is scope-based with flexible packages. You will receive a tailored quote based on your requirements.",
  },
  {
    question: "Do you provide revisions for design work?",
    answer:
      "Yes. Every project includes revision rounds so your final design aligns with your brand and goals.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes. We provide ongoing maintenance, updates, and support to keep your site fast, secure, and reliable.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We redesign existing sites to improve visual quality, usability, speed, and conversion performance.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us your requirements and we will schedule a quick consultation, then share a plan and tailored quote.",
  },
];

export default function FaqMain() {
  return (
    <div className="bg-white">
      <div className=" px-5 max-w-5xl w-full mx-auto md:px-12 py-16">
        <div className=" mb-12 ">
          <SectionHeader
            heading="FAQs"
            subHeading="FREQUENTLY ASKED QUESTIONS"
          />
        </div>

        <div className="mb-10 rounded-2xl border border-Ttext/15 bg-Ttext/[0.04] p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Top Buyer Questions</h3>
              <p className="text-sm text-gray-600">Quick answers for decision-makers comparing options.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center rounded-md bg-Ttext px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get a tailored quote
            </Link>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {topBuyerQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-xl border border-Ttext/15 bg-white p-4"
              >
                <h4 className="mb-2 text-base font-semibold text-gray-900">{item.question}</h4>
                <p className="text-sm leading-relaxed text-gray-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">More Questions</p>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <Accordion items={FaqData} />
      </div>
    </div>
  );
}
