import { client } from '@/lib/sanity';

/**
 * PAGE SINGLETONS
 */
export async function getHomeData() {
  return await client.fetch(`*[_type == "homePage"][0]`);
}

export async function getCategoryPageData(slug: string) {
  return await client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      title,
      description,
      "services": *[_type == "service" && references(^._id)] | order(_createdAt asc) {
        title,
        slug,
        description,
        image
      }
    }`,
    { slug },
  );
}

export async function getContactData() {
  return await client.fetch(`*[_type == "contactPage"][0]`);
}

/**
 * SERVICES (Flat list)
 * Used for: Home page cards, dynamic metadata, and sitemaps.
 */
export async function getAllServices() {
  return await client.fetch(`*[_type == "service"] {
    title,
    description,
    image,
    "slug": slug.current,
    "category": category->slug.current
  }`);
}

/**
 * NAVIGATION (Nested tree)
 * Used for: Navbar dropdowns and Footer links.
 * This replaces the need for 'getAllCategories' entirely.
 */
export async function getNavigationData() {
  return await client.fetch(`
    *[_type == "category"] | order(title asc) {
      title,
      "slug": slug.current,
      "services": *[_type == "service" && references(^._id)] | order(title asc) {
        title,
        description,
        icon,
        "slug": slug.current
      }
    }
  `);
}
