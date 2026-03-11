import { Mail, MapPin, Navigation, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getTeamPageData } from '@/actions/sanity';
import { TeamCarousel } from '@/components/team-carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ContentWrapper from '@/components/ui/content-wrapper';
import { generateDynamicMetadata } from '@/lib/metadata';
import { urlFor } from '@/lib/sanity-image';
import HeroImage from '@/public/hero.jpg';
import { timRoute } from '@/routes';

/* eslint-disable @typescript-eslint/no-explicit-any */

const clinicInfo = [
  {
    icon: <MapPin className="w-10 h-10" />,
    label: 'Adresa',
    value: 'Ulica primjera 123',
    // Google Maps Link (zamijeniti sa stvarnim Google Business linkom)
    href: 'https://www.google.com/maps/dir//Poliklinika+Meter+Imotski',
  },
  {
    icon: <Navigation className="w-10 h-10" />,
    label: 'Grad',
    value: '21260 Imotski',
    href: 'https://www.google.com/maps/search/Imotski',
  },
  {
    icon: <Phone className="w-10 h-10" />,
    label: 'Telefon',
    value: '+385 (0)21 123 456',
    href: 'tel:+38521123456', // tel: protokol za pozive
  },
  {
    icon: <Mail className="w-10 h-10" />,
    label: 'Email',
    value: 'info@poliklinika-meter.hr',
    href: 'mailto:info@poliklinika-meter.hr', // mailto: protokol za email
  },
];

export default async function TeamAndClinicPage() {
  'use cache';
  const data = await getTeamPageData();

  if (!data?.page) {
    return notFound();
  }

  const { page, doctors } = data;

  return (
    <>
      {/* SECTION 1: POLIKLINIKA */}
      <section className="spacing-section">
        <ContentWrapper>
          <div className="grid lg:grid-cols-[1fr_450px] gap-12 lg:gap-20 items-start container mx-auto ">
            {/* Left Side: Header & Text */}
            <div className="space-y-8">
              <h1 className="font-black text-primary mb-6">
                <span className="text-foreground">{page.hero.title}</span> <br />
                {page.hero.highlightedText}
              </h1>

              <div className="space-y-6 text-lg text-foreground leading-relaxed max-w-2xl">
                {page.hero.subtitle?.split('\n').map((line: string, i: number) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* Right Side: Simple Carousel */}
            <div className="relative group">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {page.carouselImages?.map((item: any, index: number) => {
                    // Apply your principle:
                    // If item.image exists, use builder. Otherwise, use local HeroImage
                    const imageUrl = item.image
                      ? urlFor(item.image).width(800).height(1000).url()
                      : HeroImage;

                    return (
                      <CarouselItem key={index}>
                        <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={imageUrl}
                            alt={item.alt || 'Poliklinika Meter Interijer'}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                {/* Minimalist arrows */}
                <CarouselPrevious className="left-4 h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent border-none text-primary hover:bg-transparent hover:border-none group-hover:border-transparent hover:text-primary" />
                <CarouselNext className="right-4 h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent border-none text-primary hover:bg-transparent hover:border-none group-hover:border-transparent hover:text-primary" />
              </Carousel>
            </div>
          </div>

          {/* INFORMATION BAR: Icons Block */}
          <div className="mt-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {clinicInfo.map((info, index) => {
              const isExternal = info.href.startsWith('http');

              return (
                <Link
                  key={index}
                  href={info.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div key={index} className="flex items-center gap-6 group p-2">
                    {/* Icon Wrapper - Povećan i stiliziran */}
                    <div className="p-4 flex items-center justify-center w-16 h-16 shrink-0 rounded-xl text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white shadow-sm">
                      {info.icon}
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60 mb-1">
                        {info.label}
                      </span>
                      <span className="text-lg font-black text-foreground leading-tight tracking-tight">
                        {info.value}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </ContentWrapper>
      </section>

      {/* SECTION 2: NAŠ TIM */}
      <section className="spacing-section-sm">
        <ContentWrapper>
          <div className="mb-12">
            <h2 className="font-black text-foreground">{page.teamSection.title}</h2>
            <div className="w-20 h-1.5 bg-primary mt-4 rounded-full" />
          </div>

          <TeamCarousel doctors={doctors} />
        </ContentWrapper>
      </section>
    </>
  );
}
export async function generateMetadata() {
  return await generateDynamicMetadata('teamPage', timRoute);
}
