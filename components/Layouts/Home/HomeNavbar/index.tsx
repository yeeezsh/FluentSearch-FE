import { MenuOutlined } from '@ant-design/icons';
import {
  ButtonSideMenuStyle,
  LogoStyle,
  MenuDivStyle,
  NavStyle,
} from 'Components/Layouts/Home/HomeNavbar/styled';
import RightNav from 'Components/Layouts/Home/HomeNavbar/RightNavbar';
import SideMenu from 'Components/Layouts/Home/HomeNavbar/SideMenu';
import React, { useState } from 'react';

interface HomeNavbarProps {
  visible?: boolean;
}

const HomeNavbar: React.FC<HomeNavbarProps> = (props) => {
  const [visible, setVisible] = useState(props.visible || false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <NavStyle>
        <LogoStyle>FluentSearch</LogoStyle>
        <RightNav />

        <ButtonSideMenuStyle onClick={showDrawer}>
          <MenuDivStyle>
            <MenuOutlined />
          </MenuDivStyle>
        </ButtonSideMenuStyle>
      </NavStyle>
      <SideMenu onClose={onClose} visible={visible} />
    </div>
  );
};

export default HomeNavbar;
