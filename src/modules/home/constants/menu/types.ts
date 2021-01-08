import { ButtonComponentProps } from 'Components/Button/types';

export type MenuType = {
  key: string;
  label: string | ButtonComponentProps;
  link: string[];
  icon?: string;
  style?: React.CSSProperties;
  active: boolean;
};
