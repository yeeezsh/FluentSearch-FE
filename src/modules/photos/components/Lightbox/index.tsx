import {
  LightboxWrapper,
  LightboxCard,
  LightboxCardLeft,
  OptionWrapper,
  LightboxCardRight,
  ButtonLeft,
  ButtonRight,
} from './styled';
import React, { useState, useEffect, useRef } from 'react';
import { PhotosAPI } from 'Modules/photos/constants/photo/interface';

type LightboxPropsType = {
  image: PhotosAPI;
  boxHeight: number;
  boxWidth: number;
  top: number;
  left: number;
  onPrev: () => void;
  onNext: () => void;
};

type currentImageSizeType = {
  width: number;
  height: number;
};

const Lightbox: React.FC<LightboxPropsType> = (props) => {
  const { image, boxHeight, boxWidth, top, left, onPrev, onNext } = props;
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
      setScaleX(image.height / currentImagesize?.height);
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
          <ButtonLeft>{'<'}</ButtonLeft>
          <ButtonRight>{'>'}</ButtonRight>
        </LightboxCardLeft>
        <LightboxCardRight></LightboxCardRight>
      </LightboxCard>
    </LightboxWrapper>
  );
};

export default Lightbox;
