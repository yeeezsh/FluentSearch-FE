import { Meta } from '@storybook/react';
import HistoryPage from 'Modules/history/pages';
import React from 'react';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/History',
  component: HistoryPage,
} as Meta;

export const Default = (): JSX.Element => (
  <>
    <GlobalStyle />
    <HistoryPage />
  </>
);
