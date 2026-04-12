"use client";

import { saveBooking } from "@/app/action/action";
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
import { format } from "date-fns";
import { Laptop2, Mail, MessageSquare, Phone, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface BookingFormProps {
  selectedDate: Date;
  selectedTime: string;
  onSuccess: (formData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message?: string;
  }) => void;
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function BookingForm({
  selectedDate,
  selectedTime,
  onSuccess,
}: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Format the date and time for submission
      const formattedDate = format(selectedDate, "yyyy-MM-dd");

      // Submit the booking data
      await saveBooking({
        ...data,
        date: formattedDate,
        time: selectedTime,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });

      // Show success message
      toast("Booking Confirmed!", {
        description: "Your meeting has been successfully scheduled.",
      });

      // Pass form data to parent component
      onSuccess(data);

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error saving booking:", error);
      toast("Something went wrong", {
        description:
          "There was an error booking your meeting. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="flex items-center text-sm sm:text-base">
                <User className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                Full Name <span className="text-destructive ml-1">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your full name"
                  className="h-10 sm:h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="flex items-center text-sm sm:text-base">
                <Mail className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                Email <span className="text-destructive ml-1">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-10 sm:h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="flex items-center text-sm sm:text-base">
                <Phone className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                Phone Number <span className="text-destructive ml-1">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your phone number"
                  className="h-10 sm:h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Service Selection */}
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="flex items-center text-sm sm:text-base">
                <Laptop2 className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                Service <span className="text-destructive ml-1">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-10 sm:h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="web-development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="web-design">Web Design</SelectItem>
                  <SelectItem value="graphic-design">Graphic Design</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Message (Optional) */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="flex items-center text-sm sm:text-base">
                <MessageSquare className="h-3 sm:h-4 w-3 sm:w-4 mr-2" />
                Message (Optional)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Add any additional information or questions"
                  className="min-h-[100px] sm:min-h-[120px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs sm:text-sm" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-10 bg-Ttext hover:bg-TtextH sm:h-12 text-sm sm:text-base mt-6"
          disabled={isSubmitting}
          size="lg"
        >
          {isSubmitting ? (
            <>
              <div
                className="h-3 sm:h-4 w-3 sm:w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2"
                aria-hidden="true"
              ></div>
              Processing...
            </>
          ) : (
            <>Confirm Booking</>
          )}
        </Button>
      </form>
    </Form>
  );
}
