
"use client";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  const handleJoinWaitingList = () => {
    window.open('/join-waitlist', '_blank');
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
        variants={variants}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={variants}>
          <Rocket className="mx-auto h-16 w-16 mb-6" />
        </motion.div>
        <motion.h2
          variants={variants}
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          Ready to Launch Your Vision?
        </motion.h2>
        <motion.p
          variants={variants}
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl opacity-90"
        >
          Join CollabForge today and take the first step towards building
          something extraordinary. Connect with the right people, resources, and
          opportunities.
        </motion.p>
        <motion.div variants={variants} className="mt-10">
          <Button
            size="lg"
            onClick={handleJoinWaitingList}
            className="bg-foreground text-background hover:bg-foreground/90 dark:bg-background dark:text-foreground dark:hover:bg-background/90 transition-colors duration-200 px-10 py-6 text-lg"
          >
            Join Waiting List
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
