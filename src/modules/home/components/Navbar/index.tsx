import { MenuOutlined } from '@ant-design/icons';
import {
  ButtonSideMenuStyle,
  LogoStyle,
  MenuDivStyle,
  NavStyle,
} from 'Modules/home/components/Navbar/styled';
import Menu from 'Modules/home/components/Navbar/Menu';
import SideMenu from 'Modules/home/components/Navbar/SideMenu';
import React, { useState } from 'react';
import Image from 'next/image';

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
        <LogoStyle>
          <Image src={'/assets/images/03-logo.svg'} width={100} height={50} />
        </LogoStyle>
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
