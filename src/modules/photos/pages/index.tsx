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
import { useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import Lightbox from '../components/Lightbox';
import { fetchImages } from '../services/fetch.images';

const AllPhotosPages: React.FC = () => {
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
    setImages(queryData);
  }, [loading]);

  const nextImages = () => {
    fetchImages().then((response) => {
      setImages([...images, ...response]);
    });
  };

  const openLightbox = (image: PhotosAPI) => {
    setCurrentImages(image);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
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
          closeLightbox={closeLightbox}
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
        next={nextImages}
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
                  onClick={() => openLightbox(image)}
                />
              ))}

          {ids.length == 0 &&
            images.map((image: PhotosAPI, index: number) => (
              <ThumbnailPhoto
                src={image.urls.thumb}
                key={index}
                createAt={new Date()}
                selected={false}
                onClick={() => openLightbox(image)}
              />
            ))}
        </WrapperImage>
      </InfiniteScroll>
    </LayoutWithSearch>
  );
};

export default AllPhotosPages;
