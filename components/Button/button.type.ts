interface Style {
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'disable';
}

interface Size {
  type?: 'small' | 'medium' | 'large';
}

export type ButtonComponentProps = {
  children?: HTMLCollection | string;
  onClick?: (e?: React.MouseEvent) => void;
  typeButton?: Style['type'];
  style?: Style;
  size?: Size['type'];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
