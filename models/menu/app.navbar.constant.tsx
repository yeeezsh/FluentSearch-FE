import CustomButton from 'Components/Button/CustomButton';
import React from 'react';
import MenuType from './menu.type';

const APP_NAVBAR_CONSTANT: MenuType[] = [
  {
    key: '1',
    label: 'Sign up',
    link: ['asdasd'],
    active: true,
  },
  {
    key: '2',
    label: (
      <CustomButton typeButton="primary" size="small" style={{ marginTop: '-20%' }}>
        Login
      </CustomButton>
    ),
    link: ['asdasd'],
    active: false,
  },
];
export default APP_NAVBAR_CONSTANT;
