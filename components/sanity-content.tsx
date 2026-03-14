/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';

import { PortableText, PortableTextComponents } from '@portabletext/react';

export const SanityContent = ({ value, isProse = false }: { value: any; isProse?: boolean }) => {
  if (!value) return null;

  const components: PortableTextComponents = {
    block: {
      // THIS IS THE FIX:
      // It tells Sanity: "When the style is normal, don't render a <p> tag, just return the content"
      normal: ({ children }) => (isProse ? <p>{children}</p> : <>{children}</>),
    },
    marks: {
      highlight: ({ children }) => <span className="text-primary">{children}</span>,
      strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
      link: ({ value, children }) => {
        const href = value?.href || '#';
        const isExternal = href.startsWith('http');
        return (
          <Link
            href={href}
            target={isExternal ? '_blank' : undefined}
            className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {children}
          </Link>
        );
      },
    },
  };
  return (
    <div className={isProse ? 'prose max-w-none' : ''}>
      <PortableText value={value} components={components} />
    </div>
  );
};
