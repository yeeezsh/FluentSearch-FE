/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MenuOutlined } from '@ant-design/icons';
import {
  BtnSideMenu,
  Logo,
  MenuDiv,
  Nav,
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
      <Nav>
        <Logo>FluentSearch</Logo>
        <RightNav />

        <BtnSideMenu onClick={showDrawer}>
          <MenuDiv>
            <MenuOutlined />
          </MenuDiv>
        </BtnSideMenu>
      </Nav>
      <SideMenu onClose={onClose} visible={visible} />
    </div>
  );
};

export default HomeNavbar;
