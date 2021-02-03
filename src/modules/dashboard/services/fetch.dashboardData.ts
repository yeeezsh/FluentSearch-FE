// import axios from 'axios';
import { AlbumPreviewProps } from '../components/AlbumPreview/types';
import { AlbumPreviewMockData, DashboardMockData } from '../mocks/data';
import { DashboardData } from '../models/types';

// export const fetchDashboard = async (): Promise<DashboardData> => {
//   const apiRoot = 'https://api.unsplash.com';
//   const accessKey = 'fLLHNmXzlY1Mkc9woN0pQFNNc53hoBfGAgmQTF2OH4w';
//   const { data } = await axios.get(
//     `${apiRoot}/photos/random?client_id=${accessKey}&count=5`,
//   );
//   return data;
// };

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
