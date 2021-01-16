import Button from 'Components/Button';
import React from 'react';
import { MenuType } from 'src/common/constants/menu/types';

export const APP_NAVBAR_CONSTANT: MenuType[] = [
  {
    key: '1',
    label: 'Sign up',
    link: ['register'],
    active: true,
  },
  {
    key: '2',
    label: (
      <Button size="small" style={{ marginTop: '-20%' }}>
        Login
      </Button>
    ),
    link: ['login'],
    active: false,
  },
];

export const APP_SIDEBAR_CONSTANT: MenuType[] = [
  {
    key: '1',
    label: 'Sign up',
    link: ['register'],
    active: false,
  },
  {
    key: '2',
    label: 'Login',
    link: ['login'],
    active: false,
  },
];
