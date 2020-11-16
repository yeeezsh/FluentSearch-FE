import { Ul } from 'Components/Layouts/Home/HomeNavbar/HomeNavbar.styled';
import APP_NAVBAR_CONSTANT from 'Models/menu/app.navbar.constant';
import { useRouter } from 'next/router';
import React from 'react';
import pathJoin from 'Utils/path-join';

const RightNav: React.FC = () => {
  const router = useRouter();
  return (
    <Ul>
      {APP_NAVBAR_CONSTANT.map(({ key, label, link }) => {
        return (
          <li key={key}>
            <a
              href={pathJoin(link)}
              style={{ color: '/' + link === router.pathname ? '#0BB5C2' : 'black' }}>
              {label}
            </a>
          </li>
        );
      })}
    </Ul>
  );
};

export default RightNav;
