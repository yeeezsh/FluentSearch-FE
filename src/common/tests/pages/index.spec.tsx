import { mount, shallow } from 'enzyme';
import { HeaderWrapper } from 'Pages/index';
import Home from 'Pages/index';
import React from 'react';
import { Card } from 'antd';
import IconSelector from 'src/common/utils/icon-selector';
import HomeLayout from 'Components/Layouts/Home';

describe('Pages/Home test', () => {
  it('Render correcly', () => {
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

  it('Should contain Header', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists(HeaderWrapper)).toBe(true);
  });

  it('Should contain HeaderText', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists(HeaderWrapper)).toBe(true);
  });

  it('Should contain 6 cards 6 icons and 6 headers for card', () => {
    const wrap = mount(<Home />);
    expect(wrap.find(Card)).toHaveLength(6);
    expect(wrap.find(IconSelector)).toHaveLength(6);
  });
});
