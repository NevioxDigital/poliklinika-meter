import Image from 'next/image';
import Link from 'next/link';

import { getPageData, getSiteData } from '@/actions/sanity';
import { ContactSection } from '@/components/contact-section';
import { SanityContent } from '@/components/sanity-content';
import { Button } from '@/components/ui/button';
import { generateDynamicMetadata } from '@/lib/metadata';
import LocationImage from '@/public/lokacija.png';
import { kontaktRoute } from '@/routes';

export default async function ContactPage() {
  const [data, siteData] = await Promise.all([getPageData('contactPage'), getSiteData()]);

  if (!data) return null;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* 1. THE MAP IMAGE - Anchored Top-Right */}
      <div
        className="absolute inset-0 z-0 opacity-40 lg:opacity-100"
        style={{
          maskImage: 'linear-gradient(to bottom left, black 20%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom left, black 20%, transparent 70%)',
        }}
      >
        <Image
          src={LocationImage}
          alt="Naša lokacija"
          priority
          fill
          className="object-cover object-top-right scale-105"
        />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 min-h-screen container mx-auto px-6 lg:px-12">
        <div className="grid min-h-screen lg:grid-cols-2">
          {/* LEFT SIDE: Centered Content */}
          <div className="flex flex-col justify-center py-24 md:py-32">
            <div className="max-w-xl space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl">
                  <SanityContent value={data.title} />
                </h1>
                <div className="text-xl text-foreground leading-relaxed">
                  <SanityContent value={data.subtitle} />
                </div>
              </div>

              <ContactSection heading={data.formHeading} paragraph={data.formParagraph} />
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Info Card (Desktop Only) */}
          <div className="hidden lg:flex flex-col justify-end items-end pb-32">
            <div className="max-w-sm bg-white/40 dark:bg-background/40 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="font-bold text-xl mb-4">Gdje se nalazimo?</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {siteData.contactInfo.address}
                <br />
                {siteData.contactInfo.phone}
              </p>

              <Link
                href={siteData.contactInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-bold text-primary group "
              >
                <Button variant="link" className="cursor-pointer">
                  Otvori u Google Mapsu
                </Button>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata() {
  return await generateDynamicMetadata('contactPage', kontaktRoute);
}
