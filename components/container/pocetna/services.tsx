/* eslint-disable @typescript-eslint/no-explicit-any */
import { LandingPageCard } from '@/components/landing-card';
import { SanityContent } from '@/components/sanity-content';

type ServicesSectionProps = {
  data: any;
  category1: any; // Medicina Rada
  category2: any; // Specijalnosti
};

export const Services = ({ data, category1, category2 }: ServicesSectionProps) => {
  return (
    <section className="spacing-section scroll-mt-20">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2>
            <SanityContent value={data.title} />
          </h2>
          <div className="mb-12 mt-4">
            <SanityContent value={data.description} />
          </div>
        </div>

        {/* Category 1: Medicina Rada */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px flex-1 bg-border" />
            <h5 className=" font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap">
              Medicina rada i sporta
            </h5>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category1.map((s: any) => (
              <LandingPageCard key={s._id || s.slug} {...s} />
            ))}
          </div>
        </div>

        {/* Category 2: Specijalnosti */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px flex-1 bg-border" />
            <h5 className=" font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap">
              Specijalistički pregledi
            </h5>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category2.map((s: any) => (
              <LandingPageCard key={s._id || s.slug} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
