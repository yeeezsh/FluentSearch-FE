import { shallow } from 'enzyme';
import React from 'react';
import Home from '..';

describe('Home', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  });
});
