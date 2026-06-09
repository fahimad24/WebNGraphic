"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Project } from "../content/web-dev-portfolio";

type PortfolioCardProps = {
  project: Project;
  onViewDetails: () => void;
};

export default function PortfolioCard({
  project,
  onViewDetails,
}: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden relative group pb-6 transition-all hover:shadow-md">
      {project.featured && (
        <div className="absolute z-[10] top-2 left-2">
          <span className="bg-Ttext text-white text-xs font-semibold py-1 px-3 rounded mb-2 inline-block">
            Featured
          </span>
        </div>
      )}

      <div className="overflow-hidden image-anime">
        <Image
          src={project.images[0].url}
          width={600}
          height={400}
          alt={project.title}
          className="aspect-[3/2] transition-all duration-300 group-hover:scale-105 relative w-full object-cover"
        />
      </div>

      <CardHeader className="pt-3">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-base line-clamp-2">
          {project.overView}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-3">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tag, index) => (
            <Badge key={index} variant="secondary" className="rounded-md">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-5 align-bottom mt-auto pt-0">
        <div className="border-t border-gray-100 pt-3 w-full flex">
          <div
            onClick={onViewDetails}
            className="flex pr-2 !w-full cursor-pointer justify-between items-center gap-1 text-sm font-semibold text-Ttext hover:text-TtextH transition-colors duration-200"
          >
            <button className="cursor-pointer text-lg">View Case Study</button>
            <ArrowRight
              size={25}
              className="transition-all duration-500 group-hover:translate-x-3"
            />
          </div>
        </div>
      </CardFooter>
      <div className="absolute bottom-0 left-0 h-1 bg-Ttext w-0 group-hover:w-full transition-all duration-500" />
    </Card>
  );
}
