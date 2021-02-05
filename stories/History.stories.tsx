import { Meta } from '@storybook/react';
import HistoryPage from 'Modules/history/pages';
import React from 'react';
import { Provider } from 'react-redux';
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
      <HistoryPage />
    </Provider>
  </>
);
