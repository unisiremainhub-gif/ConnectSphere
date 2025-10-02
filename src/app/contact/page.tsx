// 'use client';

// import React from 'react';
// import { useFormStatus } from 'react-dom';
// import { useActionState } from 'react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { motion } from 'framer-motion';
// import { Mail, User, MessageSquareIcon, Send, Phone, MapPin, Briefcase, Clock, HelpCircle, Lightbulb, Handshake, Settings, AlertTriangle, Loader2 } from 'lucide-react';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
// import { contactUsAction, type ContactFormState } from '@/lib/actions';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// const ContactFormSchema = z.object({
//   name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
//   email: z.string().email({ message: 'Invalid email address.' }),
//   subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
//   message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
// });

// type ContactFormData = z.infer<typeof ContactFormSchema>;

// function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
//       {pending ? (
//         <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//       ) : (
//         <Send className="mr-2 h-5 w-5" />
//       )}
//       Send Message
//     </Button>
//   );
// }

// export default function ContactPage() {
//   const { toast } = useToast();
//   const initialState: ContactFormState = { message: '', errors: {}, success: false };
//   const [state, formAction] = useActionState(contactUsAction, initialState);

//   const form = useForm<ContactFormData>({
//     resolver: zodResolver(ContactFormSchema),
//     defaultValues: {
//       name: '',
//       email: '',
//       subject: '',
//       message: '',
//     },
//   });

//   React.useEffect(() => {
//     if (state.message) {
//       if (state.success) {
//         toast({
//           title: 'Message Sent!',
//           description: state.message,
//         });
//         form.reset();
//       } else {
//         toast({
//           title: 'Error',
//           description: state.message || 'Something went wrong. Please try again.',
//           variant: 'destructive',
//         });
//       }
//     }
//   }, [state, toast, form]);

//   React.useEffect(() => {
//     if (state.errors?.name) form.setError('name', { type: 'server', message: state.errors.name.join(', ') });
//     if (state.errors?.email) form.setError('email', { type: 'server', message: state.errors.email.join(', ') });
//     if (state.errors?.subject) form.setError('subject', { type: 'server', message: state.errors.subject.join(', ') });
//     if (state.errors?.message) form.setError('message', { type: 'server', message: state.errors.message.join(', ') });
//   }, [state.errors, form]);

//   const contactInfo = [
//     { icon: Mail, text: 'support@collabforge.com', href: 'mailto:support@collabforge.com', label: 'Email Us' },
//     { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567', label: 'Call Us' },
//     { icon: MapPin, text: '123 Innovation Drive, Tech City, CA 94000', href: '#', label: 'Visit Our Office' },
//   ];

//   const helpTopics = [
//     { icon: Lightbulb, text: 'Platform questions and feature inquiries.' },
//     { icon: Handshake, text: 'Partnership opportunities or business collaborations.' },
//     { icon: Settings, text: 'Technical support or reporting issues.' },
//     { icon: AlertTriangle, text: 'Feedback, suggestions, or press relations.' },
//   ];

//   return (
//     <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         <header className="text-center mb-12">
//           <MessageSquareIcon className="mx-auto h-16 w-16 text-primary mb-6" />
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
//             Get in Touch
//           </h1>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             We&apos;re here to help and answer any questions you might have. We look forward to hearing from you! Whether it&apos;s about our platform, partnerships, or just to say hello, drop us a line.
//           </p>
//         </header>

//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.5 }}
//           className="mb-12 p-6 md:p-8 bg-card rounded-xl shadow-xl"
//         >
//           <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
//             <HelpCircle className="h-7 w-7 mr-3 text-primary" /> How Can We Help You Today?
//           </h2>
//           <p className="text-muted-foreground leading-relaxed mb-6">
//             We value your input and are here to assist with any inquiries you may have. Please use the form below for specific questions, or refer to our contact details for direct communication.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {helpTopics.map((topic, index) => (
//               <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 dark:bg-muted/20 rounded-lg">
//                 <topic.icon className="h-5 w-5 text-primary mt-1 shrink-0" />
//                 <p className="text-muted-foreground text-sm">{topic.text}</p>
//               </div>
//             ))}
//           </div>
//         </motion.section>

//         <div className="grid lg:grid-cols-5 gap-10">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="lg:col-span-3"
//           >
//             <Card className="shadow-xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Send us a message</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form action={formAction} className="space-y-6">
//                   <div>
//                     <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
//                     <div className="relative mt-1">
//                       <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                       <Input id="name" {...form.register('name')} placeholder="e.g. Jane Doe" className="pl-10" />
//                     </div>
//                     {form.formState.errors.name && <p className="mt-1 text-sm text-destructive">{form.formState.errors.name.message}</p>}
//                   </div>

