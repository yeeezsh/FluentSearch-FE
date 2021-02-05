import { ModelEnum } from 'Modules/dashboard/constants/model.enum';
import { ErrorState } from 'Stores/common/types/error';
import { AlbumPreviewProps } from '../components/AlbumPreview/types';

export const DASHBOARD = 'DASHBOARD';

export type DashboardState = {
  data: {
    dashboardData: DashboardData;
    albumPreviewData: AlbumPreviewProps[];
  };
  presentation: {
    totalPhotos: number;
    totalVideos: number;
    todayPhotos: number;
    todayVideos: number;
    upcomingModel: string;
    model: ModelEnum;
    processWithModelPhoto: number;
    finishRunningPhotos: number;
    totalRunningPhotos: number;
    progressPhoto: number;
  };
  ready: boolean;
  error?: ErrorState;
};

export type DashboardData = {
  totalPhotos: number;
  totalVideos: number;
  todayPhotos: number;
  todayVideos: number;
  upcomingModel: string;
  model: ModelEnum;
  processWithModelPhoto: number;
  finishRunningPhotos: number;
  totalRunningPhotos: number;
  progressPhoto: number;
};
