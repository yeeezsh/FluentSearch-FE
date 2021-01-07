import { Drawer } from 'antd';
import { LiStyle } from 'Components/Layouts/Home/HomeNavbar/styled';
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
          return (
            <LiStyle key={key}>
              <Link href={pathJoin(link)}>
                <p
                  style={{ color: '/' + link === router.pathname ? '#0BB5C2' : 'black' }}>
                  {label}
                </p>
              </Link>
            </LiStyle>
          );
        })}
      </Drawer>
    </div>
  );
};

export default SideMenu;
