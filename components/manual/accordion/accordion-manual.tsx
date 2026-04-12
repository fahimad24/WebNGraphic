"use client";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";

// Define type for accordion data
interface AccordionItem {
  title: string;
  description: string;
}

// Define props for the component
interface AccordionGroupProps {
  items: AccordionItem[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg space-y-6">
      {items.map(({ title, description }, index) => (
        <div
          key={index}
          className="border overflow-hidden shadow-sm rounded-lg"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex justify-between items-center hover:text-white group w-full px-3 md:px-5 text-Mbg py-5 text-lg md:text-xl font-semibold cursor-pointer hover:bg-Ttext duration-300 rounded-t-lg transition-all ${
              openIndex === index ? "bg-Ttext text-white" : "bg-gray-100"
            } `}
          >
            <div className="text-left">
              <span className=" mr-3">0{index + 1}</span>
              {title}
            </div>

            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <MoveUpRight
                className={`md:w-10 w-8 transition-all duration-300 ease-in-out p-2 rounded-full h-8 md:h-10 ${
                  openIndex === index
                    ? "bg-Mbg text-White"
                    : "bg-Ttext group-hover:bg-Mbg group-hover:text-white text-gray-100"
                }`}
              />
            </motion.div>
          </button>

          {/* Content (Animated) */}
          <motion.div
            initial={false}
            animate={{ height: openIndex === index ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 text-gray-700 bg-gray-100">
              {description}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AccordionGroup;
