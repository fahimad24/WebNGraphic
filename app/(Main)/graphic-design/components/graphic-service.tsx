import SectionHeader from "@/components/manual/header/section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  ImageIcon,
  Layers,
  Layout,
  Palette,
  PenTool,
  Type,
} from "lucide-react";
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
};
export default function GraphicService() {
  return (
    <div>
      <section className="bg-muted ">
        <div className="max-w-7xl w-full mx-auto px-5 md:px-12 py-16 md:py-24">
          <SectionHeader
            heading="Our Graphic Design Services"
            subHeading="From brand identity to marketing materials, we create designs that
              resonate with your audience"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Palette className="h-10 w-10 text-Ttext" />}
              title="Brand Identity Design"
              description="Comprehensive brand identity design that communicates your values and vision."
              features={[
                "Logo Design",
                "Color Palette",
                "Typography Selection",
                "Brand Guidelines",
              ]}
            />
            <ServiceCard
              icon={<Layout className="h-10 w-10 text-Ttext" />}
              title="UI/UX Design"
              description="Intuitive user interfaces and seamless user experiences for digital products."
              features={[
                "Wireframing",
                "Prototyping",
                "User Testing",
                "Interface Design",
              ]}
            />
            <ServiceCard
              icon={<PenTool className="h-10 w-10 text-Ttext" />}
              title="Print Design"
              description="Eye-catching print materials that make a lasting impression."
              features={[
                "Business Cards",
                "Brochures",
                "Packaging",
                "Marketing Materials",
              ]}
            />
            <ServiceCard
              icon={<ImageIcon className="h-10 w-10 text-Ttext" />}
              title="Social Media Graphics"
              description="Engaging visual content optimized for social media platforms."
              features={[
                "Post Graphics",
                "Profile Images",
                "Cover Photos",
                "Ad Creatives",
              ]}
            />
            <ServiceCard
              icon={<Type className="h-10 w-10 text-Ttext" />}
              title="Typography & Lettering"
              description="Custom typography and lettering solutions for unique brand expressions."
              features={[
                "Custom Lettering",
                "Font Selection",
                "Typography Systems",
                "Logo Typography",
              ]}
            />
            <ServiceCard
              icon={<Layers className="h-10 w-10 text-Ttext" />}
              title="Illustration & Iconography"
              description="Custom illustrations and icon sets that enhance your visual communication."
              features={[
                "Custom Illustrations",
                "Icon Design",
                "Infographics",
                "Character Design",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all py-6 hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-Ttext" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
