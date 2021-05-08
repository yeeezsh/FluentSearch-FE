import { Meta } from '@storybook/react';
import UploadPage from 'Modules/upload/pages';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/UploadPage',
  component: UploadPage,
} as Meta;

export const Default = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <UploadPage />
    </Provider>
  </>
);
