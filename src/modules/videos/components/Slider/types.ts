type SliderPropsType = {
  min: number;
  max: number;
  onMouseUp?: React.MouseEventHandler<HTMLInputElement>;
  onMouseDown?: React.MouseEventHandler<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  played: number;
};

export type { SliderPropsType };
