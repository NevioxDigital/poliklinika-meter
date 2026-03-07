// components/services/ServiceDetailRow.tsx
import { ArrowRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { kontaktRoute } from '@/routes';

interface ServiceDetailRowProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  reverse?: boolean;
  isMedicinaRada?: boolean;
}

export const ServiceDetailRow = ({
  title,
  description,
  image,
  reverse = false,
  isMedicinaRada = false,
}: ServiceDetailRowProps) => {
  // Logic for grammar (Kardiologija -> Kardiologiju)
  const formattedTitle = title
    .split(' ')
    .map((word) => {
      if (word.length <= 3) return word; // skip small words
      return word.charAt(0).toUpperCase() + word.slice(1, -1) + 'u';
    })
    .join(' ');

  // Standard slug generation
  const urlSlug = title
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[čć]/g, 'c') // Handle Croatian chars
    .replace(/[š]/g, 's')
    .replace(/[ž]/g, 'z')
    .replace(/[đ]/g, 'd');

  return (
    <div
      className="w-full py-12 border-b border-border last:border-0 transition-all duration-500"
      id={urlSlug}
      /* 
         This is the magic part: 
         It offsets the landing position by 25% of the viewport height.
         Adjust '25vh' to '30vh' depending on your header height to get it perfectly centered.
      */
      style={{ scrollMarginTop: '25vh' }}
    >
      <div
        className={`flex flex-col md:flex-row md:items-center gap-10 lg:gap-20 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* 1. Image Container */}
        <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 relative group">
          {/* Main Image Frame */}
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg border border-border z-10 bg-background">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Decorative Border */}
          {/* Positioned absolutely relative to the group. z-0 ensures it stays behind the Image Frame (z-10) */}
          <div
            className={`absolute -bottom-4 w-full h-full border-4 border-primary/20 rounded-xl z-0 transition-all duration-500
              ${reverse ? '-right-3' : '-left-3'}`}
          />
        </div>

        {/* 2. Content Column */}
        <div className={`flex-1 flex mt-auto ${reverse ? 'md:justify-end' : 'md:justify-start'}`}>
          <div className="max-w-2xl w-full space-y-6 text-left">
            <h4 className="font-extrabold mb-4 md:mb-8 border-l-4 border-primary text-foreground pl-4 ">
              {title}
            </h4>

            <p className="text-foreground/80 text-base">{description}</p>

            <Link href={kontaktRoute} className="inline-block">
              <Button
                size="lg"
                className="rounded-xl px-8 h-14 text-md font-bold group gap-2 shadow-md hover:shadow-xl transition-all"
              >
                {!isMedicinaRada ? `Rezerviraj termin za ${formattedTitle}` : 'Kontaktirajte Nas'}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
