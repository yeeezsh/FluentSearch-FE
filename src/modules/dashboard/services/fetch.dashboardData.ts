import { AlbumPreviewProps } from '../components/AlbumPreview/types';
import { AlbumMock, DashboardMock } from '../mocks/mockData';
import { DashboardData } from '../models/types';

type DashboardDataType = {
  DashboardMockData: DashboardData;
  AlbumPreviewMockData: AlbumPreviewProps[];
};

//TODO: temp hide for mvp final
// const data = {
//   DashboardMockData,
//   AlbumPreviewMockData,
// };

const mockData = {
  DashboardMockData: DashboardMock,
  AlbumPreviewMockData: AlbumMock,
};

//TODO: Connect with Adapter and real api
export const fetchDashboard = (): DashboardDataType => {
  return mockData;
};
