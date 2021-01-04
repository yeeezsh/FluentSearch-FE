import { mount, shallow } from 'enzyme';
import HomeNavbar from 'Components/Layouts/Home/HomeNavbar/HomeNavbar';
import React from 'react';
import {
  BtnSideMenu,
  Logo,
  Nav,
} from 'Components/Layouts/Home/HomeNavbar/HomeNavbar.styled';
import RightNav from 'Components/Layouts/Home/HomeNavbar/RightNav';
import SideMenu from 'Components/Layouts/Home/HomeNavbar/SideMenu';

describe('Components/Navbar test', () => {
  it('Render correctly', () => {
    const wrap = <HomeNavbar />;
    expect(wrap).toMatchSnapshot();
  });

  it('Navbar should be exisiting', () => {
    const wrap = shallow(<HomeNavbar />);
    expect(wrap.exists()).toBe(true);
  });

  it('Should contain Logo', () => {
    const wrap = shallow(<HomeNavbar />);
    expect(wrap.exists(Logo)).toBe(true);
  });
});
