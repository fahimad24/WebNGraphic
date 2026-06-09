import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Code,
  Database,
  Globe,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react";
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
};
export default function WebDevService() {
  return (
    <section className="bg-muted ">
      <div className="max-w-7xl md:py-24 py-16 mx-auto px-5 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Web Development Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From simple websites to complex web applications, we have the
            expertise to bring your vision to life
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Globe className="h-10 w-10 text-Ttext" />}
            title="Custom Website Development"
            description="Tailored websites designed to meet your specific business needs and goals."
            features={[
              "Responsive Design",
              "SEO Optimization",
              "Content Management",
            ]}
          />
          <ServiceCard
            icon={<Code className="h-10 w-10 text-Ttext" />}
            title="Web Application Development"
            description="Powerful, scalable web applications that solve complex business problems."
            features={[
              "User Authentication",
              "Database Integration",
              "API Development",
            ]}
          />
          <ServiceCard
            icon={<Smartphone className="h-10 w-10 text-Ttext" />}
            title="Mobile-First Development"
            description="Websites and applications optimized for the best mobile experience."
            features={[
              "Touch-Friendly UI",
              "Fast Loading",
              "Offline Capabilities",
            ]}
          />
          <ServiceCard
            icon={<Layers className="h-10 w-10 text-Ttext" />}
            title="E-commerce Solutions"
            description="Online stores that drive sales and provide a seamless shopping experience."
            features={[
              "Product Management",
              "Secure Checkout",
              "Inventory Integration",
            ]}
          />
          <ServiceCard
            icon={<Database className="h-10 w-10 text-Ttext" />}
            title="CMS Development"
            description="Custom content management systems that make updating your site easy."
            features={[
              "User-Friendly Interface",
              "Content Workflows",
              "Role-Based Access",
            ]}
          />
          <ServiceCard
            icon={<Zap className="h-10 w-10 text-Ttext" />}
            title="Performance Optimization"
            description="Speed up your existing website to improve user experience and SEO."
            features={[
              "Code Optimization",
              "Image Compression",
              "Caching Strategies",
            ]}
          />
        </div>
      </div>
    </section>
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
