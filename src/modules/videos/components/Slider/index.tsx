import React from 'react';
import { SliderPropsType } from './types';

const Slider: React.FC<SliderPropsType> = (props) => {
  const { onMouseUp, onMouseDown, onChange, played } = props;
  return (
    <div>
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
    </div>
  );
};

export default Slider;
