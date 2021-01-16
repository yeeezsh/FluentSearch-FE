import { ButtonComponentProps } from 'Components/Button/types';

export type MenuType = {
  key: string;
  icon?: string;
  label: string | ButtonComponentProps;
  link: string[];
  style?: React.CSSProperties;
  active: boolean;
};
