import * as Factory from 'factory.ts';
import faker from 'faker';
import { StatusEnum } from 'Modules/history/models/status.enum';

enum ModelEnum {
  RESNET = 'ResNet',
  VGG = 'VGG16',
}

interface IDataSource {
  key: string;
  taskID: string;
  taskName: string;
  model: ModelEnum;
  startTime: string;
  finishTime: string;
  status: StatusEnum;
}

const DataSourceMock = Factory.Sync.makeFactory<IDataSource>({
  key: Factory.each(() => faker.random.uuid()),
  taskID: Factory.each(() => faker.random.uuid()),
  taskName: Factory.each(() => faker.lorem.word()),
  model: Factory.each(() => faker.random.arrayElement(Object.values(ModelEnum))),
  startTime: Factory.each(() => faker.date.past().toString()),
  finishTime: Factory.each(() => faker.date.past().toString()),
  status: Factory.each(() => faker.random.arrayElement(Object.values(StatusEnum))),
});

export const DataSource: IDataSource[] = DataSourceMock.buildList(10);
