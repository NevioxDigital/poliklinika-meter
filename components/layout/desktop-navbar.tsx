'use client';

import {
  Activity,
  Heart,
  Baby,
  Brain,
  Bone,
  Syringe,
  Stethoscope,
  Wind,
  UserRound,
  Radiation,
  ChevronRight,
  ClipboardList,
  Car,
  Crosshair,
  Trophy,
} from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Logo from '@/public/logo.png';

const getIconForUrl = (url: string) => {
  const iconProps = {
    className: 'w-5 h-5 text-primary/80 group-hover:text-primary transition-colors',
  };

  if (url.includes('interna')) return <Activity {...iconProps} />;
  if (url.includes('ginekologija')) return <Baby {...iconProps} />;
  if (url.includes('kardiologija')) return <Heart {...iconProps} />;
  if (url.includes('neurologija')) return <Brain {...iconProps} />;
  if (url.includes('ortopedija')) return <Bone {...iconProps} />;
  if (url.includes('kirurgija')) return <Syringe {...iconProps} />;
  if (url.includes('urologija')) return <UserRound {...iconProps} />;
  if (url.includes('pulmologija')) return <Wind {...iconProps} />;
  if (url.includes('psihijatrija')) return <Stethoscope {...iconProps} />;
  if (url.includes('radiologija')) return <Radiation {...iconProps} />;
  
  // Medicina rada pod-stavke
  if (url.includes('zaposljavanje')) return <ClipboardList {...iconProps} />;
  if (url.includes('vozaci')) return <Car {...iconProps} />;
  if (url.includes('oruzje')) return <Crosshair {...iconProps} />;
  if (url.includes('sportasi')) return <Trophy {...iconProps} />;
  
  return <Activity {...iconProps} />;
};

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  items?: MenuItem[];
}

interface DesktopNavbarProps {
  items: MenuItem[];
}

export function DesktopNavbar({ items = [] }: DesktopNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (url: string) => {
    const baseUrl = url.split('#')[0];
    if (baseUrl === '/') return pathname === '/';
    return pathname === baseUrl || pathname.startsWith(`${baseUrl}/`);
  };

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out',
        isScrolled ? 'pt-4' : 'pt-0',
      )}
    >
      <nav
        className={cn(
          'transition-all duration-500 flex items-center justify-between px-6 h-16',
          !isScrolled && 'w-full bg-background/50 backdrop-blur-md border-b border-border',
          isScrolled && 'w-[95%] max-w-6xl rounded-2xl bg-background/90 backdrop-blur-xl border border-border shadow-2xl',
        )}
      >
        {/* LOGO */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="inline-flex items-center">
            <Image
              src={Logo}
              alt="Poliklinika Meter"
              priority
              width={90}
              height={30}
              className="w-24 h-auto object-contain"
            />
          </Link>
        </div>

        {/* CENTER NAVIGATION */}
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              {items.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items && item.items.length > 0 ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          'bg-transparent hover:bg-white/5 transition-colors',
                          isActive(item.url) ? 'text-primary font-bold' : 'text-muted-foreground font-medium'
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-135 gap-2 p-4 grid-cols-2 bg-background border border-border shadow-xl rounded-xl">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink  key={subItem.url}>
                              <SubMenuLink item={subItem} icon={getIconForUrl(subItem.url)} />
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink >
                      <Link
                        href={item.url}
                        className={cn(
                          'px-4 py-2 text-sm transition-colors rounded-md hover:bg-white/5',
                          isActive(item.url) ? 'text-primary font-bold' : 'text-muted-foreground font-medium'
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* RIGHT SIDE: Contact & Extra */}
        <div className="flex items-center space-x-4">
           {/* Pronađi "Kontakt" stavku iz niza ili stavi fallback gumb */}
           <Link href="/kontakt">
              <Button
                variant="default"
                className="rounded-xl px-5 font-semibold transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                Naručite se
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
           </Link>
        </div>
      </nav>
    </div>
  );
}

const SubMenuLink = ({ item, icon }: { item: MenuItem; icon: React.ReactNode }) => {
  return (
    <Link
      href={item.url}
      className="group flex flex-row gap-4 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-primary/5 border border-transparent hover:border-primary/10"
    >
      <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-sm font-bold text-foreground mb-0.5 transition-colors group-hover:text-primary">
          {item.title}
        </div>
        {item.description && (
          <p className="text-muted-foreground text-[11px] leading-tight line-clamp-2 italic">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};