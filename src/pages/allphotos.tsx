import AllPhotosPage from 'Modules/photos/pages';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';

const AllPhotos: React.FC = () => {
  return (
    <RouterGuard>
      <AllPhotosPage />
    </RouterGuard>
  );
};

export default AllPhotos;
