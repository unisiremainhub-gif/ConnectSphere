
"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, Landmark, GraduationCap, ArrowRight, Lightbulb } from 'lucide-react'; // Changed DollarSign to Landmark, Added ArrowRight
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string; // Added for Learn More link
}

const features: Feature[] = [
  {
    icon: UserPlus, // Changed from Users
    title: 'Co-founder Matching',
    description: 'Find the perfect co-founder with complementary skills and vision using our AI-powered matching.',
    href: '/explore/cofounder-matching',
  },
  {
    icon: Landmark, // Changed from DollarSign
    title: 'Investor Matching',
    description: 'Connect with angel investors and VCs actively looking for startups like yours.',
    href: '/explore/investor-matching',
  },
  {
    icon: Users, // Kept Users for Team Building
    title: 'Team Building',
    description: 'Assemble a skilled and passionate team to bring your project to life.',
    href: '/explore/team-building',
  },
  {
    icon: GraduationCap,
    title: 'Expert Mentorship', // Changed from Mentorship to Expert Mentorship as per screenshot
    description: 'Gain invaluable insights and guidance from experienced industry mentors.',
    href: '/explore/mentorship',
  },
];

export function FeatureShowcaseSection() {
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
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="feature-showcase-section" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          {/* Updated title and subtitle */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            CollabForge offers a comprehensive suite of tools and services to empower your entrepreneurial journey.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="h-full" // Ensure motion div takes full height for flex card
            >
              <Card className="bg-card/90 dark:bg-card/60 shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/10 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col h-full border border-border hover:border-primary/50 rounded-lg">
                <CardHeader className="flex flex-row items-start space-x-4 pt-6 pb-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground pt-1">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-1 pb-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-2 pb-6">
                  <Button variant="outline" asChild className="w-full border-primary/70 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary group transition-colors duration-200">
                    <Link href={feature.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
