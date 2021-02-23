import {
  LightboxWrapper,
  LightboxCard,
  LightboxCardLeft,
  OptionWrapper,
  LightboxCardRight,
  ButtonLeft,
  ButtonRight,
  ImageWrapper,
  Image,
} from './styled';
import React, { useState, useEffect, useRef } from 'react';
import BoundingBox from '../BoundingBox';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Tag as TagType } from 'Modules/photos/models/tags/';
import { LightboxPropsType, currentImageSizeType } from './types';
import { Row, Col } from 'antd';
import dayjs from 'dayjs';

const TagRender: React.FC<{ tags?: string[] }> = (props) => {
  const { tags } = props;
  return <>{tags && tags.map((e, index) => <Tag key={index}>{e}</Tag>)}</>;
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
      window.removeEventListener('resize', handleCurrentImageSize);
    };
  }, []);

  useEffect(() => {
    if (currentImagesize) {
      setScaleX(currentImagesize?.width / image.width);
      setScaleY(currentImagesize?.height / image.height);
      setScaleBorder(3 * scaleX);
    }
  }, [currentImagesize, scaleX, scaleY]);

  const allTags = image.tags?.reduce((acc: string[], tag: TagType) => {
    if (acc.indexOf(tag.result) == -1) acc.push(tag.result);
    return acc;
  }, []);

  console.log(allTags);

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
          <ImageWrapper>
            {image.tags &&
              image.tags?.map((originSize) => {
                if (currentImagesize) {
                  return (
                    <BoundingBox
                      key={Math.random()}
                      xMin={originSize.xMin * scaleX}
                      xMax={originSize.xMax * scaleX}
                      yMin={originSize.yMin * scaleY}
                      yMax={originSize.yMax * scaleY}
                      label={originSize.result}
                      scaleBorder={scaleBorder}
                      width={currentImagesize?.width}
                      height={currentImagesize?.height}
                    />
                  );
                }
              })}
            <Image ref={ref} src={image.urls.thumb} onLoad={handleCurrentImageSize} />
          </ImageWrapper>
          <ButtonRight onClick={onNext}>
            <CaretRightOutlined />
          </ButtonRight>
        </LightboxCardLeft>
        <LightboxCardRight>
          <b> Info</b>
          <hr />
          <br />
          <b> Tag</b>
          <br />
          {/*TODO: dont forget to show 1 tag per object */}
          <TagRender tags={allTags} />
          <br />
          <br />
          <b> Details</b>
          <br />
          <Row>
            <Col md={8}>
              <b> Date</b>
            </Col>
            <Col>
              {dayjs(image.created_at).format('MMM DD, YYYY')}
              <br />
              {dayjs(image.created_at).format('ddd,hh:mmA Z')}
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <b> Photo</b>
            </Col>
            <Col>
              {image.id} .jpg
              <br />
              Width {image.width}px
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <b> Place</b>
            </Col>
            <Col>{image.location.title ? image.location.title : '-'}</Col>
          </Row>
        </LightboxCardRight>
      </LightboxCard>
    </LightboxWrapper>
  );
};

export default Lightbox;
