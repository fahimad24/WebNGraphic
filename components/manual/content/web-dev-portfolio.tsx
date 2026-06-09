"use client";

import { format } from "date-fns";
import { CheckCircle, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PortfolioCard from "../card/PortfolioCard";
import { usePathname, useRouter } from "next/navigation";
import { se } from "date-fns/locale";

// Define the project type with all required fields for the modal
export type Project = {
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
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const openProjectModal = (projectId: string) => {
    router.push(`${pathname}?project=open`, { scroll: false });
    const project = projectsData.find((p) => p.id === projectId);
    if (project) {
      setCurrentProject(project);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    router.push(pathname, { scroll: false });
    setModalOpen(false);
    setCurrentProject(null);
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
          onClick={closeModal} // Click outside to close modal
        >
          {/* Modal Container */}
          <div
            className="relative bg-white w-full max-w-4xl rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
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
