/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SanityContent } from '@/components/sanity-content';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/sanity-image';
import HeroImage from '@/public/hero.jpg';
import { kontaktRoute } from '@/routes';

interface ServiceDetailRowProps {
  title: any;
  plainTitle: string;
  description: any;
  image: any;
  slug: any;
  reverse?: boolean;
  isMedicinaRada?: boolean;
}

export const ServiceDetailRow = ({
  title,
  plainTitle,
  description,
  image,
  slug,
  reverse = false,
  isMedicinaRada = false,
}: ServiceDetailRowProps) => {
  // FIX: Perform grammar logic on the plain string, not the Sanity object
  const formattedTitle = (plainTitle || '')
    .split(' ')
    .map((word) => {
      if (word.length <= 3) return word;
      // Kardiologija -> Kardiologiju
      return word.charAt(0).toUpperCase() + word.slice(1, -1) + 'u';
    })
    .join(' ');

  const imageUrl = image ? urlFor(image).width(800).height(600).url() : HeroImage;
  const anchorId = typeof slug === 'string' ? slug : slug?.current;

  return (
    <div
      className="w-full py-16 md:py-24 border-b border-border last:border-0 transition-all duration-500"
      id={anchorId}
      style={{ scrollMarginTop: '20vh' }}
    >
      <div
        className={`flex flex-col md:flex-row md:items-center gap-10 lg:gap-24 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* 1. Image Container */}
        <div className="w-full md:w-1/3 lg:w-1/3 shrink-0 relative group">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-2xl border border-border z-10 bg-muted">
            <Image
              src={imageUrl}
              alt={plainTitle}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div
            className={`absolute -bottom-6 w-full h-full border-2 border-primary/20 rounded-2xl z-0 transition-all duration-500
              ${reverse ? '-right-6' : '-left-6'}`}
          />
        </div>

        {/* 2. Content Column */}
        <div className="flex-1 space-y-8">
          <header className="space-y-4">
            {/* RENDER STYLED TITLE */}
            <h5 className="inline-block border-l-4 border-primary pl-6 ">
              <SanityContent value={title} />
            </h5>

            {/* RENDER STYLED DESCRIPTION */}
            <div className="text-lg text-muted-foreground leading-relaxed max-w-xl pl-6">
              <SanityContent value={description} />
            </div>
          </header>

          <Link href={kontaktRoute} className="inline-block pl-6">
            <Button
              size="lg"
              className="rounded-2xl px-10 h-12 font-bold group gap-3 transition-all"
            >
              {!isMedicinaRada ? `Rezerviraj termin za ${formattedTitle}` : 'Kontaktirajte Nas'}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
