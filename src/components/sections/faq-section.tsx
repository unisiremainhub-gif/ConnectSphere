
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is CollabForge?",
    answer:
      "CollabForge is a platform designed to connect innovators, entrepreneurs, and investors. We help you find co-founders, build teams, secure funding, and get mentorship to turn your ideas into reality.",
  },
  {
    question: "How does co-founder matching work?",
    answer:
      "Our algorithm and community features help you find potential co-founders based on skills, experience, interests, and values. You can browse profiles, connect, and collaborate on projects.",
  },
  {
    question: "Is CollabForge free to join?",
    answer:
      "Yes, basic membership to CollabForge is free. We also offer premium features and plans for users who need more advanced tools and access.",
  },
  {
    question: "How can I find investors on the platform?",
    answer:
      "CollabForge provides a curated network of angel investors and venture capitalists. You can create a startup profile, pitch your idea, and connect with investors looking for opportunities in your industry.",
  },
  {
    question: "What kind of mentorship is available?",
    answer:
      "We have a diverse pool of experienced mentors from various industries. You can find mentors for specific challenges, get long-term guidance, or participate in group mentorship sessions.",
  },
];

export function FaqSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
          className="text-center mb-12"
        >
          <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about CollabForge.
          </p>
        </motion.div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
              <AccordionItem value={`item-${index}`} className="border-b border-border/50 last:border-b-0">
                <AccordionTrigger className="text-lg font-medium text-left hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
