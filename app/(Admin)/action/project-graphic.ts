"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { checkAccess } from "../helper/check-admin";

type ProjectData = {
  title: string;
  category: string;
  imageLink: string;
  imagePublicID: string;
  completeDate: Date;
  description: string;
  featured: boolean;
  published: boolean;
};

export type ProjectWithId = ProjectData & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export const getAllGraphicProjects = async (
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
      prisma.graphicdesign.findMany({
        where: whereCondition,
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
      }),

      prisma.graphicdesign.count({ where: whereCondition }),
    ]);

    return {
      projects,
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

export async function createGraphicProject(data: ProjectData) {
  const author = await checkAccess();

  if (!author || !author.id) {
    return {
      error: {
        _form: ["You must be an admin to update a portfolio."],
      },
      data: null,
    };
  }
  try {
    const project = await prisma.graphicdesign.create({
      data: {
        title: data.title,
        description: data.description,
        category: data.category,
        completeDate: data.completeDate,
        imageLink: data.imageLink,
        imagePublicID: data.imagePublicID,
        featured: data.featured,
        published: data.published,
      },
    });
    revalidateTag("graphic-project:common", "max");
    revalidateTag("graphic-project:all", "max");
    revalidatePath("/admin/projects");
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
}

export async function updateGraphicProject(id: string, data: ProjectData) {
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

    await prisma.graphicdesign.update({
      where: { id: id },
      data: {
        ...data,
      },
    });
    revalidateTag("graphic-project:common", "max");
    revalidateTag("graphic-project:all", "max");
    revalidatePath("admin/project/graphic-design");
    return { success: true };
  } catch (error) {
    console.error("Failed to update project:", error);
    return { success: false, error: "Failed to update project" };
  }
}

export async function deleteGraphicProject(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if the user is an admin
    const author = await checkAccess();
    if (!author || !author.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Delete the blog post in the database using Prisma
    await prisma.graphicdesign.delete({
      where: { id },
    });

    revalidatePath("admin/project/graphic-design");
    revalidateTag("graphic-project:common", "max");
    revalidateTag("graphic-project:all", "max");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete project:", error);
    return { success: false, error: "Failed to delete project" };
  }
}
