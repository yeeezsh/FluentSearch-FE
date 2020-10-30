/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Menu } from 'antd';
import APP_NAVBAR_CONSTANT from 'Models/menu/app.navbar.constant';
import React, { useState } from 'react';
import pathJoin from 'Utils/path-join';
import style from './styles.module.css';

const HomeNavbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className={style.navbar}>
      <Button
        className={style.sideMenu}
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />

      <Drawer
        title="Web name"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}>
        {APP_NAVBAR_CONSTANT.map(({ key, label, link }) => {
          return (
            <li key={key}>
              <a href={pathJoin(link)}>{label}</a>
            </li>
          );
        })}
      </Drawer>
      <Menu className={style.menu} mode="horizontal" defaultSelectedKeys={['2']}>
        {APP_NAVBAR_CONSTANT.map(({ key, label, link }) => {
          return (
            <Menu.Item key={key}>
              <a href={pathJoin(link)}>{label}</a>
            </Menu.Item>
          );
        })}
      </Menu>
    </nav>
  );
};

export default HomeNavbar;
