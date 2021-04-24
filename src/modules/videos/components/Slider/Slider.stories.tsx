import { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { GlobalStyle } from 'Styles/global';
import Slider from '.';

export default {
  title: 'FluentSearch/Slider',
  component: Slider,
} as Meta;

export const SliderStories: React.FC = () => {
  const [played, setPlayed] = useState(0);
  const handleOnMouseUp = () => {
    console.log('MouseUp');
  };

  const handleOnMouseDown = () => {
    console.log('MouseDown');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('MouseChange', e.target.value);
    setPlayed(parseFloat(e.target.value));
  };

  return (
    <div>
      <GlobalStyle />
      <Slider
        min={0}
        max={100}
        played={played}
        onMouseUp={handleOnMouseUp}
        onMouseDown={handleOnMouseDown}
        onChange={handleOnChange}
      />
    </div>
  );
};
