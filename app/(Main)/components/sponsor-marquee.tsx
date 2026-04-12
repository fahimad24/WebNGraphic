"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Cpu, 
  Globe2, 
  Layout, 
  ShieldCheck, 
  Smartphone, 
  Database,
  CloudCog,
  MonitorPlay
} from "lucide-react";

// Generic sponsor placeholders
const sponsors = [
  { icon: Building2, name: "TechCorp" },
  { icon: Globe2, name: "GlobalNet" },
  { icon: Cpu, name: "MicroSystems" },
  { icon: Layout, name: "DesignPro" },
  { icon: ShieldCheck, name: "SecureGuard" },
  { icon: Smartphone, name: "AppMakers" },
  { icon: Database, name: "DataFlow" },
  { icon: CloudCog, name: "CloudSync" },
  { icon: MonitorPlay, name: "MediaStream" },
];

export default function SponsorMarquee() {
  // Duplicate array to seamlessly loop
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="bg-[#020817] py-8 border-b border-[#00b1dc22] overflow-hidden whitespace-nowrap relative -z-10 flex">
      {/* Left/Right Fading Gradients for smooth entrance/exit */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#020817] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#020817] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-16 item-center w-max"
        animate={{ x: ["0%", "-33.3333333333%"] }}
        transition={{
          duration: 30, // Adjust this to make it faster/slower
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedSponsors.map((sponsor, index) => {
          const Icon = sponsor.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-500 hover:text-[#00cadc] transition-colors duration-300 opacity-60 hover:opacity-100"
            >
              <Icon size={28} strokeWidth={1.5} />
              <span className="text-xl font-bold tracking-wider uppercase">
                {sponsor.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
