// // 'use client';

// // import React from 'react';
// // import { useFormStatus, useFormState } from 'react-dom';
// // import { zodResolver } from '@hookform/resolvers/zod';
// // import { useForm } from 'react-hook-form';
// // import { z } from 'zod';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { Textarea } from '@/components/ui/textarea';
// // import { useToast } from '@/hooks/use-toast';
// // import { submitApplicationAction, type ApplicationFormState } from '@/lib/actions';
// // import { User, Mail, Phone, FileText, Send, Loader2 } from 'lucide-react';

// // const ApplicationSchema = z.object({
// //   fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
// //   email: z.string().email({ message: 'Invalid email address.' }),
// //   phone: z.string().optional(),
// //   coverLetter: z.string().min(20, { message: 'Cover letter must be at least 20 characters.' }),
// //   jobTitle: z.string(), // To identify which job is being applied for
// // });

// // type ApplicationFormData = z.infer<typeof ApplicationSchema>;

// // interface ApplicationFormProps {
// //   jobTitle: string;
// //   jobStatus: 'Open' | 'Closed';
// // }

// // function SubmitButton({ disabled }: { disabled?: boolean }) {
// //   const { pending } = useFormStatus();
// //   return (
// //     <Button type="submit" disabled={pending || disabled} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
// //       {pending ? (
// //         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
// //       ) : (
// //         <Send className="mr-2 h-5 w-5" />
// //       )}
// //       {disabled ? 'Applications Closed' : 'Submit Application'}
// //     </Button>
// //   );
// // }

// // export function ApplicationForm({ jobTitle, jobStatus }: ApplicationFormProps) {
// //   const { toast } = useToast();
// //   const initialState: ApplicationFormState = { message: '', errors: {}, success: false };

// //   // Pass jobTitle with initial state or bind it to the action
// //   const boundAction = submitApplicationAction.bind(null, jobTitle);
// //   const [state, formAction] = useFormState(boundAction, initialState);

// //   const form = useForm<Omit<ApplicationFormData, 'jobTitle'>>({ // jobTitle is handled by the action
// //     resolver: zodResolver(ApplicationSchema.omit({ jobTitle: true })),
// //     defaultValues: {
// //       fullName: '',
// //       email: '',
// //       phone: '',
// //       coverLetter: '',
// //     },
// //   });

// //   React.useEffect(() => {
// //     if (state.message) {
// //       if (state.success) {
// //         toast({
// //           title: 'Application Sent!',
// //           description: state.message,
// //         });
// //         form.reset();
// //       } else {
// //         toast({
// //           title: 'Error',
// //           description: state.message || 'Something went wrong. Please try again.',
// //           variant: 'destructive',
// //         });
// //       }
// //     }
// //   }, [state, toast, form]);

// //   React.useEffect(() => {
// //     if (state.errors?.fullName) form.setError('fullName', { type: 'server', message: state.errors.fullName.join(', ') });
// //     if (state.errors?.email) form.setError('email', { type: 'server', message: state.errors.email.join(', ') });
// //     if (state.errors?.phone) form.setError('phone', { type: 'server', message: state.errors.phone.join(', ') });
// //     if (state.errors?.coverLetter) form.setError('coverLetter', { type: 'server', message: state.errors.coverLetter.join(', ') });
// //   }, [state.errors, form]);

// //   const isFormDisabled = jobStatus === 'Closed';

// //   return (
// //     <form action={formAction} className="space-y-6">
// //       <input type="hidden" {...form.register('jobTitle')} value={jobTitle} />
// //       <div>
// //         <Label htmlFor="fullName" className="text-foreground/80">Full Name</Label>
// //         <div className="relative mt-1">
// //           <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
// //           <Input id="fullName" {...form.register('fullName')} placeholder="Your Name" className="pl-10" disabled={isFormDisabled} />
// //         </div>
// //         {form.formState.errors.fullName && <p className="mt-1 text-sm text-destructive">{form.formState.errors.fullName.message}</p>}
// //       </div>

// //       <div>
// //         <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
// //         <div className="relative mt-1">
// //           <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
// //           <Input id="email" type="email" {...form.register('email')} placeholder="you@example.com" className="pl-10" disabled={isFormDisabled} />
// //         </div>
// //         {form.formState.errors.email && <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>}
// //       </div>

// //       <div>
// //         <Label htmlFor="phone" className="text-foreground/80">Phone (Optional)</Label>
// //         <div className="relative mt-1">
// //           <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
// //           <Input id="phone" type="tel" {...form.register('phone')} placeholder="Your Phone Number" className="pl-10" disabled={isFormDisabled} />
// //         </div>
// //         {form.formState.errors.phone && <p className="mt-1 text-sm text-destructive">{form.formState.errors.phone.message}</p>}
// //       </div>

