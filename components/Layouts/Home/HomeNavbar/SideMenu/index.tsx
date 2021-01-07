import { Drawer } from 'antd';
import {
  MenuItemStyled,
  NavbarContainerItem,
} from 'Components/Layouts/Home/HomeNavbar/styled';
import React from 'react';
import pathJoin from 'Utils/path-join';
import Link from 'next/link';
import { APP_NAVBAR_CONSTANT } from 'Models/menu/constant';
import { useRouter } from 'next/router';

export type SideMenuProps = {
  onClose?: () => void;
  visible?: boolean;
};

const SideMenu: React.FC<SideMenuProps> = (props) => {
  const router = useRouter();
  const { onClose, visible } = props;
  return (
    <div>
      <Drawer placement="right" closable={false} onClose={onClose} visible={visible}>
        {APP_NAVBAR_CONSTANT.map(({ key, label, link }) => {
          const isSelecting = '/' + link === router.pathname;
          return (
            <NavbarContainerItem key={key}>
              <Link href={pathJoin(link)}>
                <MenuItemStyled isSelecting={isSelecting}>{label}</MenuItemStyled>
              </Link>
            </NavbarContainerItem>
          );
        })}
      </Drawer>
    </div>
  );
};

export default SideMenu;
