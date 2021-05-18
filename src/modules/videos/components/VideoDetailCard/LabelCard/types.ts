import { LabelPresentType } from 'Modules/videos/models/types';
import { MarkerType } from '../../TimeWithMarker/Marker/types';

export type LabelCardPropsType = {
  totalIncidents: number;
  incidents: LabelPresentType[];
  played: number;
  onMarkerClick: (marker: MarkerType) => void;
};
