import NavbarClientWrapper from "./nav-client-wrapper";
import { baseUrl,specijalnostiRoute,medicinaRadaRoute,kontaktRoute,timRoute } from "@/routes";


export default async function Navbar() {

const menu = [
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
  {
    title: 'Kontakt',
    url: kontaktRoute,
  },
];

  return <NavbarClientWrapper menuItems={menu} />;
}