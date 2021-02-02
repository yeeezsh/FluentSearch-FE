import { ModelEnum } from 'Modules/dashboard/constants/model.enum';
import { DashboardState } from './types';

export const initDashboardState: DashboardState = {
  data: [
    {
      totalPhotos: 0,
      totalVideos: 0,
      todayPhotos: 0,
      todayVideos: 0,
      upcomingModel: '-',
      model: ModelEnum.NONE,
      processWithModelPhoto: 0,
      finishRunningPhotos: 0,
      totalRunningPhotos: 0,
      progressPhoto: 0,
    },
  ],
  ready: false,
};
