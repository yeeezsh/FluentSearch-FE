export type ThumbnailPhoto = {
  label?: string;
  src: string;
  selected: boolean;
  createAt: Date;
};

export type GroupThumbnailPhotos = {
  selected: boolean;
  photos: ThumbnailPhoto[];
  dateRange: [Date, Date];
};
