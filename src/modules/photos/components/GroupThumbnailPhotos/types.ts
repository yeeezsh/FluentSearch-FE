import { GroupThumbnailPhotos } from 'Modules/photos/models/thumbnail';

export interface Props extends GroupThumbnailPhotos {
  selected: boolean;
  onSelect?: (s: boolean) => void;
}
