type AvatarPropsType = {
  selected?: boolean;
  src: string;
  handleOnClick: (id: string) => void;
  id: string;
};

type AvatarWrapperProps = {
  selected: boolean;
};

export type { AvatarPropsType, AvatarWrapperProps };
