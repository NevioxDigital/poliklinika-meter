import { FeaturesBar } from '@/components/container/pocetna/features-bar';
import { Hero } from '@/components/container/pocetna/hero';

export default function HomePage() {
  return (
    <div className="spacing-section-sm">
      <Hero />
      <FeaturesBar />
    </div>
  );
}
