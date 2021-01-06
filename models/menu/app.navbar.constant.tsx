import Button from 'Components/Button';
import React from 'react';
import MenuType from './menu.type';

const APP_NAVBAR_CONSTANT: MenuType[] = [
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
export default APP_NAVBAR_CONSTANT;
