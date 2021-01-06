import { mount } from 'enzyme';
import RightNavbar from 'Components/Layouts/Home/HomeNavbar/RightNavbar';
import React from 'react';
import { Logo } from 'Components/Layouts/Home/HomeNavbar/styled';

describe('Components/Navbar test', () => {
  it('Render correctly', () => {
    const wrap = <RightNavbar />;
    expect(wrap).toMatchSnapshot();
  });

  it('RightNavbar should be exisiting', () => {
    const wrap = mount(<RightNavbar />);
    console.log(wrap.debug());
  });
});
