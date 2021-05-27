import { RecentFile } from '../../../../common/generated/generated-types';

export type LightboxPropsType = {
  closeLightbox: () => void;
  image: RecentFile;
  onPrev: (e: React.MouseEvent<HTMLElement>) => void;
  onNext: (e: React.MouseEvent<HTMLElement>) => void;
};

export type currentImageSizeType = {
  width: number;
  height: number;
};
