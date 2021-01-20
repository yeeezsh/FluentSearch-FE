export type ModelCardProps = {
  cardName: string;
  model: string;
  largeNumber: number;
};

export type NumberCardProps = {
  cardName: string;
  largeNumber: number;
  todayNumber: number;
};

export type ProgressCardProps = {
  cardName: string;
  progress: number;
  doneNumber: number;
  totalNumber: number;
};
