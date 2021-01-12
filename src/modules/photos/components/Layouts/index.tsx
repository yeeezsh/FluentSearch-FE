import React from 'react';
import { Layout, Input, Row, Col, Avatar } from 'antd';
import {
  CanvasWrapper,
  SiderWrapper,
  MenuWrapper,
  Menu,
  ContentWrapper,
} from 'Modules/photos/components/Layouts/styled';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { AllPhotoLayoutProps } from './types';

const { Header, Content } = Layout;

const Sider: React.FC = () => (
  <SiderWrapper>
    <Row justify="center">
      <Col style={{ marginTop: '5%' }}>
        <Image src={'assets/images/logo-with-bg.svg'} width={180} height={80} />
      </Col>
    </Row>
    <MenuWrapper>
      <Menu>
        <Link href="/">Photos</Link>
      </Menu>
      <Menu>
        <Link href="/">Albums</Link>
      </Menu>
      <Menu>
        <Link href="/">Trash</Link>
      </Menu>
      <Menu>
        <Link href="/">Logout</Link>
      </Menu>
    </MenuWrapper>
  </SiderWrapper>
);

const HeaderWrapper: React.FC = () => {
  return (
    <Header>
      <Row justify="center">
        <Col xl={10}>
          <Input placeholder="Search" prefix={<SearchOutlined />} />
        </Col>
        <Col xl={4} push={4}>
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        </Col>
      </Row>
    </Header>
  );
};

const AllPhotosLayout: React.FC<AllPhotoLayoutProps> = (props) => {
  const { title, children } = props;
  return (
    <CanvasWrapper>
      <Layout>
        <Sider />
        <Content>
          <HeaderWrapper />
          <ContentWrapper>
            <h1>{title}</h1>
            <hr />
            {children}
          </ContentWrapper>
        </Content>
      </Layout>
    </CanvasWrapper>
  );
};

export default AllPhotosLayout;
