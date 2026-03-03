/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useMemo, useState, useCallback } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/public/logo.png';
import { MenuItem } from './nav-client-wrapper';
import { pravneinfoRoute } from '@/routes';

interface MobileNavbarProps {
  items: MenuItem[];
}

export function MobileNavbar({ items = [] }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Provjera je li ruta aktivna (ignorira hash dio za glavni highlight)
  const isActive = useCallback((url: string) => {
    if (!url || url === '#') return false;
    const baseUrl = url.split('#')[0];
    if (baseUrl === '/') return pathname === '/';
    return pathname === baseUrl || pathname.startsWith(`${baseUrl}/`);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Body lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Razdvajanje na jednostavne linkove i sekcije s pod-stavkama
  const { simpleLinks, sections } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        if (item.items && item.items.length > 0) {
          acc.sections.push(item);
        } else {
          acc.simpleLinks.push(item);
        }
        return acc;
      },
      { simpleLinks: [] as MenuItem[], sections: [] as MenuItem[] }
    );
  }, [items]);

  return (
    <>
      {/* FIXED HEADER */}
      <header className="fixed top-6 right-6 z-100 flex items-center pointer-events-none">
        <div className={cn(
          'pointer-events-auto flex items-center px-4 py-2 h-12 rounded-2xl border transition-all duration-500 backdrop-blur-xl',
          isOpen ? 'bg-transparent border-transparent' : 'bg-background/80 border-border shadow-lg'
        )}>
          {!isOpen && (
            <Link href="/" className="mr-4 transition-opacity duration-300">
              <Image src={Logo} alt="Logo" width={50} height={18} priority />
            </Link>
          )}
          
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 p-0 flex flex-col gap-1.5 justify-center items-end"
          >
            <span className={cn("h-0.5 bg-primary transition-all", isOpen ? "w-6 rotate-45 translate-y-2" : "w-6")} />
            <span className={cn("h-0.5 bg-primary transition-all", isOpen ? "opacity-0" : "w-4")} />
            <span className={cn("h-0.5 bg-primary transition-all", isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5")} />
          </Button>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY */}
      <div className={cn(
        'fixed inset-0 z-70 bg-background transition-transform duration-500 ease-in-out',
        isOpen ? 'translate-y-0' : '-translate-y-full'
      )}>
        <div className="h-full overflow-y-auto pt-28 pb-10 px-8 flex flex-col items-center">
          <div className="w-full max-w-sm space-y-10">
            
            {/* Glavni Linkovi (Početna, Tim, Kontakt) */}
            <nav className="flex flex-col space-y-4">
              {simpleLinks.map((link) => (
                <Link 
                  key={link.url} 
                  href={link.url}
                  className={cn(
                    "text-3xl font-bold transition-colors",
                    isActive(link.url) ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Sekcije (Specijalnosti, Medicina rada) */}
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-xs uppercase tracking-widest text-primary/60 font-black">
                    {section.title}
                  </h3>
                  <div className="grid gap-4">
                    {section.items?.map((sub) => (
                      <Link 
                        key={sub.url} 
                        href={sub.url}
                        className="group block"
                      >
                        <div className={cn(
                          "text-lg font-semibold",
                          pathname === sub.url.split('#')[0] ? "text-foreground" : "text-foreground/70"
                        )}>
                          {sub.title}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1 italic">
                          {sub.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer dijela izbornika */}
            <div className="pt-10 border-t border-border flex flex-col gap-4 text-center">
              <p className="text-sm text-muted-foreground">Poliklinika Meter</p>
              <div className="flex justify-center gap-4 text-xs font-medium text-primary">
                <Link href={pravneinfoRoute}>Pravne Informacije</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}