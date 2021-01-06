import { Drawer } from 'antd';
import { Li } from 'Components/Layouts/Home/HomeNavbar/styled';
import APP_NAVBAR_CONSTANT from 'Models/menu/app.navbar.constant';
import React from 'react';
import pathJoin from 'Utils/path-join';

export type SideMenuProps = {
  onClose: () => void;
  visible: boolean;
};

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const { onClose, visible } = props;
  return (
    <div>
      <Drawer placement="right" closable={false} onClose={onClose} visible={visible}>
        {APP_NAVBAR_CONSTANT.map(({ key, label, link }) => {
          return (
            <Li key={key}>
              <a href={pathJoin(link)}>{label}</a>
            </Li>
          );
        })}
      </Drawer>
    </div>
  );
};

export default SideMenu;
