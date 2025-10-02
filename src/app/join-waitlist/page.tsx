// // // "use client";

// // // import { useFormStatus } from "react-dom";
// // // import { useActionState } from "react";
// // // import { zodResolver } from "@hookform/resolvers/zod";
// // // import { useForm } from "react-hook-form";
// // // import { z } from "zod";
// // // import { useEffect } from "react";
// // // import Link from "next/link";
// // // import { motion } from "framer-motion";

// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Label } from "@/components/ui/label";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Checkbox } from "@/components/ui/checkbox";
// // // import {
// // //   Select,
// // //   SelectContent,
// // //   SelectItem,
// // //   SelectTrigger,
// // //   SelectValue,
// // // } from "@/components/ui/select";
// // // import { useToast } from "@/hooks/use-toast";
// // // import { joinWaitlistAction, type WaitlistFormState } from "@/lib/actions";
// // // import {
// // //   Mail,
// // //   User,
// // //   Send,
// // //   Briefcase,
// // //   MessageSquare,
// // //   Users,
// // //   Loader2,
// // // } from "lucide-react";

// // // const WaitlistSchema = z.object({
// // //   name: z.string().min(1, { message: "Name is required." }),
// // //   email: z.string().email({ message: "Invalid email address." }),
// // //   roleOrInterest: z.string().min(1, { message: "Please select your role." }),
// // //   reasonForJoining: z.string().optional().or(z.literal("")),
// // //   consent: z.preprocess(
// // //     (val) => val === "on" || val === true,
// // //     z.boolean().refine((value) => value === true, {
// // //       message:
// // //         "You must agree to receive updates and acknowledge the privacy policy.",
// // //     })
// // //   ),
// // // });

// // // type WaitlistFormData = z.infer<typeof WaitlistSchema>;

// // // function SubmitButton() {
// // //   const { pending } = useFormStatus();
// // //   return (
// // //     <Button
// // //       type="submit"
// // //       disabled={pending}
// // //       className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
// // //     >
// // //       {pending ? (
// // //         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
// // //       ) : (
// // //         <Send className="mr-2 h-5 w-5" />
// // //       )}
// // //       Join Waitlist
// // //     </Button>
// // //   );
// // // }

// // // export default function JoinWaitlistPage() {
// // //   const { toast } = useToast();

// // //   const initialState: WaitlistFormState = {
// // //     message: "",
// // //     success: false,
// // //     errors: {},
// // //   };
// // //   const [state, formAction] = useActionState(joinWaitlistAction, initialState);

// // //   const form = useForm<WaitlistFormData>({
// // //     resolver: zodResolver(WaitlistSchema),
// // //     defaultValues: {
// // //       name: "",
// // //       email: "",
// // //       roleOrInterest: "",
// // //       reasonForJoining: "",
// // //       consent: true,
// // //     },
// // //   });

// // //   useEffect(() => {
// // //     if (state.message) {
// // //       if (state.success) {
// // //         toast({
// // //           title: "Success!",
// // //           description: state.message,
// // //         });
// // //         form.reset();
// // //       } else {
// // //         toast({
// // //           title: "Error",
// // //           description: state.message || "Something went wrong.",
// // //           variant: "destructive",
// // //         });
// // //       }
// // //     }
// // //   }, [state, toast, form]);

// // //   useEffect(() => {
// // //     if (state.errors?.name)
// // //       form.setError("name", {
// // //         type: "server",
// // //         message: state.errors.name.join(", "),
// // //       });
// // //     if (state.errors?.email)
// // //       form.setError("email", {
// // //         type: "server",
// // //         message: state.errors.email.join(", "),
// // //       });
// // //     if (state.errors?.roleOrInterest)
// // //       form.setError("roleOrInterest", {
// // //         type: "server",
// // //         message: state.errors.roleOrInterest.join(", "),
// // //       });
// // //     if (state.errors?.reasonForJoining)
// // //       form.setError("reasonForJoining", {
// // //         type: "server",
// // //         message: state.errors.reasonForJoining.join(", "),
// // //       });
// // //     if (state.errors?.consent)
// // //       form.setError("consent", {
// // //         type: "server",
// // //         message: state.errors.consent.join(", "),
// // //       });
// // //   }, [state.errors, form]);

// // //   const roleOptions = [
// // //     "Founder",
// // //     "Co-Founder",
// // //     "Student (aspiring entrepreneur)",
// // //     "Mentor",
// // //     "Investor",
// // //     "Team Builder / Collaborator",
// // //     "Just exploring",
// // //   ];

// // //   return (
// // //     <div className="bg-background text-foreground min-h-screen py-16 md:py-24 flex flex-col items-center justify-center">
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl"
// // //       >
// // //         <header className="text-center mb-10">
// // //           <Users className="mx-auto h-16 w-16 text-primary mb-6" />
// // //           <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
// // //             Build the Future Together
// // //           </h1>
// // //           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
// // //             Join our waitlist for{" "}
// // //             <span className="font-semibold">co-founder matching</span>,{" "}
// // //             <span className="font-semibold">mentorship</span>, and{" "}
// // //             <span className="font-semibold">team building</span>. Get early
// // //             access and be part of the startup revolution.
// // //           </p>
// // //         </header>

