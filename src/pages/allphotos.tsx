import AllPhotosPage from 'Modules/photos/pages';
import { GetServerSideProps } from 'next';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';

const AllPhotos = () => {
  return (
    <RouterGuard>
      <AllPhotosPage />
    </RouterGuard>
  );
};

export default AllPhotos;
