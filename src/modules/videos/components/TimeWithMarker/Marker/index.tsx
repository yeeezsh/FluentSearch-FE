import React from 'react';
import { MarkerWrapper } from './styled';
import { MarkerPropsType } from './types';

const Marker: React.FC<MarkerPropsType> = (props) => {
  const { incident, duration, onMarkerClick } = props;
  console.log(incident.nFps, duration);

  const getPosition = (nFps: number) => {
    if (duration) {
      const percent = nFps / 100 <= duration ? nFps / 100 / duration : 1;
      return `calc(${percent * 100}% - 2px)`;
    }
    return '-9999px';
  };

  return (
    <>
      {incident.nFps.map((el, index) => (
        <MarkerWrapper
          key={index}
          style={{ left: getPosition(el) }}
          onClick={() => onMarkerClick(el)}
        />
      ))}
    </>
  );
};

export default Marker;
