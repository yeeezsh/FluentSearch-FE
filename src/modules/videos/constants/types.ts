type AnnotaionType = {
  id: string;
  label: string;
  startTime?: number;
  endTime?: number;
  finish: boolean;
  incidents: IncidentType[];
};

type IncidentType = {
  x: number;
  y: number;
  height: number;
  width: number;
  nthFps: number;
};

export type { AnnotaionType, IncidentType };
