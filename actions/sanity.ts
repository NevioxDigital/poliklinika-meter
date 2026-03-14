import { cacheLife, cacheTag } from 'next/cache';

import { client } from '@/lib/sanity';

/**
 * 1. GLOBAL & METADATA ACTIONS
 */

export async function getSiteData() {
  'use cache';
  cacheLife('max');
  cacheTag('site-data');

  return await client.fetch(`*[_type == "siteData"][0] {
    title,
    description,
    keywords,
    contactInfo,
    openingHours,
    socials,
    // SiteData schema uses "image" for the OG image
    "ogImageUrl": image.asset->url
  }`);
}

export async function getMetadata(identifier: string) {
  'use cache';
  cacheLife('max');
  cacheTag('site-data', `metadata-${identifier}`);

  // We use pt::text() to ensure the metadata title is a string even if the CMS title is styled
  const query = `
    {
      "site": *[_type == "siteData"][0] {
        title,
        description,
        keywords,
        "ogImageUrl": image.asset->url
      },
      "page": *[_type == $identifier || slug.current == $identifier][0] {
        "title": pt::text(title), 
        seo {
          title,
          description,
          "imageUrl": image.asset->url
        }
      }
    }
  `;
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
        title, // This is the RAW ARRAY for SanityContent
        "plainTitle": pt::text(title), // This is the PLAIN STRING 
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
          "url": asset->url,
          "alt": alt
        },
        teamSection
      },
      "doctors": *[_type == "doctor"] | order(_createdAt asc) {
        name,
        title,
        department,
        "imageUrl": image.asset->url,
        "alt": image.alt
      }
    }
  `);
}

export async function getPageData(type: string) {
  'use cache';
  cacheLife('max');
  cacheTag(`page-${type}`);

  // Fetching singleton pages (homePage, contactPage, etc.)
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
      "title": pt::text(title), 
      "slug": slug.current,
      "services": *[_type == "service" && references(^._id)] | order(title asc) {
        // Use pt::text to get a plain string for the navigation menu
        "title": pt::text(title), 
        "slug": slug.current,
        "icon": icon
      }
    }
  `);
}

export async function getAllServices() {
  'use cache';
  cacheLife('max');
  cacheTag('services-all');

  return await client.fetch(`*[_type == "service"] {
    "title": pt::text(title), // Converts styled title to a plain string for the dropdown
    "slug": slug.current,
    "categorySlug": category->slug.current // Follows the reference to the category slug
  }`);
}
