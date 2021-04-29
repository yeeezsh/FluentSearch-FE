import { ReactNode } from 'react';

type ToggleLabelProps = {
  selected?: boolean;
  children: ReactNode;
};

type ToggleLabelWrapperProps = {
  selected: boolean;
};

export type { ToggleLabelProps, ToggleLabelWrapperProps };
