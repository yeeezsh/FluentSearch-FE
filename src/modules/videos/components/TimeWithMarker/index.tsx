import { LabelPresentType } from 'Modules/videos/models/types';
import React from 'react';
import { MarkerType } from './Marker/types';
import { TimeWithMarkerWrapper } from './styled';
import { TimeWithMarkerPropsType } from './types';

const TimeWithMarker: React.FC<TimeWithMarkerPropsType> = (props) => {
  const { played, incidents } = props;

  const addMarker = () => {
    const markersCopy: LabelPresentType[] = [...incidents];
  };
  return <TimeWithMarkerWrapper />;
};

export default TimeWithMarker;
