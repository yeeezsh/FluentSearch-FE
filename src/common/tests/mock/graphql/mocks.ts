import Factory from 'factory.ts';
import faker from 'faker';
import {
  UserWithId,
  Query,
  AppModel,
  QueryUserArgs,
  QueryUsersArgs,
  UserRegisterInput,
  UserToken,
  UserUpdateInput,
  UserZoneEnum,
  UserPackageEnum,
  UserRoleEnum,
} from './types';
import { MockedResponse } from '@apollo/client/testing';
import { GET_USER } from './query';

export const AppModelMock = Factory.Sync.makeFactory<AppModel>({
  __typename: 'AppModel',
  status: Factory.each(() => faker.random.number()),
});

export const QueryUserArgsMock = Factory.Sync.makeFactory<QueryUserArgs>({
  id: Factory.each(() => faker.random.uuid()),
});

export const QueryUsersArgsMock = Factory.Sync.makeFactory<QueryUsersArgs>({
  limit: Factory.each(() => faker.random.number()),
  skip: Factory.each(() => faker.random.number()),
});

export const UserRegisterInputMock = Factory.Sync.makeFactory<UserRegisterInput>({
  mainEmail: Factory.each(() => faker.internet.email()),
  name: Factory.each(() => faker.name.firstName()),
  password: Factory.each(() => faker.internet.password()),
});

export const UserTokenMock = Factory.Sync.makeFactory<UserToken>({
  __typename: 'UserToken',
  provider: Factory.each(() => faker.lorem.word()),
  token: Factory.each(() => faker.lorem.word()),
});

export const UserUpdateInputMock = Factory.Sync.makeFactory<UserUpdateInput>({
  id: Factory.each(() => faker.random.uuid()),
  mainEmail: Factory.each(() => faker.internet.email()),
  name: Factory.each(() => faker.name.firstName()),
});

export const UserWithIdMock = Factory.Sync.makeFactory<UserWithId>({
  __typename: 'UserWithId',
  _id: Factory.each(() => faker.random.uuid()),
  name: Factory.each(() => faker.name.firstName()),
  mainEmail: Factory.each(() => faker.internet.email()),
  deactivate: Factory.each(() => faker.random.boolean()),
  email: Factory.each(() => {
    return new Array(2).fill(faker.internet.email());
  }),
  createDate: Factory.each(() => faker.date.past().toString()),
  oauth: Factory.each(() => UserTokenMock.build()),
  package: Factory.each(() => faker.random.arrayElement(Object.values(UserPackageEnum))),
  password: Factory.each(() => faker.internet.password()),
  role: Factory.each(() => faker.random.arrayElement(Object.values(UserRoleEnum))),
  updateDate: Factory.each(() => faker.date.past().toString()),
  zone: Factory.each(() => faker.random.arrayElement(Object.values(UserZoneEnum))),
});

export const usersQueryMock: MockedResponse<Query> = {
  request: {
    query: GET_USER,
  },
  result: {
    data: {
      serverStatus: AppModelMock.build(),
      User: UserWithIdMock.build(),
      Users: UserWithIdMock.buildList(10),
    },
  },
};
