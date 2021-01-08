import { ButtonComponentProps } from 'src/common/components/Button/type';

export type MenuType = {
  key: string;
  label: string | ButtonComponentProps;
  link: string[];
  icon?: string;
  style?: React.CSSProperties;
  active: boolean;
};
