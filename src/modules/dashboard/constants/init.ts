import { Dashboard } from '../models/types';

export const initState: Dashboard = {
  FileDashboardData: {
    photo: {
      total: 0,
      today: 0,
    },
    video: {
      total: 0,
      today: 0,
    },
  },
  FileInsightDashboardData: {
    fileMeta: {
      _id: '',
      type: '',
      uri: '',
      uri_thumbnail: '',
    },
    insights: [],
  },
};
