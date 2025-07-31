import { Hero } from '@/components/landing/hero';
import { FeaturedOffers } from '@/components/landing/featured-offers';
import { ValueProposition } from '@/components/landing/value-proposition';
import { TargetAudience } from '@/components/landing/target-audience';
import { FinalCta } from '@/components/landing/final-cta';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedOffers />
      <ValueProposition />
      <TargetAudience />
      <FinalCta />
      <SiteFooter />
    </>
  );
}
