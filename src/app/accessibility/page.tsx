// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShieldAlert, Info, Users, Target } from 'lucide-react';

// const AccessibilityPage: React.FC = () => {
//   const lastReviewed = 'November 15, 2023'; // Replace with actual last reviewed date

//   return (
//     <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"
//       >
//         <header className="text-center mb-12">
//           <ShieldAlert className="mx-auto h-16 w-16 text-primary mb-6" />
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
//             Accessibility Statement
//           </h1>
//           <p className="text-muted-foreground text-lg">
//             For CollabForge
//           </p>
//           <p className="text-sm text-muted-foreground mt-2">
//             Last Reviewed: {lastReviewed}
//           </p>
//         </header>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mb-10 p-6 bg-card rounded-xl shadow-lg"
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
//             <Info className="h-6 w-6 mr-3 text-primary" /> Our Commitment
//           </h2>
//           <p className="text-muted-foreground leading-relaxed">
//             CollabForge is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards. We believe that everyone has the right to access information and services online, and we strive to make our platform welcoming and usable for all users, regardless of their abilities or the assistive technologies they use.
//           </p>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="mb-10 p-6 bg-card rounded-xl shadow-lg"
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
//             <Target className="h-6 w-6 mr-3 text-primary" /> Measures to Support Accessibility
//           </h2>
//           <p className="text-muted-foreground leading-relaxed mb-4">
//             CollabForge takes the following measures to ensure accessibility:
//           </p>
//           <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
//             <li>Include accessibility as part of our mission statement.</li>
//             <li>Integrate accessibility into our procurement practices.</li>
//             <li>Appoint an accessibility officer and/or ombudsperson.</li>
//             <li>Provide continual accessibility training for our staff.</li>
//             <li>Assign clear accessibility targets and responsibilities.</li>
//             <li>Employ formal accessibility quality assurance methods.</li>
//             <li>Regularly test with users with disabilities and assistive technologies.</li>
//           </ul>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="mb-10 p-6 bg-card rounded-xl shadow-lg"
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-foreground">Conformance Status</h2>
//           <p className="text-muted-foreground leading-relaxed">
//             The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. CollabForge is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard. We are actively working to achieve full AA conformance.
//           </p>
//           <p className="text-muted-foreground leading-relaxed mt-3">
//             You can find more information about WCAG here: <a href="https://www.w3.org/TR/WCAG21/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">WCAG 2.1 Guidelines</a>
//           </p>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="mb-10 p-6 bg-card rounded-xl shadow-lg"
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-foreground">Technical Specifications</h2>
//           <p className="text-muted-foreground leading-relaxed">
//             Accessibility of CollabForge relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
//           </p>
//           <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4 mt-3">
//             <li>HTML</li>
//             <li>WAI-ARIA</li>
//             <li>CSS</li>
//             <li>JavaScript</li>
//           </ul>
//           <p className="text-muted-foreground leading-relaxed mt-3">
//             These technologies are relied upon for conformance with the accessibility standards used.
//           </p>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="p-6 bg-card rounded-xl shadow-lg"
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
//             <Users className="h-6 w-6 mr-3 text-primary" /> Feedback & Contact
//           </h2>
//           <p className="text-muted-foreground leading-relaxed">
//             We welcome your feedback on the accessibility of CollabForge. Please let us know if you encounter accessibility barriers:
//           </p>
//           <ul className="list-none space-y-1 pl-4 mt-3 text-muted-foreground">
//             <li><strong>E-mail:</strong> <a href="mailto:[accessibility@example.com]" className="text-primary hover:underline">[accessibility@example.com]</a></li>
//             <li><strong>Postal Address:</strong> [Your Company Address]</li>
//           </ul>
//           <p className="text-muted-foreground leading-relaxed mt-3">
//             We try to respond to feedback within 5 business days.
//           </p>
//         </motion.section>
//       </motion.div>
//     </div>
//   );
// };

// export default AccessibilityPage;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Info, Users, Target } from "lucide-react";
import Link from "next/link";

const AccessibilityPage: React.FC = () => {
  const lastReviewed = "November 15, 2023"; // Update when reviewed

  return (
    <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"
      >
        <header className="text-center mb-12">
          <ShieldAlert className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
            Accessibility Statement
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Last Reviewed: {lastReviewed}
          </p>
        </header>

        {/* Commitment */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 p-6 bg-card rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
            <Info className="h-6 w-6 mr-3 text-primary" /> Our Commitment
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We are committed to ensuring digital accessibility for people with
            disabilities. We are continually improving the user experience for
            everyone and applying the relevant accessibility standards. We
            believe that everyone has the right to access information and
            services online, and we strive to make our platform welcoming and
            usable for all users, regardless of their abilities or the assistive
            technologies they use.
          </p>
        </motion.section>

        {/* Measures */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-10 p-6 bg-card rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
            <Target className="h-6 w-6 mr-3 text-primary" /> Measures to Support
            Accessibility
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            To support accessibility, we:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
            <li>Regularly review our platform for accessibility issues.</li>
            <li>Strive to meet WCAG 2.1 Level AA guidelines.</li>
            <li>Test with assistive technologies when possible.</li>
            <li>Actively welcome user feedback to improve accessibility.</li>
          </ul>
        </motion.section>

        {/* Conformance */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10 p-6 bg-card rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Conformance Status
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Web Content Accessibility Guidelines (WCAG) define requirements
            for designers and developers to improve accessibility for people
            with disabilities. It defines three levels of conformance: Level A,
            Level AA, and Level AAA. Our platform is partially conformant with
            WCAG 2.1 level AA. Partially conformant means that some parts of the
            content do not fully conform to the accessibility standard. We are
            actively working toward full AA conformance.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Learn more about WCAG here:{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCAG 2.1 Guidelines
            </a>
          </p>
        </motion.section>

        {/* Technical Specs */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-10 p-6 bg-card rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Technical Specifications
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Accessibility of our platform relies on the following technologies
            to work with the combination of web browser and any assistive
            technologies or plugins installed on your device:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4 mt-3">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </motion.section>

        {/* Feedback & Contact */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="p-6 bg-card rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
            <Users className="h-6 w-6 mr-3 text-primary" /> Feedback & Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We welcome your feedback on the accessibility of our platform.
            Please let us know if you encounter accessibility barriers by using
            our{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline font-medium"
            >
              Contact Us
            </Link>{" "}
            page.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            We aim to respond to feedback as quickly as possible.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AccessibilityPage;
