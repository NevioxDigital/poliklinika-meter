import { ContactSection } from '@/components/contact-section';
import ContentWrapper from '@/components/ui/content-wrapper';
import HeroImage from '@/public/hero.jpg';

export const LandingContact = () => {
  const services = [
    'Opći pregled',
    'Kardiološki pregled',
    'Dermatološki pregled',
    'Ortopedski pregled',
    'Ginekološki pregled',
    'Pediatrijski pregled',
    'Neurologijski pregled',
    'Oftalmološki pregled',
  ];
  return (
    <section className="spacing-section">
      <ContentWrapper>
        <ContactSection image={HeroImage} services={services} />
      </ContentWrapper>
    </section>
  );
};
