import { UlStyle } from 'Components/Layouts/Home/HomeNavbar/styled';
import { APP_NAVBAR_CONSTANT } from 'Models/menu/constant';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import pathJoin from 'Utils/path-join';

const RightNav: React.FC = () => {
  const router = useRouter();
  return (
    <UlStyle>
      {APP_NAVBAR_CONSTANT.map(({ key, label, link }) => {
        return (
          <li key={key}>
            <Link href={pathJoin(link)}>
              <p style={{ color: '/' + link === router.pathname ? '#0BB5C2' : 'black' }}>
                {label}
              </p>
            </Link>
          </li>
        );
      })}
    </UlStyle>
  );
};

export default RightNav;
