import React, { useRef, useState } from 'react';
import BoundingBox from '../BoundingBox';
import { Tag } from 'Modules/photos/models/tags';
import { Image } from './styled';

type ImageWithBoundingBoxType = {
  tags?: Tag[];
  src: string;
  originalWidth: number;
  originalHeight: number;
};

const ImageWithBoundingBox: React.FC<ImageWithBoundingBoxType> = (props) => {
  const ref = useRef<HTMLImageElement>(null);
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(0);

  const handleImageLoad = (event) => {
    setCanvasHeight(event.target.clientHeight);
    setCanvasWidth(event.target.clientWidth);
  };

  const { tags, src, originalWidth, originalHeight } = props;

  const scaleX = canvasWidth / originalWidth;
  const scaleY = canvasHeight / originalHeight;

  console.log('scaleX', scaleX);
  console.log('scaleY', scaleY);
  console.log('original');
  console.log(originalWidth, originalHeight);
  console.log('canvas');
  console.log(canvasHeight, canvasWidth);
  console.log(scaleX, scaleY);

  return (
    <>
      {tags && (
        <>
          {props.tags &&
            props.tags?.map((originSize) => (
              <BoundingBox
                key={Math.random()}
                xMin={originSize.xMin * scaleX}
                xMax={originSize.xMax * scaleX}
                yMin={originSize.yMin * scaleY}
                yMax={originSize.yMax * scaleY}
                label={originSize.result}
              />
            ))}
        </>
      )}
      ;
      <Image ref={ref} src={src} onLoad={handleImageLoad} />
    </>
  );
};

export default ImageWithBoundingBox;
