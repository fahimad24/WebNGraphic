"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { checkAccess } from "../helper/check-admin";

type TestimonialData = {
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  service: string;
  avatar?: string;
  avatarID?: string;
  published: boolean;
};

export async function createTestimonial(data: TestimonialData) {
  try {
    const author = await checkAccess();
    if (!author || !author.id) {
      return { success: false, error: "Unauthorized" };
    }
    const testimonial = await prisma.testimonial.create({
      data: {
        name: data.name,
        role: data.role,
        company: data.company,
        rating: data.rating,
        comment: data.comment,
        service: data.service,
        avatar: data.avatar,
        avatarID: data.avatarID,
        published: data.published,
      },
    });

    revalidatePath("/admin/testimonial");
    revalidateTag("testimonial:all", "max");
    return testimonial;
  } catch (error) {
    console.error("Error creating project:", error);
    throw new Error("Failed to create project");
  }
}

export async function updateTestimonial(id: string, data: TestimonialData) {
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

    await prisma.testimonial.update({
      where: { id: id },
      data: {
        ...data,
      },
    });

    revalidatePath("admin/testimonial");
    revalidateTag("testimonial:all", "max");
    return { success: true };
  } catch (error) {
    console.error("Failed to update testimonial:", error);
    return { success: false, error: "Failed to update testimonial" };
  }
}

export async function getAllTestimonial(page: number, pageSize: number) {
  await checkAccess();
  try {
    const skip = (page - 1) * pageSize;

    const [testimonials, totalItems] = await Promise.all([
      prisma.testimonial.findMany({
        skip,
        take: pageSize,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.testimonial.count(),
    ]);
    return {
      testimonials,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return {
      testimonials: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
}

export async function deleteTestimonial(id: string) {
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
    await prisma.testimonial.delete({
      where: { id },
    });

    revalidatePath("/admin/testimonial");
    revalidateTag("testimonial:all", "max");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete testimonial:", error);
    throw new Error("Failed to delete testimonial");
  }
}
export async function toggleTestimonialPublish(id: string, published: boolean) {
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
    await prisma.testimonial.update({
      where: { id },
      data: { published: !published },
    });

    revalidatePath("/admin/testimonial");
    revalidateTag("testimonial:all", "max");
    return { success: true };
  } catch (error) {
    console.error("Failed to toggle testimonial publish status:", error);
    throw new Error("Failed to toggle testimonial publish status");
  }
}
