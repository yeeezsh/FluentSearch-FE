import HomeLayout from 'Components/Layouts/Home/HomeLayout';
import { shallow } from 'enzyme';
import Home from 'Pages/index';
import React from 'react';

describe('Pages/Home test', () => {
  const wrap = shallow(<Home />);
  console.log(wrap.debug());
  it('Render correctly', () => {
    const wrap = <Home />;
    expect(wrap).toMatchSnapshot();
  });

  it('Home should be exisiting', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain HomeLayout', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists(HomeLayout)).toBe(true);
  });
});
