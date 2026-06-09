"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { submitContactForm } from "@/app/action/action";
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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().optional(),
});

const initialState = {
  success: false,
  message: "",
};

export function ContactCommonForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const form = useForm<z.input<typeof formSchema>, any, z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-2 rounded-full">
            <Check className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-green-800 mb-2">
          Message Sent Successfully
        </h3>
        <p className="text-green-700">
          Thank you for contacting us. We will get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="block text-sm text-gray-300">
                Your Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  className="mt-1 block bg-white w-full rounded-md shadow-sm md:h-12 sm:text-sm p-2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="md:flex gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4 w-full">
                <FormLabel className="block text-sm text-gray-300">
                  Your Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 block w-full bg-white rounded-md md:h-12 sm:text-sm p-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-4 w-full">
                <FormLabel className="block text-sm text-gray-300">
                  Your Phone
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Phone"
                    className="mt-1 block w-full bg-white rounded-md shadow-sm md:h-12 sm:text-sm p-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="block text-sm font-medium text-gray-300">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your message here..."
                  className="mt-1 block w-full bg-white rounded-md shadow-sm md:h-28 resize-none sm:text-sm p-2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="bg-Ttext text-white font-medium py-2 px-4 mt-8 rounded-md hover:bg-TtextH transition"
        >
          {isPending ? "Sending..." : "Send Message"}
        </Button>

        {state?.message && !state.success && (
          <p className="text-red-500 mt-2">{state.message}</p>
        )}
      </form>
    </Form>
  );
}
