import { Sync, each } from 'factory.ts';
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

export const AppModelMock = Sync.makeFactory<AppModel>({
  __typename: 'AppModel',
  status: each(() => faker.random.number()),
});

export const QueryUserArgsMock = Sync.makeFactory<QueryUserArgs>({
  id: each(() => faker.random.uuid()),
});

export const QueryUsersArgsMock = Sync.makeFactory<QueryUsersArgs>({
  limit: each(() => faker.random.number()),
  skip: each(() => faker.random.number()),
});

export const UserRegisterInputMock = Sync.makeFactory<UserRegisterInput>({
  mainEmail: each(() => faker.internet.email()),
  name: each(() => faker.name.firstName()),
  password: each(() => faker.internet.password()),
});

export const UserTokenMock = Sync.makeFactory<UserToken>({
  __typename: 'UserToken',
  provider: each(() => faker.lorem.word()),
  token: each(() => faker.lorem.word()),
});

export const UserUpdateInputMock = Sync.makeFactory<UserUpdateInput>({
  id: each(() => faker.random.uuid()),
  mainEmail: each(() => faker.internet.email()),
  name: each(() => faker.name.firstName()),
});

export const UserWithIdMock = Sync.makeFactory<UserWithId>({
  __typename: 'UserWithId',
  _id: each(() => faker.random.uuid()),
  name: each(() => faker.name.firstName()),
  mainEmail: each(() => faker.internet.email()),
  deactivate: each(() => faker.random.boolean()),
  email: each(() => {
    return new Array(2).fill(faker.internet.email());
  }),
  createDate: each(() => faker.date.past().toString()),
  oauth: each(() => UserTokenMock.build()),
  package: each(() => faker.random.arrayElement(Object.values(UserPackageEnum))),
  password: each(() => faker.internet.password()),
  role: each(() => faker.random.arrayElement(Object.values(UserRoleEnum))),
  updateDate: each(() => faker.date.past().toString()),
  zone: each(() => faker.random.arrayElement(Object.values(UserZoneEnum))),
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
