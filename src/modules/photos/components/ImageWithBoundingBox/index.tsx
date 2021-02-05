import React, { useRef, useState } from 'react';
import BoundingBox from '../BoundingBox';
import { Tag } from 'Modules/photos/models/tags';
import { Image } from './styled';

type ImageWithBoundingBoxType = {
  tags?: Tag[];
  src: string;
  width: number;
  height: number;
};

type RenderBoundingBoxType = {
  tags: Tag[];
  scaleX: number;
  scaleY: number;
};

const RenderBoundingBox: React.FC<RenderBoundingBoxType> = (props) => {
  const { tags, scaleX, scaleY } = props;

  return (
    <>
      {tags.map((e, index) => {
        <BoundingBox
          key={index}
          xMax={e.xMax / scaleX}
          xMin={e.xMin / scaleX - 100}
          yMax={e.yMax / scaleY}
          yMin={e.yMin / scaleY + 110}
          label={e.result}
        />;
      })}
    </>
  );
};

const ImageWithBoundingBox: React.FC<ImageWithBoundingBoxType> = (props) => {
  const ref = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const handleImageLoad = (event) => {
    setImageHeight(event.target.clientHeight);
    setImageWidth(event.target.clientWidth);
  };

  const { tags, src, width, height } = props;

  const scaleX = width / imageWidth;
  const scaleY = height / imageHeight;
  console.log(imageHeight, imageWidth);
  console.log(width, height);
  console.log(scaleX, scaleY);

  return (
    <>
      {tags && (
        <>
          <BoundingBox
            xMax={tags[0].xMax / scaleX}
            xMin={tags[0].xMin / scaleX - 100}
            yMax={tags[0].yMax / scaleY}
            yMin={tags[0].yMin / scaleY + 110}
            label={tags[0].result}
          />
          ;{/* <RenderBoundingBox tags={tags} scaleX={scaleX} scaleY={scaleY} /> */}
        </>
      )}
      ;
      <Image ref={ref} src={src} onLoad={handleImageLoad} />
    </>
  );
};

export default ImageWithBoundingBox;
