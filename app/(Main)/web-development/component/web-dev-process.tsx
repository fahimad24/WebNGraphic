import SectionHeader from "@/components/manual/header/section-header";

type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
  isLeft: boolean;
};

export default function WebDevProcess() {
  return (
    <div>
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading="Our Process"
            subHeading="We follow a proven methodology to deliver exceptional results"
          />

          <div className="mt-10 md:mt-16">
            <div className="relative">
              {/* Timeline line - hidden on mobile, visible on md screens and up */}
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-border hidden md:block" />

              {/* Mobile timeline line - centered under the circles */}
              <div className="absolute left-[28px] h-full w-1 bg-border md:hidden" />

              <div className="space-y-8 md:space-y-12">
                <ProcessStep
                  number="01"
                  title="Discovery & Planning"
                  description="We start by understanding your business goals, target audience, and project requirements to create a solid foundation."
                  isLeft={true}
                />
                <ProcessStep
                  number="02"
                  title="Design & Prototyping"
                  description="Our designers create wireframes and visual concepts that align with your brand and meet user needs."
                  isLeft={false}
                />
                <ProcessStep
                  number="03"
                  title="Development & Implementation"
                  description="Our development team brings the designs to life with clean, efficient code and attention to detail."
                  isLeft={true}
                />
                <ProcessStep
                  number="04"
                  title="Testing & Refinement"
                  description="We thoroughly test all aspects of your project to ensure quality, performance, and usability."
                  isLeft={false}
                />
                <ProcessStep
                  number="05"
                  title="Launch & Support"
                  description="After launch, we provide ongoing support and maintenance to keep your digital assets performing at their best."
                  isLeft={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ number, title, description, isLeft }: ProcessCardProps) {
  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* On mobile, we don't need the left spacer */}
      <div className="hidden md:block md:flex-1" />

      {/* Circle with number - positioned differently on mobile vs desktop */}
      <div className="absolute left-0 md:static md:flex md:items-center md:justify-center">
        <div className="flex h-14 w-14 md:h-12 md:w-12 items-center justify-center rounded-full bg-Ttext text-lg font-bold text-primary-foreground">
          {number}
        </div>
      </div>

      {/* Content card - full width on mobile, half width on desktop */}
      <div className="pl-20 md:pl-0 md:flex-1">
        <div
          className={`rounded-xl bg-muted p-4 md:p-6 shadow-sm ${
            isLeft ? "md:mr-4 md:text-left" : "md:ml-4 md:text-right"
          }`}
        >
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
