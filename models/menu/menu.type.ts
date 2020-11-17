import { ButtonComponentProps } from 'Components/Button/button.type';

type MenuType = {
  key: string;
  label: string | ButtonComponentProps;
  link: string[];
  icon?: string;
  style?: React.CSSProperties;
  active: boolean;
};
export default MenuType;
