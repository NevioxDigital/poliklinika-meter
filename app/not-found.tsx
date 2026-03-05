import { MousePointer2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getNotFoundMetadata } from '@/lib/metadata';
import Logo from '@/public/logo.png';
import { baseUrl } from '@/routes';

export default async function NotFoundPage() {
  return (
    <section className="relative flex flex-col items-center justify-start w-full min-h-screen px-4 text-center">
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Large 404 Gradient Text */}
        <Image
          src={Logo}
          alt="Poliklinika Meter Logo"
          title="Poliklinika Meter Logo"
          priority
          width={500}
          height={500}
          className="opacity-20"
        />

        <div className="space-y-2 -mt-10 md:-mt-30">
          <h2 className="font-semibold text-primary">Stranica nije pronađena</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg">
            Stranica koju tražite ne postoji ili je premještena. Molimo provjerite URL ili se
            vratite na početnu stranicu.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-4">
          <Link href={baseUrl} title="Povratak na početnu" className="inline-block">
            <Button variant="default" size="lg" className="rounded-xl p-8 group">
              <span className="font-medium">Povratak na početnu</span>
              <MousePointer2 className="w-5 h-5 text-background transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata() {
  return await getNotFoundMetadata();
}
