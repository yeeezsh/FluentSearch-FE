import { ApolloProvider } from '@apollo/client';
import { Meta } from '@storybook/react';
import AllPhotosPage from 'Modules/photos/pages/index';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/AllPhotosPage',
  component: AllPhotosPage,
} as Meta;

export const AllPhotoStories = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AllPhotosPage />
      </ApolloProvider>
    </Provider>
  </>
);
