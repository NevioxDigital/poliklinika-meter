/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from '@sanity/image-url';

// 1. We redefine the config here to avoid importing the heavy 'client'
const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
});

// 2. This is now safe to use in Client Components ('use client')
export function urlFor(source: any) {
  return builder.image(source);
}
