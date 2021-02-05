import { MenuType } from 'src/common/constants/menu/types';

export const PHOTOS_SIDEBAR_CONSTANT: MenuType[] = [
  {
    key: '1',
    label: 'Dashboard',
    link: ['dashboard'],
    active: false,
    icon: 'HomeOutlined',
  },
  {
    key: '2',
    label: 'Photos',
    link: ['allphotos'],
    active: false,
    icon: 'PictureOutlined',
  },
  {
    key: '4',
    label: 'Tasks',
    link: ['task'],
    active: false,
    icon: 'InboxOutlined',
  },
  {
    key: '5',
    label: 'History',
    link: ['history'],
    active: false,
    icon: 'HistoryOutlined',
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
