
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRightCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const traditionalChallenges = [
  { id: 1, text: "Fragmented conversations across multiple platforms and DMs.", icon: XCircle },
  { id: 2, text: "Unclear expectations about roles, responsibilities, and project scope.", icon: XCircle },
  { id: 3, text: "High abandonment rate due to lack of commitment and structure.", icon: XCircle },
];

const collabForgeAdvantages = [
  {
    title: "Clear Project Cards",
    description: "Detailed project descriptions with specific roles needed and clear expectations.",
  },
  {
    title: "Skill-Based Matching",
    description: "Apply with your skills and get matched to projects where you'll make the most impact.",
  },
  {
    title: "Integrated Collaboration",
    description: "From team formation to project execution in one seamless platform.",
  },
];

export function TeamingComparisonSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
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
            Traditional Hurdles vs. The CollabForge Advantage
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            See how CollabForge simplifies team formation and project collaboration, inspired by best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">Unorganized Teaming Up</CardTitle>
                <CardDescription>Challenges with traditional team formation.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4 pt-2">
                {traditionalChallenges.map((challenge, index) => (
                  <motion.div
                    key={challenge.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={itemVariants}
                    className="flex items-start space-x-3 p-4 bg-muted/20 dark:bg-muted/10 rounded-lg hover:bg-muted/40 dark:hover:bg-muted/20 transition-colors duration-200"
                  >
                    <challenge.icon className="flex-shrink-0 h-6 w-6 text-destructive mt-0.5" />
                    <p className="text-muted-foreground">{challenge.text}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={0.2} // Stagger this card
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">Organized Teaming with CollabForge</CardTitle>
                <CardDescription>CollabForge's structured approach.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-2">
                <div className="relative space-y-6">
                  {collabForgeAdvantages.length > 1 && (
                    <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-[hsl(var(--chart-1))] opacity-30 z-0 transform -translate-x-1/2"></div>
                  )}
                  {collabForgeAdvantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={itemVariants}
                      className="relative flex items-start space-x-4 z-10"
                    >
                      <ArrowRightCircle className="flex-shrink-0 h-8 w-8 text-[hsl(var(--chart-1))] mt-1 bg-background rounded-full p-0.5" />
                      <div className="p-4 bg-muted/20 dark:bg-muted/10 rounded-lg flex-1 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <h4 className="font-semibold text-primary mb-1">{advantage.title}</h4>
                        <p className="text-sm text-muted-foreground">{advantage.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
