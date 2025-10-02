"use client";

import React from "react";
import { GraduationCap, ArrowLeft } from "lucide-react";
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
import cofounderImage from "./Mentorship.png";

const MentorshipPage: React.FC = () => {
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
            <GraduationCap className="mx-auto h-20 w-20 text-primary mb-6 p-3 bg-primary/10 rounded-full" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
          >
            Expert Mentorship on CollabForge
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Gain invaluable insights and guidance from experienced industry
            mentors.
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
            className="rounded-xl shadow-2xl mx-auto"
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
                Guidance for Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-lg leading-relaxed">
                Navigating the startup landscape can be challenging. Access to
                experienced mentors provides a significant advantage, helping
                you avoid common pitfalls, make informed decisions, and
                accelerate your growth.
              </CardDescription>
              <CardDescription className="text-lg leading-relaxed">
                CollabForge will connect you with a diverse network of mentors
                who have expertise in various industries and functional areas,
                ready to share their knowledge and support your entrepreneurial
                ambitions.
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
                Mentorship Program Highlights (Upcoming)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-3 text-lg">
                <li>
                  Search and filter mentors by industry, expertise, and
                  availability.
                </li>
                <li>
                  Request mentorship sessions for specific challenges or ongoing
                  guidance.
                </li>
                <li>
                  Profiles detailing mentor experience, areas of specialization,
                  and success stories.
                </li>
                <li>Integrated scheduling and communication tools.</li>
                <li>
                  Opportunity for mentors to give back and contribute to the
                  next wave of innovation.
                </li>
              </ul>
              <p className="text-primary font-semibold text-lg pt-4">
                We are building a robust mentorship program to support your
                growth. Sign up for our waiting list for updates!
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

export default MentorshipPage;
