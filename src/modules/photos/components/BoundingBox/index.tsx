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
  const borderConfig = `0px 0px 0px ${Math.round(scaleBorder)}px #5a36cc inset`;
  const width = xMax - xMin;
  const height = yMax - yMin;
  return (
    <SquareStyle
      style={{
        top: yMin,
        left: xMin,
        width:
          xMin + width > currentImgWidth
            ? Math.abs(currentImgWidth - xMin)
            : Math.abs(width),
        height:
          yMin + height > currentImgHeight
            ? Math.abs(currentImgHeight - yMin)
            : Math.abs(height),
        boxShadow: borderConfig,
      }}>
      <Label>{label}</Label>
    </SquareStyle>
  );
};

export default BoundingBox;
