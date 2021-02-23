import React from 'react';
import { SquareStyle, Label } from './styled';
import { BoundingBoxType } from './types';

const BoundingBox: React.FC<BoundingBoxType> = (props) => {
  const {
    xMin,
    xMax,
    yMin,
    yMax,
    label,
    currentImgWidth,
    currentImgHeight,
    scaleBorder,
  } = props;
  const borderConfig = `${Math.round(scaleBorder)}px solid #5a36cc`;
  return (
    <SquareStyle
      style={{
        top: yMin,
        left: xMin,
        width:
          xMin + xMax > currentImgWidth
            ? Math.abs(xMax - xMin - (xMax - currentImgWidth))
            : Math.abs(xMax - xMin),
        height:
          yMin + yMax > currentImgHeight
            ? Math.abs(yMax - yMin - (yMax - currentImgHeight))
            : Math.abs(yMax - yMin),
        border: borderConfig,
      }}>
      <Label style={{ left: `-${scaleBorder}%` }}>{label}</Label>
    </SquareStyle>
  );
};

export default BoundingBox;
