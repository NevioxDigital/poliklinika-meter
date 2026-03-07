import {
  baseUrl,
  ginekologijaRoute,
  internaMedicinaRoute,
  kardiologijaRoute,
  kirurgijaRoute,
  kontaktRoute,
  medicinaRadaRoute,
  neurologijaRoute,
  ortopedijaRoute,
  pregledOruzjeRoute,
  preglediSportasiRoute,
  preglediVozaciRoute,
  preglediZaposljavanjeRoute,
  psihijatrijaRoute,
  pulmologijaRoute,
  radiologijaRoute,
  specijalnostiRoute,
  timRoute,
  urologijaRoute,
} from '@/routes';

export const menuItems = [
  {
    title: 'Početna',
    url: baseUrl,
  },
  {
    title: 'Specijalnosti',
    url: specijalnostiRoute,
    items: [
      {
        title: 'Interna medicina',
        description: 'Sveobuhvatni pregledi i dijagnostika unutarnjih organa.',
        url: internaMedicinaRoute,
      },
      {
        title: 'Ginekologija',
        description: 'Zdravstvena skrb za žene, ultrazvuk i preventivni pregledi.',
        url: ginekologijaRoute,
      },
      {
        title: 'Kardiologija',
        description: 'Specijalistički pregledi srca, EKG i ultrazvuk srca.',
        url: kardiologijaRoute,
      },
      {
        title: 'Neurologija',
        description: 'Dijagnostika i liječenje bolesti živčanog sustava.',
        url: neurologijaRoute,
      },
      {
        title: 'Ortopedija',
        description: 'Liječenje bolesti i ozljeda sustava za kretanje.',
        url: ortopedijaRoute,
      },
      {
        title: 'Kirurgija',
        description: 'Specijalistički pregledi i mali kirurški zahvati.',
        url: kirurgijaRoute,
      },
      {
        title: 'Urologija',
        description: 'Pregledi i dijagnostika mokraćnog i spolnog sustava.',
        url: urologijaRoute,
      },
      {
        title: 'Pulmologija',
        description: 'Dijagnostika i liječenje bolesti dišnih puteva i pluća.',
        url: pulmologijaRoute,
      },
      {
        title: 'Psihijatrija',
        description: 'Stručna pomoć i savjetovanje za mentalno zdravlje.',
        url: psihijatrijaRoute,
      },
      {
        title: 'Radiologija',
        description: 'Ultrazvučna dijagnostika i radiološka očitanja.',
        url: radiologijaRoute,
      },
    ],
  },
  {
    title: 'Medicina rada',
    url: medicinaRadaRoute,
    items: [
      {
        title: 'Pregledi za zapošljavanje',
        description: 'Liječnička uvjerenja o radnoj sposobnosti.',
        url: preglediZaposljavanjeRoute,
      },
      {
        title: 'Pregledi za vozače',
        description: 'Liječnički pregledi za sve kategorije vozača.',
        url: preglediVozaciRoute,
      },
      {
        title: 'Pregled za oružje',
        description: 'Liječnička uvjerenja za držanje i nošenje oružja.',
        url: pregledOruzjeRoute,
      },
      {
        title: 'Pregledi za sportaše',
        description: 'Sistematski pregledi za profesionalne i amaterske sportaše.',
        url: preglediSportasiRoute,
      },
    ],
  },
  {
    title: 'Naš tim i poliklinika',
    url: timRoute,
  },
];
export const footerMenuItems = [
  {
    title: 'Poliklinika',
    links: [
      { text: 'Početna', url: baseUrl },
      { text: 'Kontakt', url: kontaktRoute },
      { text: 'Naš tim i poliklinika', url: timRoute },
    ],
  },

  {
    title: 'Medicina rada',
    links: [
      { text: 'Pregledi za zapošljavanje', url: preglediZaposljavanjeRoute },
      { text: 'Pregledi za vozače', url: preglediVozaciRoute },
      { text: 'Pregled za oružje', url: pregledOruzjeRoute },
      { text: 'Pregledi za sportaše', url: preglediSportasiRoute },
    ],
  },
  {
    title: 'Specijalnosti',
    links: [
      { text: 'Interna medicina', url: internaMedicinaRoute },
      { text: 'Ginekologija', url: ginekologijaRoute },
      { text: 'Kardiologija', url: kardiologijaRoute },
      { text: 'Neurologija', url: neurologijaRoute },
      { text: 'Ortopedija', url: ortopedijaRoute },
      { text: 'Kirurgija', url: kirurgijaRoute },
      { text: 'Urologija', url: urologijaRoute },
      { text: 'Pulmologija', url: pulmologijaRoute },
      { text: 'Psihijatrija', url: psihijatrijaRoute },
      { text: 'Radiologija', url: radiologijaRoute },
    ],
  },
];
