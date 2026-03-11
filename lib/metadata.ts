/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from 'next';
import { cacheLife, cacheTag } from 'next/cache';

import { getMetadata, getSiteData } from '@/actions/sanity';
import { baseUrl, formatFullUrl } from '@/routes';

import { cleanKeywords, defaultRobots, getSocialMetadata } from './metadata-helpers';
import { trimDescription, trimTitle } from './utils';

/**
 * --- ROOT METADATA ---
 */
export async function rootMetadata(): Promise<Metadata> {
  'use cache';
  cacheLife('max');
  cacheTag('metadata-pages', `metadata-root`);

  const siteData = await getSiteData();

  // console.log(siteData); // This will now show data instead of null

  return {
    // FIX: Use the string directly, do not wrap in new URL()
    metadataBase: baseUrl as any,
    applicationName: siteData?.title || 'Poliklinika Meter',
    authors: [{ name: 'Poliklinika Meter', url: baseUrl }],
    creator: 'Neviox Digital',
    publisher: 'Poliklinika Meter',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    title: {
      default: siteData?.title || 'Poliklinika Meter',
      template: '%s | Poliklinika Meter',
    },
    description: siteData?.description || '',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

// ... in generateDynamicMetadata ...
// Ensure you are using the correct variable names from the fetch result
export async function generateDynamicMetadata(identifier: string, path: string): Promise<Metadata> {
  'use cache';
  cacheLife('max');
  cacheTag('metadata-pages', `metadata-${identifier}`);

  const result = await getMetadata(identifier);

  // These match the keys in your GROQ query: "data" and "page"
  const data = result?.data;
  const page = result?.page;
  const seo = page?.seo;

  const finalTitle =
    seo?.title || (page?.title ? `${page.title} | Poliklinika Meter` : data?.title);
  const finalDesc = seo?.description || data?.description;
  const finalImage = seo?.imageUrl || data?.ogImageUrl || '/opengraph-image.png';

  const canonicalUrl = formatFullUrl(path);

  return {
    title: trimTitle(finalTitle),
    description: trimDescription(finalDesc),
    keywords: cleanKeywords(data?.keywords),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: defaultRobots,
    ...getSocialMetadata({
      title: finalTitle,
      description: finalDesc,
      url: canonicalUrl,
      image: finalImage,
    }),
  } satisfies Metadata;
}

/**
 * --- 404 ---
 */
export async function getNotFoundMetadata() {
  'use cache';
  cacheLife('max');

  return {
    title: trimTitle('Stranica nije pronađena'),
    description: trimDescription('Stranica koju tražite ne postoji.'),
    robots: { index: false, follow: false },
  };
}

/**
 * --- SCHEMAS (JSON-LD) ---
 */

export const getOrganizationSchema = async () => {
  'use cache';
  cacheLife('max');
  cacheTag('site-data', 'organization-schema');

  const siteData = await getSiteData();
  const contact = siteData?.contactInfo;

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: 'Poliklinika Meter',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: siteData?.ogImageUrl || `${baseUrl}/hero.jpg`,
    description: siteData?.description,
    telephone: contact?.phone || '',
    email: contact?.email || '',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact?.address || '',
      addressLocality: contact?.addressLocality || 'Imotski',
      postalCode: contact?.postalCode || '21260',
      addressCountry: 'HR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contact?.lat || '43.4471',
      longitude: contact?.lng || '17.2139',
    },
    openingHoursSpecification:
      siteData?.openingHours?.map((oh: any) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: oh.days,
        opens: oh.opens,
        closes: oh.closes,
      })) || [],
    medicalSpecialty: [
      'Cardiovascular',
      'Gynecologic',
      'InternalMedicine',
      'Neurological',
      'PublicHealth',
    ],
    sameAs: [siteData?.socials?.facebook, siteData?.socials?.instagram].filter(Boolean),
  };
};

export const getMedicalServiceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': `${baseUrl}${path}#service`,
  name: `${name} - Poliklinika Meter Imotski`,
  description: description,
  url: `${baseUrl}${path}`,
  provider: { '@id': `${baseUrl}/#organization` },
  mainEntity: {
    '@type': 'MedicalCondition',
    name: name,
  },
});

export const getFAQSchema = (faqs: { q: string; a: string }[], pageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff',
  };
}
