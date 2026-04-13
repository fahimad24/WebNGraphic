"use client";

import NormalButton from "@/components/manual/button/NormalButton";
import ResModTrigBtn from "@/components/manual/button/ResModTrigBtn";
import ResponseForm from "@/components/manual/form/ResponseForm";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <div className="section-background overflow-hidden relative">
      <div className="md:py-26 py-12 max-w-7xl mx-auto items-center flex-col md:flex-row flex w-full justify-between px-5 md:px-12 gap-8">
        
        {/* DESKTOP LAYOUT */}
        <motion.div 
          className="relative hidden md:block z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { staggerChildren: 0.2 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="uppercase text-6xl font-bold text-Ttext leading-18"
            >
              Build a Custom Website That Turns Visitors Into Customers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="text-white mt-6 text-xl md:text-2xl lg:text-2xl max-w-2xl"
            >
              We provide expert web development, web design, and graphic design. Launch a conversion-focused site in 4-6 weeks. Request a free project estimate.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start gap-4 items-center mt-5 md:mt-8"
            >
              <ResModTrigBtn>
                <NormalButton className="py-3.5">Book A Free Consultation</NormalButton>
              </ResModTrigBtn>
              <Link href="/portfolio">
                <NormalButton className="bg-transparent border-White hover:shadow-lg active:scale-95 active:bg-white hover:shadow-white hover:bg-white hover:text-black border-[2px] py-3.5">
                  View Portfolio
                </NormalButton>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* MOBILE LAYOUT */}
        <motion.div 
          className="relative md:hidden z-10 pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { staggerChildren: 0.2 } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="h-[250px] w-[270px] mb-10 relative"
            >
              <div className="absolute z-11 top-0 left-0">
                <div className="w-[170px] h-[150px] overflow-hidden rounded-md relative ">
                  <Image
                    src="/hwdimage.jpg"
                    fill
                    priority
                    sizes="170px"
                    className="object-cover w-full h-full"
                    alt="web dev"
                  />
                </div>
              </div>

              <div className=" w-[170px] h-[150px] animated-element border-Ttext border-4 overflow-hidden rounded-md absolute inset-0 z-10 m-auto"></div>

              <div className="absolute z-12 bottom-0 right-0">
                <div className="overflow-hidden rounded-md w-[170px] h-[150px] relative ">
                  <Image
                    src="/swda.jpg"
                    fill
                    priority
                    sizes="170px"
                    className="object-cover w-full h-full"
                    alt="web dev"
                  />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="uppercase text-2xl font-bold text-Ttext"
            >
              Build a Custom Website That Turns Visitors Into Customers
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="text-gray-300 mt-4 text-lg md:text-xl lg:text-2xl max-w-3xl"
            >
              We provide expert web development, web design, and graphic design. Launch a conversion-focused site in 4-6 weeks. Request a free project estimate.
            </motion.p>

            {/* Decorative Line */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="w-20 h-1 bg-white mt-6 md:mt-8"
            ></motion.div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center mt-6 md:mt-8"
            >
              <ResModTrigBtn>
                <NormalButton className="py-3.5">Book A Free Consultation</NormalButton>
              </ResModTrigBtn>

              <NormalButton className="bg-transparent border-White hover:shadow-lg active:scale-95 active:bg-white hover:shadow-white hover:bg-white hover:text-black border-[2px] w-full sm:w-auto flex justify-center py-3.5">
                <Link href="/portfolio">View Portfolio</Link>
              </NormalButton>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.7, delay: 0.3 }}
           className="z-10"
        >
          <ResponseForm interest="none" />
        </motion.div>
      </div>
    </div>
  );
}
