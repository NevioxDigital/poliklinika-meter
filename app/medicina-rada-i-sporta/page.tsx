/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';

import { getCategoryPageData } from '@/actions/sanity';
import { SanityContent } from '@/components/sanity-content';
import { ServiceDetailRow } from '@/components/service-detail-row';
import ContentWrapper from '@/components/ui/content-wrapper';
import { generateDynamicMetadata } from '@/lib/metadata';

export default async function MedicinaRadaPage() {
  const data = await getCategoryPageData('medicina-rada-i-sporta');
  console.log(data.title);

  if (!data) {
    notFound();
  }

  return (
    <section className="py-20 lg:py-32">
      <ContentWrapper>
        <div className="max-w-4xl mb-12 lg:mb-20">
          {/* Styled Page Title */}
          <h1 className="text-5xl">
            <SanityContent value={data.title} />
          </h1>

          {/* Styled Page Description */}
          <div className="text-xl text-muted-foreground leading-relaxed">
            <SanityContent value={data.description} />
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {data.services?.map((service: any, index: number) => (
            <ServiceDetailRow
              key={service.slug}
              slug={service.slug}
              title={service.title} // Styled array
              plainTitle={service.plainTitle} // Plain string for button logic
              description={service.description}
              image={service.image}
              reverse={index % 2 !== 0}
              isMedicinaRada={true}
            />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}

export async function generateMetadata() {
  return await generateDynamicMetadata('medicina-rada-i-sporta', '/medicina-rada-i-sporta');
}
