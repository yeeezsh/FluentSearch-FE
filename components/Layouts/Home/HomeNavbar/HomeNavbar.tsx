/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MenuOutlined } from '@ant-design/icons';
import RightNav from 'Components/Layouts/Home/HomeNavbar/RightNav';
import SideMenu from 'Components/Layouts/Home/HomeNavbar/SideMenu';
import React, { useState } from 'react';
import styled from 'styled-components';
import style from '../styles.module.css';

const HomeNavbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo {
      padding: 15px 0;
    }
  `;

  const BtnSideMenu = styled.button`
    background: none;
    border: 0px;
    cursor: pointer;

    @media (min-width: 992px) {
      display: none;
    }
  `;

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
