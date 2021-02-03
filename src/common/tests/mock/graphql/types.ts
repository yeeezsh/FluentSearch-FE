import { gql } from '@apollo/client';
import Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AppModel = {
  __typename?: 'AppModel';
  status: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateUser: UserWithId;
  UpdateUser: UserWithId;
};

export type MutationCreateUserArgs = {
  UserRegisterInput: UserRegisterInput;
};

export type MutationUpdateUserArgs = {
  UserUpdateInput: UserUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  serverStatus: AppModel;
  User?: Maybe<UserWithId>;
  Users: Array<UserWithId>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum UserPackageEnum {
  FreeUser = 'freeUser',
  PaidUser = 'paidUser',
}

export type UserRegisterInput = {
  mainEmail: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum UserRoleEnum {
  Admin = 'admin',
  Staff = 'staff',
  User = 'user',
}

export type UserToken = {
  __typename?: 'UserToken';
  provider: Scalars['String'];
  token: Scalars['String'];
};

export type UserUpdateInput = {
  id: Scalars['String'];
  mainEmail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserWithId = {
  __typename?: 'UserWithId';
  _id: Scalars['String'];
  createDate: Scalars['String'];
  deactivate?: Maybe<Scalars['Boolean']>;
  email: Array<Scalars['String']>;
  mainEmail: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  oauth: UserToken;
  package: UserPackageEnum;
  password: Scalars['String'];
  role: UserRoleEnum;
  updateDate: Scalars['String'];
  zone: UserZoneEnum;
};

export enum UserZoneEnum {
  Th1 = 'TH1',
  Th2 = 'TH2',
}

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = { __typename?: 'Query' } & {
  Users: Array<
    { __typename?: 'UserWithId' } & Pick<
      UserWithId,
      | '_id'
      | 'createDate'
      | 'deactivate'
      | 'email'
      | 'mainEmail'
      | 'name'
      | 'package'
      | 'password'
      | 'role'
      | 'updateDate'
      | 'zone'
    > & { oauth: { __typename?: 'UserToken' } & Pick<UserToken, 'provider' | 'token'> }
  >;
};

export const GetUserDocument = gql`
  query getUser {
    Users {
      _id
      createDate
      deactivate
      email
      mainEmail
      name
      oauth {
        provider
        token
      }
      package
      password
      role
      updateDate
      zone
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
): Apollo.QueryResult<GetUserQuery, GetUserQueryVariables> {
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions,
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
): Apollo.QueryTuple<GetUserQuery, GetUserQueryVariables> {
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions,
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
