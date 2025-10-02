
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Users, XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { jobOpenings } from '@/lib/job-data'; // Import job data

const CareersPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground min-h-screen py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <header className="text-center mb-12 md:mb-16">
          <Users className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re looking for passionate individuals to help us build the future of collaboration. Explore our open positions and find your next opportunity at CollabForge.
          </p>
        </header>

        {jobOpenings.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <job.icon className="h-8 w-8 text-primary mr-3" />
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                    </div>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1.5" />
                        {job.employmentType}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{job.description.substring(0,150)}...</CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-3 pt-4">
                    <Badge 
                      variant={job.status === 'Closed' ? 'destructive' : 'default'}
                      className="px-3 py-1.5 text-sm font-semibold"
                    >
                      {job.status === 'Closed' ? 'Hiring Closed' : 'Apply Now'}
                    </Badge>
                    <Button 
                      variant="default" 
                      className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild // Make the button act as a Link
                    >
                      <Link href={`/careers/${job.slug}`}>
                        View Details {job.status === 'Closed' ? '(Closed)' : ''}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center py-12"
          >
            <XCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">No Open Positions Currently</h2>
            <p className="text-muted-foreground">
              Please check back later for new opportunities or follow us on our social channels for updates.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CareersPage;
