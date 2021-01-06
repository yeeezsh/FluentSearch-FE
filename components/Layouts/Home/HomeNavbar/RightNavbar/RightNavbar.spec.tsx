import { mount, shallow } from 'enzyme';
import RightNavbar from 'Components/Layouts/Home/HomeNavbar/RightNavbar';
import React from 'react';

describe('Components/Navbar test', () => {
  it('RightNavbar should be exisiting', () => {
    const wrap = shallow(<RightNavbar />);
    expect(wrap.exists()).toBe(true);
  });

  it('RightNavbar have proper links', () => {
    const wrap = mount(<RightNavbar />);
    expect(wrap.find('[href="register/"]')).toHaveLength(1);
    expect(wrap.find('[href="login/"]')).toHaveLength(1);
    expect(wrap.find('p').at(0).text()).toEqual('Sign up');
    expect(wrap.find('button').text()).toEqual('Login');
  });
});
