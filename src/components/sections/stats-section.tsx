
"use client";

import { StatCardItem } from './stat-card-item';
import { motion } from 'framer-motion';

type StatIconName = "Users" | "Handshake" | "Award" | "DollarSign";

interface StatItem {
  iconName: StatIconName;
  value: string;
  label: string;
}

const statsData: StatItem[] = [
  { iconName: "Users", value: "1,000+", label: "People on the Waiting List" },
  { iconName: "Handshake", value: "250+", label: "Active Collaborators" },
  { iconName: "Award", value: "50+", label: "Industry Mentors" },
  { iconName: "DollarSign", value: "10+", label: "Investor Partners Engaged" },
];

export function StatsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Empowering the Next Generation of Creators
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Be part of a vibrant network of founders, mentors, and visionaries shaping tomorrow’s opportunities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            // StatCardItem already has its own animation logic for the number.
            // We can wrap it in motion.div if we want the card itself to animate in.
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <StatCardItem
                iconName={stat.iconName}
                value={stat.value}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
