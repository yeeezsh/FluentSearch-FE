/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MenuOutlined } from '@ant-design/icons';
import {
  BtnSideMenu,
  Logo,
  Nav,
} from 'Components/Layouts/Home/HomeNavbar/HomeNavbar.styled';
import RightNav from 'Components/Layouts/Home/HomeNavbar/RightNav';
import SideMenu from 'Components/Layouts/Home/HomeNavbar/SideMenu';
import React, { useState } from 'react';

const HomeNavbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

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
          <MenuOutlined />
        </BtnSideMenu>
      </Nav>
      <SideMenu onClose={onClose} visible={visible} />
    </div>
  );
};

export default HomeNavbar;
