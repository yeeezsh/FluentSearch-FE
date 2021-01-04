/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta } from '@storybook/react/types-6-0';
import Home from 'Pages/index';
import React from 'react';
import 'antd/dist/antd.css';

export default {
  title: 'FluentSearch/Home',
  component: Home,
} as Meta;

export const HomePage = () => <Home />;
