import APP_NAVBAR_CONSTANT from 'Models/menu/app.navbar.constant';
import React from 'react';
import styled from 'styled-components';
import pathJoin from 'Utils/path-join';

const RightNav: React.FC = () => {
  const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 10px;
    }

    @media (max-width: 992px) {
      display: none;
    }
  `;
  return (
    <Ul>
      {APP_NAVBAR_CONSTANT.map(({ key, label, link }) => {
        return (
          <li key={key}>
            <a href={pathJoin(link)}>{label}</a>
          </li>
        );
      })}
    </Ul>
  );
};

export default RightNav;
