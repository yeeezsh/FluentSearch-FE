import menu from 'Models/menu/app.navbar.constant';
import React from 'react';
import pathJoin from 'Utils/path-join';
import style from './styles.module.css';

const HomeNavbar: React.FC = () => {
  return (
    <div>
      <ul style={style}>
        {menu.map(({ key, label, link }) => {
          return (
            <li key={key}>
              <a href={pathJoin(link)}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeNavbar;
