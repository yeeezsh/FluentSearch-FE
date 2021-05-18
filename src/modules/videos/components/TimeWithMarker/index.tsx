import { LabelPresentType } from 'Modules/videos/models/types';
import React from 'react';
import Marker from './Marker';
import { TimeWithMarkerWrapper } from './styled';
import { TimeWithMarkerPropsType } from './types';

const TimeWithMarker: React.FC<TimeWithMarkerPropsType> = (props) => {
  const { played, incidents, onClick, selectedLabel, duration } = props;
  return (
    <>
      {incidents &&
        incidents
          .filter((incident) => incident.cat === selectedLabel)
          .map((incident) => {
            incident.nFps.map((nFps, index) => {
              <Marker
                key={index}
                nFps={nFps}
                onMarkerClick={onClick}
                duration={duration}
              />;
            });
          })}
      <TimeWithMarkerWrapper />
    </>
  );
};

export default TimeWithMarker;
