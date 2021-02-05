import { Sync, each } from 'factory.ts';
import faker from 'faker';
import { StatusEnum } from 'Modules/history/models/status.enum';
import { ModelEnum } from '../models/model.enum';

export interface IDataSource {
  key: string;
  taskID: string;
  taskName: string;
  model: ModelEnum;
  startTime: string;
  finishTime: string;
  status: StatusEnum;
}

const DataSourceMock = Sync.makeFactory<IDataSource>({
  key: each(() => faker.random.uuid()),
  taskID: each(() => faker.random.uuid()),
  taskName: each(() => faker.lorem.word()),
  model: each(() => faker.random.arrayElement(Object.values(ModelEnum))),
  startTime: each(() => faker.date.past().toString()),
  finishTime: each(() => faker.date.past().toString()),
  status: each(() => faker.random.arrayElement(Object.values(StatusEnum))),
});

export const DataSource: IDataSource[] = DataSourceMock.buildList(10);
