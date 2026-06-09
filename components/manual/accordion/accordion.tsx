"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {items.map(({ question, answer }, index) => (
        <div
          key={index}
          className="border overflow-hidden rounded-lg shadow-sm"
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between overflow-hidden cursor-pointer items-center w-full p-4 text-lg font-medium transition-all rounded-t-lg ${
              openIndex === index
                ? "bg-Ttext text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <span className="text-left flex-1">{question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown
                className={`w-6 h-6 transition-all duration-300 rounded-full ${
                  openIndex === index ? "text-white" : "text-gray-600"
                }`}
              />
            </motion.div>
          </button>

          {/* Accordion Content */}
          <motion.div
            initial={false}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-gray-700 bg-gray-50">{answer}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
