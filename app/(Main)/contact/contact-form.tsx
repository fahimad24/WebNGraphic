"use client";

import { saveResponseFromContact } from "@/app/action/action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckBig, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Define form validation schema
const FormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email format."),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits.")
    .max(15, "Phone number must not exceed 15 digits."),
  interest: z.string().optional(),
  message: z.string().optional(),
});

export function ContactForm() {
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.input<typeof FormSchema>, any, z.output<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!token) {
      alert("Please verify reCAPTCHA");
      return;
    }
  }

  async function onSubmit(data: z.output<typeof FormSchema>) {
    try {
      await saveResponseFromContact(data);
      toast.success("Success!", {
        description: "Your form has been submitted successfully.",
      });
      setIsSubmitted(true);
    } catch {
      toast.error("Error", {
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Have Questions? Let’s Talk!
        </h2>
        <p className="text-gray-600 mt-2">
          Fill in your details below and submit the form. We&apos;ll get back to
          you within 24 hours based on your provided information.
        </p>
      </div>
      {isSubmitted ? (
        <div className="text-center p-6 space-y-4">
          <CircleCheckBig className="text-green-500 text-6xl mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-900">Thank You!</h3>
          <p className="text-gray-600">
            We will contact you as soon as possible based on the details you
            provided.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name & Email */}
            <div className="flex flex-col lg:items-start lg:flex-row gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full "
                        type="text"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Phone & Service */}
            <div className="flex flex-col lg:items-start lg:flex-row gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        type="text"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interest"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Service (optional)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-gray-300 focus:ring-2 focus:ring-Ttext">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="graphic-design">
                          Graphic Design
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Message(optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="w-full min-h-24 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="text-center">
              <Button
                className="bg-Ttext hover:bg-TtextH active:bg-TtextA transition-all duration-200 text-white w-full"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Here We Go
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
