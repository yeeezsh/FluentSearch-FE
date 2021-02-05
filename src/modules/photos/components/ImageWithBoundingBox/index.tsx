import React from 'react';
import BoundingBox from '../BoundingBox';

type ImageWithBoundingBoxType = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  label: string;
  src: string;
};

const ImageWithBoundingBox: React.FC<ImageWithBoundingBoxType> = (props) => {
  const { xMin, xMax, yMin, yMax, label, src } = props;
  return (
    <div style={{ position: 'relative' }}>
      <img src={src} />
      <BoundingBox xMax={xMax} xMin={xMin} yMax={yMax} yMin={yMin} label={label} />
    </div>
  );
};

export default ImageWithBoundingBox;
