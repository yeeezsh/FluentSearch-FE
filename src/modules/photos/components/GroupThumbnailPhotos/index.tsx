import React from 'react';
import { GroupThumbnailPhotos as GroupThumbnailPhotosModel } from 'Modules/photos/models/thumbnail';
import ThumbnailPhoto from '../ThumbnailPhoto';
import { Props } from './types';
import { GroupThumbnailPhotosWrapper } from './styled';
import { mock } from './constants';

const GroupThumbnailPhotos: React.FC<Props> = () => {
  return (
    <GroupThumbnailPhotosWrapper>
      {mock.photos.map((el, i) => (
        <div key={i} style={{ width: 200, display: 'flex', marginLeft: '6px' }}>
          <ThumbnailPhoto {...el} />
        </div>
      ))}
    </GroupThumbnailPhotosWrapper>
  );
};

export default GroupThumbnailPhotos;
