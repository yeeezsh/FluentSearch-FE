import { GroupThumbnailPhotos } from 'Modules/photos/models/thumbnail';

export interface Props extends GroupThumbnailPhotos {
  onSelect?: (s: boolean) => void;
}
