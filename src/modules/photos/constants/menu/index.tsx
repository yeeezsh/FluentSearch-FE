import { MenuType } from './types';

export const PHOTOS_SIDEBAR_CONSTANT: MenuType[] = [
  {
    key: '1',
    label: 'Photos',
    link: ['allphotos'],
    active: false,
  },
  {
    key: '2',
    label: 'Albums',
    link: ['albums'],
    active: false,
  },
  {
    key: '3',
    label: 'Trash',
    link: ['trash'],
    active: false,
  },
];

export const DROPDOWN_SIDEBAR_CONSTANT: MenuType[] = [
  {
    key: '1',
    label: 'My Profile',
    link: ['myprofile'],
    active: false,
  },
  {
    key: '2',
    label: 'Reset Password',
    link: ['resetpassword'],
    active: false,
  },
  {
    key: '3',
    label: 'Logout',
    link: ['logout'],
    active: false,
  },
];
