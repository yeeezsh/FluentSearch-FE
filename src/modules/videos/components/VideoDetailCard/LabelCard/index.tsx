import { Tag } from 'antd';
import React from 'react';
import { VideoDetailCard } from '../styled';
import { LabelCardPropsType } from './types';

const LabelCard: React.FC<LabelCardPropsType> = (props) => {
  const { incidents, totalIncidents } = props;
  return (
    <VideoDetailCard title={`${totalIncidents} Labels`}>
      {incidents.map((el, index) => (
        <Tag key={index}>{el.cat}</Tag>
      ))}
    </VideoDetailCard>
  );
};

export default LabelCard;
