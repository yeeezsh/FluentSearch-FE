import axios from 'axios';
import Button from 'Components/Button';
import { Loader } from 'Components/Loader';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ThumbnailPhoto from '../components/ThumbnailPhoto';
import { PhotosAPI } from '../constants/photo/interface';
import Link from 'next/link';
import { WrapperImage } from './styled';
import { useGetInsightQuery } from 'Services/model/generated-types';
import { initialState } from '../models/init';
import { mockData } from '../mocks/data';
import { useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import Lightbox from '../components/Lightbox';

const AllPhotosPages: React.FC = () => {
  //TODO: WTF extract to smaller component

  const [images = [], setImages] = useState<PhotosAPI[]>();
  const [currentImage, setCurrentImages] = useState<PhotosAPI>(initialState);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const { data, loading } = useGetInsightQuery();

  const queryData = data?.getFilesWithInsight.map(
    (e) =>
      ({
        ...initialState,
        id: e._id,
        user: { name: '1234', total_likes: 5 },
        width: e.meta.width,
        height: e.meta.height,
        urls: {
          raw: e.uri,
          full: e.uri,
          regular: e.uri,
          small: e.uri,
          thumb: e.uri,
        },
        created_at: e.createAt,
        updated_at: e.updateAt,
        tags: e.insight?.map((el) => ({
          result: el.result,
          xMin: el.bbox.xmin,
          xMax: el.bbox.xmax,
          yMin: el.bbox.ymin,
          yMax: el.bbox.ymax,
        })),
      } as PhotosAPI),
  ) as PhotosAPI[];

  const searchResult = useSelector((s: StoresState) => s.instantSearch.result);
  const ids = searchResult.map((el) => el._id);

  useEffect(() => {
    //TODO: Change back to query data
    //setImages(queryData);
    setImages(mockData);
  }, [loading]);

  //TODO: Check duplicate fetchImages
  const fetchImages = async (): Promise<void> => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'fLLHNmXzlY1Mkc9woN0pQFNNc53hoBfGAgmQTF2OH4w';
    await axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=5`)
      .then((res) => {
        setImages([...images, ...res.data]);
      });
  };

  const openLightBox = (image: PhotosAPI) => {
    setCurrentImages(image);
    setLightboxVisible(true);
  };

  const closeLightBox = () => {
    setCurrentImages(initialState);
    setLightboxVisible(false);
  };

  const showNext = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(currentImage);
    if (currentIndex >= images.length - 1) {
      setLightboxVisible(false);
    } else {
      const nextImage = images[currentIndex + 1];
      setCurrentImages(nextImage);
    }
  };

  const showPrev = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(currentImage);
    if (currentIndex <= 0) setLightboxVisible(false);
    else {
      const nextImage = images[currentIndex - 1];
      setCurrentImages(nextImage);
    }
  };

  return (
    <LayoutWithSearch title="Photos">
      {lightboxVisible ? (
        <Lightbox
          closeLightBox={closeLightBox}
          image={currentImage}
          onPrev={showPrev}
          onNext={showNext}
        />
      ) : null}
      <Link href="/upload">
        <a>
          <Button style={{ marginTop: '3%', marginBottom: '-3%' }}>+ Photo</Button>
        </a>
      </Link>

      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
        style={{ overflow: 'hidden' }}>
        <WrapperImage>
          {ids.length != 0 &&
            images
              .filter((f) => (ids.length != 0 ? ids.includes(f.id) : true))
              .map((image: PhotosAPI, index: number) => (
                <ThumbnailPhoto
                  src={image.urls.thumb}
                  key={index}
                  createAt={new Date()}
                  selected={false}
                  onClick={() => openLightBox(image)}
                />
              ))}

          {ids.length == 0 &&
            images.map((image: PhotosAPI, index: number) => (
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
    </LayoutWithSearch>
  );
};

export default AllPhotosPages;
