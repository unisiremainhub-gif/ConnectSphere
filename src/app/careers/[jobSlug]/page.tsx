
import { jobOpenings, type JobOpening } from '@/lib/job-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Briefcase, CheckCircle2 } from 'lucide-react'; // Removed DollarSign
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ApplicationForm } from '@/components/careers/application-form';
import { Separator } from '@/components/ui/separator';

interface JobDetailPageProps {
  params: {
    jobSlug: string;
  };
}

export async function generateStaticParams() {
  return jobOpenings.map((job) => ({
    jobSlug: job.slug,
  }));
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobOpenings.find((j) => j.slug === params.jobSlug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/careers">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Job Details */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                    <div>
                        <job.icon className="h-10 w-10 text-primary mb-4" />
                        <CardTitle className="text-3xl md:text-4xl font-bold">{job.title}</CardTitle>
                    </div>
                    {job.status === 'Closed' && (
                         <span className="text-sm font-semibold bg-destructive text-destructive-foreground px-3 py-1.5 rounded-md">
                            Hiring Closed
                         </span>
                    )}
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground mt-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" /> {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary" /> {job.employmentType}
                  </div>
                  {/* Salary Range removed */}
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="my-6" />
                <div>
                  <h2 className="text-2xl font-semibold mb-3 text-foreground">Job Overview</h2>
                  {/* Added whitespace-pre-line to respect newlines in the description */}
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{job.description}</p>
                </div>

                <Separator className="my-6" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Responsibilities</h2>
                  <ul className="space-y-2 list-inside">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="my-6" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">Qualifications</h2>
                  <ul className="space-y-2 list-inside">
                    {job.qualifications.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-24"> {/* Sticky for scrolling */}
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center">Apply for this Role</CardTitle>
              </CardHeader>
              <CardContent>
                <ApplicationForm jobTitle={job.title} jobStatus={job.status} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
