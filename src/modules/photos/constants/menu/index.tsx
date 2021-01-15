import { MenuType } from './types';

export const PHOTOS_SIDEBAR_CONSTANT: MenuType[] = [
  {
    key: '1',
    label: 'Dashboard',
    link: ['aashboard'],
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
    key: '3',
    label: 'Albums',
    link: ['albums'],
    active: false,
    icon: 'BookOutlined',
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
  {
    key: '6',
    label: 'Trash',
    link: ['trash'],
    active: false,
    icon: 'DeleteOutlined',
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
