import { Sync, each } from 'factory.ts';
import faker from 'faker';
import { ModelEnum } from '../constants/model.enum';
import { DashboardData } from '../models/types';

const DataSourceMock = Sync.makeFactory<DashboardData>({
  totalPhotos: each(() => faker.random.number()),
  totalVideos: each(() => faker.random.number()),
  todayPhotos: each(() => faker.random.number()),
  todayVideos: each(() => faker.random.number()),
  upcomingModel: each(() => faker.random.word()),
  model: each(() => faker.random.arrayElement(Object.values(ModelEnum))),
  processWithModelPhoto: each(() => faker.random.number()),
  finishRunningPhotos: each(() => faker.random.number()),
  totalRunningPhotos: each(() => faker.random.number()),
  progressPhoto: each(() => faker.random.number()),
});

export const DataSource: DashboardData = DataSourceMock.build();
