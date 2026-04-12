"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { checkAccess } from "../helper/check-admin";

type ProjectData = {
  title: string;
  mission: string;
  category: string;
  client: string;
  completeDate: Date;
  demoUrl: string;
  overView: string;
  features: string[];
  technologies: string[];
  testimonial: { quote: string; author: string };
  images: { url: string; publicId: string }[];
  featured: boolean;
  published: boolean;
};

export type ProjectWithId = ProjectData & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getAllWebDevProjects = async (
  search: string,
  page: number,
  pageSize: number
) => {
  await checkAccess();
  type SearchCondition = {
    OR: {
      title?: { contains: string; mode: "insensitive" };
    }[];
  };
  let whereCondition: SearchCondition | undefined;

  if (search) {
    whereCondition = {
      OR: [{ title: { contains: search, mode: "insensitive" } }],
    };
  }
  try {
    const skip = (page - 1) * pageSize;

    const [projects, totalItems] = await Promise.all([
      prisma.project.findMany({
        where: whereCondition,
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
      }),

      prisma.project.count({ where: whereCondition }),
    ]);

    // Cast the JSON data to the expected types
    const typedProjects = projects.map((project) => ({
      ...project,
      testimonial: project.testimonial as { quote: string; author: string },
      images: project.images as { url: string; publicId: string }[],
    }));

    return {
      projects: typedProjects,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (err) {
    console.error("Failed to fetch projects by search:", err);
    return {
      projects: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
};

export async function createWebDevProject(data: ProjectData) {
  try {
    const author = await checkAccess();
    if (!author || !author.id) {
      return { success: false, error: "Unauthorized" };
    }
    const project = await prisma.project.create({
      data: {
        title: data.title,
        mission: data.mission,
        category: data.category,
        client: data.client,
        completeDate: data.completeDate,
        demoUrl: data.demoUrl,
        overView: data.overView,
        features: data.features,
        technologies: data.technologies,
        testimonial: data.testimonial,
        images: data.images,
        featured: data.featured,
        published: data.published,
      },
    });

    revalidatePath("/admin/projects");
    revalidateTag("web-dev-project:all", "max");
    revalidateTag("web-dev-project:common", "max");
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
}

export async function updateWebDevProject(id: string, data: ProjectData) {
  try {
    const author = await checkAccess();

    if (!author || !author.id) {
      return {
        error: {
          _form: ["You must be an admin to update a portfolio."],
        },
        data: null,
      };
    }

    await prisma.project.update({
      where: { id: id },
      data: {
        ...data,
      },
    });

    revalidatePath("admin/project/web-development");
    revalidateTag("web-dev-project:all", "max");
    revalidateTag("web-dev-project:common", "max");
    return { success: true };
  } catch (error) {
    console.error("Failed to update project:", error);
    return { success: false, error: "Failed to update project" };
  }
}

export async function deleteWebDevProject(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if the user is an admin
    const author = await checkAccess();
    if (!author || !author.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Delete the blog post in the database using Prisma
    await prisma.project.delete({
      where: { id },
    });

    revalidatePath("admin/project/web-development");
    revalidateTag("web-dev-project:all", "max");
    revalidateTag("web-dev-project:common", "max");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete project:", error);
    return { success: false, error: "Failed to delete project" };
  }
}
