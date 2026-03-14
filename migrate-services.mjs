import { randomBytes } from 'crypto';

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'zhwt7a92',
  dataset: 'production',
  useCdn: false,
  token:
    'skxmmYf08FezQOr2INEb9I3VfiIaWYNgEtCcWkpkjaw5xB0asBXjy0a3sjxiU0Ui51ZCznhIoD6EDeqCew10jDUXfpCLG6U2ke4r0eh3DlYt37YF6dgyiCdyRHgASC61mbwHJuJnUn853lbMTyDvJVAM6tTC36steZycVVTrdRCZv5xdWqO6',
  apiVersion: '2023-05-03',
});
const genKey = () => randomBytes(6).toString('hex');

const toSimpleBlock = (text, highlightWords = []) => {
  const words = text.split(' ');
  return [
    {
      _type: 'block',
      _key: genKey(),
      children: words.map((word, index) => {
        const cleanWord = word.replace(/[.,!]/g, '');
        const isHighlighted = highlightWords.includes(cleanWord);
        return {
          _type: 'span',
          _key: genKey(),
          text: word + (index === words.length - 1 ? '' : ' '),
          marks: isHighlighted ? ['highlight'] : [],
        };
      }),
      markDefs: [],
      style: 'normal',
    },
  ];
};

const toRichBlock = (text) => [
  {
    _type: 'block',
    _key: genKey(),
    children: [{ _type: 'span', _key: genKey(), text, marks: [] }],
    markDefs: [],
    style: 'normal',
  },
];

async function migratePages() {
  try {
    console.log('🗑️ Flushing old page data...');
    await client.delete({
      query: '*[_type in ["homePage", "contactPage", "teamPage", "contactForm"]]',
    });

    console.log('🏠 Creating Home Page (with Features)...');
    await client.create({
      _id: 'homePage',
      _type: 'homePage',
      hero: {
        title: toSimpleBlock('Vrhunska medicinska skrb u Imotskom', ['Imotskom']),
        subtitle: toRichBlock(
          'Poliklinika Meter okuplja vrhunske specijaliste i nudi najmoderniju dijagnostiku za cijelu obitelj.',
        ),
        cta1: 'Zatraži termin',
        cta2: 'Naše specijalnosti',
        seo: {
          title: 'Poliklinika Meter Imotski | Medicina rada i specijalisti',
          description:
            'Dobrodošli u Polikliniku Meter. Nudimo preglede iz područja medicine rada, kardiologije, ginekologije i mnogih drugih specijalnosti.',
        },
      },
      features: [
        {
          _key: genKey(),
          title: 'Vrhunski specijalisti',
          description: 'Naš tim čine priznati doktori medicine i profesori iz KBC Split i Zagreb.',
          icon: 'Users',
        },
        {
          _key: genKey(),
          title: 'Moderna dijagnostika',
          description: 'Koristimo najsuvremenije Color Doppler uređaje i laboratorijske testove.',
          icon: 'Stethoscope',
        },
        {
          _key: genKey(),
          title: 'Bez čekanja',
          description: 'Poštujemo vaše vrijeme - termini su točni i bez dugih redova u čekaonici.',
          icon: 'Clock',
        },
        {
          _key: genKey(),
          title: 'Sve na jednom mjestu',
          description: 'Obavite kompletnu obradu na jednom mjestu.',
          icon: 'ShieldCheck',
        },
      ],
      servicesLanding: {
        title: toSimpleBlock('Naše Usluge i Specijalnosti', ['Usluge']),
        description: toRichBlock('Pružamo širok spektar medicinskih usluga.'),
      },
      whyUs: {
        badge: 'ZAŠTO ODABRATI NAS',
        title: toSimpleBlock('Individualni pristup pacijentu', ['pacijentu']),
        description: toRichBlock('Dugogodišnje iskustvo i vrhunska oprema.'),
        points: ['Vrhunski tim', 'Moderna oprema', 'Nema čekanja'],
        cta: 'Saznajte više o nama',
      },
      contactSection: {
        heading: toSimpleBlock('Dogovorite svoj termin danas', ['danas']),
        paragraph: toRichBlock(
          'Naš stručni tim će vam se javiti u najkraćem mogućem roku radi potvrde vašeg termina.',
        ),
      },
    });

    console.log('👥 Creating Team Page...');
    await client.create({
      _id: 'teamPage',
      _type: 'teamPage',
      hero: {
        title: toSimpleBlock('Upoznajte naš tim stručnjaka', ['stručnjaka']),
        subtitle: toRichBlock('Naši liječnici su priznati specijalisti u svojim područjima.'),
      },
      teamSection: { title: toSimpleBlock('Liječnici specijalisti', ['specijalisti']) },
    });

    console.log('📞 Creating Contact Page...');
    await client.create({
      _id: 'contactPage',
      _type: 'contactPage',
      title: toSimpleBlock('Kontaktirajte nas', ['nas']),
      subtitle: toRichBlock('Tu smo za sva vaša pitanja i konzultacije.'),
      formHeading: toSimpleBlock('Pošaljite upit', ['upit']),
      formParagraph: toRichBlock('Ispunite obrazac i javit ćemo vam se ubrzo.'),
    });

    console.log('📝 Creating Contact Form...');
    await client.create({
      _id: 'contactForm',
      _type: 'contactForm',
      title: toSimpleBlock('Brzo naručivanje', ['naručivanje']),
      subtitle: toRichBlock('Ostavite svoje podatke i zatražite termin.'),
      ctaLabel: 'Pošalji zahtjev',
    });

    console.log('\n✨ ALL 4 DOCUMENTS MIGRATED SUCCESSFULLY!');
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
  }
}

migratePages();
