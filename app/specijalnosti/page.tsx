/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation';

import { getCategoryPageData } from '@/actions/sanity';
import { ServiceDetailRow } from '@/components/service-detail-row';
import ContentWrapper from '@/components/ui/content-wrapper';
import { generateDynamicMetadata } from '@/lib/metadata';

export default async function SpecijalnostiPage() {
  'use cache';
  const data = await getCategoryPageData('specijalnosti');

  if (!data) {
    notFound();
  }
  return (
    <section className="spacing-section">
      <ContentWrapper>
        <div className="max-w-4xl">
          <h1 className="mb-16 text-primary">{data.title}</h1>
          <p className="mb-8 text-foreground">{data.description}</p>
        </div>
        <div className="flex flex-col spacing-section-sm ">
          {data.services?.map((service: any, index: number) => (
            <ServiceDetailRow
              key={service.title}
              slug={service.slug}
              title={service.title}
              description={service.description}
              image={service.image}
              reverse={index % 2 !== 0}
              isMedicinaRada={false}
            />
          ))}
        </div>
      </ContentWrapper>
    </section>
  );
}

export async function generateMetadata() {
  // 'medicina-rada' is the slug in Sanity category
  return await generateDynamicMetadata('specijalnosti', '/specijalnosti');
}
