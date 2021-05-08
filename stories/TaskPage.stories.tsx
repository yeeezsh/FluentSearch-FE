import { ApolloClient, ApolloProvider } from '@apollo/client';
import { Meta } from '@storybook/react';
import TaskPage from 'Modules/task/pages/';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';

export default {
  title: 'FluentSearch/Pages/TaskPage',
  component: TaskPage,
} as Meta;

export const Default = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ApolloProvider client={client}>
        <TaskPage />
      </ApolloProvider>
    </Provider>
  </>
);
