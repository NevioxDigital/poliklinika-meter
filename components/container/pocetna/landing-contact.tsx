/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactSection } from '@/components/contact-section';
import { urlFor } from '@/lib/sanity-image';
import HeroImage from '@/public/hero.jpg';

export const LandingContact = ({ data, services }: { data: any; services: any }) => {
  if (!data) return null;

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <ContactSection
          image={data.image ? urlFor(data.image).width(800).height(1000).url() : HeroImage}
          // Pass the Portable Text objects directly
          heading={data.heading}
          paragraph={data.paragraph}
          services={services}
        />
      </div>
    </section>
  );
};
