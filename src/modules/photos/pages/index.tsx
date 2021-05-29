import Button from 'Components/Button';
import { Loader } from 'Components/Loader';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ThumbnailPhoto from '../components/ThumbnailPhoto';
import { PhotosAPI } from '../constants/photo/interface';
import Link from 'next/link';
import { WrapperImage } from './styled';
import { initialState } from '../models/init';
import { useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import Lightbox from '../components/Lightbox';
import { AllPhotosPagePropsType } from './types';
import {
  RecentFile,
  RecentFiles,
  RecentPreviews,
} from '../../../common/generated/generated-types';

const AllPhotosPages: React.FC<AllPhotosPagePropsType> = (props) => {
  const [images, setImages] = useState<RecentPreviews[]>([]);
  const [currentImage, setCurrentImages] = useState<RecentFile>(initialState);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [allImages, setAllImages] = useState<RecentFile[]>([]);
  const { data, error } = props;

  let queryData: RecentPreviews[] = [];

  if (!error) {
    queryData = data?.GetRecentFiles.result.map((el) => ({
      date: el.date,
      files: el.files?.map((f) => ({
        createAt: f.createAt,
        original_filename: f.original_filename,
        updateAt: f.updateAt,
        uri: f.uri,
        uri_thumbnail: f.uri_thumbnail,
      })),
    })) as RecentPreviews[];

    queryData.map((el) =>
      el.files?.map((f) =>
        setAllImages([
          ...allImages,
          {
            createAt: f.createAt,
            original_filename: f.original_filename,
            updateAt: f.updateAt,
            uri: f.uri,
            uri_thumbnail: f.uri_thumbnail,
          },
        ]),
      ),
    );
  }

  const searchResult = useSelector((s: StoresState) => s.instantSearch.result);
  const ids = searchResult.map((el) => el._id);

  useEffect(() => {
    setImages(queryData);
  }, []);

  const nextImages = () => {
    // fetchImages().then((response) => {
    //   setImages([...images, ...response]);
    // });
  };

  const openLightbox = (image: RecentFile) => {
    setCurrentImages(image);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setCurrentImages(initialState);
    setLightboxVisible(false);
  };

  const showNext = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const currentIndex = allImages.indexOf(currentImage);
    if (currentIndex >= images.length - 1) {
      setLightboxVisible(false);
    } else {
      const nextImage = allImages[currentIndex + 1];
      setCurrentImages(nextImage);
    }
  };

  const showPrev = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const currentIndex = allImages.indexOf(currentImage);
    if (currentIndex <= 0) setLightboxVisible(false);
    else {
      const nextImage = allImages[currentIndex - 1];
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
