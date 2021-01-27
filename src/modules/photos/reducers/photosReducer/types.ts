import { Album } from 'Modules/photos/models/album';
import { Photo } from 'Modules/photos/models/photo';
import { GroupThumbnailPhotos, ThumbnailPhoto } from 'Modules/photos/models/thumbnail';
import { ErrorState } from 'Stores/common/types/error';

export type PhotoState = {
  data: {
    photos: Photo[];
    albums: Album[];
    ready: boolean;
  };
  presentation: {
    thumbnail?: ThumbnailPhoto[];
    thumbnailGroup?: GroupThumbnailPhotos[];
    views?: {
      photo: Photo;
      album: Album;
    };
  };
  error?: ErrorState;
};
