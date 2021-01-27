import { Photos } from 'Modules/photos/constants/photo/interface';
import { Album } from 'Modules/photos/models/album';
import { Photo } from 'Modules/photos/models/photo';
import { GroupThumbnailPhotos, ThumbnailPhoto } from 'Modules/photos/models/thumbnail';
import { ErrorState } from 'Stores/common/types/error';

export const PHOTOS = 'PHOTOS';

export type PhotoState = {
  data: {
    photos: Array<Photos & { _id: string }>;
    albums: Album[];
    ready: boolean;
  };
  presentation: {
    thumbnail?: ThumbnailPhoto[];
    thumbnailGroup?: GroupThumbnailPhotos[];
    views?: {
      photo?: Photo;
      album?: Album;
    };
  };
  error?: ErrorState;
};
