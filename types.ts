export interface MenuItems {
  title: string;
  url: string;
  description?: string;
  icon?: string;
  items?: MenuItems[];
}

export interface FooterMenuItems {
  title: string;
  links: { text: string; url: string }[];
}
