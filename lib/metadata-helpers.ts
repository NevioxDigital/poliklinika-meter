/**
 * Default robots meta tag configuration
 */
export const defaultRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
  },
};

/**
 * Helper function for social media metadata (OpenGraph and Twitter)
 */
export const getSocialMetadata = ({
  title,
  description,
  url,
  image = '/opengraph-image.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}) => {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: 'Poliklinika Meter',
      locale: 'hr_HR',
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: ['Poliklinika Meter'],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [image],
    },
  };
};

/**
 * Helper function to clean and prepare keywords from Sanity array or string
 */
export const cleanKeywords = (keywords?: string | string[]) => {
  if (!keywords) return [];
  if (Array.isArray(keywords)) return keywords.map((k) => k.trim());
  return keywords
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean);
};
