import { Sync, each } from 'factory.ts';
import faker from 'faker';
import { ModelEnum } from '../models/model.enum';

export interface IDataSource {
  key: string;
  timestamp: Date;
  taskID: string;
  taskName: string;
  model: ModelEnum;
  progress: number;
  elaspedTime: Date;
  inprogressPhoto: number;
  totalPhoto: number;
}

const DataSourceMock = Sync.makeFactory<IDataSource>({
  key: each(() => faker.random.uuid()),
  timestamp: each(() => faker.date.past()),
  taskID: each(() => faker.random.uuid()),
  taskName: each(() => faker.lorem.word()),
  model: each(() => faker.random.arrayElement(Object.values(ModelEnum))),
  progress: each(() =>
    faker.random.number({
      min: 0,
      max: 100,
    }),
  ),
  elaspedTime: each(() => faker.date.past()),
  inprogressPhoto: each(() =>
    faker.random.number({
      min: 0,
      max: 1000,
    }),
  ),
  totalPhoto: each(() =>
    faker.random.number({
      min: 1000,
      max: 2000,
    }),
  ),
});

const ProgressMock = Sync.makeFactory({
  progress: each(() =>
    faker.random.number({
      min: 0,
      max: 100,
    }),
  ),
});

const ElaspedTimeMock = Sync.makeFactory({
  elaspedTime: each(() => faker.date.past()),
});

const InprogressPhotoMock = Sync.makeFactory({
  inprogressPhoto: each(() =>
    faker.random.number({
      min: 0,
      max: 1000,
    }),
  ),
});

const TotalPhotoMock = Sync.makeFactory({
  totalPhoto: each(() =>
    faker.random.number({
      min: 1000,
      max: 2000,
    }),
  ),
});

const ActiveMock = Sync.makeFactory({
  active: each(() => faker.random.boolean()),
});

export const DataSource: IDataSource[] = DataSourceMock.buildList(10);
export const Progress = ProgressMock.build();
export const ElaspedTime = ElaspedTimeMock.build();
export const InprogressPhoto = InprogressPhotoMock.build();
export const TotalPhoto = TotalPhotoMock.build();
export const Active = ActiveMock.build();
