// assets
import { IconKey, IconArrowsJoin2 } from '@tabler/icons';

// constant
const icons = {
  IconKey, IconArrowsJoin2
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    },
    {
      id: 'join',
      title: 'Enroll Now',
      type: 'item',
      url: '/pages/enrollment/enrollment1',
      icon: icons.IconArrowsJoin2,
      breadcrumbs: false
    }
  ]
};

export default pages;