// // //         <motion.form
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.2, duration: 0.5 }}
// // //           action={formAction}
// // //           className="space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-2xl"
// // //           onSubmit={(evt) => {
// // //             form.handleSubmit(() => {
// // //               // RHF validation runs, then native form submission proceeds
// // //             })(evt);
// // //           }}
// // //         >
// // //           {/* Name */}
// // //           <div>
// // //             <Label
// // //               htmlFor="name"
// // //               className="text-foreground/80 flex items-center"
// // //             >
// // //               <User className="mr-2 h-4 w-4 text-muted-foreground" />
// // //               Your Name (Required)
// // //             </Label>
// // //             <Input
// // //               id="name"
// // //               type="text"
// // //               {...form.register("name")}
// // //               placeholder="e.g. Ada Lovelace"
// // //               className="mt-1"
// // //               aria-invalid={
// // //                 !!form.formState.errors.name || !!state.errors?.name
// // //               }
// // //               required
// // //             />
// // //             {(form.formState.errors.name ?? state.errors?.name) && (
// // //               <p className="mt-1 text-sm text-destructive">
// // //                 {form.formState.errors.name?.message ||
// // //                   state.errors?.name?.join(", ")}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* Email */}
// // //           <div>
// // //             <Label
// // //               htmlFor="email"
// // //               className="text-foreground/80 flex items-center"
// // //             >
// // //               <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
// // //               Email Address (Required)
// // //             </Label>
// // //             <Input
// // //               id="email"
// // //               type="email"
// // //               {...form.register("email")}
// // //               placeholder="you@example.com"
// // //               className="mt-1"
// // //               aria-invalid={
// // //                 !!form.formState.errors.email || !!state.errors?.email
// // //               }
// // //               required
// // //             />
// // //             {(form.formState.errors.email ?? state.errors?.email) && (
// // //               <p className="mt-1 text-sm text-destructive">
// // //                 {form.formState.errors.email?.message ||
// // //                   state.errors?.email?.join(", ")}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* Role */}
// // //           <div>
// // //             <Label
// // //               htmlFor="roleOrInterest"
// // //               className="text-foreground/80 flex items-center"
// // //             >
// // //               <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />I am
// // //               a... (Required)
// // //             </Label>
// // //             <Select
// // //               onValueChange={(value) => form.setValue("roleOrInterest", value)}
// // //               defaultValue={form.getValues("roleOrInterest")}
// // //               name="roleOrInterest"
// // //               required
// // //             >
// // //               <SelectTrigger id="roleOrInterest" className="mt-1">
// // //                 <SelectValue placeholder="Select your role or interest" />
// // //               </SelectTrigger>
// // //               <SelectContent>
// // //                 {roleOptions.map((option) => (
// // //                   <SelectItem key={option} value={option}>
// // //                     {option}
// // //                   </SelectItem>
// // //                 ))}
// // //               </SelectContent>
// // //             </Select>
// // //             {(form.formState.errors.roleOrInterest ??
// // //               state.errors?.roleOrInterest) && (
// // //               <p className="mt-1 text-sm text-destructive">
// // //                 {form.formState.errors.roleOrInterest?.message ||
// // //                   state.errors?.roleOrInterest?.join(", ")}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* Why joining */}
// // //           <div>
// // //             <Label
// // //               htmlFor="reasonForJoining"
// // //               className="text-foreground/80 flex items-center"
// // //             >
// // //               <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
// // //               What are you looking for? (Optional)
// // //             </Label>
// // //             <Textarea
// // //               id="reasonForJoining"
// // //               {...form.register("reasonForJoining")}
// // //               placeholder="e.g. Find a co-founder, get mentorship, join a startup team..."
// // //               className="mt-1 min-h-[100px]"
// // //               aria-invalid={
// // //                 !!form.formState.errors.reasonForJoining ||
// // //                 !!state.errors?.reasonForJoining
// // //               }
// // //             />
// // //             {(form.formState.errors.reasonForJoining ??
// // //               state.errors?.reasonForJoining) && (
// // //               <p className="mt-1 text-sm text-destructive">
// // //                 {form.formState.errors.reasonForJoining?.message ||
// // //                   state.errors?.reasonForJoining?.join(", ")}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* Consent */}
// // //           <div className="items-top flex space-x-2">
// // //             <Checkbox
// // //               id="consent"
// // //               name="consent"
// // //               checked={form.watch("consent")}
// // //               onCheckedChange={(checked) =>
// // //                 form.setValue("consent", !!checked, { shouldValidate: true })
// // //               }
// // //               aria-invalid={
// // //                 !!form.formState.errors.consent || !!state.errors?.consent
// // //               }
// // //             />
// // //             <div className="grid gap-1.5 leading-none">
// // //               <Label
// // //                 htmlFor="consent"
// // //                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// // //               >
// // //                 I agree to receive early access updates and acknowledge the{" "}
// // //                 <Link
// // //                   href="/privacy-policy"
// // //                   className="underline hover:text-primary"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                 >
// // //                   Privacy Policy
// // //                 </Link>
// // //                 . (Required)
// // //               </Label>
// // //               {(form.formState.errors.consent ?? state.errors?.consent) && (
// // //                 <p className="text-sm text-destructive">
// // //                   {form.formState.errors.consent?.message ||
// // //                     state.errors?.consent?.join(", ")}
// // //                 </p>
// // //               )}
// // //             </div>
// // //           </div>

// // //           <SubmitButton />
// // //         </motion.form>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useFormStatus } from "react-dom";
// // import { useActionState } from "react";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { useForm } from "react-hook-form";
// // import { z } from "zod";
// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Checkbox } from "@/components/ui/checkbox";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import { useToast } from "@/hooks/use-toast";
// // import { joinWaitlistAction, type WaitlistFormState } from "@/lib/actions";
// // import {
// //   Mail,
// //   User,
// //   Send,
// //   Briefcase,
// //   MessageSquare,
// //   Users,
// //   Loader2,
// //   Link as LinkIcon,
// //   Handshake,
// // } from "lucide-react";

// // const WaitlistSchema = z.object({
// //   name: z.string().min(1, { message: "Name is required." }),
// //   email: z.string().email({ message: "Invalid email address." }),
// //   roleOrInterest: z.string().min(1, { message: "Please select your role." }),
// //   reasonForJoining: z.string().optional().or(z.literal("")),
// //   consent: z.preprocess(
// //     (val) => val === "on" || val === true,
// //     z.boolean().refine((value) => value === true, {
// //       message:
// //         "You must agree to receive updates and acknowledge the privacy policy.",
// //     })
// //   ),
// // });

// // const CollaborateSchema = z.object({
// //   name: z.string().min(1, { message: "Name is required." }),
// //   email: z.string().email({ message: "Invalid email address." }),
// //   linkedin: z.string().url({ message: "Please enter a valid LinkedIn URL." }),
// //   reason: z
// //     .string()
// //     .min(10, {
// //       message: "Please provide a detailed reason (at least 10 characters).",
// //     }),
// // });

// // type WaitlistFormData = z.infer<typeof WaitlistSchema>;
// // type CollaborateFormData = z.infer<typeof CollaborateSchema>;