// //       <div>
// //         <Label htmlFor="coverLetter" className="text-foreground/80">Cover Letter</Label>
// //         <div className="relative mt-1">
// //            <FileText className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
// //           <Textarea
// //             id="coverLetter"
// //             {...form.register('coverLetter')}
// //             placeholder="Tell us why you're a great fit..."
// //             className="pl-10 min-h-[120px]"
// //             disabled={isFormDisabled}
// //           />
// //         </div>
// //         {form.formState.errors.coverLetter && <p className="mt-1 text-sm text-destructive">{form.formState.errors.coverLetter.message}</p>}
// //       </div>
// //       <SubmitButton disabled={isFormDisabled} />
// //        {isFormDisabled && (
// //         <p className="mt-4 text-center text-sm text-muted-foreground">
// //           Applications for this role are currently closed.
// //         </p>
// //       )}
// //     </form>
// //   );
// // }

// "use client";

// import React from "react";
// import { useFormStatus, useFormState } from "react-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import {
//   submitApplicationAction,
//   type ApplicationFormState,
// } from "@/lib/actions";
// import {
//   User,
//   Mail,
//   Phone,
//   FileText,
//   Send,
//   Loader2,
//   Linkedin,
//   FileUp,
// } from "lucide-react";

// // ✅ Updated schema with portfolio/resume as optional
// const ApplicationSchema = z.object({
//   fullName: z
//     .string()
//     .min(2, { message: "Full name must be at least 2 characters." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   phone: z.string().min(5, { message: "Phone number is required." }),
//   linkedin: z
//     .string()
//     .url({ message: "Please provide a valid LinkedIn profile URL." })
//     .refine(
//       (val) => val.includes("linkedin.com") || val.includes("linkedin.in"),
//       {
//         message: "Please provide a valid LinkedIn profile link.",
//       }
//     ),
//   resume: z
//     .string()
//     .url({ message: "Please provide a valid URL." })
//     .optional()
//     .or(z.literal("")),
//   coverLetter: z
//     .string()
//     .min(50, { message: "Cover letter must be at least 50 characters." }),
//   jobTitle: z.string().min(1, { message: "Job title is required." }),
// });

// type ApplicationFormData = z.infer<typeof ApplicationSchema>;

// interface ApplicationFormProps {
//   jobTitle: string;
//   jobStatus: "Open" | "Closed";
// }

// // ✅ Properly extended form state
// export type ExtendedApplicationFormState = ApplicationFormState & {
//   errors?: {
//     fullName?: string[];
//     email?: string[];
//     phone?: string[];
//     linkedin?: string[];
//     resume?: string[];
//     coverLetter?: string[];
//     jobTitle?: string[];
//   };
// };

// function SubmitButton({ disabled }: { disabled?: boolean }) {
//   const { pending } = useFormStatus();
//   return (
//     <Button
//       type="submit"
//       disabled={pending || disabled}
//       className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//     >
//       {pending ? (
//         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//       ) : (
//         <Send className="mr-2 h-5 w-5" />
//       )}
//       {disabled ? "Applications Closed" : "Submit Application"}
//     </Button>
//   );
// }

// export function ApplicationForm({ jobTitle, jobStatus }: ApplicationFormProps) {
//   const { toast } = useToast();
//   const initialState: ExtendedApplicationFormState = {
//     message: "",
//     errors: {},
//     success: false,
//   };

//   const boundAction = submitApplicationAction.bind(null, jobTitle);
//   const [state, formAction] = useFormState(boundAction, initialState);

//   const form = useForm<ApplicationFormData>({
//     resolver: zodResolver(ApplicationSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       linkedin: "",
//       resume: "",
//       coverLetter: "",
//       jobTitle: jobTitle,
//     },
//   });

//   React.useEffect(() => {
//     if (state.message) {
//       if (state.success) {
//         toast({
//           title: "Application Sent!",
//           description: state.message,
//         });
//         form.reset();
//       } else {
//         toast({
//           title: "Error",
//           description:
//             state.message || "Something went wrong. Please try again.",
//           variant: "destructive",
//         });
//       }
//     }
//   }, [state, toast, form]);

//   // ✅ Fixed server-side validation errors handling
//   React.useEffect(() => {
//     if (state.errors) {
//       Object.entries(state.errors).forEach(([field, messages]) => {
//         if (messages && messages.length > 0) {
//           form.setError(field as keyof ApplicationFormData, {
//             type: "server",
//             message: messages.join(", "),
//           });
//         }
//       });
//     }
//   }, [state.errors, form]);

//   const isFormDisabled = jobStatus === "Closed";

