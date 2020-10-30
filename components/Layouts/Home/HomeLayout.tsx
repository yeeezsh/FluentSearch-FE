import { Layout } from 'antd';
import React from 'react';
import HomeNavbar from './HomeNavbar';

const HomeLayout: React.FC = (props) => {
  const { children } = props;
  const { Content, Footer } = Layout;
  return (
    <div>
      <HomeNavbar />
      <Content>
        <div>{children}</div>
      </Content>
      <Footer>Footer</Footer>
    </div>
  );
};

export default HomeLayout;
