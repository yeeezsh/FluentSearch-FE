import { mount, shallow } from 'enzyme';
import Menu from 'Components/Layouts/Home/HomeNavbar/Menu';
import React from 'react';

describe('Components/Navbar test', () => {
  it('RightNavbar should be exisiting', () => {
    const wrap = shallow(<Menu />);
    expect(wrap.exists()).toBe(true);
  });

  it('Menu have proper links', () => {
    const wrap = mount(<Menu />);
    expect(wrap.find('[href="register/"]')).toHaveLength(1);
    expect(wrap.find('[href="login/"]')).toHaveLength(1);
    expect(wrap.find('p').at(0).text()).toEqual('Sign up');
    expect(wrap.find('button').text()).toEqual('Login');
  });
});
