import { ApolloProvider } from '@apollo/client';
import { Meta } from '@storybook/react';
import DashboardPage from 'Modules/dashboard/pages';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';
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
      <ApolloProvider client={client}>
        <DashboardPage />
      </ApolloProvider>
    </Provider>
  </>
);