// // function SubmitButton() {
// //   const { pending } = useFormStatus();
// //   return (
// //     <Button
// //       type="submit"
// //       disabled={pending}
// //       className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
// //     >
// //       {pending ? (
// //         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
// //       ) : (
// //         <Send className="mr-2 h-5 w-5" />
// //       )}
// //       Join Waitlist
// //     </Button>
// //   );
// // }

// // function CollaborateSubmitButton() {
// //   const { pending } = useFormStatus();
// //   return (
// //     <Button
// //       type="submit"
// //       disabled={pending}
// //       className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
// //     >
// //       {pending ? (
// //         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
// //       ) : (
// //         <Handshake className="mr-2 h-5 w-5" />
// //       )}
// //       Submit Collaboration Request
// //     </Button>
// //   );
// // }

// // export default function JoinWaitlistPage() {
// //   const { toast } = useToast();
// //   const [isCollaborateOpen, setIsCollaborateOpen] = useState(false);

// //   const initialState: WaitlistFormState = {
// //     message: "",
// //     success: false,
// //     errors: {},
// //   };
// //   const [state, formAction] = useActionState(joinWaitlistAction, initialState);

// //   const waitlistForm = useForm<WaitlistFormData>({
// //     resolver: zodResolver(WaitlistSchema),
// //     defaultValues: {
// //       name: "",
// //       email: "",
// //       roleOrInterest: "",
// //       reasonForJoining: "",
// //       consent: true,
// //     },
// //   });

// //   const collaborateForm = useForm<CollaborateFormData>({
// //     resolver: zodResolver(CollaborateSchema),
// //     defaultValues: {
// //       name: "",
// //       email: "",
// //       linkedin: "",
// //       reason: "",
// //     },
// //   });

// //   useEffect(() => {
// //     if (state.message) {
// //       if (state.success) {
// //         toast({
// //           title: "Success!",
// //           description: state.message,
// //         });
// //         waitlistForm.reset();
// //       } else {
// //         toast({
// //           title: "Error",
// //           description: state.message || "Something went wrong.",
// //           variant: "destructive",
// //         });
// //       }
// //     }
// //   }, [state, toast, waitlistForm]);

// //   useEffect(() => {
// //     if (state.errors?.name)
// //       waitlistForm.setError("name", {
// //         type: "server",
// //         message: state.errors.name.join(", "),
// //       });
// //     if (state.errors?.email)
// //       waitlistForm.setError("email", {
// //         type: "server",
// //         message: state.errors.email.join(", "),
// //       });
// //     if (state.errors?.roleOrInterest)
// //       waitlistForm.setError("roleOrInterest", {
// //         type: "server",
// //         message: state.errors.roleOrInterest.join(", "),
// //       });
// //     if (state.errors?.reasonForJoining)
// //       waitlistForm.setError("reasonForJoining", {
// //         type: "server",
// //         message: state.errors.reasonForJoining.join(", "),
// //       });
// //     if (state.errors?.consent)
// //       waitlistForm.setError("consent", {
// //         type: "server",
// //         message: state.errors.consent.join(", "),
// //       });
// //   }, [state.errors, waitlistForm]);

// //   const handleCollaborateSubmit = async (data: CollaborateFormData) => {
// //     // Here you would typically send the data to your backend
// //     console.log("Collaboration request:", data);

// //     toast({
// //       title: "Collaboration Request Sent!",
// //       description:
// //         "We'll get back to you soon to discuss potential collaboration opportunities.",
// //     });

// //     collaborateForm.reset();
// //     setIsCollaborateOpen(false);
// //   };

// //   const roleOptions = [
// //     "Founder",
// //     "Co-Founder",
// //     "Student (aspiring entrepreneur)",
// //     "Mentor",
// //     "Investor",
// //     "Team Builder / Collaborator",
// //     "Just exploring",
// //   ];

// //   return (
// //     <div className="bg-background text-foreground min-h-screen py-16 md:py-24 flex flex-col items-center justify-center">
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl"
// //       >
// //         <header className="text-center mb-10">
// //           <Users className="mx-auto h-16 w-16 text-primary mb-6" />
// //           <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
// //             Build the Future Together
// //           </h1>
// //           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
// //             Join our waitlist for{" "}
// //             <span className="font-semibold">co-founder matching</span>,{" "}
// //             <span className="font-semibold">mentorship</span>, and{" "}
// //             <span className="font-semibold">team building</span>. Get early
// //             access and be part of the startup revolution.
// //           </p>

// //           {/* Collaborate With Us Button */}
// //           <div className="mt-8">
// //             <Dialog
// //               open={isCollaborateOpen}
// //               onOpenChange={setIsCollaborateOpen}
// //             >
// //               <DialogTrigger asChild>
// //                 <Button
// //                   variant="outline"
// //                   className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
// //                 >
// //                   <Handshake className="mr-2 h-5 w-5" />
// //                   Collaborate With Us
// //                 </Button>
// //               </DialogTrigger>
// //               <DialogContent className="sm:max-w-[500px]">
// //                 <DialogHeader>
// //                   <DialogTitle className="flex items-center gap-2">
// //                     <Handshake className="h-6 w-6 text-primary" />
// //                     Collaborate With CollabForge
// //                   </DialogTitle>
// //                   <DialogDescription>
// //                     Tell us about your collaboration interests and we'll get
// //                     back to you soon.
// //                   </DialogDescription>
// //                 </DialogHeader>

// //                 <form
// //                   onSubmit={collaborateForm.handleSubmit(
// //                     handleCollaborateSubmit
// //                   )}
// //                   className="space-y-4 mt-4"
// //                 >
// //                   {/* Name */}
// //                   <div>
// //                     <Label htmlFor="collab-name" className="text-foreground/80">
// //                       Your Name (Required)
// //                     </Label>
// //                     <Input
// //                       id="collab-name"
// //                       type="text"
// //                       {...collaborateForm.register("name")}
// //                       placeholder="e.g. Ada Lovelace"
// //                       className="mt-1"
// //                     />
// //                     {collaborateForm.formState.errors.name && (
// //                       <p className="mt-1 text-sm text-destructive">
// //                         {collaborateForm.formState.errors.name.message}
// //                       </p>
// //                     )}
// //                   </div>

