"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, Briefcase, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  feature: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav T.",
    role: "Aspiring Startup Founder",
    testimonial:
      "Finally, a platform that understands how hard it is to find the right co-founder. The matching algorithm seems promising and I can't wait to connect with potential partners who share my vision.",
    rating: 5,
    feature: "Co-founder Matching",
  },
  {
    name: "Sneha M.",
    role: "Product Manager",
    testimonial:
      "The investor matching feature is exactly what I needed. Instead of cold outreach, I can now find investors who are genuinely interested in my industry and stage.",
    rating: 5,
    feature: "Investor Matching",
  },
  {
    name: "Karan V.",
    role: "Full-Stack Developer",
    testimonial:
      "As a developer, I've always wanted to join promising startups. The team building feature helps me find projects where I can contribute meaningfully and grow with the team.",
    rating: 5,
    feature: "Team Building",
  },
  {
    name: "Riya S.",
    role: "UX Designer & Mentor",
    testimonial:
      "The mentorship program connects me with passionate early-stage founders. It's rewarding to guide them through design challenges and watch their products evolve.",
    rating: 5,
    feature: "Mentorship",
  },
  {
    name: "Neha J.",
    role: "Solo Founder",
    testimonial:
      "Finding the right technical co-founder has been my biggest challenge. This platform's approach to founder matching gives me hope that I'll finally build my dream team.",
    rating: 5,
    feature: "Founder Matching",
  },
  {
    name: "Rohan M.",
    role: "Angel Investor",
    testimonial:
      "The quality of startups and founders on this platform is impressive. The matching system saves me time by connecting me with ventures that align with my investment thesis.",
    rating: 5,
    feature: "Startup Ecosystem",
  },
];

const featureIcons: { [key: string]: React.ElementType } = {
  "Co-founder Matching": Users,
  "Investor Matching": Briefcase,
  "Team Building": Target,
  Mentorship: Lightbulb,
  "Founder Matching": Users,
  "Startup Ecosystem": Lightbulb,
};

export function TestimonialsSection() {
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
    <section className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Build Your Dream Startup Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Join innovators who are using CollabForge to find co-founders,
            investors, and mentors
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => {
            const FeatureIcon = featureIcons[item.feature];
            return (
              <motion.div
                key={item.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="shadow-lg flex flex-col group hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <Quote className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                      {FeatureIcon && (
                        <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                          <FeatureIcon className="h-4 w-4 text-primary" />
                          <span className="text-xs font-medium text-primary">
                            {item.feature}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-muted-foreground flex-grow mb-6">
                      &ldquo;{item.testimonial}&rdquo;
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.role}
                        </p>
                        <div className="flex mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < item.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-muted-foreground/50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Platform Features Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          variants={sectionVariants}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">
                Co-founder Matching
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Find your perfect business partner
              </p>
            </div>
            <div className="text-center">
              <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">
                Investor Matching
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Connect with the right investors
              </p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">Team Building</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Build your dream team
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">Mentorship</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Learn from experienced mentors
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
