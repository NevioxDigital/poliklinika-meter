/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllServices, getPageData } from '@/actions/sanity';
import { BackgroundCrosses } from '@/components/background-crosses';
import { FeaturesBar } from '@/components/container/pocetna/features-bar';
import { Hero } from '@/components/container/pocetna/hero';
import { LandingContact } from '@/components/container/pocetna/landing-contact';
import { Services } from '@/components/container/pocetna/services';
import { WhyUs } from '@/components/container/pocetna/why-us';
import { generateDynamicMetadata } from '@/lib/metadata';

export default async function HomePage() {
  'use cache';
  const [homeData, allServices] = await Promise.all([getPageData('homePage'), getAllServices()]);

  if (!homeData) return null;

  // Concern 1: Filter services for the "Services" section
  const medicinaRada = allServices.filter((s: any) => s.category === 'medicina-rada');
  const specijalnosti = allServices.filter((s: any) => s.category === 'specijalnosti');

  // Concern 2: Prepare titles for the Contact Form dropdown
  const serviceTitles = allServices.map((s: any) => s.title);

  return (
    <div className="spacing-section-sm">
      <BackgroundCrosses />
      <Hero data={homeData.hero} />
      <FeaturesBar data={homeData.features} />
      <Services
        data={homeData.servicesLanding}
        category1={medicinaRada}
        category2={specijalnosti}
      />

      <WhyUs data={homeData.whyUs} />
      <LandingContact data={homeData.contactSection} services={serviceTitles} />
    </div>
  );
}

export async function generateMetadata() {
  return await generateDynamicMetadata('homePage', '/');
}
