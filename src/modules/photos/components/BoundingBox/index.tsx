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
      <SquareStyle
        style={{
          top: xMin,
          left: yMin,
          width: xMax,
          height: yMax,
          textAlign: 'right',
        }}>
        <div
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            top: '100%',
            left: '-3%',
          }}>
          sss
        </div>
      </SquareStyle>
    </>
  );
};

export default BoundingBox;
