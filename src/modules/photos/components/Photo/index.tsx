import React from 'react';
import SelectIcon from './SelectIcon';
import { PhotoStyled } from './styled';
import { Props } from './types';

const Photo: React.FC<Props> = (props) => {
  return (
    <div style={{ border: '1px solid red' }}>
      <div style={{ position: 'absolute', top: 32, left: 32 }}>
        <SelectIcon />
      </div>
      <PhotoStyled src="https://cdn.pixabay.com/photo/2015/07/31/14/59/beach-869195_1280.jpg" />
    </div>
  );
};

export default Photo;
