import { Meta } from '@storybook/react';
import HomePageTemp from 'Modules/home/pages/HomePageTemp';
import React from 'react';
import { GlobalStyle } from 'Styles/global';
import Navbar from 'Modules/home/components/Navbar/index';

export default {
  title: 'FluentSearch/Pages/HomeTemp',
  component: HomePageTemp,
} as Meta;

export const Default = (): JSX.Element => (
  <div style={{ height: '100vh' }}>
    <GlobalStyle />
    <Navbar />
    <HomePageTemp />
  </div>
);
