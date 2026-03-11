import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zhwt7a92',
  dataset: 'production',
  useCdn: false,
  token:
    'skxmmYf08FezQOr2INEb9I3VfiIaWYNgEtCcWkpkjaw5xB0asBXjy0a3sjxiU0Ui51ZCznhIoD6EDeqCew10jDUXfpCLG6U2ke4r0eh3DlYt37YF6dgyiCdyRHgASC61mbwHJuJnUn853lbMTyDvJVAM6tTC36steZycVVTrdRCZv5xdWqO6',
  apiVersion: '2023-05-03',
});

const specijalnosti = [
  {
    title: 'Interna medicina',
    slug: 'interna-medicina',
    icon: 'Activity',
    description: 'Sveobuhvatni pregledi i dijagnostika unutarnjih organa.',
  },
  {
    title: 'Ginekologija',
    slug: 'ginekologija',
    icon: 'Baby',
    description: 'Zdravstvena skrb za žene, ultrazvuk i preventivni pregledi.',
  },
  {
    title: 'Kardiologija',
    slug: 'kardiologija',
    icon: 'Heart',
    description: 'Specijalistički pregledi srca, EKG i ultrazvuk srca.',
  },
  {
    title: 'Neurologija',
    slug: 'neurologija',
    icon: 'Brain',
    description: 'Dijagnostika i liječenje bolesti živčanog sustava.',
  },
  {
    title: 'Ortopedija',
    slug: 'ortopedija',
    icon: 'Bone',
    description: 'Liječenje bolesti i ozljeda sustava za kretanje.',
  },
  {
    title: 'Kirurgija',
    slug: 'kirurgija',
    icon: 'Syringe',
    description: 'Specijalistički pregledi i mali kirurški zahvati.',
  },
  {
    title: 'Urologija',
    slug: 'urologija',
    icon: 'UserRound',
    description: 'Pregledi i dijagnostika mokraćnog i spolnog sustava.',
  },
  {
    title: 'Pulmologija',
    slug: 'pulmologija',
    icon: 'Wind',
    description: 'Dijagnostika i liječenje bolesti dišnih puteva i pluća.',
  },
  {
    title: 'Psihijatrija',
    slug: 'psihijatrija',
    icon: 'Stethoscope',
    description: 'Stručna pomoć i savjetovanje za mentalno zdravlje.',
  },
  {
    title: 'Radiologija',
    slug: 'radiologija',
    icon: 'Radiation',
    description: 'Ultrazvučna dijagnostika i radiološka očitanja.',
  },
];

const medicinaRada = [
  {
    title: 'Pregledi za zapošljavanje',
    slug: 'pregledi-zaposljavanje',
    icon: 'ClipboardList',
    description: 'Liječnička uvjerenja o radnoj sposobnosti.',
  },
  {
    title: 'Pregledi za vozače',
    slug: 'pregledi-vozaci',
    icon: 'Car',
    description: 'Liječnički pregledi za sve kategorije vozača.',
  },
  {
    title: 'Pregled za oružje',
    slug: 'pregled-oruzje',
    icon: 'Crosshair',
    description: 'Liječnička uvjerenja za držanje i nošenje oružja.',
  },
  {
    title: 'Pregledi za sportaše',
    slug: 'pregledi-sportasi',
    icon: 'Trophy',
    description: 'Sistematski pregledi za profesionalne i amaterske sportaše.',
  },
];

async function resetAndMigrate() {
  try {
    console.log('🗑️ Deleting all existing services...');
    // Delete all documents of type "service"
    await client.delete({ query: '*[_type == "service"]' });

    console.log('📁 Creating/Ensuring Categories exist...');
    const categories = [
      { id: 'cat-specijalnosti', title: 'Specijalnosti', slug: 'specijalnosti' },
      { id: 'cat-medicina-rada', title: 'Medicina Rada', slug: 'medicina-rada' },
    ];

    for (const cat of categories) {
      await client.createOrReplace({
        _id: cat.id,
        _type: 'category',
        title: cat.title,
        slug: { _type: 'slug', current: cat.slug },
      });
      console.log(`  ✅ Category ready: ${cat.title}`);
    }

    console.log('🚀 Migrating Services...');
    const allServices = [
      ...specijalnosti.map((s) => ({ ...s, catId: 'cat-specijalnosti' })),
      ...medicinaRada.map((s) => ({ ...s, catId: 'cat-medicina-rada' })),
    ];

    for (const item of allServices) {
      const doc = {
        _id: `service-${item.slug}`,
        _type: 'service',
        title: item.title,
        description: item.description,
        icon: item.icon,
        slug: { _type: 'slug', current: item.slug },
        // THIS TIES THE LINKED DATA (REFERENCE)
        category: {
          _type: 'reference',
          _ref: item.catId, // Points to the ID of the category we just created
        },
      };

      await client.createOrReplace(doc);
      console.log(`  ✅ Service created: ${item.title}`);
    }

    console.log('\n✨ Reset and Migration Successful!');
  } catch (err) {
    console.error('\n❌ Migration failed:', err.message);
  }
}

resetAndMigrate();
