export type MarkerType = {
  id: number;
  time: number;
  color: string;
  title: string;
};

export type MarkerPropsType = {
  marker: MarkerType;
  duration: number;
  onMarkerClick: (marker: MarkerType) => void;
};
