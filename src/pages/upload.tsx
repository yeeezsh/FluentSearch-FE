import UploadPage from 'Modules/upload/pages';
import React from 'react';
import RouterGuard from '../common/components/RouterGuard';

const Upload: React.FC = () => {
  // TODO: not implment layout
  return (
    <RouterGuard>
      <UploadPage />
    </RouterGuard>
  );
};

export default Upload;
