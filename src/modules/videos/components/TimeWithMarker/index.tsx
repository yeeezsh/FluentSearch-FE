import React from 'react';
import Marker from './Marker';
import { TimeWithMarkerWrapper } from './styled';
import { TimeWithMarkerPropsType } from './types';

const TimeWithMarker: React.FC<TimeWithMarkerPropsType> = (props) => {
  const { played, incidents, onClick, selectedLabel, duration } = props;
  return (
    <TimeWithMarkerWrapper>
      {incidents &&
        incidents
          .filter((incident) => incident.cat === 'Person')
          .map((incident, index) => {
            console.log(incident);
            return (
              <Marker
                key={index}
                incident={incident}
                onMarkerClick={onClick}
                duration={duration}
              />
            );
          })}
    </TimeWithMarkerWrapper>
  );
};

export default TimeWithMarker;
