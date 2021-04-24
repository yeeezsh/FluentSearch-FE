import React from 'react';
import { SliderWrapper } from './styled';
import { SliderPropsType } from './types';

const Slider: React.FC<SliderPropsType> = (props) => {
  const { onMouseUp, onMouseDown, onChange, played } = props;
  return (
    <SliderWrapper>
      <input
        type="range"
        min={0}
        max={1}
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
