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
import { format } from "date-fns";
import { ArrowRight, CheckCircle, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define the project type with all required fields for the modal
type Project = {
  id: string;
  title: string;
  mission: string;
  category: string;
  client: string;
  completeDate: Date;
  demoUrl: string;
  overView: string;
  features: string[];
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
  };
  images: {
    url: string;
    publicId: string;
  }[];
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};
interface WebDevPortfolioProps {
  projectsData: Project[];
}

export default function WebDevPortfolio({
  projectsData,
}: WebDevPortfolioProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const openProjectModal = (projectId: string) => {
    const project = projectsData.find((p) => p.id === projectId);
    if (project) {
      setCurrentProject(project);
      setModalOpen(true);
    }
  };

  return (
    <div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
            onViewDetails={() => openProjectModal(project.id)}
          />
        ))}
      </div>

      {/* Project Details Modal */}
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
                src={currentProject.images[0].url || "/placeholder.svg"}
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
                  <p className="text-sm opacity-90">{currentProject.mission}</p>
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
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Client:</span>{" "}
                  {currentProject.client}
                </div>
              </div>

              {/* Overview */}
              <h3 className="text-xl font-semibold mb-3">Overview</h3>
              <p className="text-gray-700 text-sm md:text-base">
                {currentProject.overView}
              </p>

              {/* Features */}
              <h3 className="text-xl font-semibold mt-6 mb-3">
                Key Features of {currentProject.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {currentProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-Ttext h-5 w-5" />
                    <span className="text-gray-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <h3 className="text-xl font-semibold mt-6 mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-Ttext/5 p-5 rounded-lg mt-6">
                <blockquote className="text-gray-700 italic text-sm md:text-base">
                  &quot;{currentProject.testimonial.quote}&quot;
                </blockquote>
                <p className="text-indigo-900 font-semibold text-sm mt-2">
                  — {currentProject.testimonial.author}
                </p>
              </div>

              {/* Live Demo Button */}
              <div className="flex mt-6">
                <Link
                  href={currentProject.demoUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-Ttext text-white rounded-md text-sm font-semibold hover:bg-[#0093dc] transition"
                  target="_blank"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type PortfolioCardProps = {
  project: Project;
  onViewDetails: () => void;
};

function PortfolioCard({ project, onViewDetails }: PortfolioCardProps) {
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
