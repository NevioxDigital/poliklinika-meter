/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  Activity,
  Baby,
  Bone,
  Brain,
  Car,
  ChevronRight,
  ClipboardList,
  Crosshair,
  Heart,
  Radiation,
  Stethoscope,
  Syringe,
  Trophy,
  UserRound,
  Wind,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as React from 'react';
import { useEffect, useState } from 'react';

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
import { kontaktRoute } from '@/routes';
import { MenuItem } from '@/types';

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
        'fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500',
        isScrolled ? 'pt-4' : 'pt-0',
      )}
    >
      <nav
        className={cn(
          'transition-all duration-500 flex items-center justify-between px-20 h-16',
          !isScrolled && 'w-full bg-background backdrop-blur-md shadow-md',
          isScrolled &&
            'w-[95%] px-8 max-w-6xl rounded-2xl bg-background/70 backdrop-blur-xl border border-border shadow-2xl',
        )}
      >
        {/* LOGO */}
        <Link href="/" className="inline-flex items-center">
          <Image src={Logo} alt="Logo" priority width={40} height={10} className="w-24 h-auto" />
        </Link>

        {/* NAVIGATION */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-1">
            {items.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items && item.items.length > 0 ? (
                  <>
                    <NavigationMenuTrigger className="... hover:text-primary">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-135 gap-2 p-4 grid-cols-2">
                        {item.items.map((subItem) => (
                          /* FIX: Use render prop for SubMenuLink */
                          <NavigationMenuLink
                            key={subItem.url}
                            render={
                              <SubMenuLink item={subItem} icon={getIconForUrl(subItem.url)} />
                            }
                          />
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  /* FIX: Use render prop for standalone Links */
                  <NavigationMenuLink
                    render={
                      <Link
                        href={item.url}
                        className={cn(
                          'px-4 py-2  transition-colors font-medium',
                          isActive(item.url) ? 'text-primary' : '',
                        )}
                      >
                        {item.title}
                      </Link>
                    }
                  />
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CONTACT BUTTON */}
        <Link href={kontaktRoute} passHref>
          <Button
            size="lg"
            className="rounded-xl w-36 shadow-lg shadow-primary/20 cursor-pointer group"
          >
            Naručite se
            <ChevronRight className="ml-1 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </Link>
      </nav>
    </div>
  );
}

const SubMenuLink = React.forwardRef<
  HTMLAnchorElement,
  { item: MenuItem; icon: React.ReactNode; [key: string]: any }
>(({ item, icon, ...props }, ref) => {
  return (
    <Link
      {...props} // This spreads Base UI's internal link logic
      ref={ref}
      href={item.url}
      className={cn(
        'group flex flex-row gap-4 rounded-xl p-3 no-underline outline-none transition-all hover:bg-muted/40',
        props.className, // Merges Base UI styles if any exist
      )}
    >
      <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <div className=" font-semibold text-foreground mb-0.5 transition-colors group-hover:text-primary">
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
});
SubMenuLink.displayName = 'SubMenuLink';
