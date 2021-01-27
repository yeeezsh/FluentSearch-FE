import { Album } from 'Modules/photos/models/album';
import { Photo } from 'Modules/photos/models/photo';
import { GroupThumbnailPhotos, ThumbnailPhoto } from 'Modules/photos/models/thumbnail';

export type PhotoState = {
  data: {
    photos: Photo[];
    albums: Album[];
  };
  presentation: {
    thumbnail: ThumbnailPhoto[];
    thumbnailGroup: GroupThumbnailPhotos[];
    views?: {
      photo: Photo;
      album: Album;
    };
  };
};
