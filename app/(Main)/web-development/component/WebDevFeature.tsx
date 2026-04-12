"use client";

import NormalButton from "@/components/manual/button/NormalButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Check,
  Compass,
  Palette,
  RefreshCw,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function WebDevFeature() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description:
        "Our platform delivers results at unprecedented speeds, saving you valuable time and resources. Experience performance that's up to 10x faster than traditional solutions.",
      longDescription:
        "Speed is at the core of our platform's design. Every component has been optimized for maximum performance, ensuring that your workflows are never bottlenecked by slow technology. From initial page load to complex data processing tasks, our system consistently outperforms the competition.",
      benefits: [
        "Reduced wait times for all operations",
        "Instant data processing and analysis",
        "Responsive interface even under heavy loads",
        "Optimized algorithms for complex calculations",
      ],
      color: "from-blue-500 to-cyan-400",
      image: "/feature/lightening-fast.jpg",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bulletproof Security",
      description:
        "Enterprise-grade security protocols ensure your data remains protected at all times. We implement multiple layers of protection to safeguard your valuable information.",
      longDescription:
        "Security isn't just a feature—it's built into every aspect of our platform. We employ end-to-end encryption, regular security audits, and compliance with international standards to ensure your data remains secure. Our dedicated security team works around the clock to monitor and address potential vulnerabilities.",
      benefits: [
        "End-to-end encryption for all data",
        "Regular security audits and penetration testing",
        "Compliance with GDPR, HIPAA, and other regulations",
        "Advanced threat detection and prevention",
      ],
      color: "from-purple-500 to-pink-500",
      image: "/feature/bulletproof-sequrity.jpg",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with our comprehensive analytics and reporting tools. Transform raw data into actionable business intelligence with customizable dashboards.",
      longDescription:
        "Our analytics engine goes beyond basic reporting to provide deep insights into your business operations. With interactive visualizations, predictive modeling, and customizable dashboards, you can identify trends, spot opportunities, and make data-driven decisions with confidence.",
      benefits: [
        "Real-time data visualization and reporting",
        "Predictive analytics to forecast future trends",
        "Customizable dashboards for different roles",
        "Export capabilities for presentations and sharing",
      ],
      color: "from-amber-500 to-orange-500",
      image: "/feature/advanced-analysis.jpg",
    },
    {
      icon: <Compass className="h-6 w-6" />,
      title: "Intuitive Navigation",
      description:
        "Our user-friendly interface makes it easy to find exactly what you need, when you need it. The thoughtfully designed navigation system reduces learning curve and improves productivity.",
      longDescription:
        "We've reimagined user experience from the ground up, creating an interface that feels natural and intuitive. Through extensive user testing and iterative design, we've eliminated friction points and streamlined workflows, making complex tasks simple and accessible to users of all technical levels.",
      benefits: [
        "Context-aware menus that adapt to your workflow",
        "Consistent design patterns across all features",
        "Keyboard shortcuts for power users",
        "Personalized navigation based on usage patterns",
      ],
      color: "from-emerald-500 to-green-500",
      image: "/feature/Intuitive-navigation.jpg",
    },

    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Seamless Integration",
      description:
        "Connects flawlessly with your existing tools and software ecosystem. Our extensive API and pre-built connectors ensure smooth data flow between all your business applications.",
      longDescription:
        "Integration shouldn't be an afterthought—it's central to our platform's value. With hundreds of pre-built connectors, a robust API, and detailed documentation, connecting to your existing tech stack is straightforward. Our integration specialists are also available to help with custom requirements.",
      benefits: [
        "Over 200+ pre-built integrations with popular services",
        "Comprehensive API with excellent documentation",
        "Custom webhook support for specialized needs",
        "Bi-directional data synchronization capabilities",
      ],
      color: "from-indigo-500 to-violet-500",
      image: "/feature/seamless-integration.jpg",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Elegant Design",
      description:
        "Stand out with our stunning, customizable designs that capture attention and elevate your brand. Every visual element is crafted for both beauty and functionality.",
      longDescription:
        "We believe great design is more than aesthetics—it's about creating meaningful experiences that resonate with users. Our design system combines cutting-edge visual trends with timeless principles of usability. Each element is meticulously crafted to ensure your platform not only looks beautiful but also delivers exceptional user experiences.",
      benefits: [
        "Customizable design system that adapts to your brand",
        "Thoughtfully crafted animations and micro-interactions",
        "Accessibility-first approach ensures inclusive experiences",
        "Consistent visual language across all touchpoints",
      ],
      color: "from-fuchsia-500 to-pink-500",
      image: "/feature/elegant.jpg",
      testimonial:
        "The design quality alone has increased our conversion rate by 35%. Our customers frequently comment on how beautiful and easy to use our platform is compared to competitors.",
    },
  ];

  const [activeFeature, setActiveFeature] = useState("0");

  return (
    <section className="py-12 bg-white md:py-20">
      <div className="max-w-7xl md:px-12 mx-auto px-5">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes Us <span className="text-primary">Different</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the powerful features that set our platform apart from the
            competition
          </p>
        </div>

        {/* Feature tabs and content */}
        <div className="mt-8">
          <Tabs
            defaultValue="0"
            value={activeFeature}
            onValueChange={setActiveFeature}
            className="w-full"
          >
            {/* Feature navigation - horizontal scrolling on mobile, grid on desktop */}
            <div className="mb-6 md:mb-8">
              <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto p-0 w-full overflow-x-auto md:overflow-visible">
                {features.map((feature, index) => (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    className={`
                      flex items-center gap-2 p-3 rounded-lg border border-border whitespace-nowrap
                      data-[state=active]:border-primary data-[state=active]:bg-primary/5
                      transition-all duration-200 h-auto max-w-[180px] md:max-w-[200px]
                    `}
                  >
                    <div
                      className={`
                      md:w-8 md:h-8 h-6 w-6 rounded-lg flex items-center justify-center shrink-0
                      ${
                        activeFeature === index.toString()
                          ? `bg-gradient-to-br ${feature.color} text-white`
                          : "bg-muted text-foreground"
                      }
                    `}
                    >
                      {feature.icon}
                    </div>
                    <span className=" md:tracking-normal tracking-tighter text-sm font-medium">
                      {feature.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Feature content with more details */}
            <div>
              {features.map((feature, index) => (
                <TabsContent
                  key={index}
                  value={index.toString()}
                  className="mt-0 w-full"
                >
                  <div
                    className={`border border-border rounded-xl overflow-hidden`}
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Feature image - full width on mobile, left side on desktop */}
                      <div className="lg:w-2/5 xl:w-1/3">
                        <div className="relative w-full aspect-video lg:aspect-square">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-tr ${feature.color} opacity-20`}
                          ></div>

                          {/* Feature highlight badge */}
                          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                            Featured
                          </div>
                        </div>
                      </div>

                      {/* Enhanced feature content with more details */}
                      <div className="p-6 md:p-8 lg:w-3/5 xl:w-2/3">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} text-white`}
                          >
                            {feature.icon}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold">
                            {feature.title}
                          </h3>
                        </div>

                        {/* Extended description */}
                        <p className="text-muted-foreground mb-6">
                          {feature.longDescription}
                        </p>

                        {/* Key benefits */}
                        <div className="mb-6">
                          <h4 className="text-base font-semibold mb-3">
                            Key Benefits
                          </h4>
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {feature.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA button */}
                        <NormalButton
                          className={`inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r ${feature.color} hover:opacity-90 transition-opacity`}
                        >
                          <span>Contact Us</span>
                        </NormalButton>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