// //                   {/* Email */}
// //                   <div>
// //                     <Label
// //                       htmlFor="collab-email"
// //                       className="text-foreground/80"
// //                     >
// //                       Email Address (Required)
// //                     </Label>
// //                     <Input
// //                       id="collab-email"
// //                       type="email"
// //                       {...collaborateForm.register("email")}
// //                       placeholder="you@example.com"
// //                       className="mt-1"
// //                     />
// //                     {collaborateForm.formState.errors.email && (
// //                       <p className="mt-1 text-sm text-destructive">
// //                         {collaborateForm.formState.errors.email.message}
// //                       </p>
// //                     )}
// //                   </div>

// //                   {/* LinkedIn Profile */}
// //                   <div>
// //                     <Label
// //                       htmlFor="linkedin"
// //                       className="text-foreground/80 flex items-center"
// //                     >
// //                       <LinkIcon className="mr-2 h-4 w-4 text-muted-foreground" />
// //                       LinkedIn Profile URL (Required)
// //                     </Label>
// //                     <Input
// //                       id="linkedin"
// //                       type="url"
// //                       {...collaborateForm.register("linkedin")}
// //                       placeholder="https://linkedin.com/in/yourprofile"
// //                       className="mt-1"
// //                     />
// //                     {collaborateForm.formState.errors.linkedin && (
// //                       <p className="mt-1 text-sm text-destructive">
// //                         {collaborateForm.formState.errors.linkedin.message}
// //                       </p>
// //                     )}
// //                   </div>

// //                   {/* Why Collaborate */}
// //                   <div>
// //                     <Label htmlFor="reason" className="text-foreground/80">
// //                       Why do you want to collaborate with us? (Required)
// //                     </Label>
// //                     <Textarea
// //                       id="reason"
// //                       {...collaborateForm.register("reason")}
// //                       placeholder="Tell us about your collaboration ideas, partnership opportunities, or how you'd like to work with CollabForge..."
// //                       className="mt-1 min-h-[120px]"
// //                     />
// //                     {collaborateForm.formState.errors.reason && (
// //                       <p className="mt-1 text-sm text-destructive">
// //                         {collaborateForm.formState.errors.reason.message}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <CollaborateSubmitButton />
// //                 </form>
// //               </DialogContent>
// //             </Dialog>
// //           </div>
// //         </header>

// //         <motion.form
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.2, duration: 0.5 }}
// //           action={formAction}
// //           className="space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-2xl"
// //           onSubmit={(evt) => {
// //             waitlistForm.handleSubmit(() => {
// //               // RHF validation runs, then native form submission proceeds
// //             })(evt);
// //           }}
// //         >
// //           {/* Name */}
// //           <div>
// //             <Label
// //               htmlFor="name"
// //               className="text-foreground/80 flex items-center"
// //             >
// //               <User className="mr-2 h-4 w-4 text-muted-foreground" />
// //               Your Name (Required)
// //             </Label>
// //             <Input
// //               id="name"
// //               type="text"
// //               {...waitlistForm.register("name")}
// //               placeholder="e.g. Ada Lovelace"
// //               className="mt-1"
// //               aria-invalid={
// //                 !!waitlistForm.formState.errors.name || !!state.errors?.name
// //               }
// //               required
// //             />
// //             {(waitlistForm.formState.errors.name ?? state.errors?.name) && (
// //               <p className="mt-1 text-sm text-destructive">
// //                 {waitlistForm.formState.errors.name?.message ||
// //                   state.errors?.name?.join(", ")}
// //               </p>
// //             )}
// //           </div>

// //           {/* Email */}
// //           <div>
// //             <Label
// //               htmlFor="email"
// //               className="text-foreground/80 flex items-center"
// //             >
// //               <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
// //               Email Address (Required)
// //             </Label>
// //             <Input
// //               id="email"
// //               type="email"
// //               {...waitlistForm.register("email")}
// //               placeholder="you@example.com"
// //               className="mt-1"
// //               aria-invalid={
// //                 !!waitlistForm.formState.errors.email || !!state.errors?.email
// //               }
// //               required
// //             />
// //             {(waitlistForm.formState.errors.email ?? state.errors?.email) && (
// //               <p className="mt-1 text-sm text-destructive">
// //                 {waitlistForm.formState.errors.email?.message ||
// //                   state.errors?.email?.join(", ")}
// //               </p>
// //             )}
// //           </div>

// //           {/* Role */}
// //           <div>
// //             <Label
// //               htmlFor="roleOrInterest"
// //               className="text-foreground/80 flex items-center"
// //             >
// //               <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />I am
// //               a... (Required)
// //             </Label>
// //             <Select
// //               onValueChange={(value) =>
// //                 waitlistForm.setValue("roleOrInterest", value)
// //               }
// //               defaultValue={waitlistForm.getValues("roleOrInterest")}
// //               name="roleOrInterest"
// //               required
// //             >
// //               <SelectTrigger id="roleOrInterest" className="mt-1">
// //                 <SelectValue placeholder="Select your role or interest" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 {roleOptions.map((option) => (
// //                   <SelectItem key={option} value={option}>
// //                     {option}
// //                   </SelectItem>
// //                 ))}
// //               </SelectContent>
// //             </Select>
// //             {(waitlistForm.formState.errors.roleOrInterest ??
// //               state.errors?.roleOrInterest) && (
// //               <p className="mt-1 text-sm text-destructive">
// //                 {waitlistForm.formState.errors.roleOrInterest?.message ||
// //                   state.errors?.roleOrInterest?.join(", ")}
// //               </p>
// //             )}
// //           </div>

