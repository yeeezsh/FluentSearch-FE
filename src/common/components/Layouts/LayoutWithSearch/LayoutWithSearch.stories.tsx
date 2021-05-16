import { ApolloProvider } from '@apollo/client';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';
import LayoutWithSearch from '.';

export default {
  title: 'FluentSearch/LayoutWithSearch',
  component: LayoutWithSearch,
} as Meta;

export const Default: Story = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ApolloProvider client={client}>
        <LayoutWithSearch title="Title"> Children here </LayoutWithSearch>
      </ApolloProvider>
    </Provider>
  </>
);
