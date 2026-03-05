import { Cross } from 'lucide-react';

import { cn } from '@/lib/utils';

export const BackgroundCrosses = () => {
  const crosses = [
    {
      top: '10%',
      left: '5%',
      size: 'text-6xl',
      opacity: 'opacity-[0.07]',
      delay: '0s',
      rotate: 'rotate-0',
    },
    {
      top: '20%',
      right: '8%',
      size: 'text-8xl',
      opacity: 'opacity-[0.04]',
      delay: '2s',
      rotate: 'rotate-12',
    },
    {
      top: '50%',
      left: '2%',
      size: 'text-4xl',
      opacity: 'opacity-[0.05]',
      delay: '4s',
      rotate: '-rotate-12',
    },
    {
      bottom: '15%',
      right: '5%',
      size: 'text-9xl',
      opacity: 'opacity-[0.06]',
      delay: '1s',
      rotate: 'rotate-45',
    },
    {
      bottom: '10%',
      left: '10%',
      size: 'text-5xl',
      opacity: 'opacity-[0.03]',
      delay: '3s',
      rotate: 'rotate-0',
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {crosses.map((cross, i) => (
        <div
          key={i}
          className={cn(
            'absolute animate-pulse-slow text-primary', // Removed transition-all
            cross.size,
            cross.opacity,
          )}
          style={{
            top: cross.top,
            left: cross.left,
            right: cross.right,
            bottom: cross.bottom,
            animationDelay: cross.delay,
          }}
        >
          {/* We rotate the inner div so the outer animation doesn't overwrite it */}
          <div className={cn('w-full h-full', cross.rotate)}>
            <Cross color="#49b3a3" size="100%" />
          </div>
        </div>
      ))}
    </div>
  );
};
