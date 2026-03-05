import { menuItems } from '@/lib/menu-items';

import NavbarClientWrapper from './nav-client-wrapper';

export default async function Navbar() {
  return <NavbarClientWrapper menuItems={menuItems} />;
}