//                   <div>
//                     <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
//                     <div className="relative mt-1">
//                       <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                       <Input id="email" type="email" {...form.register('email')} placeholder="you@example.com" className="pl-10" />
//                     </div>
//                     {form.formState.errors.email && <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>}
//                   </div>

//                   <div>
//                     <Label htmlFor="subject" className="text-foreground/80">Subject</Label>
//                     <div className="relative mt-1">
//                       <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
//                       <Input id="subject" {...form.register('subject')} placeholder="e.g. Partnership Inquiry" className="pl-10" />
//                     </div>
//                     {form.formState.errors.subject && <p className="mt-1 text-sm text-destructive">{form.formState.errors.subject.message}</p>}
//                   </div>

//                   <div>
//                     <Label htmlFor="message" className="text-foreground/80">Message</Label>
//                     <Textarea id="message" {...form.register('message')} placeholder="Your message..." className="mt-1 min-h-[120px]" />
//                     {form.formState.errors.message && <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>}
//                   </div>
//                   <SubmitButton />
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="lg:col-span-2"
//           >
//             <Card className="shadow-xl h-full">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Contact Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {contactInfo.map((item) => (
//                   <div key={item.label} className="flex items-start space-x-4">
//                     <item.icon className="h-6 w-6 text-primary mt-1 shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-foreground">{item.label}</h3>
//                       <a
//                         href={item.href}
//                         className="text-muted-foreground hover:text-primary transition-colors"
//                         target={item.href.startsWith('http') || item.href.startsWith('mailto') || item.href.startsWith('tel') ? '_blank' : undefined}
//                         rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                       >
//                         {item.text}
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//                 <div className="mt-8 pt-6 border-t border-border/50">
//                   <div className="flex items-start space-x-4">
//                     <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-foreground">Office Hours</h3>
//                       <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM (PST)</p>
//                       <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
//                       <p className="text-muted-foreground mt-2 text-sm">We typically respond within 24-48 business hours.</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquareIcon,
  Send,
  Briefcase,
  HelpCircle,
  Lightbulb,
  Handshake,
  Settings,
  AlertTriangle,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      {isSubmitting ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <Send className="mr-2 h-5 w-5" />
      )}
      Send Message
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // ✅ Direct Gmail integration (FormSubmit)
  const formSubmitURL =
    "https://formsubmit.co/ajax/mickey.extrastorage@gmail.com";

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch(formSubmitURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _subject: `📩 New Contact Message: ${data.subject}`,
        }),
      });

      const response = await res.json();

      if (res.ok && response.success) {
        toast({
          title: "✅ Message Sent!",
          description: "We will get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "❌ Error",
          description: "Message failed. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "⚠️ Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const helpTopics = [
    { icon: Lightbulb, text: "Platform questions and feature inquiries." },
    {
      icon: Handshake,
      text: "Partnership opportunities or business collaborations.",
    },
    { icon: Settings, text: "Technical support or reporting issues." },
    { icon: AlertTriangle, text: "Feedback, suggestions, or press relations." },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <header className="text-center mb-12">
          <MessageSquareIcon className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apos;re here to help and answer any questions you might have.
            Drop us a line anytime.
          </p>
        </header>

        {/* Help Topics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-12 p-6 md:p-8 bg-card rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center">
            <HelpCircle className="h-7 w-7 mr-3 text-primary" /> How Can We Help
            You Today?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {helpTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg"
              >
                <topic.icon className="h-5 w-5 text-primary mt-1 shrink-0" />
                <p className="text-muted-foreground text-sm">{topic.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form ONLY (Removed Contact Info) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="lg:col-span-3"
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="e.g. Jane Doe"
                      className="pl-10"
                    />
                  </div>
                  {form.formState.errors.name && (
                    <p className="mt-1 text-sm text-destructive">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="you@example.com"
                      className="pl-10"
                    />
                  </div>
                  {form.formState.errors.email && (
                    <p className="mt-1 text-sm text-destructive">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <div className="relative mt-1">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="subject"
                      {...form.register("subject")}
                      placeholder="e.g. Partnership Inquiry"
                      className="pl-10"
                    />
                  </div>
                  {form.formState.errors.subject && (
                    <p className="mt-1 text-sm text-destructive">
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    placeholder="Your message..."
                    className="mt-1 min-h-[120px]"
                  />
                  {form.formState.errors.message && (
                    <p className="mt-1 text-sm text-destructive">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <SubmitButton isSubmitting={isSubmitting} />
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
