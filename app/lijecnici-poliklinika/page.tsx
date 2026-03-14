/* eslint-disable @typescript-eslint/no-explicit-any */
import { Mail, MapPin, Navigation, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getSiteData, getTeamPageData } from '@/actions/sanity';
import { SanityContent } from '@/components/sanity-content';
import { TeamCarousel } from '@/components/team-carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { generateDynamicMetadata } from '@/lib/metadata';
import { urlFor } from '@/lib/sanity-image';
import HeroImage from '@/public/hero.jpg';
import { timRoute } from '@/routes';

export default async function TeamAndClinicPage() {
  const [data, siteData] = await Promise.all([getTeamPageData(), getSiteData()]);

  if (!data?.page) return notFound();
  const { page, doctors } = data;

  // Dynamically map icons to your Sanity Site Data
  const clinicInfo = [
    {
      icon: <MapPin />,
      label: 'Adresa',
      value: siteData.contactInfo.address,
      href: siteData.contactInfo.googleMapsUrl,
    },
    {
      icon: <Navigation />,
      label: 'Grad',
      value: '21260 Imotski',
      href: siteData.contactInfo.googleMapsUrl,
    },
    {
      icon: <Phone />,
      label: 'Telefon',
      value: siteData.contactInfo.phone,
      href: `tel:${siteData.contactInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Mail />,
      label: 'Email',
      value: siteData.contactInfo.email,
      href: `mailto:${siteData.contactInfo.email}`,
    },
  ];

  return (
    <div className="bg-background">
      {/* SECTION 1: CLINIC INTRO */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="[&_h1]:text-5xl lg:[&_h1]:text-7xl [&_h1]:font-black [&_h1]:leading-[1.1]">
                <SanityContent value={page.hero.title} />
              </div>

              <div className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
                <SanityContent value={page.hero.subtitle} />
              </div>
            </div>

            {/* Right: Interior Carousel */}
            <div className="lg:col-span-5 relative group">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {page.carouselImages?.map((item: any, index: number) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-4/5 rounded-[2rem] overflow-hidden shadow-2xl border border-border">
                        <Image
                          src={item.asset ? urlFor(item).width(800).url() : HeroImage}
                          alt={item.alt || 'Poliklinika Meter'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Carousel>
            </div>
          </div>

          {/* INFORMATION BAR */}
          <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl bg-muted/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white dark:bg-card text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">
                    {info.label}
                  </p>
                  <p className="  font-bold text-foreground">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR DOCTORS */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="[&_h1]:text-4xl md:[&_h1]:text-5xl [&_h1]:font-black">
              <SanityContent value={page.teamSection.title} />
            </div>
            <div className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-2xl" />
          </div>

          <TeamCarousel doctors={doctors} />
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  return await generateDynamicMetadata('teamPage', timRoute);
}
