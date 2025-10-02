
"use server";

import { z } from "zod";

// --- Waitlist Action ---
const WaitlistSchema = z.object({
  name: z.string().optional().or(z.literal('')),
  email: z.string().email({ message: "Invalid email address." }),
  roleOrInterest: z.string().optional().or(z.literal('')),
  reasonForJoining: z.string().optional().or(z.literal('')),
  consent: z.preprocess(val => val === "on", z.boolean().refine(
    (value) => value === true,
    { message: "You must agree to receive updates and acknowledge the privacy policy." }
  )),
});

export type WaitlistFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    roleOrInterest?: string[];
    reasonForJoining?: string[];
    consent?: string[];
  };
  success: boolean;
};

export async function joinWaitlistAction(
  prevState: WaitlistFormState,
  formData: FormData
): Promise<WaitlistFormState> {
  const validatedFields = WaitlistSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    roleOrInterest: formData.get("roleOrInterest"),
    reasonForJoining: formData.get("reasonForJoining"),
    consent: formData.get("consent"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, roleOrInterest, reasonForJoining } = validatedFields.data;

  // Simulate API call or database interaction
  console.log("Adding to waitlist:", { name, email, roleOrInterest, reasonForJoining, consent: true });
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

  return {
    message: `Thank you, ${name || 'friend'}! You've been added to the waiting list. We'll be in touch!`,
    success: true,
  };
}


// --- Contact Us Action ---
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function contactUsAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // Simulate sending an email or saving to database
  console.log("New contact message received:", { name, email, subject, message });
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay

  return {
    message: `Thanks for reaching out, ${name}! We've received your message and will get back to you soon.`,
    success: true,
  };
}

// --- Submit Application Action ---
const ApplicationSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  coverLetter: z.string().min(20, { message: "Cover letter must be at least 20 characters." }),
  // jobTitle is passed as a bound argument, not from FormData directly for this schema
});

export type ApplicationFormState = {
  message: string;
  errors?: {
    fullName?: string[];
    email?: string[];
    phone?: string[];
    coverLetter?: string[];
  };
  success: boolean;
};

export async function submitApplicationAction(
  jobTitle: string, // Bound argument
  prevState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  const validatedFields = ApplicationSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined, // Handle empty string as optional
    coverLetter: formData.get("coverLetter"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { fullName, email, phone, coverLetter } = validatedFields.data;

  // Simulate API call or database interaction
  console.log("New job application received for:", jobTitle);
  console.log({ fullName, email, phone, coverLetter });
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

  return {
    message: `Thank you, ${fullName}! Your application for the ${jobTitle} position has been received. We'll be in touch if your profile matches our requirements.`,
    success: true,
  };
}
