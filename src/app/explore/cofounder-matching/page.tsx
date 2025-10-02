"use client";

import React from "react";
import { UserPlus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import cofounderImage from "./CofounderMatching.png";

const CoFounderMatchingPage: React.FC = () => {
  const handleJoinWaitingList = () => {
    window.open("/join-waitlist", "_blank");
  };

  return (
    <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
      >
        <div className="mb-10">
          <Button variant="outline" asChild>
            <Link href="/#feature-showcase-section">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Features
            </Link>
          </Button>
        </div>

        <header className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <UserPlus className="mx-auto h-20 w-20 text-primary mb-6 p-3 bg-primary/10 rounded-full" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
          >
            Co-founder Matching on CollabForge
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Find the perfect co-founder with complementary skills and a shared
            vision using our AI-powered matching.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <Image
            src={cofounderImage}
            alt="Co-founders collaborating"
            width={800}
            height={400}
            className="rounded-xl shadow-2xl mx-auto "
            data-ai-hint="cofounders meeting"
          />
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12"
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground">
                The Power of the Right Partnership
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-lg leading-relaxed">
                Finding a co-founder is one of the most critical steps in a
                startup's journey. A compatible partner brings not just skills,
                but also resilience, diverse perspectives, and shared
                motivation. CollabForge is dedicated to making this search more
                efficient and effective.
              </CardDescription>
              <CardDescription className="text-lg leading-relaxed">
                Our upcoming AI-powered matching system will analyze profiles,
                project needs, and compatibility factors to suggest potential
                co-founders who truly align with your goals.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground">
                What to Expect (Upcoming)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-3 text-lg">
                <li>
                  Create a detailed profile highlighting your idea, skills, and
                  what you seek in a co-founder.
                </li>
                <li>
                  Intelligent matching suggestions based on compatibility
                  algorithms.
                </li>
                <li>
                  Browse profiles of potential co-founders with filters for
                  skills, industry, and commitment level.
                </li>
                <li>
                  Secure messaging to initiate conversations and explore
                  synergies.
                </li>
                <li>
                  Resources and guides on structuring co-founder agreements and
                  building strong partnerships.
                </li>
              </ul>
              <p className="text-primary font-semibold text-lg pt-4">
                The Co-founder Matching feature is a cornerstone of CollabForge
                and is under active development. Join our waiting list to be
                among the first to experience it!
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={handleJoinWaitingList}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Join Waiting List
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoFounderMatchingPage;
