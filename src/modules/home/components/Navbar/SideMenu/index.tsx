import { Drawer } from 'antd';
import {
  MenuItemStyled,
  NavbarContainerItem,
} from 'Modules/home/components/Navbar/styled';
import React from 'react';
import Link from 'next/link';
import { APP_NAVBAR_CONSTANT } from 'Modules/home/constants/menu';
import { useRouter } from 'next/router';
import pathJoin from 'Utils/path-join';

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
