import { makeExecutableSchema } from '@graphql-tools/schema';
import { SchemaLink } from '@apollo/client/link/schema';
import gql from 'graphql-tag';

const typeDefs = gql`
  type AppModel {
    status: Int!
  }

  type Mutation {
    CreateUser(UserRegisterInput: UserRegisterInput!): UserWithId!
    UpdateUser(UserUpdateInput: UserUpdateInput!): UserWithId!
  }

  type Query {
    serverStatus: AppModel!
    User(id: String): UserWithId
    Users(limit: Int = 1000, skip: Int = 0): [UserWithId!]!
  }

  enum UserPackageEnum {
    freeUser
    paidUser
  }

  input UserRegisterInput {
    mainEmail: String!
    name: String!
    password: String!
  }

  enum UserRoleEnum {
    admin
    staff
    user
  }

  type UserToken {
    provider: String!
    token: String!
  }

  input UserUpdateInput {
    id: String!
    mainEmail: String
    name: String
  }

  type UserWithId {
    _id: String!
    createDate: String!
    deactivate: Boolean
    email: [String!]!
    mainEmail: String!
    name: String
    oauth: UserToken!
    package: UserPackageEnum!
    password: String!
    role: UserRoleEnum!
    updateDate: String!
    zone: UserZoneEnum!
  }

  enum UserZoneEnum {
    TH1
    TH2
  }
`;

export const schemaLink = new SchemaLink({ schema: makeExecutableSchema({ typeDefs }) });