// //           {/* Why joining */}
// //           <div>
// //             <Label
// //               htmlFor="reasonForJoining"
// //               className="text-foreground/80 flex items-center"
// //             >
// //               <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
// //               What are you looking for? (Optional)
// //             </Label>
// //             <Textarea
// //               id="reasonForJoining"
// //               {...waitlistForm.register("reasonForJoining")}
// //               placeholder="e.g. Find a co-founder, get mentorship, join a startup team..."
// //               className="mt-1 min-h-[100px]"
// //               aria-invalid={
// //                 !!waitlistForm.formState.errors.reasonForJoining ||
// //                 !!state.errors?.reasonForJoining
// //               }
// //             />
// //             {(waitlistForm.formState.errors.reasonForJoining ??
// //               state.errors?.reasonForJoining) && (
// //               <p className="mt-1 text-sm text-destructive">
// //                 {waitlistForm.formState.errors.reasonForJoining?.message ||
// //                   state.errors?.reasonForJoining?.join(", ")}
// //               </p>
// //             )}
// //           </div>

// //           {/* Consent */}
// //           <div className="items-top flex space-x-2">
// //             <Checkbox
// //               id="consent"
// //               name="consent"
// //               checked={waitlistForm.watch("consent")}
// //               onCheckedChange={(checked) =>
// //                 waitlistForm.setValue("consent", !!checked, {
// //                   shouldValidate: true,
// //                 })
// //               }
// //               aria-invalid={
// //                 !!waitlistForm.formState.errors.consent ||
// //                 !!state.errors?.consent
// //               }
// //             />
// //             <div className="grid gap-1.5 leading-none">
// //               <Label
// //                 htmlFor="consent"
// //                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// //               >
// //                 I agree to receive early access updates and acknowledge the{" "}
// //                 <Link
// //                   href="/privacy-policy"
// //                   className="underline hover:text-primary"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Privacy Policy
// //                 </Link>
// //                 . (Required)
// //               </Label>
// //               {(waitlistForm.formState.errors.consent ??
// //                 state.errors?.consent) && (
// //                 <p className="text-sm text-destructive">
// //                   {waitlistForm.formState.errors.consent?.message ||
// //                     state.errors?.consent?.join(", ")}
// //                 </p>
// //               )}
// //             </div>
// //           </div>

// //           <SubmitButton />
// //         </motion.form>
// //       </motion.div>
// //     </div>
// //   );
// // }

// "use client";

// import { useFormStatus } from "react-dom";
// import { useActionState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { useToast } from "@/hooks/use-toast";
// import { joinWaitlistAction, type WaitlistFormState } from "@/lib/actions";
// import {
//   Mail,
//   User,
//   Send,
//   Briefcase,
//   MessageSquare,
//   Users,
//   Loader2,
//   Link as LinkIcon,
//   Handshake,
// } from "lucide-react";

// const WaitlistSchema = z.object({
//   name: z.string().min(1, { message: "Name is required." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   roleOrInterest: z.string().min(1, { message: "Please select your role." }),
//   reasonForJoining: z.string().optional().or(z.literal("")),
//   consent: z.preprocess(
//     (val) => val === "on" || val === true,
//     z.boolean().refine((value) => value === true, {
//       message:
//         "You must agree to receive updates and acknowledge the privacy policy.",
//     })
//   ),
// });

// const CollaborateSchema = z.object({
//   name: z.string().min(1, { message: "Name is required." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   linkedin: z.string().url({ message: "Please enter a valid LinkedIn URL." }),
//   reason: z
//     .string()
//     .min(10, {
//       message: "Please provide a detailed reason (at least 10 characters).",
//     }),
// });

// type WaitlistFormData = z.infer<typeof WaitlistSchema>;
// type CollaborateFormData = z.infer<typeof CollaborateSchema>;

// function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <Button
//       type="submit"
//       disabled={pending}
//       className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
//     >
//       {pending ? (
//         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//       ) : (
//         <Send className="mr-2 h-5 w-5" />
//       )}
//       Join Waitlist
//     </Button>
//   );
// }

// function CollaborateSubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <Button
//       type="submit"
//       disabled={pending}
//       className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//     >
//       {pending ? (
//         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//       ) : (
//         <Handshake className="mr-2 h-5 w-5" />
//       )}
//       Submit Collaboration Request
//     </Button>
//   );
// }

// export default function JoinWaitlistPage() {
//   const { toast } = useToast();
//   const [isCollaborateOpen, setIsCollaborateOpen] = useState(false);
//   const [isCollaborateSubmitting, setIsCollaborateSubmitting] = useState(false);

//   const initialState: WaitlistFormState = {
//     message: "",
//     success: false,
//     errors: {},
//   };
//   const [state, formAction] = useActionState(joinWaitlistAction, initialState);

//   const waitlistForm = useForm<WaitlistFormData>({
//     resolver: zodResolver(WaitlistSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       roleOrInterest: "",
//       reasonForJoining: "",
//       consent: true,
//     },
//   });

//   const collaborateForm = useForm<CollaborateFormData>({
//     resolver: zodResolver(CollaborateSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       linkedin: "",
//       reason: "",
//     },
//   });

//   // Toast for waitlist form submission
//   useEffect(() => {
//     if (state.message) {
//       if (state.success) {
//         toast({
//           title: "🎉 Welcome to the Waitlist!",
//           description:
//             "Thank you for joining CollabForge. We'll notify you when we launch!",
//           duration: 5000,
//         });
//         waitlistForm.reset();
//       } else {
//         toast({
//           title: "❌ Submission Failed",
//           description:
//             state.message || "Please check your information and try again.",
//           variant: "destructive",
//           duration: 5000,
//         });
//       }
//     }
//   }, [state, toast, waitlistForm]);

//   useEffect(() => {
//     if (state.errors?.name)
//       waitlistForm.setError("name", {
//         type: "server",
//         message: state.errors.name.join(", "),
//       });
//     if (state.errors?.email)
//       waitlistForm.setError("email", {
//         type: "server",
//         message: state.errors.email.join(", "),
//       });
//     if (state.errors?.roleOrInterest)
//       waitlistForm.setError("roleOrInterest", {
//         type: "server",
//         message: state.errors.roleOrInterest.join(", "),
//       });
//     if (state.errors?.reasonForJoining)
//       waitlistForm.setError("reasonForJoining", {
//         type: "server",
//         message: state.errors.reasonForJoining.join(", "),
//       });
//     if (state.errors?.consent)
//       waitlistForm.setError("consent", {
//         type: "server",
//         message: state.errors.consent.join(", "),
//       });
//   }, [state.errors, waitlistForm]);

