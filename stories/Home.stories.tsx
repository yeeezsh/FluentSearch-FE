import { Meta } from '@storybook/react';
import HomePage from 'Modules/home/pages';
import React from 'react';
import { GlobalStyle } from 'Styles/global';
import Navbar from 'Modules/home/components/Navbar/index';

export default {
  title: 'FluentSearch/Pages/Home',
  component: HomePage,
} as Meta;

export const Default = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Navbar />
    <HomePage />
  </>
);
