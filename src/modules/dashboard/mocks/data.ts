import { Sync, each } from 'factory.ts';
import faker from 'faker';
import { ModelEnum } from '../constants/model.enum';

export interface IDataSource {
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
}

const DataSourceMock = Sync.makeFactory<IDataSource>({
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

export const DataSource: IDataSource[] = DataSourceMock.buildList(4);
