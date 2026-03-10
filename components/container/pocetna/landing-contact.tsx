/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactSection } from '@/components/contact-section';
import ContentWrapper from '@/components/ui/content-wrapper';
import { urlFor } from '@/lib/sanity-image';
import HeroImage from '@/public/hero.jpg';

export const LandingContact = ({ data, services }: { data: any; services: any }) => {
  return (
    <section className="spacing-section">
      <ContentWrapper>
        <ContactSection
          image={data.image ? urlFor(data.image).width(600).height(800).url() : HeroImage}
          heading={data.heading}
          paragraph={data.paragraph}
          services={services}
        />
      </ContentWrapper>
    </section>
  );
};
