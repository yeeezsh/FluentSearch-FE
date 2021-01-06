import { ButtonComponentProps } from 'Components/Button/type';

type MenuType = {
  key: string;
  label: string | ButtonComponentProps;
  link: string[];
  icon?: string;
  style?: React.CSSProperties;
  active: boolean;
};
export default MenuType;
