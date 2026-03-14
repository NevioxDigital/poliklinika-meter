import { Cross, Facebook, Instagram, Laptop, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

import { getNavigationData, getSiteData } from '@/actions/sanity';
import { getNavigationConfig } from '@/lib/menu-items';
import { developerLink, pravneinfoRoute } from '@/routes';
import { FooterMenuItems } from '@/types';

import CopyrightYear from '../copyright-year';

const Footer = async () => {
  const [categories, siteData] = await Promise.all([getNavigationData(), getSiteData()]);
  const { footerMenuItems } = getNavigationConfig(categories);

  const specijalnostiSection = footerMenuItems.find((s) =>
    s.title.toLowerCase().includes('specijalnosti'),
  );
  const otherSections = footerMenuItems.filter(
    (s) => !s.title.toLowerCase().includes('specijalnosti'),
  );

  return (
    <footer className="relative w-full pt-16 lg:pt-24 pb-8 overflow-hidden bg-white dark:bg-background border-t border-border/50">
      {/* Background Decoration */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05] -z-10 rotate-12">
        <Cross size={400} strokeWidth={1} className="text-primary" />
      </div>

      <div className="container px-6 lg:px-12 mx-auto">
        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 mb-16">
          {/* LEFT SIDE: Branding & About (Occupies 4 of 12 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-black tracking-tight text-foreground uppercase">
              Poliklinika <span className="text-primary">Meter</span>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              Vodeća zdravstvena ustanova u Imotskom posvećena vrhunskoj dijagnostici i
              individualnom pristupu svakom pacijentu.
            </p>
            <div className="flex gap-4">
              <a
                href={siteData.socials.facebook}
                target="_blank"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteData.socials.instagram}
                target="_blank"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* SPACER: We skip the 5th column entirely to create horizontal "breathing room" */}

          {/* RIGHT SIDE: Links and Contact (Starts at column 6, occupies 7 columns) */}
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
            {/* Nav Sections */}
            {otherSections.map((section: FooterMenuItems, idx: number) => (
              <div key={idx} className="space-y-5">
                <h5 className="text-xs font-bold uppercase tracking-widest text-primary italic">
                  {section.title}
                </h5>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.url}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info Column */}
            <div className="space-y-5">
              <h5 className="text-xs font-bold uppercase tracking-widest text-primary italic">
                Kontakt
              </h5>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span>{siteData.contactInfo.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a
                    href={`tel:${siteData.contactInfo.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteData.contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a
                    href={`mailto:${siteData.contactInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteData.contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: Specijalnosti (Full Width) */}
        {specijalnostiSection && (
          <div className="py-12 border-t border-border/40">
            <h5 className="text-xs font-bold uppercase tracking-widest text-primary mb-8 italic">
              {specijalnostiSection.title}
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-4">
              {specijalnostiSection.links.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link.url}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM BAR */}
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
              &copy; <CopyrightYear /> Poliklinika Meter. Sva prava pridržana.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1 text-[11px] text-muted-foreground/60">
              <Laptop size={12} />
              <span>Dizajn i razvoj:</span>
              <a
                href={developerLink}
                target="_blank"
                className="font-bold text-foreground hover:text-primary transition-colors"
              >
                Neviox Digital
              </a>
            </div>
          </div>

          <div className="flex gap-8">
            <Link
              href={pravneinfoRoute}
              className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Pravne informacije
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
