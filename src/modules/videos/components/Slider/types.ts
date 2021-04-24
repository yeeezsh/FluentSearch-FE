type SliderPropsType = {
  min: number;
  max: number;
  onMouseUp: () => void;
  onMouseDown: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  played: number;
};

export type { SliderPropsType };
