import Image from 'next/image';

import { ContactSection } from '@/components/contact-section';
import { Button } from '@/components/ui/button';
import LocationImage from '@/public/lokacija.png';

export default function ContactPage() {
  return (
    // Changed h-auto to min-h-screen to ensure full height
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* 1. THE MAP IMAGE - Anchored Top-Right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage: 'linear-gradient(to bottom left, black 10%, transparent 65%)',
          WebkitMaskImage: 'linear-gradient(to bottom left, black 10%, transparent 65%)',
        }}
      >
        <Image
          src={LocationImage}
          alt="Our location"
          priority
          fill
          // object-right-top ensures the map focus is in the corner
          className="object-cover object-top-right scale-100"
          quality={100}
        />
      </div>

      {/* 2. GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-1 bg-linear-to-bl from-transparent via-background/20 to-background" />

      {/* 3. THE CONTENT LAYER */}
      <div className="relative z-10 min-h-screen container mx-auto px-6 lg:px-12">
        {/* Removed items-center here so we can control columns individually */}
        <div className="grid min-h-screen lg:grid-cols-2">
          {/* LEFT SIDE: Centered Content */}
          <div className="flex flex-col justify-center py-20">
            <div className="max-w-xl">
              <h1 className="mb-6 text-5xl lg:text-7xl font-bold tracking-tighter">
                Let&apos;s talk.
              </h1>
              <p className="text-foreground mb-10">
                We’d love to hear from you. Our team is usually active within an hour to help you
                with any questions.
              </p>
              <ContactSection />
            </div>
          </div>

          {/* RIGHT SIDE: Content Pushed to Bottom */}
          <div className="hidden lg:flex flex-col justify-end items-end pb-20">
            <div className="flex flex-col justify-start items-start max-w-sm bg-background/10 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
              <h3 className="font-extrabold">Posjetite Nas</h3>
              <p className="text-muted-foreground mt-2">
                Ulica Tina Ujevića 6
                <br />
                Imotski, 21260
              </p>
              <Button
                variant="link"
                className="mt-4 p-0 h-auto text-sm font-bold cursor-pointer hover:no-underline group"
              >
                Otvori u Google Mapsu{' '}
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
