import { Row } from 'antd';
import React from 'react';
import ThumbnailPhoto from '../ThumbnailPhoto';
import { mock } from './constants';
import Header from './Header';
import { GroupThumbnailPhotosWrapper, PhotoThumbnailStyled } from './styled';
import { Props } from './types';

const GroupThumbnailPhotos: React.FC<Props> = (props) => {
  const startDate = props.dateRange[0];

  const onSelect = (s: boolean) => {
    props.onSelect && props.onSelect(s);
  };

  return (
    <>
      <Header date={startDate} onSelect={onSelect} selected={props.selected} />
      <GroupThumbnailPhotosWrapper>
        {mock.photos.map((el, i) => (
          <PhotoThumbnailStyled key={i}>
            <ThumbnailPhoto {...el} />
          </PhotoThumbnailStyled>
        ))}
      </GroupThumbnailPhotosWrapper>
    </>
  );
};

export default GroupThumbnailPhotos;
