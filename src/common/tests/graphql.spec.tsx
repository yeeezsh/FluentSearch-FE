import { mount, shallow, render } from 'enzyme';
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';

import TestRenderer from 'react-test-renderer';
import Users from './mock/graphql/Users';
import { usersQueryMock } from './mock/graphql/mocks';

describe('GraphQL Query Test', () => {
  console.log('init', MockedProvider);
  it('renders with MockedProvider', async () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={[usersQueryMock]}>
        <Users />
      </MockedProvider>,
    );
    const tree = component.toJSON();
    console.log(tree);

    // expect(getByText("Loading products...")).toBeInTheDocument();
    // const productTag = await findByText("Nike Shoes");
    // expect(productTag).toBeInTheDocument();
  });
});
