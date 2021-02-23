import React from 'react';
import { SquareStyle, Label } from './styled';

export type BoundingBoxType = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  label: string;
  scaleBorder: number;
  width: number;
  height: number;
};

const BoundingBox: React.FC<BoundingBoxType> = (props) => {
  const { xMin, xMax, yMin, yMax, label, width, height, scaleBorder } = props;
  const borderConfig = `${Math.round(scaleBorder)}px solid #5a36cc`;
  return (
    <SquareStyle
      style={{
        top: yMin,
        left: xMin,
        width:
          xMin + xMax > width
            ? Math.abs(xMax - xMin - (xMax - width))
            : Math.abs(xMax - xMin),
        height:
          yMin + yMax > height
            ? Math.abs(yMax - yMin - (yMax - height))
            : Math.abs(yMax - yMin),
        border: borderConfig,
      }}>
      <Label style={{ left: `-${scaleBorder}%` }}>{label}</Label>
    </SquareStyle>
  );
};

export default BoundingBox;
