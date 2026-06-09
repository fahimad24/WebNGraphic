"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { checkAccess } from "../helper/check-admin";

export async function getMeetings(page: number, pageSize: number) {
  await checkAccess();
  try {
    const skip = (page - 1) * pageSize;

    const [meetings, totalItems] = await Promise.all([
      prisma.meeting.findMany({
        skip,
        take: pageSize,
        orderBy: {
          bookingDate: "desc",
        },
      }),
      prisma.meeting.count(),
    ]);
    return {
      meetings,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (error) {
    console.error("Failed to fetch meetings:", error);
    return {
      meetings: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
}

export async function approveMeeting(id: string) {
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
    await prisma.meeting.update({
      where: { id },
      data: { status: "approved" },
    });

    revalidatePath("/admin/meetings");
    return { success: true };
  } catch (error) {
    console.error("Failed to approve meeting:", error);
    throw new Error("Failed to approve meeting");
  }
}

export async function cancelMeeting(id: string) {
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
    await prisma.meeting.update({
      where: { id },
      data: { status: "cancelled" },
    });

    revalidatePath("/admin/meetings");
    return { success: true };
  } catch (error) {
    console.error("Failed to cancel meeting:", error);
    throw new Error("Failed to cancel meeting");
  }
}

export async function deleteMeeting(id: string) {
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
    await prisma.meeting.delete({
      where: { id },
    });

    revalidatePath("/admin/meetings");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete meeting:", error);
    throw new Error("Failed to delete meeting");
  }
}
