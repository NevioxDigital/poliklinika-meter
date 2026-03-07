// components/sections/WhyUs.tsx
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import ContentWrapper from '@/components/ui/content-wrapper';

// Assuming standard shadcn path

export const WhyUs = () => {
  return (
    <section className="relative w-full min-h-150 flex items-center spacing-section">
      {/* 1. Full Size Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/why-us.jpg"
          alt="Zašto odabrati Polikliniku Meter"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay to ensure text readability if needed, 
            or a gradient from left to right */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* 2. Absolute Content inside ContentWrapper */}
      <ContentWrapper className="relative z-10">
        <div className="max-w-xl bg-background backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-xl">
          <div className="space-y-6">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Naša Prednost
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Zašto odabrati Polikliniku Meter?
              </h2>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              U Poliklinici Meter, vaša dobrobit je naš prioritet. Naš pristup temelji se na tri
              ključna stupa:
            </p>

            {/* Feature List for "Why Us" */}
            <ul className="space-y-4">
              {[
                'Vrhunski tim liječnika specijalista',
                'Najsuvremenija dijagnostička oprema',
                'Individualni pristup svakom pacijentu',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href="/usluge">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-14 text-md font-semibold gap-2 transition-transform hover:scale-105"
                >
                  Saznaj više o našim uslugama
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};
