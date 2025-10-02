// "use client";

// import React from "react";
// import Image from "next/image";
// import image1 from "./CoFounder.jpg";
// import image2 from "./Founder.jpg";
// import image3 from "./CoFounder1.jpg";

// import { motion } from "framer-motion";
// import {
//   Users2,
//   Target,
//   Lightbulb,
//   Sparkles,
//   HeartHandshake,
//   ShieldCheck,
//   Users,
//   Zap,
// } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const teamMembers = [
//   {
//     name: "Vyasa Khatawadia",
//     role: "Founder & CEO",
//     avatarUrl: "https://placehold.co/150x150.png",
//     aiHint: "ceo professional",
//     bio: "A visionary leader with a passion for fostering innovation and building impactful communities. Vyasa drives the strategic direction of CollabForge, ensuring we stay true to our mission of empowering creators worldwide.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//     },
//   },
//   {
//     name: "Nitin",
//     role: "Co-Founder & CTO",
//     avatarUrl: "https://placehold.co/150x150.png",
//     aiHint: "cto tech",
//     bio: "The technical architect behind CollabForge. Nitin leads our engineering efforts, building a robust and scalable platform designed to connect and inspire. His expertise ensures a seamless user experience.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//     },
//   },
//   {
//     name: "Nitesh Yadav",
//     role: "Co-founder",
//     avatarUrl: "https://placehold.co/150x150.png",
//     aiHint: "cofounder business",
//     bio: "A strategic thinker with a deep understanding of the startup ecosystem. Nitesh focuses on community growth and strategic partnerships, helping CollabForge reach and support a diverse range of innovators.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//     },
//   },
// ];

// const coreValues = [
//   {
//     icon: HeartHandshake,
//     title: "Collaboration",
//     description:
//       "We believe great things are built together. Fostering connections is at our core.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation",
//     description:
//       "We constantly seek new ways to empower creators and streamline the path from idea to impact.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Integrity",
//     description:
//       "We operate with transparency and trust, building a secure and reliable platform for all.",
//   },
//   {
//     icon: Users,
//     title: "Inclusivity",
//     description:
//       "We strive to create a welcoming environment for diverse talents and ideas from all backgrounds.",
//   },
//   {
//     icon: Sparkles,
//     title: "Empowerment",
//     description:
//       "Our goal is to provide the tools and community support individuals need to succeed.",
//   },
// ];

// const AboutUsPage: React.FC = () => {
//   const handleJoinWaitingList = () => {
//     window.open("/join-waitlist", "_blank");
//   };

