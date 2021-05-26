import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';
import React from 'react';
import { getApolloClient } from './client';

//TODO: fix display name
// eslint-disable-next-line react/display-name
const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(null, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  );
};
withApollo.displayName = 'withApollo';
export default withApollo;
