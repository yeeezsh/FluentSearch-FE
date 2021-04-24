import React from 'react';
import { SliderWrapper } from './styled';
import { SliderPropsType } from './types';

const Slider: React.FC<SliderPropsType> = (props) => {
  const { min, max, onMouseUp, onMouseDown, onChange, played } = props;
  return (
    <SliderWrapper>
      <input
        type="range"
        min={min}
        max={max}
        step="any"
        value={played}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onChange={onChange}
        onInput={onChange}
      />
    </SliderWrapper>
  );
};

export default Slider;
