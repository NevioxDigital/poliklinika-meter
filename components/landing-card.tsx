// components/services/ServiceCard.tsx
import { ArrowUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity-image';
import HeroImage from '@/public/hero.jpg';
import { formatServiceLink } from '@/routes';

interface LandingPageCardProps {
  title: string;
  image: string | StaticImageData;
  slug: string;
  category: string;
}

export const LandingPageCard = ({ title, image, slug, category }: LandingPageCardProps) => {
  const categorySlug = category?.toLowerCase().trim().replace(/\s+/g, '-');
  const href = formatServiceLink(categorySlug, slug);

  const imageUrl = image ? urlFor(image).width(600).height(450).url() : HeroImage;

  return (
    <Link
      href={href}
      className="group relative block w-full h-75 overflow-hidden rounded-2xl bg-muted"
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay (Darkens on hover) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-primary/90" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
            {/* Subtle "Learn More" that appears on hover */}
            <p className="text-white/0 group-hover:text-white/80 text-sm transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              Saznaj više o usluzi
            </p>
          </div>

          {/* Circular Arrow Icon */}
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-md border border-white/30 text-white transform transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-primary">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};
