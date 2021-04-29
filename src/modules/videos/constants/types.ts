type AnnotaionType = {
  id: string;
  label: string;
  startTime?: number;
  endTime?: number;
  incidents: IncidentType[];
  src: string;
  selected: false;
};

type IncidentType = {
  x: number;
  y: number;
  height: number;
  width: number;
  nthFps: number;
  finish: boolean;
};

export type { AnnotaionType, IncidentType };
