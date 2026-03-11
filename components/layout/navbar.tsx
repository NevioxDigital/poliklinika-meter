import { getNavigationData } from '@/actions/sanity';
import { getNavigationConfig } from '@/lib/menu-items';

import NavbarClientWrapper from './nav-client-wrapper';

export default async function Navbar() {
  const categories = await getNavigationData();

  const { menuItems } = getNavigationConfig(categories);

  return <NavbarClientWrapper menuItems={menuItems} />;
}