//   return (
//     <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         <header className="text-center mb-16">
//           <Users2 className="mx-auto h-16 w-16 text-primary mb-6" />
//           <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
//             About CollabForge
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Forging Connections, Fueling Innovation. Discover the story,
//             mission, and the people behind CollabForge.
//           </p>
//         </header>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="mb-16 p-8 bg-card rounded-xl shadow-lg"
//         >
//           <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
//             <Target className="h-8 w-8 mr-4 text-primary" /> Our Mission
//           </h2>
//           <p className="text-muted-foreground leading-relaxed text-lg">
//             To democratize innovation by seamlessly connecting talent, ideas,
//             and capital. CollabForge empowers aspiring entrepreneurs, skilled
//             individuals, insightful mentors, and forward-thinking investors to
//             find each other, collaborate effectively, and bring groundbreaking
//             projects to life. We aim to break down traditional barriers and
//             foster a vibrant ecosystem where every great idea has the
//             opportunity to flourish.
//           </p>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="mb-16 p-8 bg-card rounded-xl shadow-lg"
//         >
//           <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
//             <Lightbulb className="h-8 w-8 mr-4 text-primary" /> Our Vision
//           </h2>
//           <p className="text-muted-foreground leading-relaxed text-lg">
//             To be the leading global platform where the future is forged. We
//             envision a world where co-founder matching, team building, investor
//             connections, and mentorship are accessible and efficient, enabling a
//             new wave of innovation driven by diverse collaborations. CollabForge
//             will be the catalyst that transforms visionary concepts into
//             impactful realities.
//           </p>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="mb-16 p-8 bg-card rounded-xl shadow-lg"
//         >
//           <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
//             <Sparkles className="h-8 w-8 mr-4 text-primary" /> The Genesis of
//             CollabForge
//           </h2>
//           <p className="text-muted-foreground leading-relaxed text-lg mb-4">
//             CollabForge was born from a simple yet profound observation:
//             brilliant ideas often falter, not due to lack of merit, but due to a
//             lack of the right connections. Founders struggle to find compatible
//             co-founders, builders seek impactful projects, investors search for
//             the next big thing, and mentors look for meaningful ways to give
//             back. We saw these disparate needs and envisioned a unified
//             solution.
//           </p>
//           <p className="text-muted-foreground leading-relaxed text-lg">
//             Our journey began with a commitment to leveraging technology and
//             community to solve these fundamental challenges. We are passionate
//             about building a platform that is more than just a network; it's a
//             dynamic ecosystem designed to foster collaboration, accelerate
//             growth, and celebrate shared success.
//           </p>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-semibold mb-10 text-center text-foreground">
//             Our Core Values
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//             {coreValues.map((value) => (
//               <Card
//                 key={value.title}
//                 className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <CardHeader>
//                   <value.icon className="h-10 w-10 mx-auto text-primary mb-3" />
//                   <CardTitle className="text-xl">{value.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm text-muted-foreground">
//                     {value.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-semibold mb-12 text-center text-foreground">
//             Meet Our Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
//             {teamMembers.map((member) => (
//               <Card
//                 key={member.name}
//                 className="bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center"
//               >
//                 <CardHeader className="items-center">
//                   <Avatar className="w-32 h-32 mb-4 border-4 border-primary/50">
//                     <AvatarImage
//                       src={member.avatarUrl}
//                       alt={member.name}
//                       data-ai-hint={member.aiHint}
//                     />
//                     <AvatarFallback>
//                       {member.name.substring(0, 2)}
//                     </AvatarFallback>
//                   </Avatar>
//                   <CardTitle className="text-2xl">{member.name}</CardTitle>
//                   <CardDescription className="text-primary">
//                     {member.role}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex-grow">
//                   <p className="text-muted-foreground text-sm">{member.bio}</p>
//                 </CardContent>
//                 <CardFooter className="flex justify-center space-x-3 pt-4">
//                   <Button variant="outline" size="sm" asChild>
//                     <a
//                       href={member.social.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       LinkedIn
//                     </a>
//                   </Button>
//                   <Button variant="outline" size="sm" asChild>
//                     <a
//                       href={member.social.twitter}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Twitter
//                     </a>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7, duration: 0.5 }}
//           className="mb-16 p-8 bg-primary/10 dark:bg-primary/5 rounded-xl"
//         >
//           <h2 className="text-3xl font-semibold mb-6 text-center text-primary flex items-center justify-center">
//             <Zap className="h-8 w-8 mr-4" /> Why Choose CollabForge?
//           </h2>
//           <ul className="space-y-4 text-muted-foreground text-lg list-disc list-inside pl-4 md:pl-8">
//             <li>
//               <strong>AI-Powered Matching:</strong> Intelligent algorithms
//               connect you with the most relevant co-founders, team members,
//               investors, and mentors.
//             </li>
//             <li>
//               <strong>Comprehensive Ecosystem:</strong> All your startup needs
//               in one place – from ideation and team building to funding and
//               growth.
//             </li>
//             <li>
//               <strong>Vibrant Community:</strong> Engage with a supportive
//               network of innovators, share insights, and discover new
//               opportunities.
//             </li>
//             <li>
//               <strong>Focus on Quality:</strong> We prioritize verified profiles
//               and meaningful connections to ensure a productive experience.
//             </li>
//             <li>
//               <strong>Streamlined Collaboration Tools:</strong> (Upcoming)
//               Features to facilitate seamless project management and
//               communication within your team.
//             </li>
//           </ul>
//         </motion.section>

//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//           className="text-center"
//         >
//           <h2 className="text-3xl font-semibold mb-6 text-foreground">
//             Join Us on Our Journey
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
//             CollabForge is more than a platform; it&apos;s a movement.
//             We&apos;re building a future where collaboration knows no bounds. Be
//             part of it.
//           </p>
//           <Button
//             size="lg"
//             onClick={handleJoinWaitingList}
//             className="bg-accent hover:bg-accent/90 text-accent-foreground"
//           >
//             Join Waiting List
//           </Button>
//         </motion.section>
//       </motion.div>
//     </div>
//   );
// };

// export default AboutUsPage;

"use client";

import React from "react";
import Image from "next/image";
import image1 from "./CoFounder.jpg";
import image2 from "./Founder.jpg";
import image3 from "./CoFounder1.jpg";

