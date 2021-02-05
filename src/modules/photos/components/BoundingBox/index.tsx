import React from 'react';
import { SquareStyle, Label } from './styled';

export type BoundingBoxType = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  label: string;
};

const BoundingBox: React.FC<BoundingBoxType> = (props) => {
  const { xMin, xMax, yMin, yMax, label } = props;
  return (
    <>
      <SquareStyle
        style={{
          top: xMin,
          left: yMin,
          width: xMax,
          height: yMax,
          textAlign: 'right',
        }}>
        <Label>{label}</Label>
      </SquareStyle>
    </>
  );
};

export default BoundingBox;
