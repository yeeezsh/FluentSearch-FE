import React from 'react';
import { MarkerWrapper } from './styled';
import { MarkerPropsType } from './types';
import { v4 as uuid } from 'uuid';

const Marker: React.FC<MarkerPropsType> = (props) => {
  const { marker, duration, onMarkerClick } = props;
  const { time, title } = marker;
  const id = uuid();

  const getPosition = () => {
    if (duration) {
      const percent = time <= duration ? time / duration : 1;
      return `calc(${percent * 100}% - 2px)`;
    }
    return '-9999px';
  };

  return (
    <MarkerWrapper
      id={id}
      title={title}
      style={{ left: getPosition() }}
      onClick={() => onMarkerClick(marker)}
    />
  );
};

export default Marker;
