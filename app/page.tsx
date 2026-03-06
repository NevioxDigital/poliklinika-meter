import { FeaturesBar } from '@/components/container/pocetna/features-bar';
import { Hero } from '@/components/container/pocetna/hero';
import { LandingContact } from '@/components/container/pocetna/landing-contact';
import { Services } from '@/components/container/pocetna/services';
import { WhyUs } from '@/components/container/pocetna/why-us';

export default function HomePage() {
  return (
    <div className="spacing-section-sm">
      <Hero />
      <FeaturesBar />
      <Services />
      <WhyUs />
      <LandingContact />
    </div>
  );
}
