// components/sections/Services.tsx
import { LandingPageCard } from '@/components/landing-card';
import ContentWrapper from '@/components/ui/content-wrapper';

const medicinaRada = [
  {
    title: 'Pregledi za zapošljavanje',
    image: '/images/med-1.jpg',
    route: '/medicina-rada#zaposljavanje',
  },
  { title: 'Pregledi za vozače', image: '/images/med-2.jpg', route: '/medicina-rada#vozac' },
  { title: 'Pregled za oružje', image: '/images/med-3.jpg', route: '/medicina-rada#oruzje' },
  { title: 'Pregledi za sportaše', image: '/images/med-4.jpg', route: '/medicina-rada#sport' },
];

const specijalnosti = [
  { title: 'Interna medicina', image: '/images/spec-1.jpg', route: '/usluge/interna' },
  { title: 'Ginekologija', image: '/images/spec-2.jpg', route: '/usluge/ginekologija' },
  { title: 'Kardiologija', image: '/images/spec-3.jpg', route: '/usluge/kardiologija' },
  { title: 'Neurologija', image: '/images/spec-4.jpg', route: '/usluge/neurologija' },
  { title: 'Ortopedija', image: '/images/spec-5.jpg', route: '/usluge/ortopedija' },
  { title: 'Kirurgija', image: '/images/spec-6.jpg', route: '/usluge/kirurgija' },
  { title: 'Urologija', image: '/images/spec-7.jpg', route: '/usluge/urologija' },
  { title: 'Pulmologija', image: '/images/spec-8.jpg', route: '/usluge/pulmologija' },
  { title: 'Psihijatrija', image: '/images/spec-9.jpg', route: '/usluge/psihijatrija' },
  { title: 'Radiologija', image: '/images/spec-10.jpg', route: '/usluge/radiologija' },
];

export const Services = () => {
  return (
    <section className="spacing-section">
      <ContentWrapper>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="font-extrabold text-foreground mb-4">Naše Usluge</h2>
            <p className="text-foreground">
              Pružamo cjelovitu medicinsku skrb kroz specijalističke preglede i suvremenu
              dijagnostiku.
            </p>
          </div>
        </div>

        {/* Medicina Rada Category */}
        <div className="my-16 md:my-32">
          <h3 className="font-bold mb-8 md:mb-12 border-l-4 border-primary text-foreground pl-4">
            Medicina Rada
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicinaRada.map((s) => (
              <LandingPageCard key={s.title} {...s} />
            ))}
          </div>
        </div>

        {/* Specijalnosti Category */}
        <div>
          <h3 className="font-bold mb-8 md:mb-12 border-l-4 border-primary pl-4">Specijalnosti</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specijalnosti.map((s) => (
              <LandingPageCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};
