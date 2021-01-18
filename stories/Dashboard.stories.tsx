import { Meta } from '@storybook/react';
import DashboardPage from 'Modules/dashboard/pages';
import React from 'react';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/Dashboard',
  component: DashboardPage,
} as Meta;

export const DashboardStories = (): JSX.Element => (
  <>
    <GlobalStyle />
    <DashboardPage />
  </>
);
