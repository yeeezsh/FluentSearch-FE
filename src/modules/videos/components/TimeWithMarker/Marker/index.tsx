import React from 'react';
import { MarkerWrapper } from './styled';
import { MarkerPropsType } from './types';
import { v4 as uuid } from 'uuid';

const Marker: React.FC<MarkerPropsType> = (props) => {
  const { nFps, duration, onMarkerClick } = props;
  const id = uuid();

  const getPosition = () => {
    if (duration) {
      const percent = nFps <= duration ? nFps / duration : 1;
      return `calc(${percent * 100}% - 2px)`;
    }
    return '-9999px';
  };

  return (
    <MarkerWrapper
      id={id}
      style={{ left: getPosition() }}
      onClick={() => onMarkerClick(nFps)}
    />
  );
};

export default Marker;
