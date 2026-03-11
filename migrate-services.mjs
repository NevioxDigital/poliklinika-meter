import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zhwt7a92',
  dataset: 'production',
  useCdn: false,
  token:
    'skxmmYf08FezQOr2INEb9I3VfiIaWYNgEtCcWkpkjaw5xB0asBXjy0a3sjxiU0Ui51ZCznhIoD6EDeqCew10jDUXfpCLG6U2ke4r0eh3DlYt37YF6dgyiCdyRHgASC61mbwHJuJnUn853lbMTyDvJVAM6tTC36steZycVVTrdRCZv5xdWqO6',
  apiVersion: '2023-05-03',
});

const globalSeoData = {
  _id: 'siteData', // Singleton ID
  _type: 'siteData',

  // MAX SEO TITLE: Brand + Primary Service + Location (approx 58 chars)
  title: 'Poliklinika Meter Imotski - Medicina Rada i Specijalisti',

  // MAX SEO DESCRIPTION: Strategic keywords + Call to Action (approx 155 chars)
  description:
    'Poliklinika Meter u Imotskom nudi vrhunske usluge medicine rada, ginekologije i kardiologije. Stručni tim i moderna dijagnostika za vaše zdravlje. Nazovite nas.',

  // STRATEGIC KEYWORDS
  keywords: [
    'Poliklinika Meter',
    'Imotski',
    'Medicina rada Imotski',
    'Ginekolog Imotski',
    'Kardiologija Dalmacija',
    'Sistematski pregledi',
    'Liječnički pregled za vozače',
    'Ultrazvuk Imotski',
  ],

  contactInfo: {
    phone: '021 841 545',
    email: 'info@poliklinika-meter.hr', // Placeholder
    address: 'Ul. Tina Ujevića 4, 21260, Imotski',
    googleMapsUrl: 'https://maps.app.goo.gl/RTy8scVLWmkuj4Pp6',
    lat: 43.44752, // Precise coordinate for Tina Ujevića 4
    lng: 17.21401,
  },

  openingHours: [
    { days: 'Ponedjeljak - Petak', hours: '08:00 – 19:00' },
    { days: 'Subota', hours: '08:00 – 13:00' },
    { days: 'Nedjelja', hours: 'Zatvoreno' },
  ],

  socials: {
    facebook: 'https://www.facebook.com/p/poliklinika_drmeter-100063538600292/?locale=hr_HR',
    instagram: 'https://www.instagram.com/poliklinika_dr.meter/',
  },
};

async function migrateGlobalSeo() {
  try {
    console.log('🚀 Starting Global SEO Migration...');

    // createOrReplace ensures that even if you run this twice, it only updates the single document
    await client.createOrReplace(globalSeoData);

    console.log('\n✅ SUCCESS: Global SEO and Site Data migrated.');
    console.log(`📍 Address: ${globalSeoData.contactInfo.address}`);
    console.log(`📞 Phone: ${globalSeoData.contactInfo.phone}`);
    console.log('\n✨ All done!');
  } catch (err) {
    console.error('\n❌ ERROR during migration:', err.message);
  }
}

migrateGlobalSeo();
