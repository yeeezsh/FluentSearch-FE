import { Photo } from 'Modules/photos/models/photo';

export interface Props extends Photo {
  onSelect?: (s: boolean) => void;
}
