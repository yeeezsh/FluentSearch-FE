import { AlbumPreviewProps } from '../components/AlbumPreview/types';
import { AlbumPreviewMockData, DashboardMockData } from '../mocks/data';
import { DashboardData } from '../models/types';

type DashboardDataType = {
  DashboardMockData: DashboardData;
  AlbumPreviewMockData: AlbumPreviewProps[];
};

const data = {
  DashboardMockData,
  AlbumPreviewMockData,
};

//TODO: Connect with Adapter and real api
export const fetchDashboard = (): DashboardDataType => {
  return data;
};
