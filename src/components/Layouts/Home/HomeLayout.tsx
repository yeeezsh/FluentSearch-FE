import React from 'react';
import HomeNavbar from './HomeNavbar';

const HomeLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <div>
      <HomeNavbar />
      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
