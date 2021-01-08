import { MenuOutlined } from '@ant-design/icons';
import {
  ButtonSideMenuStyle,
  LogoStyle,
  MenuDivStyle,
  NavStyle,
} from 'src/modules/home/components/HomeNavbar/styled';
import Menu from 'src/modules/home/components/HomeNavbar/Menu';
import SideMenu from 'src/modules/home/components/HomeNavbar/SideMenu';
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
        <Menu />

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
