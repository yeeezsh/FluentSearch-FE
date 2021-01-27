import * as Factory from 'factory.ts';
import faker from 'faker';

enum ModelEnum {
  RESNET = 'ResNet',
  VGG = 'VGG16',
}

interface IDataSource {
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

const DataSourceMock = Factory.Sync.makeFactory<IDataSource>({
  key: Factory.each(() => faker.random.uuid()),
  timestamp: Factory.each(() => faker.date.past()),
  taskID: Factory.each(() => faker.random.uuid()),
  taskName: Factory.each(() => faker.lorem.word()),
  model: Factory.each(() => faker.random.arrayElement(Object.values(ModelEnum))),
  progress: Factory.each(() =>
    faker.random.number({
      min: 0,
      max: 100,
    }),
  ),
  elaspedTime: Factory.each(() => faker.date.past()),
  inprogressPhoto: Factory.each(() =>
    faker.random.number({
      min: 0,
      max: 1000,
    }),
  ),
  totalPhoto: Factory.each(() =>
    faker.random.number({
      min: 1000,
      max: 2000,
    }),
  ),
});

const ProgressMock = Factory.Sync.makeFactory({
  progress: Factory.each(() =>
    faker.random.number({
      min: 0,
      max: 100,
    }),
  ),
});

const ElaspedTimeMock = Factory.Sync.makeFactory({
  elaspedTime: Factory.each(() => faker.date.past()),
});

const InprogressPhotoMock = Factory.Sync.makeFactory({
  inprogressPhoto: Factory.each(() =>
    faker.random.number({
      min: 0,
      max: 1000,
    }),
  ),
});

const TotalPhotoMock = Factory.Sync.makeFactory({
  totalPhoto: Factory.each(() =>
    faker.random.number({
      min: 1000,
      max: 2000,
    }),
  ),
});

export const DataSource: IDataSource[] = DataSourceMock.buildList(10);
export const Progress = ProgressMock.build();
export const ElaspedTime = ElaspedTimeMock.build();
export const InprogressPhoto = InprogressPhotoMock.build();
export const TotalPhoto = TotalPhotoMock.build();
