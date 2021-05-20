import { AlbumPreviewProps } from '../components/AlbumPreview/types';
import { ModelEnum } from '../constants/model.enum';
import { DashboardData } from '../models/types';

export const DashboardMock: DashboardData = {
  totalPhotos: 5,
  totalVideos: 1,
  todayPhotos: 10,
  todayVideos: 0,
  upcomingModel: 'hey',
  model: ModelEnum.DETECTION_600,
  processWithModelPhoto: 10,
  finishRunningPhotos: 8,
  totalRunningPhotos: 10,
  progressPhoto: 80,
};

export const AlbumMock: AlbumPreviewProps[] = [
  {
    src: 'https://i.imgur.com/ntE7oRA.jpg',
    albumName: 'Lalaland',
    albumLength: 5,
    label: ['Clothing', 'Man', 'SwimmingPool'],
    link: '/',
  },
];
