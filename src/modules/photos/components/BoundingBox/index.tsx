import React from 'react';
import { SquareStyle, Label, BoundingBoxWrapper } from './styled';

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

  const borderConfig = `${scaleBorder}px solid #5a36cc`;
  console.log(xMax + xMin, width);
  return (
    <BoundingBoxWrapper>
      <SquareStyle
        style={{
          top: yMin,
          left: xMin,
          width:
            xMin + xMax > width
              ? Math.round(xMax - xMin - (xMax - width))
              : Math.abs(xMax - xMin),
          height:
            yMin + yMax > height
              ? Math.round(yMax - yMin - (yMax - height))
              : Math.abs(yMax - yMin),
          textAlign: 'right',
          border: borderConfig,
        }}>
        <Label style={{ left: `-${scaleBorder}%` }}>{label}</Label>
      </SquareStyle>
    </BoundingBoxWrapper>
  );
};

export default BoundingBox;
