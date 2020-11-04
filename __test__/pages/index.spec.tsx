import HomeLayout from 'Components/Layouts/Home/HomeLayout';
import { mount, shallow } from 'enzyme';
import Home from 'Pages/index';
import React from 'react';

describe('Pages/Home test', () => {
  it('Render correcly', () => {
    const wrap = <Home />;
    expect(wrap).toMatchSnapshot();
  });

  it('Home should be exisiting', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain Home Layout', () => {
    const wrap = mount(<Home />);
    expect(wrap.find(<HomeLayout />).exists()).toBe(true);
  });
});
