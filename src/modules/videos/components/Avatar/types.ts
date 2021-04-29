type AvatarPropsType = {
  selected?: boolean;
  src: string;
  onClick: () => void;
};

type AvatarWrapperProps = {
  selected: boolean;
};

export type { AvatarPropsType, AvatarWrapperProps };
