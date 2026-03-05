import { cn } from '@/lib/utils';

type LoadingSpinnerProps = {
  className?: string;
  variant?: 'button' | 'page';
};

export const LoadingSpinner = ({ className, variant = 'button' }: LoadingSpinnerProps) => {
  const isPage = variant === 'page';

  // Sizing logic
  const barBaseClass = 'rounded-full animate-bounce [animation-duration:1s]';
  const barSizeClass = isPage
    ? 'w-2.5 h-10 md:w-3 md:h-14' // Page: Big
    : 'w-1 h-3 md:h-4'; // Button: Small (I increased width slightly for visibility)

  const containerClass = isPage
    ? 'flex h-screen w-full items-center justify-center bg-background/60 backdrop-blur-md z-50' // Page: Glass overlay
    : 'flex items-center justify-center w-fit bg-transparent'; // Button: Transparent

  const gapClass = isPage ? 'space-x-2' : 'space-x-1';

  return (
    <div className={cn(containerClass, className)}>
      <div className={cn('flex items-center', gapClass)}>
        {/* Bars: using currentcolor or muted ensures they look good on both themes */}
        <div className={cn(barBaseClass, barSizeClass, 'bg-foreground/10')} />
        <div className={cn(barBaseClass, barSizeClass, 'bg-primary/40 delay-100')} />
        <div className={cn(barBaseClass, barSizeClass, 'bg-primary/80 delay-200')} />
        <div className={cn(barBaseClass, barSizeClass, 'bg-primary/40 delay-300')} />
        <div className={cn(barBaseClass, barSizeClass, 'bg-foreground/10 delay-400')} />
      </div>
    </div>
  );
};
