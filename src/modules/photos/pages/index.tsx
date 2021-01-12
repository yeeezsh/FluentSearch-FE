import React, { useState, useEffect } from 'react';
import AllPhotosLayout from 'Modules/photos/components/Layouts';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoadedImage } from '../components/Layouts/LoadedImage';
import { WrapperImage } from '../components/Layouts/styled';
import { Loader } from 'Components/Loader';
import axios from 'axios';

const AllPhotosPages: React.FC = () => {
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
    <AllPhotosLayout title="Photos">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}>
        <WrapperImage>
          {images.map((image: { urls: { thumb: string }; id: string }) => (
            <LoadedImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImage>
      </InfiniteScroll>
    </AllPhotosLayout>
  );
};

export default AllPhotosPages;