//   const handleCollaborateSubmit = async (data: CollaborateFormData) => {
//     setIsCollaborateSubmitting(true);

//     try {
//       // Simulate API call delay
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Here you would typically send the data to your backend
//       console.log("Collaboration request:", data);

//       toast({
//         title: "🤝 Collaboration Request Sent!",
//         description:
//           "We've received your request and will get back to you within 2 business days.",
//         duration: 6000,
//       });

//       collaborateForm.reset();
//       setIsCollaborateOpen(false);
//     } catch (error) {
//       toast({
//         title: "❌ Submission Failed",
//         description:
//           "There was an error submitting your request. Please try again.",
//         variant: "destructive",
//         duration: 5000,
//       });
//     } finally {
//       setIsCollaborateSubmitting(false);
//     }
//   };

//   const handleWaitlistSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
//     evt.preventDefault();

//     // Client-side validation before server action
//     waitlistForm.handleSubmit(() => {
//       // Show submitting toast
//       toast({
//         title: "⏳ Processing...",
//         description: "Submitting your waitlist application...",
//         duration: 2000,
//       });

//       // Proceed with server action
//       formAction(new FormData(evt.currentTarget));
//     })(evt);
//   };

//   const roleOptions = [
//     "Founder",
//     "Co-Founder",
//     "Student (aspiring entrepreneur)",
//     "Mentor",
//     "Investor",
//     "Team Builder / Collaborator",
//     "Just exploring",
//   ];

//   return (
//     <div className="bg-background text-foreground min-h-screen py-16 md:py-24 flex flex-col items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl"
//       >
//         <header className="text-center mb-10">
//           <Users className="mx-auto h-16 w-16 text-primary mb-6" />
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
//             Build the Future Together
//           </h1>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Join our waitlist for{" "}
//             <span className="font-semibold">co-founder matching</span>,{" "}
//             <span className="font-semibold">mentorship</span>, and{" "}
//             <span className="font-semibold">team building</span>. Get early
//             access and be part of the startup revolution.
//           </p>

//           {/* Collaborate With Us Button */}
//           <div className="mt-8">
//             <Dialog
//               open={isCollaborateOpen}
//               onOpenChange={setIsCollaborateOpen}
//             >
//               <DialogTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//                 >
//                   <Handshake className="mr-2 h-5 w-5" />
//                   Collaborate With Us
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-[500px]">
//                 <DialogHeader>
//                   <DialogTitle className="flex items-center gap-2">
//                     <Handshake className="h-6 w-6 text-primary" />
//                     Collaborate With CollabForge
//                   </DialogTitle>
//                   <DialogDescription>
//                     Tell us about your collaboration interests and we'll get
//                     back to you soon.
//                   </DialogDescription>
//                 </DialogHeader>

//                 <form
//                   onSubmit={collaborateForm.handleSubmit(
//                     handleCollaborateSubmit
//                   )}
//                   className="space-y-4 mt-4"
//                 >
//                   {/* Name */}
//                   <div>
//                     <Label htmlFor="collab-name" className="text-foreground/80">
//                       Your Name (Required)
//                     </Label>
//                     <Input
//                       id="collab-name"
//                       type="text"
//                       {...collaborateForm.register("name")}
//                       placeholder="e.g. Ada Lovelace"
//                       className="mt-1"
//                       disabled={isCollaborateSubmitting}
//                     />
//                     {collaborateForm.formState.errors.name && (
//                       <p className="mt-1 text-sm text-destructive">
//                         {collaborateForm.formState.errors.name.message}
//                       </p>
//                     )}
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <Label
//                       htmlFor="collab-email"
//                       className="text-foreground/80"
//                     >
//                       Email Address (Required)
//                     </Label>
//                     <Input
//                       id="collab-email"
//                       type="email"
//                       {...collaborateForm.register("email")}
//                       placeholder="you@example.com"
//                       className="mt-1"
//                       disabled={isCollaborateSubmitting}
//                     />
//                     {collaborateForm.formState.errors.email && (
//                       <p className="mt-1 text-sm text-destructive">
//                         {collaborateForm.formState.errors.email.message}
//                       </p>
//                     )}
//                   </div>

//                   {/* LinkedIn Profile */}
//                   <div>
//                     <Label
//                       htmlFor="linkedin"
//                       className="text-foreground/80 flex items-center"
//                     >
//                       <LinkIcon className="mr-2 h-4 w-4 text-muted-foreground" />
//                       LinkedIn Profile URL (Required)
//                     </Label>
//                     <Input
//                       id="linkedin"
//                       type="url"
//                       {...collaborateForm.register("linkedin")}
//                       placeholder="https://linkedin.com/in/yourprofile"
//                       className="mt-1"
//                       disabled={isCollaborateSubmitting}
//                     />
//                     {collaborateForm.formState.errors.linkedin && (
//                       <p className="mt-1 text-sm text-destructive">
//                         {collaborateForm.formState.errors.linkedin.message}
//                       </p>
//                     )}
//                   </div>

//                   {/* Why Collaborate */}
//                   <div>
//                     <Label htmlFor="reason" className="text-foreground/80">
//                       Why do you want to collaborate with us? (Required)
//                     </Label>
//                     <Textarea
//                       id="reason"
//                       {...collaborateForm.register("reason")}
//                       placeholder="Tell us about your collaboration ideas, partnership opportunities, or how you'd like to work with CollabForge..."
//                       className="mt-1 min-h-[120px]"
//                       disabled={isCollaborateSubmitting}
//                     />
//                     {collaborateForm.formState.errors.reason && (
//                       <p className="mt-1 text-sm text-destructive">
//                         {collaborateForm.formState.errors.reason.message}
//                       </p>
//                     )}
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={isCollaborateSubmitting}
//                     className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
//                   >
//                     {isCollaborateSubmitting ? (
//                       <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                     ) : (
//                       <Handshake className="mr-2 h-5 w-5" />
//                     )}
//                     {isCollaborateSubmitting
//                       ? "Submitting..."
//                       : "Submit Collaboration Request"}
//                   </Button>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </header>

