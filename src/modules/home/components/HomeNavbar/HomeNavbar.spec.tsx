import { shallow } from 'enzyme';
import React from 'react';
import { LogoStyle } from 'src/modules/home/components/HomeNavbar/styled';
import HomeNavbar from '.';
import Menu from './Menu';
import SideMenu from './SideMenu';

describe('Components/Navbar test', () => {
  it('Render correctly', () => {
    const wrap = <HomeNavbar />;
    expect(wrap).toMatchSnapshot();
  });

  it('Navbar should be exisiting', () => {
    const wrap = shallow(<HomeNavbar />);
    expect(wrap.exists()).toBe(true);
  });

  it('SideMenu should be exisiting', () => {
    const wrap = shallow(<HomeNavbar />);
    expect(wrap.exists(SideMenu)).toBe(true);
  });

  it('Menu should be exisiting', () => {
    const wrap = shallow(<HomeNavbar />);
    expect(wrap.exists(Menu)).toBe(true);
  });

  it('Should contain Logo', () => {
    const wrap = shallow(<HomeNavbar />);
    expect(wrap.exists(LogoStyle)).toBe(true);
  });
});
