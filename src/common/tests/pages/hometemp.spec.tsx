import { mount, shallow } from 'enzyme';
import React from 'react';
import HomePageTemp from 'Modules/home/pages/HomePageTemp';
import Button from 'Components/Button';

describe('Pages/HomeTemp test', () => {
  it('Render correctly', () => {
    const wrap = shallow(<HomePageTemp />);
    expect(wrap.html).toMatchSnapshot();
  });

  it('HomeTemp should be exisiting', () => {
    const wrap = shallow(<HomePageTemp />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain Get Started Button', () => {
    const wrap = mount(<HomePageTemp />);
    expect(wrap.find(Button).text()).toEqual('Get Started');
  });

  it('Should contain Logo Image', () => {
    const wrap = mount(<HomePageTemp />);
    expect(wrap.exists('img')).toBe(true);
  });
});
