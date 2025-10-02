"use client";

import React from "react";
import { Users, ArrowLeft } from "lucide-react";
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
import cofounderImage from "./TeamBuilding.png";

const TeamBuildingPage: React.FC = () => {
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
            <Users className="mx-auto h-20 w-20 text-primary mb-6 p-3 bg-primary/10 rounded-full" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
          >
            Team Building on CollabForge
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Assemble your dream team with skilled individuals who share your
            vision and drive.
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
                Why Team Building Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-lg leading-relaxed">
                A great idea is just the starting point. The right team is the
                engine that turns vision into reality. CollabForge helps you
                find individuals with the complementary skills, shared passion,
                and cultural fit essential for a startup's success.
              </CardDescription>
              <CardDescription className="text-lg leading-relaxed">
                Our platform aims to simplify the often complex process of
                finding early team members, whether you need technical
                expertise, marketing prowess, or operational support.
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
                How CollabForge Facilitates Team Building (Upcoming)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-3 text-lg">
                <li>
                  Post your project idea and specify the roles and skills you're
                  looking for.
                </li>
                <li>
                  Browse profiles of individuals interested in joining
                  early-stage ventures.
                </li>
                <li>
                  Utilize smart filters to narrow down candidates based on
                  experience, skills, and availability.
                </li>
                <li>Connect and communicate securely within the platform.</li>
                <li>
                  (Future) Tools for collaborative task management and initial
                  project planning.
                </li>
              </ul>
              <p className="text-primary font-semibold text-lg pt-4">
                More details about this feature will be available soon. We are
                working hard to bring you the best team-building experience!
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

export default TeamBuildingPage;
