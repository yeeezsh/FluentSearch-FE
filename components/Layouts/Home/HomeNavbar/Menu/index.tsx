import {
  MenuItemStyled,
  NavbarContainerRow,
} from 'Components/Layouts/Home/HomeNavbar/styled';
import { APP_NAVBAR_CONSTANT } from 'Models/menu/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import pathJoin from 'Utils/path-join';

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
