import { createClient } from '@sanity/client';

// 1. CONFIGURATION
const client = createClient({
  projectId: 'zhwt7a92',
  dataset: 'production',
  useCdn: false,
  token:
    'skxmmYf08FezQOr2INEb9I3VfiIaWYNgEtCcWkpkjaw5xB0asBXjy0a3sjxiU0Ui51ZCznhIoD6EDeqCew10jDUXfpCLG6U2ke4r0eh3DlYt37YF6dgyiCdyRHgASC61mbwHJuJnUn853lbMTyDvJVAM6tTC36steZycVVTrdRCZv5xdWqO6',
  apiVersion: '2023-05-03',
});

// 2. YOUR DATA (Extracted from your menuItems)
const specijalnosti = [
  {
    title: 'Interna medicina',
    description: 'Sveobuhvatni pregledi i dijagnostika unutarnjih organa.',
    slug: 'interna-medicina',
  },
  {
    title: 'Ginekologija',
    description: 'Zdravstvena skrb za žene, ultrazvuk i preventivni pregledi.',
    slug: 'ginekologija',
  },
  {
    title: 'Kardiologija',
    description: 'Specijalistički pregledi srca, EKG i ultrazvuk srca.',
    slug: 'kardiologija',
  },
  {
    title: 'Neurologija',
    description: 'Dijagnostika i liječenje bolesti živčanog sustava.',
    slug: 'neurologija',
  },
  {
    title: 'Ortopedija',
    description: 'Liječenje bolesti i ozljeda sustava za kretanje.',
    slug: 'ortopedija',
  },
  {
    title: 'Kirurgija',
    description: 'Specijalistički pregledi i mali kirurški zahvati.',
    slug: 'kirurgija',
  },
  {
    title: 'Urologija',
    description: 'Pregledi i dijagnostika mokraćnog i spolnog sustava.',
    slug: 'urologija',
  },
  {
    title: 'Pulmologija',
    description: 'Dijagnostika i liječenje bolesti dišnih puteva i pluća.',
    slug: 'pulmologija',
  },
  {
    title: 'Psihijatrija',
    description: 'Stručna pomoć i savjetovanje za mentalno zdravlje.',
    slug: 'psihijatrija',
  },
  {
    title: 'Radiologija',
    description: 'Ultrazvučna dijagnostika i radiološka očitanja.',
    slug: 'radiologija',
  },
];

const medicinaRada = [
  {
    title: 'Pregledi za zapošljavanje',
    description: 'Liječnička uvjerenja o radnoj sposobnosti.',
    slug: 'pregledi-zaposljavanje',
  },
  {
    title: 'Pregledi za vozače',
    description: 'Liječnički pregledi za sve kategorije vozača.',
    slug: 'pregledi-vozaci',
  },
  {
    title: 'Pregled za oružje',
    description: 'Liječnička uvjerenja za držanje i nošenje oružja.',
    slug: 'pregled-oruzje',
  },
  {
    title: 'Pregledi za sportaše',
    description: 'Sistematski pregledi za profesionalne i amaterske sportaše.',
    slug: 'pregledi-sportasi',
  },
];

// 3. THE MIGRATION LOGIC
async function migrate() {
  console.log('Starting migration...');

  const allServices = [
    ...specijalnosti.map((s) => ({ ...s, category: 'specijalnosti' })),
    ...medicinaRada.map((s) => ({ ...s, category: 'medicina-rada' })),
  ];

  for (const item of allServices) {
    const doc = {
      _type: 'service', // Must match the name in your schema
      title: item.title,
      description: item.description,
      category: item.category,
      slug: {
        _type: 'slug',
        current: item.slug,
      },
    };

    try {
      const result = await client.create(doc);
      console.log(`✅ Created: ${result.title}`);
    } catch (err) {
      console.error(`❌ Failed for ${item.title}:`, err.message);
    }
  }

  console.log('Migration finished!');
}

migrate();
