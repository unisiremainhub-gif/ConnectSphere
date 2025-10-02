"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Shield,
  Brain,
  ThumbsDown,
  Scale,
  MessageSquare,
  Edit,
} from "lucide-react";
import Link from "next/link";

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = "September 29, 2025"; // Update dynamically if needed

  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the CollabForge platform and services ('Service'), you agree to be bound by these Terms of Service ('Terms'). If you do not agree with any part, you may not access or use the Service. These Terms apply to all visitors, users, and others who use the platform.",
    },
    {
      icon: Edit,
      title: "2. Changes to Terms",
      content:
        "We may update or modify these Terms at any time at our sole discretion. If a revision is material, we will provide notice before the new terms take effect. Continued use of the Service after updates constitutes acceptance of the revised Terms.",
    },
    {
      icon: Users,
      title: "3. User Accounts",
      content:
        "When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for all activities under your account. Sharing your credentials with others is prohibited.",
    },
    {
      icon: ThumbsDown,
      title: "4. User Conduct and Responsibilities",
      content:
        "You agree not to use the Service for unlawful activities or in ways that may disrupt, damage, or impair functionality. Prohibited actions include harassment, impersonation, spamming, and infringement of intellectual property rights. You are solely responsible for the content you share.",
    },
    {
      icon: Brain,
      title: "5. Intellectual Property",
      content:
        "All platform content, features, and functionality (excluding user-generated content) remain the exclusive property of CollabForge and its licensors. Our branding, trademarks, and trade dress may not be used without prior written consent.",
    },
    {
      icon: FileText,
      title: "6. Third-Party Links & Services",
      content:
        "The Service may include links to third-party websites or services. We are not responsible for the content, policies, or practices of such external sites. Your use of third-party services is at your own risk.",
    },
    {
      icon: Shield,
      title: "7. Disclaimer of Warranties",
      content:
        "The Service is provided 'AS IS' and 'AS AVAILABLE' without warranties of any kind. We do not guarantee uninterrupted availability, error correction, or that the Service is free from harmful components. Use of the Service is at your own risk.",
    },
    {
      icon: FileText,
      title: "8. Limitation of Liability",
      content:
        "To the maximum extent permitted by law, CollabForge and its affiliates will not be liable for indirect, incidental, or consequential damages, including loss of profits, data, or goodwill. Our total liability for any claim arising out of your use of the Service is limited to the amount you paid us, if any.",
    },
    {
      icon: Scale,
      title: "9. Governing Law",
      content:
        "These Terms are governed by and construed in accordance with the laws of your jurisdiction. Failure to enforce any right or provision will not be considered a waiver of those rights.",
    },
    {
      icon: MessageSquare,
      title: "10. Contact Us",
      content:
        "If you have any questions about these Terms, please visit our Contact Us page for more details.",
      contactDetails: {
        link: "/contact",
      },
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"
      >
        <header className="text-center mb-12">
          <FileText className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg">
            Last Updated: {lastUpdated}
          </p>
        </header>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="mb-10 p-6 bg-card rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
              <section.icon className="h-6 w-6 mr-3 text-primary" />
              {section.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {section.content}
            </p>

            {section.contactDetails && (
              <div className="mt-4 text-muted-foreground leading-relaxed">
                <Link
                  href={section.contactDetails.link}
                  className="text-primary hover:underline font-medium"
                >
                  Visit our Contact Us page
                </Link>{" "}
                for more information.
              </div>
            )}
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
};

export default TermsOfServicePage;
