import React from 'react';
import { SquareStyle } from './styled';

export type BoundingBoxType = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  label: string;
};
//style={{ top: `${xMin}`, left: `${yMin}`, width: `${xMax}`, height: `${yMax}` }}
const BoundingBox: React.FC<BoundingBoxType> = (props) => {
  const { xMin, xMax, yMin, yMax, label } = props;
  console.log(xMin, xMax, yMin, yMax, label);
  return (
    <>
      <SquareStyle style={{ top: 200, left: 500, width: 30, height: 50 }} />
    </>
  );
};

export default BoundingBox;
