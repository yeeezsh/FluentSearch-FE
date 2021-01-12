import React from 'react';
import { Menu, Layout, Input, Row, Col, Avatar, Dropdown } from 'antd';
import {
  CanvasWrapper,
  SiderWrapper,
  MenuWrapper,
  MenuItem,
  ContentWrapper,
  UserWrapper,
} from 'Modules/photos/components/Layouts/styled';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { AllPhotoLayoutProps } from './types';
import pathJoin from 'Utils/path-join';
import { useRouter } from 'next/router';
import { PHOTOS_SIDEBAR_CONSTANT } from 'Modules/photos/constant/menu/index';

const { Header, Content } = Layout;

const MenuContainer: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      {PHOTOS_SIDEBAR_CONSTANT.map(({ key, label, link }) => {
        const isSelecting = '/' + link === router.pathname;
        return (
          <Link href={pathJoin(link)} key={key}>
            <MenuItem isSelecting={isSelecting}>
              <p>{label}</p>
            </MenuItem>
          </Link>
        );
      })}
    </div>
  );
};

const Sider: React.FC = () => (
  <SiderWrapper>
    <Row justify="center">
      <Col>
        <Image src={'assets/images/logo-with-bg.svg'} width={180} height={80} />
      </Col>
    </Row>
    <MenuWrapper>
      <MenuContainer />
    </MenuWrapper>
  </SiderWrapper>
);

const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <p>
        <b>John Doe</b>
      </p>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        logout
      </a>
    </Menu.Item>
  </Menu>
);

const UserContainer: React.FC = () => {
  return (
    <UserWrapper>
      <Dropdown overlay={dropdownMenu} placement="bottomRight" trigger={['click']}>
        <Avatar>U</Avatar>
      </Dropdown>
    </UserWrapper>
  );
};

const HeaderWrapper: React.FC = () => {
  return (
    <Header>
      <Row justify="center">
        <Col xl={10}>
          <Input placeholder="Search" prefix={<SearchOutlined />} />
        </Col>
        <Col xl={4} push={4}>
          <UserContainer />
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
