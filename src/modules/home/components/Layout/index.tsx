import { Layout } from 'antd';
import React from 'react';

const HomeLayout: React.FC = (props) => {
  const { children } = props;
  const { Content, Footer } = Layout;
  return (
    <div>
      <Content>
        <div>{children}</div>
      </Content>
      <Footer>Footer</Footer>
    </div>
  );
};

export default HomeLayout;
