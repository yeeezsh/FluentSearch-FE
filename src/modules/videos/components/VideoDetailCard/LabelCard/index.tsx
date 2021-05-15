import React from 'react';
import { VideoDetailCard } from '../styled';
import { LabelCardPropsType } from './types';

const LabelCard: React.FC<LabelCardPropsType> = (props) => {
  const { incidents, totalIncidents } = props;
  return (
    <VideoDetailCard title={`${totalIncidents} Labels`}>
      {incidents.map((el, index) => (
        <p key={index}>{el.cat}</p>
      ))}
    </VideoDetailCard>
  );
};

export default LabelCard;
