import React from 'react';
import ThumbnailPhoto from '../ThumbnailPhoto';
import { mock } from './constants';
import { GroupThumbnailPhotosWrapper, PhotoThumbnailStyled } from './styled';
import { Props } from './types';

const GroupThumbnailPhotos: React.FC<Props> = () => {
  return (
    <GroupThumbnailPhotosWrapper>
      {mock.photos.map((el, i) => (
        <PhotoThumbnailStyled key={i}>
          <ThumbnailPhoto {...el} />
        </PhotoThumbnailStyled>
      ))}
    </GroupThumbnailPhotosWrapper>
  );
};

export default GroupThumbnailPhotos;
