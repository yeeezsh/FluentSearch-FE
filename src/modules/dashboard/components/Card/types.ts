export type modelCardProps = {
  cardName: string;
  model: string;
  largeNumber: number;
};

export type numberCardProps = {
  cardName: string;
  largeNumber: number;
  todayNumber: number;
};

export type progressCardProps = {
  cardName: string;
  progress: number;
  doneNumber: number;
  totalNumber: number;
};
