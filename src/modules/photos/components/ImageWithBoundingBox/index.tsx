import React from 'react';
import BoundingBox from '../BoundingBox';
import { Tag } from 'Modules/photos/models/tags';
import { Image } from './styled';
type ImageWithBoundingBoxType = {
  tags?: Tag[];
  src: string;
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
  const { tags, src } = props;
  console.log(tags);
  return (
    <>
      {/* <RenderBoundingBox tags={tags} /> */}
      <BoundingBox xMax={10} xMin={50} yMax={60} yMin={70} label={'juy'} />

      <Image src={src} />
    </>
  );
};

export default ImageWithBoundingBox;