import { motion } from "framer-motion";
import {
  Users2,
  Target,
  Lightbulb,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const teamMembers = [
  {
    name: "Vyasa Khatawadia",
    role: "Founder & CEO",
    avatarUrl: image1.src,
    aiHint: "ceo professional",
    bio: "A visionary leader with a passion for fostering innovation and building impactful communities. Vyasa drives the strategic direction of CollabForge, ensuring we stay true to our mission of empowering creators worldwide.",
    social: {
      linkedin: "#",
    },
  },
  {
    name: "Nitin Kelde",
    role: "Co-Founder & CTO",
    avatarUrl: image2.src,
    aiHint: "cto tech",
    bio: "The technical architect behind CollabForge. Nitin leads our engineering efforts, building a robust and scalable platform designed to connect and inspire. His expertise ensures a seamless user experience.",
    social: {
      linkedin: "#",
    },
  },
  {
    name: "Nitesh Yadav",
    role: "Co-founder",
    avatarUrl: image3.src,
    aiHint: "cofounder business",
    bio: "A strategic thinker with a deep understanding of the startup ecosystem. Nitesh focuses on community growth and strategic partnerships, helping CollabForge reach and support a diverse range of innovators.",
    social: {
      linkedin: "#",
    },
  },
];

const coreValues = [
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description:
      "We believe great things are built together. Fostering connections is at our core.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly seek new ways to empower creators and streamline the path from idea to impact.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We operate with transparency and trust, building a secure and reliable platform for all.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We strive to create a welcoming environment for diverse talents and ideas from all backgrounds.",
  },
  {
    icon: Sparkles,
    title: "Empowerment",
    description:
      "Our goal is to provide the tools and community support individuals need to succeed.",
  },
];

const AboutUsPage: React.FC = () => {
  const handleJoinWaitingList = () => {
    window.open("/join-waitlist", "_blank");
  };

  return (
    <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <header className="text-center mb-16">
          <Users2 className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            About CollabForge
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Forging Connections, Fueling Innovation. Discover the story,
            mission, and the people behind CollabForge.
          </p>
        </header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16 p-8 bg-card rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
            <Target className="h-8 w-8 mr-4 text-primary" /> Our Mission
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To democratize innovation by seamlessly connecting talent, ideas,
            and capital. CollabForge empowers aspiring entrepreneurs, skilled
            individuals, insightful mentors, and forward-thinking investors to
            find each other, collaborate effectively, and bring groundbreaking
            projects to life. We aim to break down traditional barriers and
            foster a vibrant ecosystem where every great idea has the
            opportunity to flourish.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16 p-8 bg-card rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
            <Lightbulb className="h-8 w-8 mr-4 text-primary" /> Our Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To be the leading global platform where the future is forged. We
            envision a world where co-founder matching, team building, investor
            connections, and mentorship are accessible and efficient, enabling a
            new wave of innovation driven by diverse collaborations. CollabForge
            will be the catalyst that transforms visionary concepts into
            impactful realities.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16 p-8 bg-card rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-6 text-foreground flex items-center">
            <Sparkles className="h-8 w-8 mr-4 text-primary" /> The Genesis of
            CollabForge
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-4">
            CollabForge was born from a simple yet profound observation:
            brilliant ideas often falter, not due to lack of merit, but due to a
            lack of the right connections. Founders struggle to find compatible
            co-founders, builders seek impactful projects, investors search for
            the next big thing, and mentors look for meaningful ways to give
            back. We saw these disparate needs and envisioned a unified
            solution.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our journey began with a commitment to leveraging technology and
            community to solve these fundamental challenges. We are passionate
            about building a platform that is more than just a network; it's a
            dynamic ecosystem designed to foster collaboration, accelerate
            growth, and celebrate shared success.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-10 text-center text-foreground">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreValues.map((value) => (
              <Card
                key={value.title}
                className="text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <value.icon className="h-10 w-10 mx-auto text-primary mb-3" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-12 text-center text-foreground">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center">
                  <CardHeader className="items-center">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 2,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Avatar className="w-40 h-40 mb-4 border-4 border-primary/50">
                        <AvatarImage
                          src={member.avatarUrl}
                          alt={member.name}
                          data-ai-hint={member.aiHint}
                        />
                        <AvatarFallback>
                          {member.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <CardTitle className="text-2xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-16 p-8 bg-primary/10 dark:bg-primary/5 rounded-xl"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-primary flex items-center justify-center">
            <Zap className="h-8 w-8 mr-4" /> Why Choose CollabForge?
          </h2>
          <ul className="space-y-4 text-muted-foreground text-lg list-disc list-inside pl-4 md:pl-8">
            <li>
              <strong>AI-Powered Matching:</strong> Intelligent algorithms
              connect you with the most relevant co-founders, team members,
              investors, and mentors.
            </li>
            <li>
              <strong>Comprehensive Ecosystem:</strong> All your startup needs
              in one place – from ideation and team building to funding and
              growth.
            </li>
            <li>
              <strong>Vibrant Community:</strong> Engage with a supportive
              network of innovators, share insights, and discover new
              opportunities.
            </li>
            <li>
              <strong>Focus on Quality:</strong> We prioritize verified profiles
              and meaningful connections to ensure a productive experience.
            </li>
            <li>
              <strong>Streamlined Collaboration Tools:</strong> (Upcoming)
              Features to facilitate seamless project management and
              communication within your team.
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-6 text-foreground">
            Join Us on Our Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            CollabForge is more than a platform; it&apos;s a movement.
            We&apos;re building a future where collaboration knows no bounds. Be
            part of it.
          </p>
          <Button
            size="lg"
            onClick={handleJoinWaitingList}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Join Waiting List
          </Button>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
