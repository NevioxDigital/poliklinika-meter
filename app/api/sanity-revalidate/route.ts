/* eslint-disable @typescript-eslint/no-explicit-any */
import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

import { SIGNATURE_HEADER_NAME, isValidSignature } from '@sanity/webhook';

import { baseUrl, timRoute } from '@/routes';

const SECRET = process.env.SANITY_REVALIDATE_SECRET;
const INDEX_NOW_KEY = process.env.INDEX_NOW_KEY;
const HOST = 'poliklinika-meter.hr';

export async function POST(req: NextRequest) {
  try {
    // 1. Security Check
    if (!SECRET) {
      return new Response('Missing Server Secret', { status: 500 });
    }

    const signature = req.headers.get(SIGNATURE_HEADER_NAME);
    if (!signature) {
      return new Response('Missing Signature', { status: 401 });
    }

    const bodyText = await req.text();
    const isValid = isValidSignature(bodyText, signature, SECRET);
    if (!isValid) {
      return new Response('Invalid Signature', { status: 401 });
    }

    // 2. Parse Body
    const body = JSON.parse(bodyText);
    const { _type, slug } = body;
    const currentSlug = typeof slug === 'string' ? slug : slug?.current;

    console.log(`[Webhook] Update for type: ${_type}, slug: ${currentSlug}`);

    let changedUrl = '';

    // -----------------------------------------------------------------
    // 3. Revalidate Logic (Poliklinika Meter Specific)
    // -----------------------------------------------------------------

    // Always clear global navigation if structure changes
    revalidateTag('navigation', 'max');
    revalidateTag('sitemap', 'max');

    // CASE A: Global Settings (Address, Phone, etc.)
    if (_type === 'siteData') {
      revalidateTag('site-data', 'max');
      revalidateTag('metadata-root', 'max');
      changedUrl = baseUrl;
    }

    // CASE B: Team & Doctors
    else if (_type === 'teamPage' || _type === 'doctor') {
      revalidateTag('team-page', 'max');
      revalidateTag('metadata-teamPage', 'max');
      changedUrl = `${baseUrl}${timRoute}`;
    }

    // CASE C: Categories (Medicina Rada, Ginekologija, etc.)
    else if (_type === 'category') {
      if (currentSlug) {
        revalidateTag(`category-${currentSlug}`, 'max');
        revalidateTag(`metadata-${currentSlug}`, 'max');
        changedUrl = `${baseUrl}/${currentSlug}`;
      }
    }

    // CASE D: Services (EKG, Systematic, etc.)
    else if (_type === 'service') {
      revalidateTag('services-all', 'max');
      // If a service belongs to a category, you might want to clear navigation
      revalidateTag('navigation', 'max');
    }

    // -----------------------------------------------------------------
    // 4. IndexNow & SEO Pings (Bing/Yandex)
    // -----------------------------------------------------------------
    if (INDEX_NOW_KEY) {
      // A. Instant indexing for specific changed URL
      if (changedUrl) {
        fetch('https://www.bing.com/indexnow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({
            host: HOST,
            key: INDEX_NOW_KEY,
            keyLocation: `${baseUrl}/${INDEX_NOW_KEY}.txt`,
            urlList: [changedUrl],
          }),
        }).catch((e) => console.error('IndexNow Error:', e));
      }

      // B. Ping Sitemap for general re-crawl
      fetch(`https://www.bing.com/ping?sitemap=${baseUrl}/sitemap.xml`).catch((e) =>
        console.error('Bing Sitemap Ping Error:', e),
      );
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      type: _type,
      slug: currentSlug,
    });
  } catch (err: any) {
    console.error('[Webhook] Error:', err.message);
    return new Response(err.message, { status: 500 });
  }
}
