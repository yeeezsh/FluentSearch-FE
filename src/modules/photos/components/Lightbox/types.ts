import { PhotosAPI } from 'Modules/photos/constants/photo/interface';

export type LightboxPropsType = {
  image: PhotosAPI;
  onPrev: (e: React.MouseEvent<HTMLElement>) => void;
  onNext: (e: React.MouseEvent<HTMLElement>) => void;
};

export type currentImageSizeType = {
  width: number;
  height: number;
};
