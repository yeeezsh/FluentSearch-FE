import {
  MenuItemStyled,
  NavbarContainerRow,
} from 'Modules/home/components/Navbar/styled';
import { APP_NAVBAR_CONSTANT } from 'Modules/home/constants/menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import pathJoin from 'src/common/utils/path-join';

const Menu: React.FC = () => {
  const router = useRouter();
  return (
    <NavbarContainerRow>
      {APP_NAVBAR_CONSTANT.map(({ key, label, link }) => {
        const isSelecting = '/' + link === router.pathname;
        return (
          <li key={key}>
            <Link href={pathJoin(link)}>
              <MenuItemStyled isSelecting={isSelecting}>{label}</MenuItemStyled>
            </Link>
          </li>
        );
      })}
    </NavbarContainerRow>
  );
};

export default Menu;
