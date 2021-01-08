import { Meta } from '@storybook/react/types-6-0';
import Home from 'src/modules/home/pages/index';
import React from 'react';
import 'src/modules/home/components/HomeNavbar/node_modules/antd/dist/antd.css';

export default {
  title: 'FluentSearch/Pages/Home',
  component: Home,
} as Meta;

export const Default = (): JSX.Element => <Home />;
