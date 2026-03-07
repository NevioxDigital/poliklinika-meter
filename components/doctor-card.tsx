// components/team/DoctorCard.tsx
import Image, { StaticImageData } from 'next/image';

import Logo from '@/public/logo.png';

interface DoctorCardProps {
  image?: string | StaticImageData;
  title: string;
  name: string;
}

export const DoctorCard = ({ image, title, name }: DoctorCardProps) => {
  return (
    // Changed: items-start and text-left
    <div className="group flex flex-col items-start text-left space-y-5">
      {/* Image Wrapper - Heavy Rounding & Square Aspect */}
      <div className="relative w-full aspect-square overflow-hidden rounded-[2.5rem] bg-slate-50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5 border border-slate-100/50">
        <Image
          src={image || Logo}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle overlay that appears on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Column - Aligned to the start (left) */}
      <div className="flex flex-col items-start justify-start space-y-1 px-1">
        <h3 className="text-xl font-extrabold text-foreground transition-colors duration-300 group-hover:text-primary leading-tight">
          {name}
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/70">
          {title}
        </span>
      </div>
    </div>
  );
};