//   return (
//     <form action={formAction} className="space-y-6">
//       {/* Hidden jobTitle field */}
//       <input type="hidden" {...form.register("jobTitle")} value={jobTitle} />

//       {/* Full Name */}
//       <div>
//         <Label htmlFor="fullName" className="text-foreground/80">
//           Full Name (Required)
//         </Label>
//         <div className="relative mt-1">
//           <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//           <Input
//             id="fullName"
//             {...form.register("fullName")}
//             placeholder="Your Name"
//             className="pl-10"
//             disabled={isFormDisabled}
//             required
//           />
//         </div>
//         {form.formState.errors.fullName && (
//           <p className="mt-1 text-sm text-destructive">
//             {form.formState.errors.fullName.message}
//           </p>
//         )}
//       </div>

//       {/* Email */}
//       <div>
//         <Label htmlFor="email" className="text-foreground/80">
//           Email Address (Required)
//         </Label>
//         <div className="relative mt-1">
//           <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//           <Input
//             id="email"
//             type="email"
//             {...form.register("email")}
//             placeholder="you@example.com"
//             className="pl-10"
//             disabled={isFormDisabled}
//             required
//           />
//         </div>
//         {form.formState.errors.email && (
//           <p className="mt-1 text-sm text-destructive">
//             {form.formState.errors.email.message}
//           </p>
//         )}
//       </div>

//       {/* Phone */}
//       <div>
//         <Label htmlFor="phone" className="text-foreground/80">
//           Phone Number (Required)
//         </Label>
//         <div className="relative mt-1">
//           <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//           <Input
//             id="phone"
//             type="tel"
//             {...form.register("phone")}
//             placeholder="Your Phone Number"
//             className="pl-10"
//             disabled={isFormDisabled}
//             required
//           />
//         </div>
//         {form.formState.errors.phone && (
//           <p className="mt-1 text-sm text-destructive">
//             {form.formState.errors.phone.message}
//           </p>
//         )}
//       </div>

//       {/* LinkedIn - Required */}
//       <div>
//         <Label htmlFor="linkedin" className="text-foreground/80">
//           LinkedIn Profile (Required)
//         </Label>
//         <div className="relative mt-1">
//           <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//           <Input
//             id="linkedin"
//             type="url"
//             {...form.register("linkedin")}
//             placeholder="https://linkedin.com/in/yourprofile"
//             className="pl-10"
//             disabled={isFormDisabled}
//             required
//           />
//         </div>
//         {form.formState.errors.linkedin && (
//           <p className="mt-1 text-sm text-destructive">
//             {form.formState.errors.linkedin.message}
//           </p>
//         )}
//       </div>

//       {/* Resume - Optional */}
//       <div>
//         <Label htmlFor="resume" className="text-foreground/80">
//           Resume / Portfolio Link (Optional)
//         </Label>
//         <div className="relative mt-1">
//           <FileUp className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//           <Input
//             id="resume"
//             type="url"
//             {...form.register("resume")}
//             placeholder="Link to your resume or portfolio (optional)"
//             className="pl-10"
//             disabled={isFormDisabled}
//           />
//         </div>
//         {form.formState.errors.resume && (
//           <p className="mt-1 text-sm text-destructive">
//             {form.formState.errors.resume.message}
//           </p>
//         )}
//       </div>

//       {/* Cover Letter */}
//       <div>
//         <Label htmlFor="coverLetter" className="text-foreground/80">
//           Cover Letter (Required)
//         </Label>
//         <div className="relative mt-1">
//           <FileText className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
//           <Textarea
//             id="coverLetter"
//             {...form.register("coverLetter")}
//             placeholder="Tell us why you're a great fit for this position..."
//             className="pl-10 min-h-[120px]"
//             disabled={isFormDisabled}
//             required
//           />
//         </div>
//         {form.formState.errors.coverLetter && (
//           <p className="mt-1 text-sm text-destructive">
//             {form.formState.errors.coverLetter.message}
//           </p>
//         )}
//       </div>

//       <SubmitButton disabled={isFormDisabled} />

//       {isFormDisabled && (
//         <p className="mt-4 text-center text-sm text-muted-foreground">
//           Applications for this role are currently closed.
//         </p>
//       )}
//     </form>
//   );
// }

// /* form sbmut*/

"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  User,
  Mail,
  Phone,
  FileText,
  Send,
  Loader2,
  Linkedin,
  FileUp,
} from "lucide-react";

// ✅ Updated schema with portfolio/resume as optional
const ApplicationSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(5, { message: "Phone number is required." }),
  linkedin: z
    .string()
    .url({ message: "Please provide a valid LinkedIn profile URL." })
    .refine(
      (val) => val.includes("linkedin.com") || val.includes("linkedin.in"),
      {
        message: "Please provide a valid LinkedIn profile link.",
      }
    ),
  resume: z
    .string()
    .url({ message: "Please provide a valid URL." })
    .optional()
    .or(z.literal("")),
  coverLetter: z
    .string()
    .min(50, { message: "Cover letter must be at least 50 characters." }),
  jobTitle: z.string().min(1, { message: "Job title is required." }),
});

