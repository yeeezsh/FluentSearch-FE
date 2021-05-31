import React, { useEffect, useState } from 'react';
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
  const [border, setBorder] = useState<string>('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    setBorder(`0px 0px 0px ${Math.round(scaleBorder)}px #5a36cc inset`);
    setWidth(xMax - xMin);
    setHeight(yMax - yMin);
    setCurrentWidth(currentImgWidth);
    setCurrentHeight(currentImgHeight);
    return () => {
      setBorder('');
      setWidth(0);
      setHeight(0);
      setCurrentWidth(0);
      setCurrentHeight(0);
    };
  }, [xMin, xMax, yMin, yMax, scaleBorder, currentHeight, currentWidth]);

  return (
    <SquareStyle
      style={{
        top: yMin,
        left: xMin,
        width:
          xMin + width > currentWidth ? Math.abs(currentWidth - xMin) : Math.abs(width),
        height:
          yMin + height > currentHeight
            ? Math.abs(currentHeight - yMin)
            : Math.abs(height),
        boxShadow: border,
      }}>
      <Label>{label}</Label>
    </SquareStyle>
  );
};

export default BoundingBox;
