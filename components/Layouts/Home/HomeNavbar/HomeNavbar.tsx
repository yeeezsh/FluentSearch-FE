/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MenuOutlined } from '@ant-design/icons';
import { BtnSideMenu, Nav } from 'Components/Layouts/Home/HomeNavbar/HomeNavbar.styled';
import RightNav from 'Components/Layouts/Home/HomeNavbar/RightNav';
import SideMenu from 'Components/Layouts/Home/HomeNavbar/SideMenu';
import React, { useState } from 'react';
import style from '../styles.module.css';

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
      <Nav className={style.navbar}>
        <div className="logo">Deepflow</div>
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
