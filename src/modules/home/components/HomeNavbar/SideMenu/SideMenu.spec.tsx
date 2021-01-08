import { shallow } from 'enzyme';
import SideMenu from 'src/modules/home/components/HomeNavbar/SideMenu/index';
import React from 'react';

describe('Components/SideMenu test', () => {
  it('SideMenu should be exisiting', () => {
    const wrap = shallow(<SideMenu visible={true} />);
    expect(wrap.exists()).toBe(true);
  });

  it('SideMenu have proper links', () => {
    const wrap = shallow(<SideMenu visible={true} />);
    expect(wrap.find('[href="register/"]')).toHaveLength(1);
    expect(wrap.find('[href="login/"]')).toHaveLength(1);
  });
});
