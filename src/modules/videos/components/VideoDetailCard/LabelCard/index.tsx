import ToggleLabel from 'Components/ToggleLabel';
import React from 'react';
import { VideoDetailCard } from '../styled';
import { LabelCardPropsType } from './types';

const LabelCard: React.FC<LabelCardPropsType> = (props) => {
  const { incidents, totalIncidents } = props;
  return (
    <VideoDetailCard title={`${totalIncidents} Labels`}>
      {incidents.map((el, index) => (
        <ToggleLabel key={index} onClick={() => console.log('click')}>
          {el.cat}
        </ToggleLabel>
      ))}
    </VideoDetailCard>
  );
};

export default LabelCard;
