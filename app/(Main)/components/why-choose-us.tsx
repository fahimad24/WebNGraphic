"use client";

import SectionHeader from "@/components/manual/header/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, CheckCircle, MessageSquare, Star } from "lucide-react";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function WhyChooseUs() {
  return (
    <section className="bg-muted">
      <div className="max-w-7xl mx-auto px-5 md:px-12 md:py-24 py-16">
        <SectionHeader
          heading="Why Choose Us"
          subHeading="We combine technical expertise with creative excellence to deliver
              exceptional results"
        />

        <motion.div 
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <FeatureCard
            icon={<Star className="h-10 w-10 text-Ttext" />}
            title="Quality Craftsmanship"
            description="We take pride in delivering high-quality work that exceeds expectations and stands the test of time."
          />
          <FeatureCard
            icon={<ArrowUpRight className="h-10 w-10 text-Ttext" />}
            title="Results-Driven"
            description="Our solutions are designed to achieve your business goals and provide measurable results."
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-Ttext" />}
            title="Clear Communication"
            description="We maintain open and transparent communication throughout the entire project lifecycle."
          />
          <FeatureCard
            icon={<CheckCircle className="h-10 w-10 text-Ttext" />}
            title="Reliable Support"
            description="Our relationship doesn't end at launch. We provide ongoing support to ensure continued success."
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div variants={itemVariants}>
    <Card className="overflow-hidden py-6 transition-all hover:shadow-md h-full">
      <CardHeader className="pb-3">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
    </motion.div>
  );
}
