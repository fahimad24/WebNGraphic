"use client";

import { ImageUploaderClient } from "@/components/manual/input/ImageUploaderClient";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  createGraphicProject,
  updateGraphicProject,
} from "../../action/project-graphic";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),

  category: z.string().min(1, {
    message: "Category is required.",
  }),

  completeDate: z
    .date()
    .refine((date) => !isNaN(date.getTime()), {
      message: "Complete date is required.",
    })
    .refine((date) => date <= new Date(), {
      message: "Complete date cannot be in the future.",
    }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),

  imageLink: z.string().min(1, "Image link is required"),
  imagePublicID: z.string().min(1, "Image public ID is required"),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

type Project = {
  id: string;
  title: string;
  category: string;
  imageLink: string;
  imagePublicID: string;
  completeDate: Date;
  description: string;
  featured: boolean;
  published: boolean;
};

interface ProjectFormProps {
  closeForm: Dispatch<SetStateAction<boolean>>;
  project?: Project;
}

export function GraphicProjectForm({ closeForm, project }: ProjectFormProps) {
  const form = useForm<z.input<typeof formSchema>, any, z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: project?.title || "",
      category: project?.category || "",
      completeDate: project?.completeDate || undefined,
      description: project?.description || "",
      imageLink: project?.imageLink || "",
      imagePublicID: project?.imagePublicID || "",
      featured: project?.featured || false,
      published: project?.published || false,
    },
  });

  const handleImageUpload = (imageLink: string, imagePublicID: string) => {
    form.setValue("imageLink", imageLink);
    form.setValue("imagePublicID", imagePublicID);
  };

  async function onSubmit(values: z.output<typeof formSchema>) {
    try {
      if (project) {
        await updateGraphicProject(project.id, values);
        toast.success("Project Updated", {
          description: "Your project has been updated successfully.",
        });
        closeForm(false);
      } else {
        await createGraphicProject(values);
        toast.success("Project created", {
          description: "Your project has been created successfully.",
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
    <div className="relative p-2 w-full max-h-[calc(100vh-150px)]  overflow-y-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title</FormLabel>
                <FormControl>
                  <Input placeholder="My Amazing Project" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Design Type</FormLabel>
                <FormControl>
                  <Input placeholder="Logo design" {...field} />
                </FormControl>
                <FormMessage />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Images */}
          <div>
            <FormField
              control={form.control}
              name="imageLink"
              render={() => (
                <FormItem className="text-center">
                  <FormLabel>Project Image</FormLabel>
                  <FormControl>
                    <ImageUploaderClient
                      uploadPreset="portfolio_image"
                      initialImage={project?.imageLink}
                      initialPublicId={project?.imagePublicID}
                      onImageUploaded={handleImageUpload}
                      aspectRatio={4 / 3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* date */}
          <FormField
            control={form.control}
            name="completeDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Completion Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Overview */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Provide an overview of your project..."
                    className="resize-y min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* featured , published */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Featured Project
                    </FormLabel>
                    <FormDescription>
                      Mark this project as featured
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
                      Make this project visible to visitors
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

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {project ? "Updating..." : "Creating..."}
              </>
            ) : project ? (
              "Update Project"
            ) : (
              "Create Project"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
