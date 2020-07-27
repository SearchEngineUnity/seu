import { FiNavigation2 } from 'react-icons/fi';

export default {
  name: 'mainNavbar',
  title: 'Main Navbar',
  type: 'document',
  icon: FiNavigation2,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      description: 'There should only be ONE Nav Logo',
      of: [
        {
          type: 'navLogo',
        },
        {
          type: 'navJumpLink',
        },
      ],
    },
  ],
};
