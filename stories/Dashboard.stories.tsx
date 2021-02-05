import { Meta } from '@storybook/react';
import DashboardPage from 'Modules/dashboard/pages';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/Dashboard',
  component: DashboardPage,
} as Meta;

export const Default = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <DashboardPage />
    </Provider>
  </>
);
