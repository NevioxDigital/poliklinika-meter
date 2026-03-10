import { client } from '@/lib/sanity';

export async function getHomeData() {
  return await client.fetch(`*[_type == "homePage"][0]`);
}

// Fetch all services with their categories followed
// sanity/lib/queries.ts
export async function getAllServices() {
  return await client.fetch(`*[_type == "service"] {
    title,
    image,
    "slug": slug.current,
    "category": category->slug.current // This will return 'specijalnosti' or 'medicina-rada'
  }`);
}

// Fetch the Contact Page singleton
export async function getContactData() {
  return await client.fetch(`*[_type == "contactPage"][0]`);
}
