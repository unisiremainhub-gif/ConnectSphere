
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Handshake, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const visionarySteps = [
  { text: "Craft your project: Define your vision and the roles you need." },
  { text: "Discover talent: Connect with skilled individuals and potential co-founders." },
  { text: "Build your A-team: Assemble the perfect team to bring your idea to life." },
];

const collaboratorSteps = [
  { text: "Explore opportunities: Find exciting projects that match your skills and passion." },
  { text: "Showcase your expertise: Connect with founders and join innovative ventures." },
  { text: "Make an impact: Contribute your talent and grow with groundbreaking projects." },
];

export function HowItWorksSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How CollabForge Empowers You
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Whether you're launching an idea or looking to contribute your skills, CollabForge is your platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col group bg-card h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 mr-4">
                    <Lightbulb className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    For Visionaries & Idea Holders
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {visionarySteps.map((step, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={listItemVariants}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                      <span className="text-muted-foreground">{step.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={0.2} // Stagger the second card
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col group bg-card h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-3">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-4">
                    <Handshake className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    For Collaborators & Builders
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {collaboratorSteps.map((step, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={listItemVariants}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 shrink-0" />
                      <span className="text-muted-foreground">{step.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
