"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { checkAccess } from "../helper/check-admin";

export async function getAllStarted(page: number, pageSize: number) {
  await checkAccess();
  try {
    const skip = (page - 1) * pageSize;

    const [started, totalItems] = await Promise.all([
      prisma.getStarted.findMany({
        skip,
        take: pageSize,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.getStarted.count(),
    ]);
    return {
      started,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (error) {
    console.error("Failed to fetch getStarted:", error);
    return {
      started: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
}

export async function deleteGetStarted(id: string) {
  try {
    const author = await checkAccess();

    if (!author || !author.id) {
      return {
        error: {
          _form: ["You must be an admin to create a blog."],
        },
        data: null,
      };
    }
    await prisma.getStarted.delete({
      where: { id },
    });

    revalidatePath("/admin/get-started");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete getstarted:", error);
    throw new Error("Failed to delete getstarted");
  }
}
