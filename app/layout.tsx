import type { Metadata,Viewport } from 'next';

import { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { RootSkeleton } from '@/components/root-skeleton';
import { TooltipProvider } from '@/components/ui/tooltip';
import MaxWidthWrapper from '@/components/ui/max-width-wrapper';
import { getOrganizationSchema,generateViewport,homeMetadata } from '@/lib/metadata';
import { defaultRobots,rootMetadata } from '@/lib/metadata-helpers';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/layout/navbar';
import { baseUrl } from '@/routes';
import './globals.css';


const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export default async function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hr"
      suppressHydrationWarning
      className={`${jakarta.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Suspense fallback={<RootSkeleton />}>
          <ProvidersAndContent>{children}</ProvidersAndContent>
        </Suspense>

        <Analytics />
      </body>
    </html>
  );
}

export async function ProvidersAndContent({
  children,
}: {
  children: React.ReactNode;
}) {
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
                  <main className="relative grow flex-1">{children}</main>
                  
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
      apple: [
        { url: '/apple-touch-icon.png' },
      ],
    },
    robots: defaultRobots,
  };
}
export const viewport: Viewport = generateViewport();