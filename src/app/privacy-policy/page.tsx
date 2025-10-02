"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Info,
  Users,
  BookOpen,
  Server,
  Globe,
  Edit3,
  AlertTriangle,
  Mail,
} from "lucide-react";
import Link from "next/link";

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "September 29, 2025"; // Update with real last updated date

  const sections = [
    {
      icon: Info,
      title: "Introduction",
      content:
        "Welcome to CollabForge's Privacy Policy. We are committed to protecting your personal data and respecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms, please do not access the site.",
    },
    {
      icon: Users,
      title: "Information We Collect",
      subSections: [
        {
          title: "Personal Data",
          content:
            "While using our Service, we may ask you to provide certain information that can be used to identify you. This may include: first and last name, phone number (optional), profile details (skills, interests, project info), usage data, and cookies or tracking data.",
        },
        {
          title: "Usage Data",
          content:
            "We may collect data on how the Service is accessed and used. This may include information such as IP address, browser type, pages visited, time spent on pages, and diagnostic data.",
        },
        {
          title: "Cookies and Tracking Technologies",
          content:
            "We use cookies and similar technologies to track activity and improve user experience. You can set your browser to refuse cookies, but some parts of the Service may not function properly without them.",
        },
      ],
    },
    {
      icon: BookOpen,
      title: "How We Use Your Information",
      content:
        "We use your information to provide a smooth, efficient, and customized experience. This includes: creating and managing accounts, facilitating co-founder and team matching, mentorship, improving the Site, analyzing usage trends, notifying users of updates, requesting feedback, resolving disputes, and responding to support requests.",
    },
    {
      icon: Server,
      title: "Disclosure of Your Information",
      content:
        "We may share information in limited situations such as: compliance with law, working with trusted third-party providers, business transfers, or with your consent. We do not sell personal information.",
    },
    {
      icon: Globe,
      title: "Third-Party Websites",
      content:
        "The Site may contain links to third-party websites or services. Once you leave our platform, their practices are not governed by this Privacy Policy. We encourage you to review their privacy statements.",
    },
    {
      icon: AlertTriangle,
      title: "Security of Your Information",
      content:
        "We use administrative, technical, and physical measures to protect your information. However, no method of transmission or storage is 100% secure, and we cannot guarantee complete security.",
    },
    {
      icon: Users,
      title: "Policy for Children",
      content:
        "We do not knowingly collect or market to children under 13 (or applicable age in your region). If you believe we have collected data from a child, please let us know immediately.",
    },
    {
      icon: Edit3,
      title: "Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised 'Last updated' date. Please review periodically to stay informed.",
    },
    {
      icon: Mail,
      title: "Contact Us",
      content:
        "If you have questions or concerns about this Privacy Policy, please reach out to us through our contact page.",
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
          <ShieldCheck className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
            Privacy Policy
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
              <section.icon className="h-6 w-6 mr-3 text-primary" />{" "}
              {section.title}
            </h2>
            {section.content && (
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            )}

            {section.subSections &&
              section.subSections.map((sub, subIndex) => (
                <motion.div
                  key={subIndex}
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + subIndex * 0.1,
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-primary/90">
                    {sub.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {sub.content}
                  </p>
                </motion.div>
              ))}

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

export default PrivacyPolicyPage;
