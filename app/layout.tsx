import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { Suspense } from 'react';

import { Analytics } from '@vercel/analytics/react';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { RootSkeleton } from '@/components/root-skeleton';
import { TooltipProvider } from '@/components/ui/tooltip';
import { getOrganizationSchema } from '@/lib/metadata';
import { generateViewport } from '@/lib/metadata';
import { rootMetadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';

import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = await getOrganizationSchema();

  return (
    <html
      lang="hr"
      dir="ltr"
      suppressHydrationWarning
      className={cn(jakarta.variable, 'scroll-smooth')}
    >
      <head>
        {/* JSON-LD schema as dangerously rendered string */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema).replace(/</g, '\\u003c') }}
        />
      </head>

      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col font-sans">
        <MaxWidthWrapper>
          <Navbar />
          <Suspense fallback={<RootSkeleton />}>
            <TooltipProvider>
              <Suspense fallback={<RootSkeleton />}>
                <main className="relative grow flex-1 mt-16">{children}</main>
              </Suspense>
            </TooltipProvider>
          </Suspense>
          <Footer />
        </MaxWidthWrapper>
        <Analytics />
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return await rootMetadata();
}

export const viewport = generateViewport();
