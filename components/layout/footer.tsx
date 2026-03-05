import { Cross, Laptop } from 'lucide-react';
import Link from 'next/link';

import { footerMenuItems } from '@/lib/menu-items';
import { developerLink, pravneinfoRoute } from '@/routes';
import { FooterMenuItem } from '@/types';

import CopyrightYear from '../copyright-year';

const Footer = () => {
  return (
    <footer className="relative flex flex-col w-full pt-8 md:pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute bottom-24 -right-25 pointer-events-none select-none -z-10 animate-pulse-slow">
        <div className="rotate-60 text-primary opacity-[0.2]">
          <Cross size={350} strokeWidth={1} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row px-4 md:px-12 justify-between">
        {/* LEFT COLUMN: Branding */}
        <div className="flex flex-col items-start max-w-sm mb-12 lg:mb-0">
          <h3 className="mb-4 font-bold text-primary">Poliklinika Meter</h3>
          <p className="text-sm text-muted-foreground">
            Specijalistička poliklinika smještena u Imotskom, posvećena pružanju vrhunske
            zdravstvene skrbi u području interne medicine, ginekologije i medicine rada. Naša misija
            je unaprijediti zdravlje i dobrobit naših pacijenata kroz stručnu njegu, inovativne
            pristupe i individualizirane planove liječenja. Posjetite nas i doživite vrhunsku
            medicinsku uslugu u srcu Dalmacije.
          </p>
        </div>

        {/* RIGHT COLUMN: Navigation from menuItems import */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 w-full lg:w-auto lg:ml-auto">
          {footerMenuItems.map((section: FooterMenuItem, sectionIdx: number) => (
            <div key={sectionIdx} className=" w-full md:max-w-50">
              <h5 className="mb-4 font-semibold text-primary/80 block">{section.title}</h5>
              <ul className="text-muted-foreground/60 space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="hover:text-primary text-muted-foreground transition-colors"
                  >
                    <Link href={link.url} title={link.text} className="block">
                      <span className="">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 border-t border-border flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-12 py-4">
        <div className="text-muted-foreground  text-center md:text-left mt-4 md:mt-0">
          <p className="text-xs">
            <span className="text-muted-foreground">&copy;</span> <CopyrightYear />{' '}
            <span className="text-primary text-xs">Poliklinika Meter</span>. Sva prava pridržana.
          </p>
          <p className="mt-1 text-xs">
            <Laptop className="inline-block mr-1 text-muted-foreground" size={12} />
            Razvoj i dizajn:{' '}
            <a
              href={developerLink}
              target="_blank"
              rel="noopener"
              className="font-medium text-primary/80 hover:text-primary transition-colors"
            >
              Neviox Digital
            </a>
          </p>
        </div>

        <div className="flex gap-6 justify-center">
          <Link
            href={pravneinfoRoute}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Pravne informacije
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
