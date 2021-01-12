import { ThumbnailPhoto } from 'Modules/photos/models/thumbnail';

export interface Props extends ThumbnailPhoto {
  onSelect?: (s: boolean) => void;
}
