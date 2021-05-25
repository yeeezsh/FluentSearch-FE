import { ApolloProvider } from '@apollo/client';
import { Meta } from '@storybook/react';
import HistoryPage from 'Modules/history/pages';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/History',
  component: HistoryPage,
} as Meta;

export const Default = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ApolloProvider client={client}>
        <HistoryPage />
      </ApolloProvider>
    </Provider>
  </>
);
