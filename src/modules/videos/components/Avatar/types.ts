type AvatarPropsType = {
  selected?: boolean;
  src: string;
  handleOnClick: (id: string) => void;
  label: string;
};

type AvatarWrapperProps = {
  selected: boolean;
};

export type { AvatarPropsType, AvatarWrapperProps };
