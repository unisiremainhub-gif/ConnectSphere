// "use client";

// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// export function HeroSection() {
//   const handleJoinWaitingList = () => {
//     window.open('/join-waitlist', '_blank');
//   };

//   const LearnMoreButton = () => {
//     const featureSection = document.getElementById("feature-showcase-section");
//     if (featureSection) {
//       featureSection.scrollIntoView({ behavior: "smooth" });
//     } else {
//       window.scrollTo({ top: 500, behavior: "smooth" });
//     }
//   };

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
//           <div className="text-center lg:text-left">
//             <motion.h1
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               variants={variants}
//               className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
//             >
//               <span className="block">Connect.</span>
//               <span className="block text-primary">Collaborate.</span>
//               <span className="block">Create.</span>
//             </motion.h1>
//             <motion.p
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//               variants={variants}
//               className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8 md:max-w-xl lg:mx-0"
//             >
//               Unlock your potential with CollabForge. Find co-founders, build teams, connect with investors, and get mentorship to bring your ideas to life.
//             </motion.p>
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
//               variants={variants}
//               className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
//             >
//               <Button
//                 size="lg"
//                 className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-colors duration-200"
//                 onClick={handleJoinWaitingList}
//               >
//                 Join Waiting List
//                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-primary text-primary hover:bg-primary/10 transition-colors duration-200"
//                 onClick={LearnMoreButton}
//               >
//                 Learn More
//               </Button>
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
//             className="mt-12 lg:mt-0"
//           >
//             <Image
//               src="https://placehold.co/600x400.png"
//               alt="Collaboration illustration"
//               width={600}
//               height={400}
//               className="rounded-xl shadow-2xl mx-auto transition-transform duration-300 ease-in-out hover:scale-105"
//               data-ai-hint="collaboration startup"
//               priority
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "./Hero.png";

export function HeroSection() {
  const handleJoinWaitingList = () => {
    window.open("/join-waitlist", "_blank");
  };

  const LearnMoreButton = () => {
    const featureSection = document.getElementById("feature-showcase-section");
    if (featureSection) {
      featureSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 500, behavior: "smooth" });
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              variants={variants}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">Connect.</span>
              <span className="block text-primary">Collaborate.</span>
              <span className="block">Create.</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              variants={variants}
              className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8 md:max-w-xl lg:mx-0"
            >
              Unlock your potential with CollabForge. Find co-founders, build
              teams, connect with investors, and get mentorship to bring your
              ideas to life.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              variants={variants}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-colors duration-200"
                onClick={handleJoinWaitingList}
              >
                Join Waiting List
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-colors duration-200"
                onClick={LearnMoreButton}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12 lg:mt-0"
          >
            <Image
              src={heroImage}
              alt="Collaboration illustration"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl mx-auto transition-transform duration-300 ease-in-out hover:scale-105 border-4 border-[#D3D5DE]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
