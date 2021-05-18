import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  Login: UserSessionDto;
  Logout?: Maybe<Scalars['String']>;
  RefreshToken?: Maybe<Scalars['String']>;
  UpdateUser: UserWithId;
};


export type MutationCreateUserArgs = {
  UserRegisterInput: UserRegisterInput;
};


export type MutationLoginArgs = {
  UserLoginInputDTO: UserLoginInputDto;
};


export type MutationUpdateUserArgs = {
  UserUpdateInput: UserUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<UserWithId>;
  Users: Array<UserWithId>;
  getUserBySession?: Maybe<UserWithId>;
  serverStatus: AppModel;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserLoginInputDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum UserPackageEnum {
  FreeUser = 'freeUser',
  PaidUser = 'paidUser'
}

export enum UserPackageEnumSession {
  FreeUser = 'freeUser',
  PaidUser = 'paidUser'
}

export type UserRegisterInput = {
  mainEmail: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum UserRoleEnum {
  Admin = 'admin',
  Staff = 'staff',
  User = 'user'
}

export enum UserRoleEnumSession {
  Admin = 'admin',
  Staff = 'staff',
  User = 'user'
}

export type UserSessionDto = {
  __typename?: 'UserSessionDTO';
  _id: Scalars['String'];
  mainEmail: Scalars['String'];
  name: Scalars['String'];
  package: UserPackageEnumSession;
  role: UserRoleEnumSession;
  zone: UserZoneEnumSession;
};

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
  Th2 = 'TH2'
}

export enum UserZoneEnumSession {
  Th1 = 'TH1',
  Th2 = 'TH2'
}

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { User?: Maybe<(
    { __typename?: 'UserWithId' }
    & Pick<UserWithId, '_id' | 'createDate' | 'deactivate' | 'email' | 'mainEmail' | 'name' | 'package' | 'role' | 'updateDate' | 'zone'>
  )> }
);

export type GetUsersQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { Users: Array<(
    { __typename?: 'UserWithId' }
    & Pick<UserWithId, '_id' | 'createDate' | 'deactivate' | 'email' | 'mainEmail' | 'package' | 'role' | 'updateDate' | 'zone'>
  )> }
);

export type GetUserBySessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserBySessionQuery = (
  { __typename?: 'Query' }
  & { getUserBySession?: Maybe<(
    { __typename?: 'UserWithId' }
    & Pick<UserWithId, '_id'>
  )> }
);

export type GetServerStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServerStatusQuery = (
  { __typename?: 'Query' }
  & { serverStatus: (
    { __typename?: 'AppModel' }
    & Pick<AppModel, 'status'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  UserRegisterInput: UserRegisterInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { CreateUser: (
    { __typename?: 'UserWithId' }
    & Pick<UserWithId, '_id' | 'createDate' | 'deactivate' | 'email' | 'mainEmail' | 'name' | 'package' | 'password' | 'role' | 'updateDate' | 'zone'>
  ) }
);

export type LoginMutationVariables = Exact<{
  UserLoginInputDTO: UserLoginInputDto;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { Login: (
    { __typename?: 'UserSessionDTO' }
    & Pick<UserSessionDto, '_id' | 'mainEmail' | 'name' | 'package' | 'role' | 'zone'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'Logout'>
);

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'RefreshToken'>
);

export type UpdateUserMutationVariables = Exact<{
  UserUpdateInput: UserUpdateInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { UpdateUser: (
    { __typename?: 'UserWithId' }
    & Pick<UserWithId, '_id' | 'createDate' | 'deactivate' | 'email' | 'mainEmail' | 'name' | 'package' | 'role' | 'updateDate' | 'zone'>
  ) }
);


export const GetUserDocument = gql`
    query GetUser($id: String!) {
  User(id: $id) {
    _id
    createDate
    deactivate
    email
    mainEmail
    name
    package
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
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($limit: Int = 1000, $skip: Int = 0) {
  Users(limit: $limit, skip: $skip) {
    _id
    createDate
    deactivate
    email
    mainEmail
    package
    role
    updateDate
    zone
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserBySessionDocument = gql`
    query GetUserBySession {
  getUserBySession {
    _id
  }
}
    `;

/**
 * __useGetUserBySessionQuery__
 *
 * To run a query within a React component, call `useGetUserBySessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBySessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBySessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserBySessionQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBySessionQuery, GetUserBySessionQueryVariables>) {
        return Apollo.useQuery<GetUserBySessionQuery, GetUserBySessionQueryVariables>(GetUserBySessionDocument, baseOptions);
      }
export function useGetUserBySessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBySessionQuery, GetUserBySessionQueryVariables>) {
          return Apollo.useLazyQuery<GetUserBySessionQuery, GetUserBySessionQueryVariables>(GetUserBySessionDocument, baseOptions);
        }
export type GetUserBySessionQueryHookResult = ReturnType<typeof useGetUserBySessionQuery>;
export type GetUserBySessionLazyQueryHookResult = ReturnType<typeof useGetUserBySessionLazyQuery>;
export type GetUserBySessionQueryResult = Apollo.QueryResult<GetUserBySessionQuery, GetUserBySessionQueryVariables>;
export const GetServerStatusDocument = gql`
    query GetServerStatus {
  serverStatus {
    status
  }
}
    `;

/**
 * __useGetServerStatusQuery__
 *
 * To run a query within a React component, call `useGetServerStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServerStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServerStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetServerStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetServerStatusQuery, GetServerStatusQueryVariables>) {
        return Apollo.useQuery<GetServerStatusQuery, GetServerStatusQueryVariables>(GetServerStatusDocument, baseOptions);
      }
export function useGetServerStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetServerStatusQuery, GetServerStatusQueryVariables>) {
          return Apollo.useLazyQuery<GetServerStatusQuery, GetServerStatusQueryVariables>(GetServerStatusDocument, baseOptions);
        }
export type GetServerStatusQueryHookResult = ReturnType<typeof useGetServerStatusQuery>;
export type GetServerStatusLazyQueryHookResult = ReturnType<typeof useGetServerStatusLazyQuery>;
export type GetServerStatusQueryResult = Apollo.QueryResult<GetServerStatusQuery, GetServerStatusQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($UserRegisterInput: UserRegisterInput!) {
  CreateUser(UserRegisterInput: $UserRegisterInput) {
    _id
    createDate
    deactivate
    email
    mainEmail
    name
    package
    password
    role
    updateDate
    zone
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      UserRegisterInput: // value for 'UserRegisterInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($UserLoginInputDTO: UserLoginInputDTO!) {
  Login(UserLoginInputDTO: $UserLoginInputDTO) {
    _id
    mainEmail
    name
    package
    role
    zone
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      UserLoginInputDTO: // value for 'UserLoginInputDTO'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  Logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  RefreshToken
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, baseOptions);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($UserUpdateInput: UserUpdateInput!) {
  UpdateUser(UserUpdateInput: $UserUpdateInput) {
    _id
    createDate
    deactivate
    email
    mainEmail
    name
    package
    role
    updateDate
    zone
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      UserUpdateInput: // value for 'UserUpdateInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;