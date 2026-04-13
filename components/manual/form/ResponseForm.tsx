"use client";

import { createResponse } from "@/app/action/action";
import LoadingButton from "@/components/manual/button/LoadingButton";
import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Import shadcn components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Phone number is required"),
  message: z.string().optional(), // Message is optional
  interest: z.string(),
});

type FormDataType = z.infer<typeof formSchema>;

interface ResponseFormProps {
  interest: string;
}

const ResponseForm: React.FC<ResponseFormProps> = ({ interest }) => {
  const [formState, setFormState] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Initialize react-hook-form with zod resolver
  const form = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      interest: interest,
    },
  });
  const [loading, setLoading] = useState(false);

  const submitToServer = async (data: FormDataType, token: string) => {
    try {
      setLoading(true);
      const formDataObj = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined) {
          formDataObj.append(key, value);
        }
      });
      formDataObj.append("recaptchaToken", token);

      const result = await createResponse(formDataObj);

      if (result.success) {
        toast.success("Success!", {
          description: "Your form has been submitted successfully.",
        });
        // Reset form after successful submission
        form.reset();
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        // Reset form after successful submission
        form.reset({
          name: "",
          email: "",
          phone: "",
          message: "",
          interest: interest,
        });

        setFormState({ success: true, message: result.message });
      } else {
        toast.error("Error", {
          description:
            result.message || "Something went wrong. Please try again.",
        });
        setFormState({ success: false, message: result.message });
      }
    } catch {
      toast.error("Error", {
        description: "An error occurred while submitting the form.",
      });
      setFormState({
        success: false,
        message: "An error occurred while submitting the form.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: FormDataType) => {
    try {
      setLoading(true);

      // Execute invisible reCAPTCHA check
      let token = null;
      if (recaptchaRef.current) {
        token = await recaptchaRef.current.executeAsync();
      }

      if (!token) {
        toast.error("Error", {
          description: "Failed to verify CAPTCHA. Please try again.",
        });
        setLoading(false);
        return;
      }

      await submitToServer(data, token);
    } catch (err) {
      console.error(err);
      toast.error("CAPTCHA verification failed.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-Mbg flex-shrink-0 bg-opacity-70 border-[0.5px] border-[#00b1dc4d] w-full md:w-[350px] lg:w-[380px] h-auto py-8 px-5 rounded-md z-40">
      <h2 className="text-[#00b1dc] text-center text-lg md:text-2xl mb-8 font-semibold">
        Get your free consultation!
      </h2>

      {formState?.success ? (
        <div className="text-green-500 text-center p-4">
          <p className="mb-2">Thank you for your submission!</p>
          <p className="mb-4">We will contact you soon.</p>
          <button
            onClick={() => setFormState(null)}
            className="bg-Ttext text-[#F1F1F1] hover:bg-TtextH active:bg-TtextA py-2 px-4 rounded-md"
          >
            Submit another response
          </button>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      className="response-form-input w-full"
                      {...field}
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage className="text-xs " />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      className="response-form-input w-full"
                      {...field}
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage className="text-xs " />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      type="tel"
                      className="response-form-input w-full"
                      {...field}
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message (optional)"
                      className="response-form-input w-full !h-20"
                      {...field}
                      value={field.value || ""}
                      aria-required="false"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            {formState?.message && !formState.success && (
              <p className="text-red-500 text-sm" role="alert">
                {formState.message}
              </p>
            )}

            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} 
            />

            <LoadingButton
              defaultText="Submit"
              loadingText="Submitting..."
              isLoading={loading}
              className="bg-Ttext cursor-pointer text-[#F1F1F1] hover:bg-TtextH active:bg-TtextA py-2 rounded-md w-full"
            />
            <p className="text-sm text-gray-500 text-center">
              We respond within 24 hours. No spam - unsubscribe anytime.
            </p>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ResponseForm;
