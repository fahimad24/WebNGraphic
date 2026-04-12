"use client";

import { format } from "date-fns";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type GraphicDesign = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageLink: string;
  imagePublicID: string;
  completeDate: Date;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};
interface GraphicPortfolioProps {
  projects: GraphicDesign[];
}

export default function GraphicPortfolio({ projects }: GraphicPortfolioProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<GraphicDesign | null>(
    null
  );

  const openProjectModal = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setCurrentProject(project);
      setModalOpen(true);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onViewDetails={() => openProjectModal(project.id)}
          />
        ))}
      </div>

      {isModalOpen && currentProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50"
          onClick={() => setModalOpen(false)} // Click outside to close modal
        >
          {/* Modal Container */}
          <div
            className="relative bg-white w-full max-w-4xl rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 z-[100] cursor-pointer hover:bg-black/50 right-4 bg-black/60 text-white rounded-full p-2 transition"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image Header */}
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={currentProject.imageLink}
                alt={currentProject.title}
                fill
                className="object-cover h-full w-full rounded-t-lg"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              {/* Black Overlay for Better Readability */}
              <div className="absolute inset-0 bg-black/50 rounded-t-lg" />

              <div className="absolute inset-0 flex items-end mb-6 justify-between md:px-10 px-6 text-white z-10">
                <div className="max-w-md">
                  {currentProject.featured && (
                    <span className="bg-Ttext text-white text-xs font-semibold py-1 px-3 rounded mb-2 inline-block">
                      Featured
                    </span>
                  )}

                  <h2 className="text-2xl md:text-3xl font-bold">
                    {currentProject.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Complete:</span>
                  {format(new Date(currentProject.completeDate), "MMM d, yyyy")}
                </div>
              </div>

              {/* Overview */}
              <h3 className="text-xl font-semibold mb-3">Overview</h3>
              <p className="text-gray-700 text-sm md:text-base">
                {currentProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type PortfolioCardProps = {
  project: GraphicDesign;
  onViewDetails: () => void;
};

function PortfolioCard({ project, onViewDetails }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden relative group pb-6 transition-all hover:shadow-md">
      <div className="absolute top-2 left-2">
        <Badge variant="outline" className="bg-background/80">
          {project.category}
        </Badge>
      </div>
      {project.featured && (
        <div className="absolute top-2 right-2">
          <span className="bg-Ttext text-white text-xs font-semibold py-1 px-3 rounded mb-2 inline-block">
            Featured
          </span>
        </div>
      )}

      <div className="overflow-hidden image-anime">
        <Image
          src={project.imageLink}
          width={600}
          height={400}
          alt={project.title}
          className="aspect-[3/2] relative w-full object-cover"
        />
      </div>

      <CardHeader className="pt-3">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="text-base line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="px-5 align-bottom mt-auto pt-0">
        <div className="border-t border-gray-100 pt-3 w-full flex">
          <div
            onClick={onViewDetails}
            className="flex pr-2 !w-full cursor-pointer justify-between items-center gap-1 text-sm font-semibold text-Ttext hover:text-TtextH transition-colors duration-200"
          >
            <button className="cursor-pointer">View Details</button>
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
