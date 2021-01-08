import { mount, shallow } from 'enzyme';
import HomePage from 'src/modules/home/pages/index';
import React from 'react';
import { Card } from 'antd';
import HomeLayout from 'src/modules/home/components/Layout';
import IconSelector from 'Utils/icon-selector';
import { HeaderWrapper } from 'src/modules/home/pages/styled';

describe('Pages/Home test', () => {
  it('Render correcly', () => {
    const wrap = <HomePage />;
    expect(wrap).toMatchSnapshot();
  });

  it('Home should be exisiting', () => {
    const wrap = shallow(<HomePage />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain HomeLayout', () => {
    const wrap = shallow(<HomePage />);
    expect(wrap.exists(HomeLayout)).toBe(true);
  });

  it('Should contain Header', () => {
    const wrap = shallow(<HomePage />);
    expect(wrap.exists(HeaderWrapper)).toBe(true);
  });

  it('Should contain HeaderText', () => {
    const wrap = shallow(<HomePage />);
    expect(wrap.exists(HeaderWrapper)).toBe(true);
  });

  it('Should contain 6 cards 6 icons and 6 headers for card', () => {
    const wrap = mount(<HomePage />);
    expect(wrap.find(Card)).toHaveLength(6);
    expect(wrap.find(IconSelector)).toHaveLength(6);
  });
});
