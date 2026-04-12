"use client";
import { ImageUploaderClient } from "@/components/manual/input/ImageUploaderClient";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { createBlog, updateBlog } from "../action/blog";

// Define the form schema with Zod
const formSchema = z.object({
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

type BlogFormValues = z.infer<typeof formSchema>;

type Blog = {
  id: string;
  title: string;
  content: string;
  category: string;
  imageLink: string;
  imagePublicID: string;
  isPopular: boolean;
  published: boolean;
};

interface BlogFormProps {
  closeForm: Dispatch<SetStateAction<boolean>>;
  blog?: Blog;
}

export default function BlogForm({ closeForm, blog }: BlogFormProps) {
  // Set default values from the blog if it exists
  const defaultValues: Partial<BlogFormValues> = {
    title: blog?.title || "",
    content: blog?.content || "",
    category: blog?.category || "",
    imageLink: blog?.imageLink || "",
    imagePublicID: blog?.imagePublicID || "",
    isPopular: blog?.isPopular || false,
    published: blog?.published || false,
  };

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleImageUpload = (imageLink: string, imagePublicID: string) => {
    form.setValue("imageLink", imageLink);
    form.setValue("imagePublicID", imagePublicID);
  };

  async function onSubmit(data: BlogFormValues) {
    try {
      if (blog) {
        await updateBlog(blog.id, data);
        toast.success("Blog Updated", {
          description: "Your blog post has been Updated successfully.",
        });
        closeForm(false);
      } else {
        await createBlog(data);
        toast.success("Blog created", {
          description: "Your blog post has been created successfully.",
        });
        closeForm(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="relative w-full max-h-[calc(100vh-150px)] overflow-y-auto">
      <div className="pt-6 p-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter blog title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value=" Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="Graphic Design">
                          Graphic Design
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write Any"
                      className=" h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageLink"
              render={() => (
                <FormItem className="text-center">
                  <FormLabel>Blog Image</FormLabel>
                  <FormControl>
                    <ImageUploaderClient
                      uploadPreset="blog_image"
                      initialImage={blog?.imageLink}
                      initialPublicId={blog?.imagePublicID}
                      onImageUploaded={handleImageUpload}
                      aspectRatio={16 / 9}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="isPopular"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Popular Post</FormLabel>
                      <FormDescription>
                        Mark this blog post as popular
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="published"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Published</FormLabel>
                      <FormDescription>
                        Make this blog post visible to readers
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                onClick={() => closeForm(false)}
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {blog ? "Update" : "Create"} Blog Post
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
