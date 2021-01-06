import { shallow } from 'enzyme';
import HomeNavbar from 'Components/Layouts/Home/HomeNavbar';
import React from 'react';
import { LogoStyle } from 'Components/Layouts/Home/HomeNavbar/styled';

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
    expect(wrap.exists('SideMenu')).toBe(true);
  });

  it('RightNav should be exisiting', () => {
    const wrap = shallow(<HomeNavbar />);
    expect(wrap.exists('RightNav')).toBe(true);
  });

  it('Should contain Logo', () => {
    const wrap = shallow(<HomeNavbar />);
    expect(wrap.exists(LogoStyle)).toBe(true);
  });
});
