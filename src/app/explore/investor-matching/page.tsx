"use client";

import React from "react";
import { Landmark, ArrowLeft } from "lucide-react";
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
import cofounderImage from "./InvestorMatching.png";

const InvestorMatchingPage: React.FC = () => {
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
            <Landmark className="mx-auto h-20 w-20 text-primary mb-6 p-3 bg-primary/10 rounded-full" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
          >
            Investor Matching on CollabForge
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Connect with angel investors and VCs actively looking for startups
            like yours.
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
                Fueling Your Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-lg leading-relaxed">
                Securing funding is a pivotal moment for any startup.
                CollabForge aims to bridge the gap between promising ventures
                and interested investors. Our platform will provide tools to
                showcase your potential and connect with capital sources aligned
                with your industry and stage.
              </CardDescription>
              <CardDescription className="text-lg leading-relaxed">
                We're building a curated network of verified investors, from
                angel investors to venture capital firms, to increase your
                chances of finding the right financial partners.
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
                Key Features (Upcoming)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-3 text-lg">
                <li>
                  Create compelling startup profiles with pitch decks,
                  financials, and team information.
                </li>
                <li>
                  Targeted matching with investors based on their investment
                  thesis, industry focus, and stage preference.
                </li>
                <li>
                  Verified investor profiles with clear information about their
                  portfolio and interests.
                </li>
                <li>Tools for secure document sharing and communication.</li>
                <li>
                  Updates on pitching events and investor networking
                  opportunities.
                </li>
              </ul>
              <p className="text-primary font-semibold text-lg pt-4">
                The Investor Matching feature is a high priority for us. Join
                the waiting list to be notified of its launch!
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

export default InvestorMatchingPage;
