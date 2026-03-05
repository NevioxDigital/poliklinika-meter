export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  items?: MenuItem[];
}

export interface FooterMenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}
