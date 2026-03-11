import { createClient } from 'next-sanity';
import 'server-only';

// Only for Server Actions / Server Components
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2025-03-15',
  useCdn: true,
  perspective: 'published',
});
