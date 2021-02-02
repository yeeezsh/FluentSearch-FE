import { ModelEnum } from 'Modules/dashboard/constants/model.enum';
import { ErrorState } from 'Stores/common/error';

export const DASHBOARD = 'DASHBOARD';

export type DashboardState = {
  data: [
    {
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
    },
  ];
  ready: boolean;
  error?: ErrorState;
};
