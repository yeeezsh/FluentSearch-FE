import App from 'Apps/App';
import { shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Core from './Core';

describe('Core Router', () => {
  const wrapper = shallow(<Core />);

  it('should have Contain BrowserRouter', () => {
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
  });

  it('should contain App', () => {
    expect(wrapper.find(App)).toHaveLength(1);
  });
});
