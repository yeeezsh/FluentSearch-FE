import { LabelPresentType } from 'Modules/videos/models/types';

export type LabelCardPropsType = {
  totalIncidents: number;
  incidents: LabelPresentType[];
  played: number;
  onMarkerClick: (nFps: number) => void;
  selectedLabel: string;
  duration: number;
};
