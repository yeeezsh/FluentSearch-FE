/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta } from '@storybook/react/types-6-0';
import Home from 'Pages/index';
import React from 'react';
import 'antd/dist/antd.css';

export default {
  title: 'FluentSearch/HomePage',
  component: Home,
} as Meta;

export const HomePage = (): JSX.Element => <Home />;
