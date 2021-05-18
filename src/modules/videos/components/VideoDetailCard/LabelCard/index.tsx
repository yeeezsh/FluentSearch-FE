import ToggleLabel from 'Components/ToggleLabel';
import React from 'react';
import TimeWithMarker from '../../TimeWithMarker';
import { VideoDetailCard } from '../styled';
import { LabelCardPropsType } from './types';

const LabelCard: React.FC<LabelCardPropsType> = (props) => {
  const {
    incidents,
    totalIncidents,
    played,
    onMarkerClick,
    onLabelClick,
    selectedLabel,
    duration,
  } = props;
  return (
    <VideoDetailCard title={`${totalIncidents} Labels`}>
      {incidents.map((el, index) => (
        <ToggleLabel key={index} onLabelClick={onLabelClick} label={el.cat} />
      ))}
      <TimeWithMarker
        duration={duration}
        played={played}
        incidents={incidents}
        onClick={onMarkerClick}
        selectedLabel={selectedLabel}
      />
    </VideoDetailCard>
  );
};

export default LabelCard;
