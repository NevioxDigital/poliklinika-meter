import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: 'upgrade-insecure-requests' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
];

const nextConfig: NextConfig = {
  // ✅ 1. SECURITY & CACHING
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
  poweredByHeader: false,
  reactStrictMode: true,
  cacheComponents: true,

  // ✅ 2. ELITE PERFORMANCE FLAGS (Next.js 15/16)
  experimental: {
    optimizeCss: {
      fonts: true,
      inlineFonts: true,
    }, // Critical CSS via 'critters'

    // This list ensures that the browser only downloads the tiny
    // parts of these libraries that you actually use.
    optimizePackageImports: ['lucide-react'],
  },

  // ✅ 3. IMAGE OPTIMIZATION (FCP/LCP focus)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'cdn.sanity.io' },
    //   { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    // ],
  },
};

export default nextConfig;
