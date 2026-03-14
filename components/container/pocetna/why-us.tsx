/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SanityContent } from '@/components/sanity-content';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/sanity-image';
import Hero from '@/public/hero.jpg';

export const WhyUs = ({ data }: { data: any }) => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage ? urlFor(data.bgImage).width(1920).url() : Hero}
          alt="Poliklinika Meter"
          fill
          className="object-cover object-center grayscale-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-xl bg-background/80  backdrop-blur-md p-8 md:p-14 rounded-2xl shadow-2xl border border-white/20">
          <div className="space-y-4">
            <Badge className="rounded-2xl text-background p-4 text-xs font-bold tracking-widest uppercase">
              {data.badge || 'Zašto mi'}
            </Badge>
            <h5 className="mb-2">
              <SanityContent value={data.title} />
            </h5>
          </div>

          <div className="text-muted-foreground leading-relaxed mb-8">
            <SanityContent value={data.description} />
          </div>

          {/* Feature List */}
          <ul className="grid grid-cols-1 gap-y-4 gap-x-8">
            {data.points?.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-center gap-3 text-foreground font-medium text-sm md: "
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <Link href="/specijalnosti">
              <Button className="rounded-2xl px-6 h-12 font-semibold gap-3 cursor-pointer group">
                {data.cta || 'Saznajte više'}
                <ArrowRight className="w-5 h-5 group-hover:ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
