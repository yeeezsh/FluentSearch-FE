import { PayloadAction } from '@reduxjs/toolkit';
import { ModelEnum } from 'Modules/dashboard/constants/model.enum';
import { ErrorState } from 'Stores/common/error';

export const DASHBOARD = 'DASHBOARD';

export type DashboardState = {
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

export type DashboardValuePayload = PayloadAction<{
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
}>;

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
