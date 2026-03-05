'use client';

import dynamic from 'next/dynamic';

import { MenuItem } from '@/types';

import { DesktopNavbar } from './desktop-navbar';

interface NavbarClientWrapperProps {
  menuItems: MenuItem[];
}

const MobileNavbar = dynamic(() => import('./mobile-navbar').then((mod) => mod.MobileNavbar), {
  ssr: false,
  loading: () => <div className="h-16 md:hidden" />,
});

export default function NavbarClientWrapper({ menuItems }: NavbarClientWrapperProps) {
  return (
    <>
      {/* Desktop se renderira odmah (SEO friendly) */}
      <div className="hidden md:block">
        <DesktopNavbar items={menuItems} />
      </div>

      {/* Mobile se učitava samo na klijentu */}
      <div className="md:hidden">
        <MobileNavbar items={menuItems} />
      </div>
    </>
  );
}
