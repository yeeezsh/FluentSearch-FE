import React from 'react';

interface Style {
  type?: 'Primary' | 'Secondary' | 'Success' | 'Danger' | 'Disable';
}

const btnStyle = (type?: Style['type']): React.CSSProperties => {
  const style: React.CSSProperties = {
    width: '180px',
    padding: '0.8em',
    display: 'block',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#00BFA5',
    borderRadius: '30px',
    border: 'none',
  };

  switch (type) {
    case 'Primary':
      return {
        ...style,
        backgroundColor: '#00BFA5',
      };

    case 'Secondary':
      return {
        ...style,
        backgroundColor: '#ffffff',
        border: '3px solid #00BFA5',
        color: '#00BFA5',
      };

    default:
      return style;
  }
};

const Button: React.FC<{
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: Style['type'];
  style?: React.CSSProperties;
}> = (props) => {
  const { children, type, style } = props;

  const styles = {
    ...btnStyle(type),
    ...style,
  };

  return (
    <button type="submit" style={styles}>
      {children}
    </button>
  );
};

export default Button;
