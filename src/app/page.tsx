
import { HeroSection } from '@/components/sections/hero';
import { FeatureShowcaseSection } from '@/components/sections/feature-showcase';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { TeamingComparisonSection } from '@/components/sections/teaming-comparison-section';
import { StatsSection } from '@/components/sections/stats-section';
import { ProblemSolutionSection } from '@/components/sections/problem-solution-section';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <TeamingComparisonSection />
      <StatsSection />
      <ProblemSolutionSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
