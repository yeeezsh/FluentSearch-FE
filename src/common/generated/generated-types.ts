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

export type FileDurationMetaDto = {
  __typename?: 'FileDurationMetaDTO';
  original: Scalars['String'];
  hour: Scalars['Float'];
  minute: Scalars['Float'];
  second: Scalars['Float'];
};

export type FileMetaDto = {
  __typename?: 'FileMetaDTO';
  size: Scalars['Float'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  extension: Scalars['String'];
  contentType: Scalars['String'];
  sha1?: Maybe<Scalars['String']>;
  fps?: Maybe<Scalars['Float']>;
  codec?: Maybe<Scalars['String']>;
  bitrate?: Maybe<Scalars['Float']>;
  duration?: Maybe<FileDurationMetaDto>;
};

export type FileModelDto = {
  __typename?: 'FileModelDTO';
  _id: Scalars['String'];
  uri: Scalars['String'];
  meta: FileMetaDto;
  owner: Scalars['String'];
  zone: ZoneEnum;
  original_filename: Scalars['String'];
  type: FileTypeEnum;
  createAt: Scalars['String'];
  updateAt: Scalars['String'];
};

export enum FileTypeEnum {
  Image = 'Image',
  Video = 'Video',
  ImageThumbnail = 'ImageThumbnail',
  VideoThumbnail = 'VideoThumbnail'
}

export enum ModelEnum {
  FacesEmo = 'faces_emo',
  Detection_600 = 'detection_600',
  IlsvrcGooglenet = 'ilsvrc_googlenet',
  BasicFashion = 'basic_fashion',
  Classification_21k = 'classification_21k',
  Places = 'places',
  Vgg16 = 'vgg16'
}

export type Mutation = {
  __typename?: 'Mutation';
  CreateUser: UserWithId;
  UpdateUser: UserWithId;
  Login: UserSessionDto;
  Logout?: Maybe<Scalars['String']>;
  RefreshToken?: Maybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  UserRegisterInput: UserRegisterInput;
};


export type MutationUpdateUserArgs = {
  UserUpdateInput: UserUpdateInput;
};


export type MutationLoginArgs = {
  UserLoginInputDTO: UserLoginInputDto;
};

export type Query = {
  __typename?: 'Query';
  ServerStatus: AppModel;
  User?: Maybe<UserWithId>;
  GetUserBySession?: Maybe<UserWithId>;
  Users: Array<UserWithId>;
  GetFileById: FileModelDto;
  GetRecentFiles: RecentFiles;
  GetUserTasks: UserTasksDto;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetFileByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetRecentFilesArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetUserTasksArgs = {
  userId: Scalars['String'];
};

export type RecentFile = {
  __typename?: 'RecentFile';
  original_filename: Scalars['String'];
  uri: Scalars['String'];
  uri_thumbnail: Scalars['String'];
  createAt: Scalars['String'];
  updateAt: Scalars['String'];
};

export type RecentFiles = {
  __typename?: 'RecentFiles';
  result: Array<RecentPreviews>;
};

export type RecentPreviews = {
  __typename?: 'RecentPreviews';
  date: Scalars['String'];
  files?: Maybe<Array<RecentFile>>;
};

export type TaskStatus = {
  __typename?: 'TaskStatus';
  name: Scalars['String'];
  wait: Scalars['Float'];
  excute: Scalars['Float'];
  finish: Scalars['Float'];
  models: Array<ModelEnum>;
  createAt: Scalars['String'];
};

export type UserLoginInputDto = {
  password: Scalars['String'];
  email: Scalars['String'];
};

export enum UserPackageEnumSession {
  FreeUser = 'freeUser',
  PaidUser = 'paidUser'
}

export type UserRegisterInput = {
  mainEmail: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

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
  role: UserRoleEnumSession;
  package: UserPackageEnumSession;
  zone: UserZoneEnumSession;
};

export type UserTasksDto = {
  __typename?: 'UserTasksDTO';
  tasks: Array<TaskStatus>;
  quota: Scalars['Float'];
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
  mainEmail: Scalars['String'];
  email: Array<Scalars['String']>;
  password: Scalars['String'];
  oauth: UserToken;
  name?: Maybe<Scalars['String']>;
  role: UserRoleEnumSession;
  package: UserPackageEnumSession;
  zone: UserZoneEnumSession;
  deactivate?: Maybe<Scalars['Boolean']>;
  createAt: Scalars['String'];
  updateAt: Scalars['String'];
  _id: Scalars['String'];
};

export enum UserZoneEnumSession {
  Th1 = 'TH1',
  Th2 = 'TH2'
}

export enum ZoneEnum {
  Th = 'TH'
}

export type GetRecentFilesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type GetRecentFilesQuery = (
  { __typename?: 'Query' }
  & { GetRecentFiles: (
    { __typename?: 'RecentFiles' }
    & { result: Array<(
      { __typename?: 'RecentPreviews' }
      & Pick<RecentPreviews, 'date'>
      & { files?: Maybe<Array<(
        { __typename?: 'RecentFile' }
        & Pick<RecentFile, 'createAt' | 'original_filename' | 'updateAt' | 'uri' | 'uri_thumbnail'>
      )>> }
    )> }
  ) }
);

export type GetFileByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetFileByIdQuery = (
  { __typename?: 'Query' }
  & { GetFileById: (
    { __typename?: 'FileModelDTO' }
    & Pick<FileModelDto, '_id' | 'createAt' | 'original_filename' | 'owner' | 'type' | 'updateAt' | 'uri' | 'zone'>
    & { meta: (
      { __typename?: 'FileMetaDTO' }
      & Pick<FileMetaDto, 'bitrate' | 'codec' | 'contentType' | 'extension' | 'fps' | 'height' | 'sha1' | 'size' | 'width'>
      & { duration?: Maybe<(
        { __typename?: 'FileDurationMetaDTO' }
        & Pick<FileDurationMetaDto, 'hour' | 'minute' | 'original' | 'second'>
      )> }
    ) }
  ) }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { User?: Maybe<(
    { __typename?: 'UserWithId' }
    & Pick<UserWithId, '_id' | 'createAt' | 'deactivate' | 'email' | 'mainEmail' | 'name' | 'package' | 'role' | 'updateAt' | 'zone'>
    & { oauth: (
      { __typename?: 'UserToken' }
      & Pick<UserToken, 'provider' | 'token'>
    ) }
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
    & Pick<UserWithId, '_id' | 'createAt' | 'deactivate' | 'email' | 'mainEmail' | 'name' | 'package' | 'role' | 'updateAt' | 'zone'>
    & { oauth: (
      { __typename?: 'UserToken' }
      & Pick<UserToken, 'provider' | 'token'>
    ) }
  )> }
);

export type GetUserBySessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserBySessionQuery = (
  { __typename?: 'Query' }
  & { GetUserBySession?: Maybe<(
    { __typename?: 'UserWithId' }
    & Pick<UserWithId, '_id' | 'createAt' | 'deactivate' | 'email' | 'mainEmail' | 'name' | 'package' | 'role' | 'updateAt' | 'zone'>
    & { oauth: (
      { __typename?: 'UserToken' }
      & Pick<UserToken, 'provider' | 'token'>
    ) }
  )> }
);

export type GetServerStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServerStatusQuery = (
  { __typename?: 'Query' }
  & { ServerStatus: (
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
    & Pick<UserWithId, '_id' | 'mainEmail' | 'name' | 'package' | 'password' | 'role' | 'zone'>
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
    & Pick<UserWithId, '_id' | 'createAt' | 'deactivate' | 'email' | 'mainEmail' | 'name' | 'package' | 'role' | 'updateAt' | 'zone'>
    & { oauth: (
      { __typename?: 'UserToken' }
      & Pick<UserToken, 'provider' | 'token'>
    ) }
  ) }
);


export const GetRecentFilesDocument = gql`
    query GetRecentFiles($limit: Int, $skip: Int) {
  GetRecentFiles(limit: $limit, skip: $skip) {
    result {
      date
      files {
        createAt
        original_filename
        updateAt
        uri
        uri_thumbnail
      }
    }
  }
}
    `;
export type GetRecentFilesQueryResult = Apollo.QueryResult<GetRecentFilesQuery, GetRecentFilesQueryVariables>;
export const GetFileByIdDocument = gql`
    query GetFileById($id: String!) {
  GetFileById(id: $id) {
    _id
    createAt
    meta {
      bitrate
      codec
      contentType
      duration {
        hour
        minute
        original
        second
      }
      extension
      fps
      height
      sha1
      size
      width
    }
    original_filename
    owner
    type
    updateAt
    uri
    zone
  }
}
    `;
export type GetFileByIdQueryResult = Apollo.QueryResult<GetFileByIdQuery, GetFileByIdQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: String!) {
  User(id: $id) {
    _id
    createAt
    deactivate
    email
    mainEmail
    name
    oauth {
      provider
      token
    }
    package
    role
    updateAt
    zone
  }
}
    `;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($limit: Int = 1000, $skip: Int = 0) {
  Users(limit: $limit, skip: $skip) {
    _id
    createAt
    deactivate
    email
    mainEmail
    name
    oauth {
      provider
      token
    }
    package
    role
    updateAt
    zone
  }
}
    `;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserBySessionDocument = gql`
    query GetUserBySession {
  GetUserBySession {
    _id
    createAt
    deactivate
    email
    mainEmail
    name
    oauth {
      provider
      token
    }
    package
    role
    updateAt
    zone
  }
}
    `;
export type GetUserBySessionQueryResult = Apollo.QueryResult<GetUserBySessionQuery, GetUserBySessionQueryVariables>;
export const GetServerStatusDocument = gql`
    query GetServerStatus {
  ServerStatus {
    status
  }
}
    `;
export type GetServerStatusQueryResult = Apollo.QueryResult<GetServerStatusQuery, GetServerStatusQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($UserRegisterInput: UserRegisterInput!) {
  CreateUser(UserRegisterInput: $UserRegisterInput) {
    _id
    mainEmail
    name
    package
    password
    role
    zone
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
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
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  Logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  RefreshToken
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($UserUpdateInput: UserUpdateInput!) {
  UpdateUser(UserUpdateInput: $UserUpdateInput) {
    _id
    createAt
    deactivate
    email
    mainEmail
    name
    oauth {
      provider
      token
    }
    package
    role
    updateAt
    zone
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;