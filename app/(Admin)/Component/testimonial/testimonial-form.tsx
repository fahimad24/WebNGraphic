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
import type { Testimonial } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { createTestimonial, updateTestimonial } from "../../action/testimonial";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  role: z.string().min(2, { message: "Role must be at least 2 characters." }),
  company: z
    .string()
    .min(2, { message: "Company must be at least 2 characters." }),
  rating: z.coerce.number().min(1).max(5),
  comment: z
    .string()
    .min(10, { message: "Comment must be at least 10 characters." }),
  service: z.string().min(1, { message: "Please select a service" }),
  avatar: z.string().optional(),
  avatarID: z.string().optional(),
  published: z.boolean().default(false),
});

interface TestimonialFormProps {
  closeForm: Dispatch<SetStateAction<boolean>>;
  testimonial?: Testimonial;
}

export function TestimonialForm({
  closeForm,
  testimonial,
}: TestimonialFormProps) {
  const form = useForm<z.input<typeof formSchema>, any, z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: testimonial?.name || "",
      role: testimonial?.role || "",
      company: testimonial?.company || "",
      rating: testimonial?.rating || 5,
      comment: testimonial?.comment || "",
      service: testimonial?.service || "",
      avatar: testimonial?.avatar || "",
      avatarID: testimonial?.avatarID || "",
      published: testimonial?.published || false,
    },
  });

  const handleImageUpload = (imageLink: string, imagePublicID: string) => {
    form.setValue("avatar", imageLink);
    form.setValue("avatarID", imagePublicID);
  };

  async function onSubmit(values: z.output<typeof formSchema>) {
    try {
      if (testimonial) {
        await updateTestimonial(testimonial.id, values);
        toast.success("Testimonial Updated", {
          description: "Your testimonial has been updated successfully.",
        });
        closeForm(false);
      } else {
        await createTestimonial(values);
        toast.success("Testimonial created", {
          description: "Your testimonial has been created successfully.",
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
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Inc" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="CEO" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Web Development">
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
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating (1-5)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={5}
                      value={field.value as number | string | undefined}
                      onChange={(event) =>
                        field.onChange(
                          event.target.value === ""
                            ? ""
                            : Number(event.target.value)
                        )
                      }
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="avatar"
            render={() => (
              <FormItem className="text-center">
                <FormLabel>Project Image</FormLabel>
                <FormControl>
                  <ImageUploaderClient
                    uploadPreset="avatar_image"
                    initialImage={testimonial?.avatar}
                    initialPublicId={testimonial?.avatarID}
                    onImageUploaded={handleImageUpload}
                    aspectRatio={1 / 1}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Testimonial</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="The service was exceptional..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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
                    Make this testimonial visible on your website
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

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {testimonial ? "Updating..." : "Creating..."}
              </>
            ) : testimonial ? (
              "Update Testimonial"
            ) : (
              "Create Testimonial"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