type ApplicationFormData = z.infer<typeof ApplicationSchema>;

interface ApplicationFormProps {
  jobTitle: string;
  jobStatus: "Open" | "Closed";
}

function SubmitButton({
  disabled,
  isSubmitting,
}: {
  disabled?: boolean;
  isSubmitting: boolean;
}) {
  return (
    <Button
      type="submit"
      disabled={isSubmitting || disabled}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      {isSubmitting ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <Send className="mr-2 h-5 w-5" />
      )}
      {disabled
        ? "Applications Closed"
        : isSubmitting
        ? "Submitting..."
        : "Submit Application"}
    </Button>
  );
}

export function ApplicationForm({ jobTitle, jobStatus }: ApplicationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(ApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedin: "",
      resume: "",
      coverLetter: "",
      jobTitle: jobTitle,
    },
  });

  const handleSubmit = async (data: ApplicationFormData) => {
    if (jobStatus === "Closed") return;

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/mickey.extrastorage@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: `📌 New Job Application for ${jobTitle}`,
          }),
        }
      );

      const response = await res.json();

      if (res.ok && response.success) {
        toast({
          title: "✅ Application Sent!",
          description: `Your application for ${jobTitle} has been received.`,
        });
        form.reset();
      } else {
        toast({
          title: "❌ Submission Failed",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "⚠️ Network Error",
        description: "Check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormDisabled = jobStatus === "Closed";

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
      {/* Hidden jobTitle field */}
      <input type="hidden" {...form.register("jobTitle")} value={jobTitle} />

      {/* Full Name */}
      <div>
        <Label htmlFor="fullName">Full Name (Required)</Label>
        <div className="relative mt-1">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="fullName"
            {...form.register("fullName")}
            placeholder="Your Name"
            className="pl-10"
            disabled={isFormDisabled}
          />
        </div>
        {form.formState.errors.fullName && (
          <p className="mt-1 text-sm text-destructive">
            {form.formState.errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email Address (Required)</Label>
        <div className="relative mt-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            placeholder="you@example.com"
            className="pl-10"
            disabled={isFormDisabled}
          />
        </div>
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-destructive">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone Number (Required)</Label>
        <div className="relative mt-1">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="phone"
            type="tel"
            {...form.register("phone")}
            placeholder="Your Phone Number"
            className="pl-10"
            disabled={isFormDisabled}
          />
        </div>
        {form.formState.errors.phone && (
          <p className="mt-1 text-sm text-destructive">
            {form.formState.errors.phone.message}
          </p>
        )}
      </div>

      {/* LinkedIn */}
      <div>
        <Label htmlFor="linkedin">LinkedIn Profile (Required)</Label>
        <div className="relative mt-1">
          <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="linkedin"
            type="url"
            {...form.register("linkedin")}
            placeholder="https://linkedin.com/in/yourprofile"
            className="pl-10"
            disabled={isFormDisabled}
          />
        </div>
        {form.formState.errors.linkedin && (
          <p className="mt-1 text-sm text-destructive">
            {form.formState.errors.linkedin.message}
          </p>
        )}
      </div>

      {/* Resume */}
      <div>
        <Label htmlFor="resume">Resume / Portfolio Link (Optional)</Label>
        <div className="relative mt-1">
          <FileUp className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            id="resume"
            type="url"
            {...form.register("resume")}
            placeholder="Link to your resume or portfolio (optional)"
            className="pl-10"
            disabled={isFormDisabled}
          />
        </div>
        {form.formState.errors.resume && (
          <p className="mt-1 text-sm text-destructive">
            {form.formState.errors.resume.message}
          </p>
        )}
      </div>

      {/* Cover Letter */}
      <div>
        <Label htmlFor="coverLetter">Cover Letter (Required)</Label>
        <div className="relative mt-1">
          <FileText className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
          <Textarea
            id="coverLetter"
            {...form.register("coverLetter")}
            placeholder="Tell us why you're a great fit..."
            className="pl-10 min-h-[120px]"
            disabled={isFormDisabled}
          />
        </div>
        {form.formState.errors.coverLetter && (
          <p className="mt-1 text-sm text-destructive">
            {form.formState.errors.coverLetter.message}
          </p>
        )}
      </div>

      <SubmitButton disabled={isFormDisabled} isSubmitting={isSubmitting} />

      {isFormDisabled && (
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Applications for this role are currently closed.
        </p>
      )}
    </form>
  );
}