//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           action={formAction}
//           className="space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-2xl"
//           onSubmit={handleWaitlistSubmit}
//         >
//           {/* Name */}
//           <div>
//             <Label
//               htmlFor="name"
//               className="text-foreground/80 flex items-center"
//             >
//               <User className="mr-2 h-4 w-4 text-muted-foreground" />
//               Your Name (Required)
//             </Label>
//             <Input
//               id="name"
//               type="text"
//               {...waitlistForm.register("name")}
//               placeholder="e.g. Ada Lovelace"
//               className="mt-1"
//               aria-invalid={
//                 !!waitlistForm.formState.errors.name || !!state.errors?.name
//               }
//               required
//             />
//             {(waitlistForm.formState.errors.name ?? state.errors?.name) && (
//               <p className="mt-1 text-sm text-destructive">
//                 {waitlistForm.formState.errors.name?.message ||
//                   state.errors?.name?.join(", ")}
//               </p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <Label
//               htmlFor="email"
//               className="text-foreground/80 flex items-center"
//             >
//               <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
//               Email Address (Required)
//             </Label>
//             <Input
//               id="email"
//               type="email"
//               {...waitlistForm.register("email")}
//               placeholder="you@example.com"
//               className="mt-1"
//               aria-invalid={
//                 !!waitlistForm.formState.errors.email || !!state.errors?.email
//               }
//               required
//             />
//             {(waitlistForm.formState.errors.email ?? state.errors?.email) && (
//               <p className="mt-1 text-sm text-destructive">
//                 {waitlistForm.formState.errors.email?.message ||
//                   state.errors?.email?.join(", ")}
//               </p>
//             )}
//           </div>

//           {/* Role */}
//           <div>
//             <Label
//               htmlFor="roleOrInterest"
//               className="text-foreground/80 flex items-center"
//             >
//               <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />I am
//               a... (Required)
//             </Label>
//             <Select
//               onValueChange={(value) =>
//                 waitlistForm.setValue("roleOrInterest", value)
//               }
//               defaultValue={waitlistForm.getValues("roleOrInterest")}
//               name="roleOrInterest"
//               required
//             >
//               <SelectTrigger id="roleOrInterest" className="mt-1">
//                 <SelectValue placeholder="Select your role or interest" />
//               </SelectTrigger>
//               <SelectContent>
//                 {roleOptions.map((option) => (
//                   <SelectItem key={option} value={option}>
//                     {option}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             {(waitlistForm.formState.errors.roleOrInterest ??
//               state.errors?.roleOrInterest) && (
//               <p className="mt-1 text-sm text-destructive">
//                 {waitlistForm.formState.errors.roleOrInterest?.message ||
//                   state.errors?.roleOrInterest?.join(", ")}
//               </p>
//             )}
//           </div>

//           {/* Why joining */}
//           <div>
//             <Label
//               htmlFor="reasonForJoining"
//               className="text-foreground/80 flex items-center"
//             >
//               <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
//               What are you looking for? (Optional)
//             </Label>
//             <Textarea
//               id="reasonForJoining"
//               {...waitlistForm.register("reasonForJoining")}
//               placeholder="e.g. Find a co-founder, get mentorship, join a startup team..."
//               className="mt-1 min-h-[100px]"
//               aria-invalid={
//                 !!waitlistForm.formState.errors.reasonForJoining ||
//                 !!state.errors?.reasonForJoining
//               }
//             />
//             {(waitlistForm.formState.errors.reasonForJoining ??
//               state.errors?.reasonForJoining) && (
//               <p className="mt-1 text-sm text-destructive">
//                 {waitlistForm.formState.errors.reasonForJoining?.message ||
//                   state.errors?.reasonForJoining?.join(", ")}
//               </p>
//             )}
//           </div>

//           {/* Consent */}
//           <div className="items-top flex space-x-2">
//             <Checkbox
//               id="consent"
//               name="consent"
//               checked={waitlistForm.watch("consent")}
//               onCheckedChange={(checked) =>
//                 waitlistForm.setValue("consent", !!checked, {
//                   shouldValidate: true,
//                 })
//               }
//               aria-invalid={
//                 !!waitlistForm.formState.errors.consent ||
//                 !!state.errors?.consent
//               }
//             />
//             <div className="grid gap-1.5 leading-none">
//               <Label
//                 htmlFor="consent"
//                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 I agree to receive early access updates and acknowledge the{" "}
//                 <Link
//                   href="/privacy-policy"
//                   className="underline hover:text-primary"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Privacy Policy
//                 </Link>
//                 . (Required)
//               </Label>
//               {(waitlistForm.formState.errors.consent ??
//                 state.errors?.consent) && (
//                 <p className="text-sm text-destructive">
//                   {waitlistForm.formState.errors.consent?.message ||
//                     state.errors?.consent?.join(", ")}
//                 </p>
//               )}
//             </div>
//           </div>

//           <SubmitButton />
//         </motion.form>
//       </motion.div>
//     </div>
//   );
// }

/* form submit */
"use client";

import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  User,
  Send,
  Briefcase,
  MessageSquare,
  Users,
  Loader2,
  Link as LinkIcon,
  Handshake,
} from "lucide-react";

const WaitlistSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  roleOrInterest: z.string().min(1, { message: "Please select your role." }),
  reasonForJoining: z.string().optional().or(z.literal("")),
  consent: z.preprocess(
    (val) => val === "on" || val === true,
    z.boolean().refine((value) => value === true, {
      message:
        "You must agree to receive updates and acknowledge the privacy policy.",
    })
  ),
});

const CollaborateSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  linkedin: z.string().url({ message: "Please enter a valid LinkedIn URL." }),
  reason: z.string().min(10, {
    message: "Please provide a detailed reason (at least 10 characters).",
  }),
});

type WaitlistFormData = z.infer<typeof WaitlistSchema>;
type CollaborateFormData = z.infer<typeof CollaborateSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
    >
      {pending ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <Send className="mr-2 h-5 w-5" />
      )}
      Join Waitlist
    </Button>
  );
}

