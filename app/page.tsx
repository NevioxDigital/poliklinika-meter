/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllServices, getPageData } from '@/actions/sanity';
import { BackgroundCrosses } from '@/components/background-crosses';
import { ContactSection } from '@/components/contact-section';
import { FeaturesBar } from '@/components/container/pocetna/features-bar';
import { Hero } from '@/components/container/pocetna/hero';
import { LandingContact } from '@/components/container/pocetna/landing-contact';
import { Services } from '@/components/container/pocetna/services';
import { WhyUs } from '@/components/container/pocetna/why-us';
import { generateDynamicMetadata } from '@/lib/metadata';

export default async function HomePage() {
  // Use cache is already handled in the actions
  const [homeData, allServices] = await Promise.all([getPageData('homePage'), getAllServices()]);

  if (!homeData) return null;

  // 1. DYNAMIC FILTERING
  // These slugs must match the 'slug' field in your Sanity 'category' documents
  const CAT_MED_RADA = 'medicina-rada-i-sporta';
  const CAT_SPECIJALNOSTI = 'specijalnosti';

  const medicinaRada = allServices.filter((s: any) => s.categorySlug === CAT_MED_RADA);
  const specijalnosti = allServices.filter((s: any) => s.categorySlug === CAT_SPECIJALNOSTI);

  // 2. DROP-DOWN DATA
  // This is now a clean array of strings ['Kardiologija', 'Ginekologija', ...]
  const serviceTitles = allServices.map((s: any) => s.title);

  return (
    <div className="space-y-0">
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
