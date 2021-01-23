import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { usersQueryMock } from './mocks';

export const MockProvider: React.FC = ({ children }) => {
  return (
    <MockedProvider mocks={[usersQueryMock]}>
      <>{children}</>
    </MockedProvider>
  );
};
