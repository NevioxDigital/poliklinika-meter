import { cacheLife, cacheTag } from 'next/cache';

import { client } from '@/lib/sanity';

/**
 * 1. GLOBAL & METADATA ACTIONS
 */

export async function getSiteData() {
  'use cache';
  cacheLife('max');
  cacheTag('site-data');

  // FIX: Removed space before siteData
  return await client.fetch(`*[_type == "siteData"][0] {
    title,
    description,
    keywords,
    contactInfo,
    openingHours,
    socials,
    "ogImageUrl": ogImage.asset->url
  }`);
}

export async function getMetadata(identifier: string) {
  'use cache';
  cacheLife('max');
  cacheTag('site-data', `metadata-${identifier}`);

  const query = `
    {
      "data": *[_type == "siteData"][0] {
        title,
        description,
        keywords,
        "ogImageUrl": ogImage.asset->url
      },
      "page": *[_type == $identifier || slug.current == $identifier][0] {
        title,
        seo {
          title,
          description,
          "imageUrl": image.asset->url
        }
      }
    }
  `; // FIX: Removed space before siteData in the query above
  return await client.fetch(query, { identifier });
}

/**
 * 2. PAGE SPECIFIC ACTIONS
 */

export async function getCategoryPageData(slug: string) {
  'use cache';
  cacheLife('max');
  cacheTag(`category-${slug}`);

  return await client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      title,
      description,
      "services": *[_type == "service" && references(^._id)] | order(_createdAt asc) {
        title,
        "slug": slug.current,
        description,
        image
      }
    }`,
    { slug },
  );
}

export async function getTeamPageData() {
  'use cache';
  cacheLife('max');
  cacheTag('team-page');

  return await client.fetch(`
    {
      "page": *[_type == "teamPage"][0] {
        hero,
        "carouselImages": carouselImages[]{
          "url": image.asset->url,
          "alt": image.alt
        },
        teamSection
      },
      "doctors": *[_type == "doctor"] | order(_createdAt asc) {
        name,
        title,
        department,
        "imageUrl": image.asset->url
      }
    }
  `);
}

export async function getPageData(type: string) {
  'use cache';
  cacheLife('max');
  cacheTag(`page-${type}`);

  return await client.fetch(`*[_type == $type][0]`, { type });
}

/**
 * 3. NAVIGATION & UTILITIES
 */

export async function getNavigationData() {
  'use cache';
  cacheLife('max');
  cacheTag('navigation');

  return await client.fetch(`
    *[_type == "category"] | order(title asc) {
      title,
      "slug": slug.current,
      "services": *[_type == "service" && references(^._id)] | order(title asc) {
        title,
        "slug": slug.current
      }
    }
  `);
}

export async function getAllServices() {
  'use cache';
  cacheLife('max');
  cacheTag('services-all');

  return await client.fetch(`*[_type == "service"] {
    title,
    "slug": slug.current,
    "categorySlug": category->slug.current
  }`);
}
