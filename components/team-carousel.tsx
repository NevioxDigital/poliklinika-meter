/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import * as React from 'react';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

import { DoctorCard } from './doctor-card';

interface TeamCarouselProps {
  doctors: any[];
}

export function TeamCarousel({ doctors }: TeamCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // This effect syncs the dots with the actual scrollable "pages"
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Re-calculate on window resize (important for responsive basis)
    api.on('reInit', () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: false,
          dragFree: true, // Smoother feeling for "peeking" cards
        }}
        className="w-full"
      >
        {/* Header: Arrows on Right */}
        <div className="flex justify-end items-center gap-3">
          <CarouselPrevious className="static translate-y-0 h-16 w-16 border-primary/20 text-primary [&_svg]:size-10 shadow-sm disabled:opacity-20 hover:bg-primary hover:text-background" />
          <CarouselNext className="static translate-y-0 h-16 w-16 border-primary/20 text-primary [&_svg]:size-10 shadow-sm disabled:opacity-20 hover:bg-primary hover:text-background" />
        </div>

        {/* 
            SAFE SIZING LOGIC:
            We set a base percentage. 
            On desktop (4.2 cards): 100 / 4.2 = 23.8%
            On tablet (2.2 cards): 100 / 2.2 = 45.4%
            On mobile (1.2 cards): 100 / 1.2 = 83.3%
        */}
        <CarouselContent className="py-4 md:py-8 ml-32">
          {doctors.map((doctor, index) => (
            <CarouselItem key={index} className="pl-4 basis-[83%] md:basis-[45%] lg:basis-[26.8%]">
              <DoctorCard {...doctor} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Footer: Pagination Dots linked to Snap List */}
        <div className="mt-10 flex items-center justify-center gap-2 ml-32">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                current === index ? 'bg-primary w-8' : 'bg-primary/20 w-2 hover:bg-primary/40',
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