export default function JoinWaitlistPage() {
  const { toast } = useToast();
  const [isCollaborateOpen, setIsCollaborateOpen] = useState(false);
  const [isCollaborateSubmitting, setIsCollaborateSubmitting] = useState(false);
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false);

  const waitlistForm = useForm<WaitlistFormData>({
    resolver: zodResolver(WaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      roleOrInterest: "",
      reasonForJoining: "",
      consent: true,
    },
  });

  const collaborateForm = useForm<CollaborateFormData>({
    resolver: zodResolver(CollaborateSchema),
    defaultValues: {
      name: "",
      email: "",
      linkedin: "",
      reason: "",
    },
  });

  // ✅ FormSubmit endpoint
  const formSubmitURL =
    "https://formsubmit.co/ajax/mickey.extrastorage@gmail.com";

  const handleWaitlistSubmit = async (data: WaitlistFormData) => {
    setIsWaitlistSubmitting(true);
    try {
      const res = await fetch(formSubmitURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "🚀 New Waitlist Signup",
        }),
      });

      const response = await res.json();

      if (res.ok && response.success) {
        toast({
          title: "🎉 Welcome to the Waitlist!",
          description:
            "Thank you for joining! We'll notify you when we launch.",
          duration: 5000,
        });
        waitlistForm.reset();
      } else {
        toast({
          title: "❌ Submission Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "⚠️ Network Error",
        description: "Check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsWaitlistSubmitting(false);
    }
  };

  const handleCollaborateSubmit = async (data: CollaborateFormData) => {
    setIsCollaborateSubmitting(true);

    try {
      const res = await fetch(formSubmitURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "🤝 New Collaboration Request",
        }),
      });

      const response = await res.json();

      if (res.ok && response.success) {
        toast({
          title: "✅ Collaboration Request Sent!",
          description:
            "We've received your request and will get back to you soon.",
          duration: 6000,
        });
        collaborateForm.reset();
        setIsCollaborateOpen(false);
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
        description: "Check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsCollaborateSubmitting(false);
    }
  };

  const roleOptions = [
    "Founder",
    "Co-Founder",
    "Student (aspiring entrepreneur)",
    "Mentor",
    "Investor",
    "Team Builder / Collaborator",
    "Just exploring",
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-16 md:py-24 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl"
      >
        <header className="text-center mb-10">
          <Users className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
            Build the Future Together
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our waitlist for{" "}
            <span className="font-semibold">co-founder matching</span>,{" "}
            <span className="font-semibold">mentorship</span>, and{" "}
            <span className="font-semibold">team building</span>. Get early
            access and be part of the startup revolution.
          </p>

          {/* Collaborate With Us */}
          <div className="mt-8">
            <Dialog
              open={isCollaborateOpen}
              onOpenChange={setIsCollaborateOpen}
            >
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Handshake className="mr-2 h-5 w-5" />
                  Collaborate With Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Handshake className="h-6 w-6 text-primary" />
                    Collaborate With CollabForge
                  </DialogTitle>
                  <DialogDescription>
                    Tell us about your collaboration interests and we'll get
                    back to you soon.
                  </DialogDescription>
                </DialogHeader>

                <form
                  onSubmit={collaborateForm.handleSubmit(
                    handleCollaborateSubmit
                  )}
                  className="space-y-4 mt-4"
                >
                  {/* Name */}
                  <div>
                    <Label>Your Name</Label>
                    <Input
                      type="text"
                      {...collaborateForm.register("name")}
                      placeholder="e.g. Ada Lovelace"
                      disabled={isCollaborateSubmitting}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label>Email Address</Label>
                    <Input
                      type="email"
                      {...collaborateForm.register("email")}
                      placeholder="you@example.com"
                      disabled={isCollaborateSubmitting}
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <Label>LinkedIn Profile URL</Label>
                    <Input
                      type="url"
                      {...collaborateForm.register("linkedin")}
                      placeholder="https://linkedin.com/in/yourprofile"
                      disabled={isCollaborateSubmitting}
                    />
                  </div>

                  {/* Reason */}
                  <div>
                    <Label>Why collaborate?</Label>
                    <Textarea
                      {...collaborateForm.register("reason")}
                      placeholder="Tell us about your collaboration ideas..."
                      className="min-h-[120px]"
                      disabled={isCollaborateSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isCollaborateSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isCollaborateSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Handshake className="mr-2 h-5 w-5" />
                    )}
                    {isCollaborateSubmitting
                      ? "Submitting..."
                      : "Submit Collaboration Request"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        {/* Waitlist Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={waitlistForm.handleSubmit(handleWaitlistSubmit)}
          className="space-y-6 bg-card p-6 md:p-8 rounded-xl shadow-2xl"
        >
          {/* Name */}
          <div>
            <Label>Your Name</Label>
            <Input
              type="text"
              {...waitlistForm.register("name")}
              placeholder="e.g. Ada Lovelace"
              required
            />
          </div>

          {/* Email */}
          <div>
            <Label>Email Address</Label>
            <Input
              type="email"
              {...waitlistForm.register("email")}
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Role */}
          <div>
            <Label>I am a...</Label>
            <Select
              onValueChange={(value) =>
                waitlistForm.setValue("roleOrInterest", value)
              }
              defaultValue={waitlistForm.getValues("roleOrInterest")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your role or interest" />
              </SelectTrigger>
              <SelectContent>
                {roleOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Why joining */}
          <div>
            <Label>What are you looking for?</Label>
            <Textarea
              {...waitlistForm.register("reasonForJoining")}
              placeholder="e.g. Find a co-founder, get mentorship..."
              className="min-h-[100px]"
            />
          </div>

          {/* Consent */}
          <div className="flex space-x-2 items-center">
            <Checkbox
              checked={waitlistForm.watch("consent")}
              onCheckedChange={(checked) =>
                waitlistForm.setValue("consent", !!checked)
              }
            />
            <Label className="text-sm">
              I agree to receive early access updates and acknowledge the{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-primary"
                target="_blank"
              >
                Privacy Policy
              </Link>
              .
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isWaitlistSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isWaitlistSubmitting ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Send className="mr-2 h-5 w-5" />
            )}
            {isWaitlistSubmitting ? "Submitting..." : "Join Waitlist"}
          </Button>
        </motion.form>
      </motion.div>
    </div>
  );
}
