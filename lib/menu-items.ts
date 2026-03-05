import { baseUrl, kontaktRoute, medicinaRadaRoute, specijalnostiRoute, timRoute } from '@/routes';

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
        url: `${specijalnostiRoute}#interna-medicina`,
      },
      {
        title: 'Ginekologija',
        description: 'Zdravstvena skrb za žene, ultrazvuk i preventivni pregledi.',
        url: `${specijalnostiRoute}#ginekologija`,
      },
      {
        title: 'Kardiologija',
        description: 'Specijalistički pregledi srca, EKG i ultrazvuk srca.',
        url: `${specijalnostiRoute}#kardiologija`,
      },
      {
        title: 'Neurologija',
        description: 'Dijagnostika i liječenje bolesti živčanog sustava.',
        url: `${specijalnostiRoute}#neurologija`,
      },
      {
        title: 'Ortopedija',
        description: 'Liječenje bolesti i ozljeda sustava za kretanje.',
        url: `${specijalnostiRoute}#ortopedija`,
      },
      {
        title: 'Kirurgija',
        description: 'Specijalistički pregledi i mali kirurški zahvati.',
        url: `${specijalnostiRoute}#kirurgija`,
      },
      {
        title: 'Urologija',
        description: 'Pregledi i dijagnostika mokraćnog i spolnog sustava.',
        url: `${specijalnostiRoute}#urologija`,
      },
      {
        title: 'Pulmologija',
        description: 'Dijagnostika i liječenje bolesti dišnih puteva i pluća.',
        url: `${specijalnostiRoute}#pulmologija`,
      },
      {
        title: 'Psihijatrija',
        description: 'Stručna pomoć i savjetovanje za mentalno zdravlje.',
        url: `${specijalnostiRoute}#psihijatrija`,
      },
      {
        title: 'Radiologija',
        description: 'Ultrazvučna dijagnostika i radiološka očitanja.',
        url: `${specijalnostiRoute}#radiologija`,
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
        url: `${medicinaRadaRoute}#pregledi-zaposljavanje`,
      },
      {
        title: 'Pregledi za vozače',
        description: 'Liječnički pregledi za sve kategorije vozača.',
        url: `${medicinaRadaRoute}#pregledi-vozaci`,
      },
      {
        title: 'Pregled za oružje',
        description: 'Liječnička uvjerenja za držanje i nošenje oružja.',
        url: `${medicinaRadaRoute}#pregled-oruzje`,
      },
      {
        title: 'Pregledi za sportaše',
        description: 'Sistematski pregledi za profesionalne i amaterske sportaše.',
        url: `${medicinaRadaRoute}#pregledi-sportasi`,
      },
    ],
  },
  {
    title: 'Naš tim',
    url: timRoute,
  },
];
export const footerMenuItems = [
  {
    title: 'Poliklinika',
    links: [
      { text: 'Početna', url: baseUrl },
      { text: 'Naš tim', url: timRoute },
      { text: 'Kontakt', url: kontaktRoute },
    ],
  },

  {
    title: 'Medicina rada',
    links: [
      { text: 'Pregledi za zapošljavanje', url: `${medicinaRadaRoute}#pregledi-zaposljavanje` },
      { text: 'Pregledi za vozače', url: `${medicinaRadaRoute}#pregledi-vozaci` },
      { text: 'Pregled za oružje', url: `${medicinaRadaRoute}#pregled-oruzje` },
      { text: 'Pregledi za sportaše', url: `${medicinaRadaRoute}#pregledi-sportasi` },
    ],
  },
  {
    title: 'Specijalnosti',
    links: [
      { text: 'Interna medicina', url: `${specijalnostiRoute}#interna-medicina` },
      { text: 'Ginekologija', url: `${specijalnostiRoute}#ginekologija` },
      { text: 'Kardiologija', url: `${specijalnostiRoute}#kardiologija` },
      { text: 'Neurologija', url: `${specijalnostiRoute}#neurologija` },
      { text: 'Ortopedija', url: `${specijalnostiRoute}#ortopedija` },
      { text: 'Kirurgija', url: `${specijalnostiRoute}#kirurgija` },
      { text: 'Urologija', url: `${specijalnostiRoute}#urologija` },
      { text: 'Pulmologija', url: `${specijalnostiRoute}#pulmologija` },
      { text: 'Psihijatrija', url: `${specijalnostiRoute}#psihijatrija` },
      { text: 'Radiologija', url: `${specijalnostiRoute}#radiologija` },
    ],
  },
];
