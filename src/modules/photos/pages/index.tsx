import axios from 'axios';
import { Loader } from 'Components/Loader';
import AllPhotosLayout from 'Modules/photos/components/Layouts';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { WrapperImage } from '../components/Layouts/styled';
import ThumbnailPhoto from '../components/ThumbnailPhoto';
import { Photos } from '../constants/photo/interface';

const AllPhotosPages: React.FC = () => {
  const [images = [], setImages] = useState<Photos[]>();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (): Promise<void> => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'fLLHNmXzlY1Mkc9woN0pQFNNc53hoBfGAgmQTF2OH4w';
    await axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=5`)
      .then((res) => {
        console.log(res.data, typeof res.data);
        setImages([...images, ...res.data]);
      });
  };

  return (
    <AllPhotosLayout title="Photos">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}>
        <WrapperImage>
          {images.map((image: { urls: { thumb: string }; id: string }) => (
            <ThumbnailPhoto
              src={image.urls.thumb}
              key={image.id}
              createAt={new Date()}
              selected={false}
            />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </AllPhotosLayout>
  );
};

export default AllPhotosPages;
