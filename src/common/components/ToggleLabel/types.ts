import { ReactNode } from 'react';

type ToggleLabelProps = {
  selected?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

type ToggleLabelWrapperProps = {
  selected: boolean;
};

export type { ToggleLabelProps, ToggleLabelWrapperProps };
