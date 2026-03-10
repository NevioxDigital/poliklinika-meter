/* eslint-disable @typescript-eslint/no-explicit-any */
// components/sections/Services.tsx
import { LandingPageCard } from '@/components/landing-card';
import ContentWrapper from '@/components/ui/content-wrapper';

type ServicesSectionProps = {
  data: any;
  category1: any;
  category2: any;
};

export const Services = ({ data, category1, category2 }: ServicesSectionProps) => {
  return (
    <section className="spacing-section">
      <ContentWrapper>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="font-extrabold text-foreground mb-4">{data.title}</h2>
            <p className="text-foreground">{data.description}</p>
          </div>
        </div>

        {/* Medicina Rada Category */}
        <div className="my-16 md:my-32">
          <h3 className="font-bold mb-8 md:mb-12 border-l-4 border-primary text-foreground pl-4">
            {data.heading1}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category1.map((s: any) => (
              <LandingPageCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Specijalnosti Category */}
        <div>
          <h3 className="font-bold mb-8 md:mb-12 border-l-4 border-primary pl-4">
            {data.heading2}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category2.map((s: any) => (
              <LandingPageCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};
