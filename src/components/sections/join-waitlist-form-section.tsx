
"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { joinWaitlistAction, type WaitlistFormState } from "@/lib/actions";
import { Mail, User, Send, Briefcase, MessageSquare, Info } from "lucide-react";

const WaitlistSchema = z.object({
  name: z.string().optional().or(z.literal('')),
  email: z.string().email({ message: "Invalid email address." }),
  roleOrInterest: z.string().optional().or(z.literal('')),
  reasonForJoining: z.string().optional().or(z.literal('')),
  consent: z.preprocess(val => val === "on" || val === true, z.boolean().refine( // handle both FormData and controlled component
    (value) => value === true,
    { message: "You must agree to receive updates and acknowledge the privacy policy." }
  )),
});

type WaitlistFormData = z.infer<typeof WaitlistSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
      ) : (
        <Send className="mr-2 h-5 w-5" />
      )}
      Join Now
    </Button>
  );
}

export function JoinWaitlistFormSection() {
  const { toast } = useToast();
  
  const initialState: WaitlistFormState = { message: "", success: false, errors: {} };
  const [state, formAction] = useActionState(joinWaitlistAction, initialState);

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(WaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      roleOrInterest: "",
      reasonForJoining: "",
      consent: false,
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset(); 
      } else {
        toast({
          title: "Error",
          description: state.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form]);
  
  useEffect(() => {
    if (state.errors?.name) form.setError("name", { type: "server", message: state.errors.name.join(', ') });
    if (state.errors?.email) form.setError("email", { type: "server", message: state.errors.email.join(', ') });
    if (state.errors?.roleOrInterest) form.setError("roleOrInterest", { type: "server", message: state.errors.roleOrInterest.join(', ') });
    if (state.errors?.reasonForJoining) form.setError("reasonForJoining", { type: "server", message: state.errors.reasonForJoining.join(', ') });
    if (state.errors?.consent) form.setError("consent", { type: "server", message: state.errors.consent.join(', ') });
  }, [state.errors, form]);

  const roleOptions = [
    "Founder / Co-founder",
    "Developer / Engineer",
    "Designer",
    "Mentor",
    "Investor",
    "Just exploring",
  ];

  return (
    <section id="join-waitlist-form" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Be the First to Know
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our waiting list to get early access, exclusive updates, and be part of the CollabForge revolution.
          </p>
        </div>
        
        <form
          action={formAction}
          className="space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-2xl"
          onSubmit={(evt) => {
            // Ensure react-hook-form validation runs before server action for client-side feedback
            form.handleSubmit(() => {
              // react-hook-form handles the actual CDATA submission via its 'control'
              // For server actions, we let the native form submission proceed after RHF validation.
              // Or, we can manually construct FormData here if we weren't using form.handleSubmit
              // For this setup, allowing default form submission after RHF validation is okay
              // if the server action is robust.
              // However, the standard way with RHF + server action is to pass `form.getValues()`
              // to the action if not using native FormData.
              // Since we ARE using native FormData, this is more of a gate.
            })(evt);
            // If RHF validation fails, evt.preventDefault() is called internally by RHF.
          }}
        >
          {/* Name Field */}
          <div>
            <Label htmlFor="name" className="text-foreground/80 flex items-center">
              <User className="mr-2 h-4 w-4 text-muted-foreground" />
              Your Name (Optional)
            </Label>
            <Input
              id="name"
              type="text"
              {...form.register("name")}
              placeholder="e.g. Ada Lovelace"
              className="mt-1"
              aria-invalid={!!form.formState.errors.name || !!state.errors?.name}
            />
            {(form.formState.errors.name ?? state.errors?.name) && (
              <p className="mt-1 text-sm text-destructive">
                {form.formState.errors.name?.message || state.errors?.name?.join(', ')}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="text-foreground/80 flex items-center">
              <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
              Email Address (Required)
            </Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="you@example.com"
              className="mt-1"
              aria-invalid={!!form.formState.errors.email || !!state.errors?.email}
              required
            />
            {(form.formState.errors.email ?? state.errors?.email) && (
              <p className="mt-1 text-sm text-destructive">
                {form.formState.errors.email?.message || state.errors?.email?.join(', ')}
              </p>
            )}
          </div>

          {/* Role or Interest Field */}
          <div>
            <Label htmlFor="roleOrInterest" className="text-foreground/80 flex items-center">
              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
              I am a... (Optional)
            </Label>
            <Select
              onValueChange={(value) => form.setValue("roleOrInterest", value)}
              defaultValue={form.getValues("roleOrInterest")}
            >
              <SelectTrigger id="roleOrInterest" className="mt-1">
                <SelectValue placeholder="Select your role or interest" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map(option => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {/* Hidden input for react-hook-form registration with server action */}
            <input type="hidden" {...form.register("roleOrInterest")} />
            {(form.formState.errors.roleOrInterest ?? state.errors?.roleOrInterest) && (
              <p className="mt-1 text-sm text-destructive">
                {form.formState.errors.roleOrInterest?.message || state.errors?.roleOrInterest?.join(', ')}
              </p>
            )}
          </div>

          {/* Why are you joining Field */}
          <div>
            <Label htmlFor="reasonForJoining" className="text-foreground/80 flex items-center">
              <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
              What are you looking for? (Optional)
            </Label>
            <Textarea
              id="reasonForJoining"
              {...form.register("reasonForJoining")}
              placeholder="Tell us a bit about your goals or what you hope to find on CollabForge..."
              className="mt-1 min-h-[100px]"
              aria-invalid={!!form.formState.errors.reasonForJoining || !!state.errors?.reasonForJoining}
            />
            {(form.formState.errors.reasonForJoining ?? state.errors?.reasonForJoining) && (
              <p className="mt-1 text-sm text-destructive">
                {form.formState.errors.reasonForJoining?.message || state.errors?.reasonForJoining?.join(', ')}
              </p>
            )}
          </div>
          
          {/* Consent Checkbox Field */}
          <div className="items-top flex space-x-2">
             <Checkbox
                id="consent"
                name="consent" // Ensure name attribute is present for FormData
                checked={form.watch("consent")}
                onCheckedChange={(checked) => form.setValue("consent", !!checked, { shouldValidate: true })}
             />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="consent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I agree to receive early access updates and acknowledge the <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>. (Required)
              </Label>
               {(form.formState.errors.consent ?? state.errors?.consent) && (
                <p className="text-sm text-destructive">
                  {form.formState.errors.consent?.message || state.errors?.consent?.join(', ')}
                </p>
              )}
            </div>
          </div>
          
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
