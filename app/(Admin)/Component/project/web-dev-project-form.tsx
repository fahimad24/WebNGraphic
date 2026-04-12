"use client";

import { MultipleImageUploader } from "@/components/manual/input/image-uploader-multiple";
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
import { CalendarIcon, Loader2, X } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  createWebDevProject,
  updateWebDevProject,
} from "../../action/project-webdev";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  mission: z.string().min(2, {
    message: "Mission must be at least 2 characters.",
  }),
  category: z.string().min(1, {
    message: "Category is required.",
  }),
  client: z.string().min(1, {
    message: "Client name must be at least 1 characters.",
  }),
  completeDate: z
    .date()
    .refine((date) => !isNaN(date.getTime()), {
      message: "Complete date is required.",
    })
    .refine((date) => date <= new Date(), {
      message: "Complete date cannot be in the future.",
    }),
  demoUrl: z.string().min(1, {
    message: "Demo URL must be at least 1 character.",
  }),
  overView: z.string().min(10, {
    message: "Overview must be at least 10 characters.",
  }),
  features: z.array(z.string()).min(3, {
    message: "At least 3 features are required.",
  }),
  technologies: z.array(z.string()).min(1, {
    message: "At least one technology is required.",
  }),
  testimonial: z.object({
    quote: z.string().min(1, {
      message: "Testimonial quote must be at least 1 character long.",
    }),
    author: z.string().min(1, {
      message: "Testimonial author must be at least 1 character long.",
    }),
  }),
  images: z
    .array(
      z.object({
        url: z.string().url({ message: "Invalid image URL." }),
        publicId: z.string().min(1, {
          message: "Image publicId must be at least 1 character long.",
        }),
      })
    )
    .min(1, {
      message: "At least one image is required.",
    }),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

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
  testimonial: { quote: string; author: string };
  images: { url: string; publicId: string }[];
  featured: boolean;
  published: boolean;
};

interface ProjectFormProps {
  closeForm: Dispatch<SetStateAction<boolean>>;
  project?: Project;
}

export function WebDevProjectForm({ closeForm, project }: ProjectFormProps) {
  const [newTechnology, setNewTechnology] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const form = useForm<z.input<typeof formSchema>, any, z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: project?.title || "",
      mission: project?.mission || "",
      category: project?.category || "",
      client: project?.client || "",
      completeDate: project?.completeDate || undefined,
      demoUrl: project?.demoUrl || "",
      overView: project?.overView || "",
      features: project?.features || [],
      technologies: project?.technologies || [],
      testimonial: project?.testimonial || { quote: "", author: "" },
      images: project?.images || [],
      featured: project?.featured || false,
      published: project?.published || false,
    },
  });

  const handleImageUploaded = (images: { url: string; publicId: string }[]) => {
    form.setValue("images", images);
  };

  async function onSubmit(values: z.output<typeof formSchema>) {
    try {
      if (project) {
        await updateWebDevProject(project.id, values);
        toast.success("Project Updated", {
          description: "Your project has been updated successfully.",
        });
        closeForm(false);
      } else {
        await createWebDevProject(values);
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

          {/* mission */}
          <FormField
            control={form.control}
            name="mission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mission</FormLabel>
                <FormControl>
                  <Input placeholder="Project mission statement" {...field} />
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
                <FormLabel>Website Type</FormLabel>
                <FormControl>
                  <Input placeholder="E-Commerce Industry" {...field} />
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
              name="images"
              render={() => (
                <FormItem className="text-center">
                  <FormLabel>Project Images</FormLabel>
                  <FormControl>
                    <MultipleImageUploader
                      uploadPreset="portfolio_image"
                      aspectRatio={4 / 3}
                      initialImages={project?.images}
                      onImageUploaded={handleImageUploaded}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* client */}
          <FormField
            control={form.control}
            name="client"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client</FormLabel>
                <FormControl>
                  <Input placeholder="Client Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          {/* Demo URL */}
          <FormField
            control={form.control}
            name="demoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Demo URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Overview */}
          <FormField
            control={form.control}
            name="overView"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Overview</FormLabel>
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

          {/* Features */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Features</FormLabel>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter a feature"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && newFeature.trim()) {
                          e.preventDefault();
                          field.onChange([...field.value, newFeature.trim()]);
                          setNewFeature("");
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        if (newFeature.trim()) {
                          field.onChange([...field.value, newFeature.trim()]);
                          setNewFeature("");
                        }
                      }}
                    >
                      Add
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {field.value.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-muted px-3 py-1 rounded-md"
                      >
                        <span>{feature}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-auto p-1 ml-1"
                          onClick={() => {
                            const newFeatures = [...field.value];
                            newFeatures.splice(index, 1);
                            field.onChange(newFeatures);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <FormDescription>
                    Add at least 3 key features of your project.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technologies</FormLabel>

                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter a technology"
                      value={newTechnology}
                      onChange={(e) => setNewTechnology(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && newTechnology.trim()) {
                          e.preventDefault();
                          field.onChange([
                            ...field.value,
                            newTechnology.trim(),
                          ]);
                          setNewTechnology("");
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        if (newTechnology.trim()) {
                          field.onChange([
                            ...field.value,
                            newTechnology.trim(),
                          ]);
                          setNewTechnology("");
                        }
                      }}
                    >
                      Add
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {field.value.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-muted px-3 py-1 rounded-md"
                      >
                        <span>{tech}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-auto p-1 ml-1"
                          onClick={() => {
                            const newTechnologies = [...field.value];
                            newTechnologies.splice(index, 1);
                            field.onChange(newTechnologies);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <FormDescription>
                    Add the technologies used in your project.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Testimonials */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="testimonial.quote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Testimonial Quote</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What did your client say about this project?"
                      className="resize-y min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="testimonial.author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Testimonial Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Client name or position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
