import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon, UilCube, UilFolder } from '@iconscout/react-unicons';

export interface Route {
  name: string;
  icon?: IconProp | string | string[];
  iconSet?: 'font-awesome' | 'feather' | 'unicons';
  pages?: Route[];
  path?: string;
  pathName?: string;
  flat?: boolean;
  topNavIcon?: string;
  dropdownInside?: boolean;
  active?: boolean;
  new?: boolean;
  hasNew?: boolean;
  isNext?: boolean;
  permission?: string;
}

export interface RouteItems {
  label: string;
  horizontalNavLabel?: string;
  icon: Icon;
  labelDisabled?: boolean;
  pages: Route[];
  megaMenu?: boolean;
  active?: boolean;
  permission?: string;
}

export const routes: RouteItems[] = [
  {
    label: 'Apps',
    icon: UilCube,
    pages: [
      {
        name: 'Dashboard',
        icon: 'pie-chart',
        path: '/dashboard',
        pathName: 'Dashboard',
        active: true
      }
    ]
  },

  {
    label: 'User Management',
    icon: UilFolder,
    permission: 'users.view',
    active: true,
    pages: [
      {
        name: 'Users',
        path: '/user-management/user',
        pathName: 'user',
        permission: 'users.view',
        icon: 'list',
        active: true
      },
      {
        name: 'Roles & Permissions',
        path: '/user-management/role',
        pathName: 'role',
        permission: 'roles.view',
        icon: 'user-plus',
        active: true
      }
    ]
  }
];
