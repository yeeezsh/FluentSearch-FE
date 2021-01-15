import React from 'react';
import { Menu, Layout, Input, Row, Col, Avatar, Dropdown } from 'antd';
import {
  CanvasWrapper,
  SiderWrapper,
  MenuWrapper,
  MenuItem,
  UserWrapper,
  ContentWrapper,
} from 'Modules/photos/components/Layouts/styled';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { AllPhotoLayoutProps } from './types';
import pathJoin from 'Utils/path-join';
import { useRouter } from 'next/router';
import {
  DROPDOWN_SIDEBAR_CONSTANT,
  PHOTOS_SIDEBAR_CONSTANT,
} from 'Modules/photos/constants/menu/index';
import IconSelector from 'Utils/icon-selector';

const { Header, Content } = Layout;

const MenuContainer: React.FC = () => {
  const router = useRouter();
  return (
    <>
      {PHOTOS_SIDEBAR_CONSTANT.map(({ key, label, link, icon }) => {
        const isSelecting = '/' + link === router.pathname;
        return (
          <Link href={pathJoin(link)} key={key}>
            <MenuItem isSelecting={isSelecting}>
              <p>
                <IconSelector type={icon as string} /> {label}
              </p>
            </MenuItem>
          </Link>
        );
      })}
    </>
  );
};

const Sider: React.FC = () => (
  <SiderWrapper>
    <Row justify="center">
      <Col>
        <Image
          src={'assets/images/logo-with-bg.svg'}
          layout="fixed"
          width={130}
          height={80}
        />
      </Col>
    </Row>
    <MenuWrapper>
      <MenuContainer />
    </MenuWrapper>
  </SiderWrapper>
);

const DropdownMenu = (
  <Menu>
    {DROPDOWN_SIDEBAR_CONSTANT.map(({ key, label, link }) => {
      return (
        <Menu.Item key={key}>
          <Link href={pathJoin(link)}>{label}</Link>
        </Menu.Item>
      );
    })}
  </Menu>
);

const UserContainer: React.FC = () => {
  return (
    <UserWrapper>
      <Dropdown overlay={DropdownMenu} placement="bottomRight" trigger={['click']}>
        <Avatar>J</Avatar>
      </Dropdown>
    </UserWrapper>
  );
};

const HeaderWrapper: React.FC = () => {
  return (
    <Header>
      <Row justify="center">
        <Col xl={8}>
          <Input placeholder="Search" prefix={<SearchOutlined />} />
        </Col>
        <Col xl={4} push={3}>
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
        <ContentWrapper>
          <HeaderWrapper />
          <Content style={{ overflow: 'initial' }}>
            <h1>{title}</h1>
            <hr />
            {children}
          </Content>
        </ContentWrapper>
      </Layout>
    </CanvasWrapper>
  );
};

export default AllPhotosLayout;
