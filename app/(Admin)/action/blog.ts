"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { checkAccess } from "../helper/check-admin";

// Define a schema for blog validation
const BlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  published: z.boolean().refine((value) => value !== undefined, {
    message: "Published status is required",
  }),
  isPopular: z.boolean().refine((value) => value !== undefined, {
    message: "Popularity status is required",
  }),
  imageLink: z.string().min(1, "Image link is required"),
  imagePublicID: z.string().min(1, "Image public ID is required"),
});

export async function createBlog(data: {
  title: string;
  content: string;
  category: string;
  published: boolean;
  isPopular: boolean;
  imageLink: string;
  imagePublicID: string;
}) {
  const author = await checkAccess();

  if (!author || !author.id) {
    return {
      error: {
        _form: ["You must be an admin to create a blog."],
      },
      data: null,
    };
  }

  const {
    title,
    content,
    category,
    published,
    isPopular,
    imageLink,
    imagePublicID,
  } = data;

  // Validate form data
  const validatedFields = BlogSchema.safeParse({
    title,
    content,
    category,
    published,
    isPopular,
    imageLink,
    imagePublicID,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        category,
        published,
        isPopular,
        authorId: author.id as string, // Explicitly cast to string
        imageLink,
        imagePublicID,
      },
    });

    // Revalidate the path to update the list of blogs
    revalidatePath("admin/blogs");
    revalidateTag("blog:common", "max");
    revalidateTag("blog:all", "max");

    // Return the created blog
    return {
      error: null,
      data: blog,
    };
  } catch (error) {
    console.error("Failed to create blog:", error);
    return {
      error: {
        _form: ["Failed to create blog. Please try again."],
      },
      data: null,
    };
  }
}

export const getAllBlogs = async (
  search: string,
  page: number,
  pageSize: number
) => {
  await checkAccess();
  type SearchCondition = {
    OR: {
      title?: { contains: string; mode: "insensitive" };
      content?: { contains: string; mode: "insensitive" };
      author?: {
        name?: { contains: string; mode: "insensitive" }; // Filter by author name
      };
    }[];
  };

  let whereCondition: SearchCondition | undefined;

  if (search) {
    whereCondition = {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { content: { contains: search, mode: "insensitive" } },
        { author: { name: { contains: search, mode: "insensitive" } } },
      ],
    };
  }
  try {
    const skip = (page - 1) * pageSize;

    const [blogs, totalItems] = await Promise.all([
      prisma.blog.findMany({
        where: whereCondition,
        skip,
        take: pageSize,
        include: {
          author: {
            select: {
              name: true,
              id: true,
              image: true,
            },
          },
        },
      }),

      prisma.blog.count({ where: whereCondition }),
    ]);

    return {
      blogs,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    };
  } catch (err) {
    console.error("Failed to fetch users by search:", err);
    return {
      blogs: [],
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      },
    };
  }
};

// Update Blog

export interface BlogUpdateData {
  title?: string;
  content?: string;
  published?: boolean;
  isPopular?: boolean;
  category?: string;
  imageLink?: string;
  imagePublicId?: string;
}

export async function updateBlog(
  id: string,
  updatedData: BlogUpdateData
): Promise<{ success: boolean; error?: string }> {
  try {
    const author = await checkAccess();
    if (!author || !author.id) {
      return { success: false, error: "Unauthorized" };
    }
    // Update the blog post in the database using Prisma
    await prisma.blog.update({
      where: { id },
      data: updatedData,
    });

    // Revalidate paths to update cached blog data
    revalidatePath("admin/blogs");
    revalidatePath(`/blog/${id}`);
    revalidateTag("blog:common", "max");
    revalidateTag("blog:all", "max");

    return { success: true };
  } catch (error) {
    console.error("Failed to update blog:", error);
    return { success: false, error: "Failed to update blog post" };
  }
}

export async function deleteBlog(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if the user is an admin
    const author = await checkAccess();
    if (!author || !author.id) {
      return { success: false, error: "Unauthorized" };
    }

    // Delete the blog post in the database using Prisma
    await prisma.blog.delete({
      where: { id },
    });

    revalidatePath("admin/blogs");
    revalidatePath(`/blog/${id}`);
    revalidateTag("blog:common", "max");
    revalidateTag("blog:all", "max");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete blog:", error);
    return { success: false, error: "Failed to delete blog post" };
  }
}
