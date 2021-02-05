import axios from 'axios';
import Button from 'Components/Button';
import { Loader } from 'Components/Loader';
import AllPhotosLayout from 'Modules/photos/components/Layouts';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { WrapperImage } from '../components/Layouts/styled';
import ThumbnailPhoto from '../components/ThumbnailPhoto';
import { Photos } from '../constants/photo/interface';
import Link from 'next/link';
import {
  LightboxWrapper,
  PrevButton,
  NextButton,
  ContentLightbox,
  ImageLightbox,
  Wrapper,
} from './styled';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Row, Col, Tag } from 'antd';
import dayjs from 'dayjs';
import { useGetInsightQuery } from 'Services/model/generated-types';

const tag = ['animal', 'tree', 'people'];
const boundingBox = [
  [12, 24, 54, 54],
  [23, 434, 455, 456],
];

const TagRender: React.FC = () => {
  return (
    <>
      {tag.map((e, index) => (
        <Tag key={index}>{e}</Tag>
      ))}
    </>
  );
};

const AllPhotosPages: React.FC = () => {
  const initialState = {
    id: '',
    created_at: '',
    updated_at: '',
    width: 0,
    height: 0,
    color: '',
    blur_hash: '',
    downloads: 0,
    likes: 0,
    liked_by_user: false,
    description: '',
    location: {
      name: '',
      titile: '',
      city: '',
      country: '',
    },
    urls: {
      raw: '',
      full: '',
      regular: '',
      small: '',
      thumb: '',
    },
    links: {
      self: '',
      html: '',
      download: '',
      download_location: '',
    },
    user: {
      name: '',
      total_likes: 0,
    },
  };

  const [images = [], setImages] = useState<Photos[]>();
  const [currentImage, setCurrentImages] = useState<Photos>(initialState);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { data, loading } = useGetInsightQuery();

  const queryData = data?.getFilesWithInsight.map(
    (e) =>
      ({
        ...initialState,
        id: e._id,
        user: { name: '1234', total_likes: 5 },
        urls: {
          raw: e.uri,
          full: e.uri,
          regular: e.uri,
          small: e.uri,
          thumb: e.uri,
        },
      } as Photos),
  ) as Photos[];

  useEffect(() => {
    setImages(queryData);
  }, [loading]);

  const fetchImages = async (): Promise<void> => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'fLLHNmXzlY1Mkc9woN0pQFNNc53hoBfGAgmQTF2OH4w';
    await axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=5`)
      .then((res) => {
        setImages([...images, ...res.data]);
      });
  };

  const openLightBox = (image: Photos) => {
    setCurrentImages(image);
    setLightboxOpen(true);
  };

  const closeLightBox = () => {
    setCurrentImages(initialState);
    setLightboxOpen(false);
  };

  const showNext = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(currentImage);
    if (currentIndex >= images.length - 1) {
      setLightboxOpen(false);
    } else {
      const nextImage = images[currentIndex + 1];
      setCurrentImages(nextImage);
    }
  };

  const showPrev = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(currentImage);
    if (currentIndex <= 0) setLightboxOpen(false);
    else {
      const nextImage = images[currentIndex - 1];
      setCurrentImages(nextImage);
    }
  };

  const LightBox: React.FC = () => {
    return (
      <LightboxWrapper onClick={closeLightBox}>
        <Wrapper>
          <ImageLightbox>
            <PrevButton onClick={showPrev}>
              <CaretLeftOutlined />
            </PrevButton>
            <img id="lightbox-img" src={currentImage.urls.thumb} />
            <NextButton onClick={showNext}>
              <CaretRightOutlined />
            </NextButton>
          </ImageLightbox>
          <ContentLightbox>
            <b> Info</b>
            <hr />
            <br />
            <b> Tag</b>
            <br />
            <TagRender />
            <br />
            <br />
            <b> Details</b>
            <br />
            <Row>
              <Col md={8}>
                <b> Date</b>
              </Col>
              <Col>
                {dayjs(currentImage.created_at).format('MMM DD, YYYY')}
                <br />
                {dayjs(currentImage.created_at).format('ddd,hh:mmA Z')}
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <b> Photo</b>
              </Col>
              <Col>
                {currentImage.id} .jpg
                <br />
                Width {currentImage.width}px
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <b> Place</b>
              </Col>
              <Col>{currentImage.location.title ? currentImage.location.title : '-'}</Col>
            </Row>
          </ContentLightbox>
        </Wrapper>
      </LightboxWrapper>
    );
  };

  return (
    <AllPhotosLayout title="Photos">
      {lightboxOpen ? <LightBox /> : null}
      <Link href="/upload">
        <a>
          <Button style={{ marginTop: '3%', marginBottom: '-3%' }}>+ Photo</Button>
        </a>
      </Link>

      <InfiniteScroll
        dataLength={images.length}
        // next={fetchImages}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
        style={{ overflow: 'hidden' }}>
        <WrapperImage>
          {images.map((image: Photos, index: number) => (
            <ThumbnailPhoto
              src={image.urls.thumb}
              key={index}
              createAt={new Date()}
              selected={false}
              onClick={() => openLightBox(image)}
            />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </AllPhotosLayout>
  );
};

export default AllPhotosPages;
