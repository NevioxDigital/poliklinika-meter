import type { Metadata } from 'next';
import { cacheLife, cacheTag } from 'next/cache';

import { baseUrl } from '@/routes';
import { formatFullUrl, formatServiceLink } from '@/routes';

import { cleanKeywords, defaultRobots, getSocialMetadata } from './metadata-helpers';
import { trimDescription, trimTitle } from './utils';

/**
 * --- METADATA ZA POČETNU STRANICU ---
 */
export const homeMetadata = async () => {
  'use cache';
  cacheLife('max');
  cacheTag('metadata-home');

  const title = 'Poliklinika Meter - Specijalistička poliklinika u Imotskom';
  const description =
    'Poliklinika Meter je specijalistička poliklinika smještena u Imotskom, posvećena pružanju vrhunske zdravstvene skrbi u području interne medicine, ginekologije i medicine rada. Naša misija je unaprijediti zdravlje i dobrobit naših pacijenata kroz stručnu njegu, inovativne pristupe i individualizirane planove liječenja. Posjetite nas i doživite vrhunsku medicinsku uslugu u srcu Dalmacije.';
  const keywords = [
    'Poliklinika Meter',
    'specijalistička poliklinika',
    'Imotski',
    'interna medicina',
    'ginekologija',
    'medicina rada',
    'zdravstvena skrb',
    'pregledi',
    'dijagnostika',
  ];
  const alternates = {
    canonical: baseUrl,
  };
  return {
    title: trimTitle(title),
    description: trimDescription(description),
    keywords: cleanKeywords(keywords),
    alternates,
    robots: defaultRobots,
    ...getSocialMetadata({
      title,
      description,
      url: alternates.canonical,
      type: 'website',
    }),
  } satisfies Metadata;
};

/**
 * --- METADATA ZA SPECIJALNOSTI (Interna, Ginekologija itd.) ---
 */
export async function getServiceMetadata(
  title: string,
  description: string,
  categorySlug: string, // Added this parameter
  serviceSlug: string, // Added this parameter
): Promise<Metadata> {
  // Use the central helper
  const relativePath = formatServiceLink(categorySlug, serviceSlug);
  const fullUrl = formatFullUrl(relativePath);

  const fullTitle = `${title} | Poliklinika Meter`;

  return {
    title: trimTitle(fullTitle),
    description: trimDescription(description),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      type: 'article',
    },
    // This ensures JSON-LD also matches
    other: {
      'jsonld-id': `${fullUrl}#service`,
    },
  } satisfies Metadata;
}

// --- 404 ---
export async function getNotFoundMetadata() {
  'use cache';
  cacheLife('max');

  const title = trimTitle('Stranica nije pronađena');
  const description = trimDescription(
    'Stranica koju tražite ne postoji ili je premještena. Molimo provjerite URL ili se vratite na početnu stranicu.',
  );

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
    },
  };
}
/**
 * --- SCHEMAS (JSON-LD) ---
 */

// --- MEDICAL BUSINESS SCHEMA (Glavni identitet klinike) ---
export const getOrganizationSchema = async () => {
  'use cache';
  cacheLife('max');

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: 'Poliklinika Meter',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/`,
    description:
      'Specijalistička poliklinika u Imotskom za internu medicinu, ginekologiju i medicinu rada.',
    telephone: '+38521XXXXXX', // Unesi pravi broj
    email: 'info@poliklinika-meter.hr',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ulica XXXX XXXX', // Unesi pravu adresu
      addressLocality: 'Imotski',
      postalCode: '21000',
      addressCountry: 'HR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.5081',
      longitude: '16.4402',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    medicalSpecialty: [
      'Cardiovascular',
      'Gynecologic',
      'InternalMedicine',
      'Neurological',
      'PublicHealth', // Za medicinu rada
    ],
    sameAs: [
      'https://www.facebook.com/poliklinikameter',
      'https://www.instagram.com/poliklinikameter',
    ],
  };
};

// --- SERVICE SCHEMA (Za pojedine preglede) ---
export const getMedicalServiceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': `${baseUrl}${path}#service`,
  name: `${name} - Poliklinika Meter Imotski`,
  description: description,
  url: `${baseUrl}${path}`,
  provider: {
    '@id': `${baseUrl}/#organization`,
  },
  mainEntity: {
    '@type': 'MedicalCondition', // Ili 'MedicalProcedure' ovisno o usluzi
    name: name,
  },
});

// --- FAQ SCHEMA ---
export const getFAQSchema = (faqs: { q: string; a: string }[], pageUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${pageUrl}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
});

/**
 * --- VIEWPORT ---
 */
export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0ea5e9', // Prilagodi boji svoje poliklinike (npr. primarna plava)
  };
}
