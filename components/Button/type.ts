interface Style {
  type?: 'secondary' | 'success' | 'danger' | 'disable';
}

interface Size {
  type?: 'small' | 'large';
}

export type ButtonComponentProps = {
  children?: HTMLCollection | string;
  onClick?: (e?: React.MouseEvent) => void;
  color?: Style['type'];
  style?: Style;
  size?: Size['type'];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
