import React, { useRef, useState, useEffect } from 'react';
import BoundingBox from '../BoundingBox';
import { Tag } from 'Modules/photos/models/tags';
import { Image } from './styled';

type ImageWithBoundingBoxType = {
  tags?: Tag[];
  src: string;
  width?: number;
  height?: number;
};

const RenderBoundingBox: React.FC<{ tags?: Tag[] }> = (props) => {
  const { tags } = props;

  return (
    <>
      {tags &&
        tags.map((e, index) => {
          <BoundingBox
            key={index}
            xMax={e.xMax}
            xMin={e.xMin}
            yMax={e.yMax}
            yMin={e.yMin}
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
  useEffect(() => {
    if (ref.current) {
      setImageHeight(ref.current.offsetHeight);
      setImageWidth(ref.current.offsetWidth);
    }
  }, [ref]);

  console.log(imageHeight, imageWidth);
  const { tags, src } = props;
  const width = 2880;
  const height = 1040;
  const scaleX = width / imageWidth;
  const scaleY = height / imageHeight;
  console.log(scaleX, scaleY);
  return (
    <>
      {/* <RenderBoundingBox tags={tags} /> */}
      <BoundingBox
        xMax={10 * scaleX}
        xMin={2 * scaleX}
        yMax={10 * scaleY}
        yMin={28 * scaleY}
        label={'juy'}
      />
      <Image ref={ref} src={src} />
    </>
  );
};

export default ImageWithBoundingBox;
