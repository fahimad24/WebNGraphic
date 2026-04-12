"use client";

import { ShieldCheck, Clock, HeadphonesIcon, Award } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "100% Secure & Reliable",
    description: "Your data and projects are fully protected with industry-leading security.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We strictly adhere to project deadlines without compromising on quality.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Dedicated Support",
    description: "Our expert team is always available to assist you whenever you need.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Award-winning services that guarantee top-notch results for your business.",
  },
];

export default function TrustBadges() {
  return (
    <div className="bg-Mbg py-16 border-y border-[#00b1dc22]">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-[#00cadc] font-semibold tracking-wider text-sm uppercase mb-2">Why Trust Us</h2>
          <p className="text-white text-2xl md:text-3xl font-bold">Trusted by Businesses Worldwide</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00b1dc]/50 hover:bg-white/10 transition-all duration-300 group cursor-default"
              >
                <div className="w-16 h-16 rounded-full bg-[#00b1dc]/10 flex items-center justify-center mb-6 text-[#00b1dc] group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#00b1dc]/20">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-lg md:text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
