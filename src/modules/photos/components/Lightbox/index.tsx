import {
  LightboxWrapper,
  LightboxCard,
  LightboxCardLeft,
  OptionWrapper,
  LightboxCardRight,
  ButtonLeft,
  ButtonRight,
  Image,
} from './styled';
import React, { useState, useEffect, useRef } from 'react';
import BoundingBox from '../BoundingBox';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Tag as TagType } from 'Modules/photos/models/tags/';
import { LightboxPropsType, currentImageSizeType } from './types';

const TagRender: React.FC<{ tags?: TagType[] }> = (props) => {
  const { tags } = props;
  return <>{tags && tags.map((e, index) => <Tag key={index}>{e.result}</Tag>)}</>;
};

const Lightbox: React.FC<LightboxPropsType> = (props) => {
  const { image, onPrev, onNext } = props;
  const ref = useRef<HTMLImageElement>(null);
  const [currentImagesize, setCurrentImageSize] = useState<currentImageSizeType>();
  const [scaleX, setScaleX] = useState(0);
  const [scaleY, setScaleY] = useState(0);
  const [detailCardVisible, setDetailCardVisible] = useState(true);
  const [scaleBorder, setScaleBorder] = useState(0);

  function handleCurrentImageSize() {
    if (ref.current)
      setCurrentImageSize({
        width: ref?.current?.clientWidth,
        height: ref?.current?.clientHeight,
      });
  }

  function handleDetailCard() {
    setDetailCardVisible(!detailCardVisible);
    handleCurrentImageSize();
  }

  useEffect(() => {
    handleCurrentImageSize();
    window.addEventListener('resize', handleCurrentImageSize);
    return () => {
      window.addEventListener('resize', handleCurrentImageSize);
    };
  }, [currentImagesize]);

  useEffect(() => {
    if (currentImagesize) {
      setScaleX(image.width / currentImagesize?.width);
      setScaleY(image.height / currentImagesize?.height);
      setScaleBorder((3 / scaleX) * scaleY);
    }
  }, [currentImagesize, scaleX, scaleY]);

  return (
    <LightboxWrapper>
      <LightboxCard>
        <LightboxCardLeft>
          <OptionWrapper>
            <button onClick={() => handleDetailCard()}>i</button>
          </OptionWrapper>
          <ButtonLeft onClick={onPrev}>
            <CaretLeftOutlined />
          </ButtonLeft>
          {image.tags &&
            image.tags?.map((originSize) => (
              <BoundingBox
                key={Math.random()}
                xMin={originSize.xMin * scaleX}
                xMax={originSize.xMax * scaleX}
                yMin={originSize.yMin * scaleY}
                yMax={originSize.yMax * scaleY}
                label={originSize.result}
                scaleBorder={scaleBorder}
              />
            ))}
          <Image src={image.urls.thumb} />
          <ButtonRight onClick={onNext}>
            <CaretRightOutlined />
          </ButtonRight>
        </LightboxCardLeft>
        <LightboxCardRight>
          {/*TODO: dont forget to show 1 tag per object */}
          <TagRender tags={image.tags} />
        </LightboxCardRight>
      </LightboxCard>
    </LightboxWrapper>
  );
};

export default Lightbox;
