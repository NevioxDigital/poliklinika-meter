/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseUrl, kontaktRoute, timRoute } from '@/routes';
import { formatCategoryLink, formatServiceLink } from '@/routes';
import { FooterMenuItems, MenuItems } from '@/types';

export const getNavigationConfig = (categories: any[]) => {
  // 1. Create intermediate sections with correct URL formatting
  const dynamicSections = categories.map((cat) => ({
    title: cat.title,
    url: formatCategoryLink(cat.slug), // Use 'url' consistently
    items: cat.services.map((s: any) => ({
      title: s.title,
      description: s.description,
      icon: s.icon,
      // Helper creates: /category-slug#service-slug
      url: formatServiceLink(cat.slug, s.slug),
    })),
  }));

  // 2. Build the Menu Items array for the Navbar
  const menuItems: MenuItems[] = [
    { title: 'Početna', url: baseUrl },

    ...dynamicSections.map((section) => ({
      title: section.title,
      url: section.url, // Correctly mapping from dynamicSections
      items: section.items.map((item: any) => ({
        title: item.title,
        description: item.description,
        url: item.url, // FIXED: Changed from item.href to item.url
        icon: item.icon,
      })),
    })),

    { title: 'Naš tim', url: timRoute },
  ];

  // 3. Build the Footer items
  const footerMenuItems: FooterMenuItems[] = dynamicSections.map((section) => ({
    title: section.title,
    links: section.items.map((item: any) => ({
      text: item.title,
      url: item.url, // FIXED: Changed from item.href to item.url
    })),
  }));

  // Add the static Poliklinika links to the footer
  footerMenuItems.unshift({
    title: 'Poliklinika',
    links: [
      { text: 'Početna', url: baseUrl },
      { text: 'Kontakt', url: kontaktRoute },
      { text: 'Naš tim', url: timRoute },
    ],
  });

  return { menuItems, footerMenuItems };
};
