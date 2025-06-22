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
  import { Button } from "@/components/ui/button";
  import { useForm } from "react-hook-form";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
  import emailjs from "@emailjs/browser";
  import { useState } from "react";
  
  const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    message: z.string().optional(),
    type: z.enum(["contact", "waitlist"]),
  });
  
  type ContactFormValues = z.infer<typeof ContactSchema>;
  
  export default function ContactWaitlistForm() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
    const form = useForm<ContactFormValues>({
      resolver: zodResolver(ContactSchema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
        type: "waitlist",
      },
    });
  
    const onSubmit = async (data: ContactFormValues) => {
      try {
        setStatus("idle");
  
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID!,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
          data,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
        );
  
        setStatus("success");
        form.reset();
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };
  
    return (
    <div className="px-4 sm:px-0">
      <div className="bg-[#5755557d] text-white px-4 py-12 sm:px-8 rounded-2xl max-w-2xl mx-auto mt-32">
        <h2 className="text-3xl font-bold mb-4">Join the Waitlist / Contact Us</h2>
        <p className="mb-6 text-gray-300">We’ll get back to you or notify you when we launch!</p>
  
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message here..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
  
            {/* Hidden input to track type */}
            <input type="hidden" value="waitlist" {...form.register("type")} />
  
            <Button
              type="submit"
              className="w-full bg-blue-700 text-white hover:bg-blue transition-all"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Sending..." : "Submit"}
            </Button>
  
            {status === "success" && (
              <p className="text-green-400 text-sm">Thank you! We'll be in touch.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </Form>
      </div>
      </div>
    );
  }