import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { Suspense } from 'react';

import { Analytics } from '@vercel/analytics/react';

import { BackgroundCrosses } from '@/components/background-crosses';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { RootSkeleton } from '@/components/root-skeleton';
import { TooltipProvider } from '@/components/ui/tooltip';
import { generateViewport, getOrganizationSchema, homeMetadata } from '@/lib/metadata';
import { defaultRobots, rootMetadata } from '@/lib/metadata-helpers';
import { cn } from '@/lib/utils';
import { baseUrl } from '@/routes';

import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="hr"
      dir="ltr"
      suppressHydrationWarning
      className={cn(jakarta.variable, 'scroll-smooth')}
    >
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col font-sans">
        <Suspense fallback={<RootSkeleton />}>
          <ProvidersAndContent>{children}</ProvidersAndContent>
        </Suspense>

        <Analytics />
      </body>
    </html>
  );
}

export async function ProvidersAndContent({ children }: { children: React.ReactNode }) {
  const orgSchema = await getOrganizationSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema).replace(/</g, '\\u003c') }}
      />
      <TooltipProvider>
        <MaxWidthWrapper>
          <Navbar />
          <main className="relative grow flex-1 mt-16">
            <BackgroundCrosses /> {children}
          </main>
          <Footer />
        </MaxWidthWrapper>
      </TooltipProvider>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const homeSeo = await homeMetadata();

  return {
    metadataBase: new URL(baseUrl),
    ...rootMetadata,
    ...homeSeo,
    title: {
      template: '%s | Poliklinika Meter',
      default: 'Poliklinika Meter | Specijalistički medicinski pregledi Imotski',
    },

    // 5. Ikone i roboti
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' }, // Dobro je imati i PNG verziju
      ],
      apple: [{ url: '/apple-touch-icon.png' }],
    },
    robots: defaultRobots,
  };
}
export const viewport: Viewport = generateViewport();
