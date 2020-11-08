import { Layout } from 'antd';
import HomeNavbar from 'Components/Layouts/Home/HomeNavbar/HomeNavbar';
import React from 'react';

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
