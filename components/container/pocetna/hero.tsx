/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/sanity-image';
import HeroImage from '@/public/hero.jpg';
import { kontaktRoute } from '@/routes';
import { formatCategoryLink } from '@/routes';

type HeroSectionProps = {
  data: any;
};

export const Hero = ({ data }: HeroSectionProps) => {
  const specialtiesUrl = formatCategoryLink('specijalnosti');
  return (
    <section className="relative">
      <div className="container px-4 mx-auto z-10">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
          {/* Content: Left Side (2/3 width) */}
          <div className="lg:col-span-2 space-y-6 spacing-section-sm">
            <h1>
              {data.title} <span className="text-primary">{data.highlightedText}</span>
            </h1>
            <p className="md:text-xl max-w-2xl text-muted-foreground">
              <span className="text-primary font-bold">Poliklinika Meter</span>
              {data.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={kontaktRoute} passHref>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-2xl px-8 h-14 shadow-lg shadow-primary/20 cursor-pointer group"
                >
                  {data.cta1}
                  <ChevronRight className="ml-1 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={specialtiesUrl} passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-2xl px-8 h-14 cursor-pointer"
                >
                  {data.cta2}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image: Right Side (1/3 width) */}
          <div className="lg:col-span-1 relative">
            <div className="relative rounded-xl shadow-xl">
              <Image
                src={data.image ? urlFor(data.image).width(600).height(800).url() : HeroImage}
                alt={data.title || 'Poliklinika Meter'}
                width={600}
                height={800}
                className="object-cover rounded-xl shadow-xl w-full h-full"
                priority
              />
              {/* Decorative element behind image */}
              <div className="absolute -bottom-3 -right-3 -z-10 w-full h-full border-4 border-primary/20 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
