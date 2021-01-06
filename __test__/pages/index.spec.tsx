import HomeLayout from 'Components/Layouts/Home';
import { Header, HeaderText } from 'Pages/index';
import { mount, shallow } from 'enzyme';
import Home from 'Pages/index';
import React from 'react';
import { Card } from 'antd';
import IconSelector from 'Utils/icon-selector';

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
    const wrap = shallow(<Home />);
    expect(wrap.exists(HomeLayout)).toBe(true);
  });

  it('Should contain Header', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists(Header)).toBe(true);
  });

  it('Should contain HeaderText', () => {
    const wrap = shallow(<Home />);
    expect(wrap.exists(HeaderText)).toBe(true);
  });

  it('Should contain 6 cards 6 icons and 6 headers for card', () => {
    const wrap = mount(<Home />);
    expect(wrap.find(Card)).toHaveLength(6);
    expect(wrap.find(IconSelector)).toHaveLength(6);
    expect(wrap.find('h2')).toHaveLength(6);
  });
});
