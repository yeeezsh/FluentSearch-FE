import Button from 'Components/Button';
import { Loader } from 'Components/Loader';
import LayoutWithSearch from 'Components/Layouts/LayoutWithSearch';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ThumbnailPhoto from '../components/ThumbnailPhoto';
import Link from 'next/link';
import { WrapperImage } from './styled';
import { initialState } from '../models/init';
import { useSelector } from 'react-redux';
import { StoresState } from 'Stores/index';
import Lightbox from '../components/Lightbox';
import { AllPhotoPagesProps } from './types';
import { RecentFile, RecentPreviews } from '../../../common/generated/generated-types';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';

const AllPhotosPages: React.FC<AllPhotoPagesProps> = (props) => {
  const [images, setImages] = useState<RecentPreviews[]>([]);
  const [currentImage, setCurrentImages] = useState<RecentFile>(initialState);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const allImages: RecentFile[] = [];

  const queryData = props.data?.GetRecentFiles?.result?.map((el) => ({
    date: el.date,
    files: el.files?.map((file) => ({
      original_filename: file.original_filename,
      uri: file.uri,
      uri_thumbnail: file.uri_thumbnail,
      createAt: file.createAt,
      updateAt: file.updateAt,
      type: file.type,
    })),
  })) as RecentPreviews[];

  props.data?.GetRecentFiles?.result.forEach((f) =>
    f.files?.forEach((file) => allImages.push(file)),
  );

  const searchResult = useSelector((s: StoresState) => s.instantSearch.result);
  const ids = searchResult.map((el) => el._id);

  useEffect(() => {
    setImages(queryData);
  }, []);

  const nextImages = () => {
    //  fetchImages().then((response) => {
    //     setImages([...images, ...response]);
    //   });
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
    console.log(currentIndex);
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
          {images.map((el) =>
            el.files?.map((file) =>
              file.type === 'image' ? (
                <ThumbnailPhoto
                  src={file.uri}
                  key={uuid().toString()}
                  createAt={dayjs(file.createAt).toDate()}
                  selected={false}
                  onClick={() => openLightbox(file)}
                />
              ) : (
                <ThumbnailPhoto
                  src={file.uri_thumbnail}
                  key={uuid().toString()}
                  createAt={dayjs(file.createAt).toDate()}
                  selected={false}
                  onClick={() => openLightbox(file)}
                />
              ),
            ),
          )}
        </WrapperImage>
      </InfiniteScroll>
    </LayoutWithSearch>
  );
};

export default AllPhotosPages;
