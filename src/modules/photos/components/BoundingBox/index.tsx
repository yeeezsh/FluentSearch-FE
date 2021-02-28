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
        // since label and border not align, so i decided to use inner-border(box-shadow) instead of border
        boxShadow: borderConfig,
      }}>
      <Label>{label}</Label>
    </SquareStyle>
  );
};

export default BoundingBox;
