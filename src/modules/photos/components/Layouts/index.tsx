import React from 'react';
import { Layout, Input, Row, Col, Avatar } from 'antd';
import {
  CanvasWrapper,
  SiderWrapper,
  MenuWrapper,
  Menu,
  HeaderWrapper,
} from 'Modules/photos/components/Layouts/styled';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

const { Header, Content } = Layout;

const AllPhotosLayout: React.FC = (props) => {
  return (
    <CanvasWrapper>
      <Layout>
        <SiderWrapper>
          <Row justify="center">
            <Col style={{ marginTop: '2%' }}>
              <Image src={'assets/images/logo-white.svg'} width={150} height={60} />
            </Col>
          </Row>
          <hr />
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
        <Content>
          <HeaderWrapper>
            <Header style={{ borderBottom: '1px red' }}>
              <Row justify="center">
                <Col xl={10}>
                  <Input placeholder="Search" prefix={<SearchOutlined />} />
                </Col>
                <Col xl={4} push={4}>
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    U
                  </Avatar>
                </Col>
              </Row>
            </Header>
          </HeaderWrapper>
          <hr />
          <div style={{ margin: '3%' }}>
            <h1>Photos</h1>
            <hr />
            {props.children}
          </div>
        </Content>
      </Layout>
    </CanvasWrapper>
  );
};

export default AllPhotosLayout;
