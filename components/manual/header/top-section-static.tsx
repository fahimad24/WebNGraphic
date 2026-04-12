import { Home } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  link: string;
};

type TopsectionProops = {
  breadcrumb: BreadcrumbItem[];
  title: string;
  description: string;
};

export default function TopSectionStatic({
  title,
  description,
  breadcrumb,
}: TopsectionProops) {
  const generateBreadcrumbs = () => {
    return breadcrumb.map((item, index) => {
      const isLastItem = index === breadcrumb.length - 1;
      return (
        <span className="flex items-center" key={index}>
          {!isLastItem ? (
            <>
              <Link
                href={item.link}
                className="hover:text-[#18B3C7] transition-colors"
              >
                {item.label}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </>
          ) : (
            <span className="text-[#18B3C7]">{item.label}</span>
          )}
        </span>
      );
    });
  };
  return (
    <div className="section-background px-12">
      <section className="py-16 text-white text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">{title}</h1>

        <div className="flex items-center justify-center text-sm">
          <Link
            href="/"
            className="text-white hover:text-[#00b1dc] flex items-center"
          >
            <Home className="h-4 w-4 mr-1" /> Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          {generateBreadcrumbs()}
        </div>

        <p className="text-lg md:text-xl mt-5 max-w-3xl mx-auto mb-8">
          {description}
        </p>
        <div className="w-16 h-1 mt-7 bg-[#00b1dc] mx-auto"></div>
      </section>
    </div>
  );
}
