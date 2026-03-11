// Base URL
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://poliklinika-meter.hr';

// Main pages
export const timRoute = '/lijecnici-poliklinika';
export const kontaktRoute = '/kontakt';
export const pravneinfoRoute = '/pravne-informacije';

export const formatCategoryLink = (categorySlug: string) => {
  return `/${categorySlug}`;
};

export const formatServiceLink = (categorySlug: string, serviceSlug: string) => {
  // We use the anchor structure since your app is built on category pages
  return `/${categorySlug}#${serviceSlug}`;
};

export const formatFullUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

// Socials
export const facebookLink = 'https://www.facebook.com/nevioxdigital';
export const instagramLink = 'https://instagram.com/nevioxdigital';
export const linkedinLink = 'https://www.linkedin.com/company/nevioxdigital/';
export const googleLink = 'https://share.google/ryNa9W5WzsRcs6MS3';
export const xLink = 'https://x.com/nevioxdigital';
export const clutchLink = 'https://clutch.co/profile/neviox-digital';
export const mapsgoogleLink = 'https://maps.app.goo.gl/RTy8scVLWmkuj4Pp6';

// Share Links
export const googlebusinessShareLink = 'https://share.google/7ju2IEEQpSme3fyMq';

// Developer
export const developerLink = 'https://www.nevioxdigital.com';
