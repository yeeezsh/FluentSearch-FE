import { Meta } from '@storybook/react/types-6-0';
import Home from 'Pages/index';
import React from 'react';
import 'antd/dist/antd.css';

export default {
  title: 'FluentSearch/Pages/Home',
  component: Home,
} as Meta;

export const Default = (): JSX.Element => <Home />;
