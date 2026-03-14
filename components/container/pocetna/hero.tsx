/* eslint-disable @typescript-eslint/no-explicit-any */
import { Activity, ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SanityContent } from '@/components/sanity-content';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/sanity-image';
import HeroImage from '@/public/hero.jpg';
import { formatCategoryLink, kontaktRoute } from '@/routes';

type HeroSectionProps = {
  data: any;
};

export const Hero = ({ data }: HeroSectionProps) => {
  const specialtiesUrl = formatCategoryLink('specijalnosti');

  return (
    <section className="relative min-h-[90vh] flex items-center spacing-section-sm ">
      {/* Abstract Medical Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-30 dark:opacity-10 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-primary/20 rounded-2xl blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-primary-400/10 rounded-2xl blur-[100px]" />
      </div>

      <div className="container px-6 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* CONTENT: LEFT SIDE */}
          <div className="lg:col-span-7 xl:col-span-7 z-10 text-center lg:text-left">
            <Badge className="border border-primary/20 text-secondary p-4 text-sm font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Activity className="w-4 h-4" />
              <span>Vaše zdravlje u sigurnim rukama</span>
            </Badge>

            <div className="space-y-8">
              {/* Forced H1 Style Wrapper */}
              <h1>
                <SanityContent value={data.title} />
              </h1>

              <div className="max-w-xl mx-auto lg:mx-0 text-lg md:text-2xl text-foreground leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000">
                <SanityContent value={data.subtitle} />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-10">
              <Link href={kontaktRoute} passHref className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-2xl px-10 h-14 text-md font-bold shadow-2xl shadow-primary/30 transition-all cursor-pointer group">
                  <Calendar className="mr-2 w-5 h-5" />
                  {data.cta1 || 'Naruči se'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:ml-2" />
                </Button>
              </Link>
              <Link href={specialtiesUrl} passHref className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-2xl px-10 h-14 text-md font-bold border-2 hover:bg-primary/5 transition-all cursor-pointer"
                >
                  {data.cta2 || 'Sve Usluge'}
                </Button>
              </Link>
            </div>
          </div>

          {/* IMAGE: RIGHT SIDE */}
          <div className="lg:col-span-5 xl:col-span-5 relative">
            <div className="relative animate-in fade-in zoom-in duration-1000">
              {/* Main Image with modern Border Radius */}
              <div className="relative z-10 aspect-4/5 rounded-2xl overflow-hidden shadow-md shadow-primary border-8 border-card">
                <Image
                  src={data.image ? urlFor(data.image).width(1000).height(1250).url() : HeroImage}
                  alt="Poliklinika Meter"
                  width={1000}
                  height={1250}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Decorative Rings */}
              <div className="absolute -top-4 -right-4 w-48 h-48 border-t-4 border-r-4 border-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
