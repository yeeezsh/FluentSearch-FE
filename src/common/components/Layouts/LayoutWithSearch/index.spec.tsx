import { shallow } from 'enzyme';
import React from 'react';
import LayoutWithSearch from '.';
import { ContentWithPadding } from './styled';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from 'Stores/index';
import { MockedProvider } from '@apollo/client/testing';

describe('Component/LayoutWithSearch test', () => {
  const mocks = [];

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Should match snapshots', () => {
    const wrap = renderer
      .create(
        <Provider store={store}>
          <MockedProvider mocks={mocks}>
            <LayoutWithSearch />
          </MockedProvider>
        </Provider>,
      )
      .toJSON();
    expect(wrap).toMatchSnapshot();
  });

  it('It should have title and children', () => {
    const wrapper = shallow(
      <LayoutWithSearch title="Title"> Children here </LayoutWithSearch>,
    );

    expect(wrapper.exists(ContentWithPadding)).toBe(true);
    expect(wrapper.find(ContentWithPadding).text()).toBe('Title Children here ');
    expect(wrapper.exists('hr')).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Title');
  });

  it('It should not have title and children', () => {
    const wrapper = shallow(<LayoutWithSearch />);

    expect(wrapper.exists(ContentWithPadding)).toBe(true);
    expect(wrapper.find(ContentWithPadding).text()).toBe('');
    expect(wrapper.exists('hr')).toBe(true);
    expect(wrapper.find('h1').text()).toBe('');
  });
});
