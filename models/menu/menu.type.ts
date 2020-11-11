import { ButtonComponentProps } from 'Models/button/button.type';

type MenuType = {
  key: string;
  label: string | ButtonComponentProps;
  link: string[];
  icon?: string;
  style?: React.CSSProperties;
};
export default MenuType;
