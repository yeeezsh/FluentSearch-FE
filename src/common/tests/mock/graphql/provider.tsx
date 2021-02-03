import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { usersQueryMock } from './mocks';
import { client } from 'Services/client';
import { ApolloProvider } from '@apollo/client';

interface ProviderProps {
  useMocks?: boolean;
}

export const CustomApolloProvider: React.FC<ProviderProps> = ({ useMocks, children }) => {
  if (useMocks)
    return (
      <MockedProvider mocks={[usersQueryMock]}>
        <>{children}</>
      </MockedProvider>
    );
  return (
    <ApolloProvider client={client}>
      <>{children}</>
    </ApolloProvider>
  );
};
