import React, { useState, useEffect } from 'react';
import { Layout, Input, Row, Col, Avatar } from 'antd';
import {
  CanvasWrapper,
  SiderWrapper,
  MenuWrapper,
  Menu,
} from 'Modules/photo/components/Layouts/styled';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';
import axios from 'axios';
import { LoadedImage } from 'Modules/photo/components/Layouts/LoadedImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from 'Components/Loader/index';

const { Header, Content } = Layout;

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const AllPhotosLayout: React.FC = (props) => {
  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (): Promise<void> => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'fLLHNmXzlY1Mkc9woN0pQFNNc53hoBfGAgmQTF2OH4w';
    await axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=5`)
      .then((res) => setImages([...images, ...res.data]));
  };

  return (
    <CanvasWrapper>
      <Layout>
        <SiderWrapper>
          <Row justify="center">
            <Col style={{ marginTop: '2%' }}>
              <Image src={'assets/images/03-logo.svg'} width={150} height={60} />
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
          <Header style={{ borderBottom: '1px red' }}>
            <Row justify="center">
              <Col xl={10}>
                <Input placeholder="Search" prefix={<SearchOutlined />} />
              </Col>
              <Col xl={4} push={6}>
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                  U
                </Avatar>
              </Col>
            </Row>
          </Header>
          <hr />
          <div style={{ margin: '3%' }}>
            <h1>Photos</h1>
            <hr />
            {props.children}
            <InfiniteScroll
              dataLength={images.length}
              next={fetchImages}
              hasMore={true}
              loader={<Loader />}>
              <WrapperImage>
                {images.map((image) => (
                  <LoadedImage url={image.urls.thumb} key={image.id} />
                ))}
              </WrapperImage>
            </InfiniteScroll>
          </div>
        </Content>
      </Layout>
    </CanvasWrapper>
  );
};

export default AllPhotosLayout;
