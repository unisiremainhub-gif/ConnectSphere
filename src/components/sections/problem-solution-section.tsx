
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const comparisonPoints = [
  {
    id: 'cofounders',
    title: 'Finding Co-founders',
    before: {
      text: 'Spending months searching for co-founders through personal networks with limited reach.',
      icon: XCircle,
    },
    after: {
      text: 'AI-powered matching with verified professionals based on complementary skills and shared vision.',
      icon: CheckCircle2,
    },
  },
  {
    id: 'team-building',
    title: 'Building Teams',
    before: {
      text: 'Building teams through traditional job boards with high fees and poor startup fit.',
      icon: XCircle,
    },
    after: {
      text: 'Access to talent specifically interested in joining startups, with transparent skills and expectations.',
      icon: CheckCircle2,
    },
  },
  {
    id: 'mentorship',
    title: 'Getting Mentorship',
    before: {
      text: 'Paying thousands for mentorship programs with generic advice.',
      icon: XCircle,
    },
    after: {
      text: 'On-demand access to industry-specific mentors who provide tailored guidance for your unique challenges.',
      icon: CheckCircle2,
    },
  },
  {
    id: 'investors',
    title: 'Connecting with Investors',
    before: {
      text: 'Cold emailing investors with low response rates and no validation.',
      icon: XCircle,
    },
    after: {
      text: 'Direct access to verified investors actively looking for opportunities in your specific industry.',
      icon: CheckCircle2,
    },
  },
  {
    id: 'community',
    title: 'Community & Support',
    before: {
      text: 'Working in isolation without community support or feedback.',
      icon: XCircle,
    },
    after: {
      text: 'Being part of a vibrant community of founders sharing resources, feedback, and opportunities.',
      icon: CheckCircle2,
    },
  },
];

export function ProblemSolutionSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <BrainCircuit className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Problem vs. The CollabForge Solution
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            See how CollabForge transforms the traditional startup journey into a streamlined, connected experience.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {comparisonPoints.map((point, index) => (
            <motion.div
              key={point.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card
                className="shadow-lg hover:shadow-[0_8px_20px_rgba(22,163,74,0.25)] dark:hover:shadow-[0_8px_20px_rgba(34,197,94,0.2)] transition-shadow duration-300 overflow-hidden rounded-xl bg-card"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="p-6 border-b md:border-b-0 md:border-r border-border/30">
                      <h3 className="text-lg font-semibold text-destructive mb-3 flex items-center">
                        <point.before.icon className="h-6 w-6 mr-2.5 shrink-0 text-destructive" />
                        Before CollabForge
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base">{point.before.text}</p>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-green-600 dark:text-green-500 mb-3 flex items-center">
                        <point.after.icon className="h-6 w-6 mr-2.5 shrink-0 text-green-600 dark:text-green-500" />
                        With CollabForge
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base">{point.after.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
