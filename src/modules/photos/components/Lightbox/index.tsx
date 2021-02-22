import {
  LightboxWrapper,
  LightboxCard,
  LightboxCardLeft,
  OptionWrapper,
  LightboxCardRight,
} from './styled';
import React, { useState, useEffect, useRef } from 'react';

type LightboxPropsType = {
  width: number;
  height: number;
  boxHeight: number;
  boxWidth: number;
  top: number;
  left: number;
};

type currentImageSizeType = {
  width: number;
  height: number;
};

const Lightbox: React.FC<LightboxPropsType> = (props) => {
  const { width, height, boxHeight, boxWidth, top, left } = props;
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
      setScaleX(width / currentImagesize?.width);
      setScaleX(height / currentImagesize?.height);
      setScaleBorder((3 / scaleX) * scaleY);
    }
  }, [currentImagesize, scaleX, scaleY]);

  return (
    <LightboxWrapper>
      <LightboxCard>
        <LightboxCardLeft>
          <OptionWrapper></OptionWrapper>
        </LightboxCardLeft>
        <LightboxCardRight></LightboxCardRight>
      </LightboxCard>
    </LightboxWrapper>
  );
};

export default Lightbox;
