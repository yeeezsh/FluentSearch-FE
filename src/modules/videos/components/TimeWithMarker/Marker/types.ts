export type MarkerType = {
  time: number;
  title: string;
};

export type MarkerPropsType = {
  marker: MarkerType;
  duration: number;
  onMarkerClick: (marker: MarkerType) => void;
};
