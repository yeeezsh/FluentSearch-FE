import * as Types from 'src/common/generated/generated-types';

import * as Operations from 'src/common/generated/generated-types';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from 'src/common/services/client';
export async function getServerPageGetRecentFiles(
  options: Omit<Apollo.QueryOptions<Types.GetRecentFilesQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetRecentFilesQuery>({
    ...options,
    query: Operations.GetRecentFilesDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetRecentFiles = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetRecentFilesQuery, Types.GetRecentFilesQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetRecentFilesDocument, options);
};
export type PageGetRecentFilesComp = React.FC<{
  data?: Types.GetRecentFilesQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetRecentFiles = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetRecentFilesQuery, Types.GetRecentFilesQueryVariables>,
) => (WrappedComponent: PageGetRecentFilesComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetRecentFilesDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetRecentFiles = {
  getServerPage: getServerPageGetRecentFiles,
  withPage: withPageGetRecentFiles,
  usePage: useGetRecentFiles,
};
export async function getServerPageGetFileById(
  options: Omit<Apollo.QueryOptions<Types.GetFileByIdQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetFileByIdQuery>({
    ...options,
    query: Operations.GetFileByIdDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetFileById = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetFileByIdQuery, Types.GetFileByIdQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetFileByIdDocument, options);
};
export type PageGetFileByIdComp = React.FC<{
  data?: Types.GetFileByIdQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetFileById = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetFileByIdQuery, Types.GetFileByIdQueryVariables>,
) => (WrappedComponent: PageGetFileByIdComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetFileByIdDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetFileById = {
  getServerPage: getServerPageGetFileById,
  withPage: withPageGetFileById,
  usePage: useGetFileById,
};
export async function getServerPageGetUser(
  options: Omit<Apollo.QueryOptions<Types.GetUserQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetUserQuery>({
    ...options,
    query: Operations.GetUserDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetUser = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserDocument, options);
};
export type PageGetUserComp = React.FC<{
  data?: Types.GetUserQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetUser = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>,
) => (WrappedComponent: PageGetUserComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetUserDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetUser = {
  getServerPage: getServerPageGetUser,
  withPage: withPageGetUser,
  usePage: useGetUser,
};
export async function getServerPageGetUsers(
  options: Omit<Apollo.QueryOptions<Types.GetUsersQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetUsersQuery>({
    ...options,
    query: Operations.GetUsersDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetUsers = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetUsersQuery, Types.GetUsersQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUsersDocument, options);
};
export type PageGetUsersComp = React.FC<{
  data?: Types.GetUsersQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetUsers = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetUsersQuery, Types.GetUsersQueryVariables>,
) => (WrappedComponent: PageGetUsersComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetUsersDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetUsers = {
  getServerPage: getServerPageGetUsers,
  withPage: withPageGetUsers,
  usePage: useGetUsers,
};
export async function getServerPageGetUserBySession(
  options: Omit<Apollo.QueryOptions<Types.GetUserBySessionQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetUserBySessionQuery>({
    ...options,
    query: Operations.GetUserBySessionDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetUserBySession = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetUserBySessionQuery,
    Types.GetUserBySessionQueryVariables
  >,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserBySessionDocument, options);
};
export type PageGetUserBySessionComp = React.FC<{
  data?: Types.GetUserBySessionQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetUserBySession = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<
    Types.GetUserBySessionQuery,
    Types.GetUserBySessionQueryVariables
  >,
) => (WrappedComponent: PageGetUserBySessionComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetUserBySessionDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetUserBySession = {
  getServerPage: getServerPageGetUserBySession,
  withPage: withPageGetUserBySession,
  usePage: useGetUserBySession,
};
export async function getServerPageGetServerStatus(
  options: Omit<Apollo.QueryOptions<Types.GetServerStatusQueryVariables>, 'query'>,
  ctx?: any,
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetServerStatusQuery>({
    ...options,
    query: Operations.GetServerStatusDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useGetServerStatus = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetServerStatusQuery, Types.GetServerStatusQueryVariables>,
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetServerStatusDocument, options);
};
export type PageGetServerStatusComp = React.FC<{
  data?: Types.GetServerStatusQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetServerStatus = (
  optionsFunc?: (
    router: NextRouter,
  ) => QueryHookOptions<Types.GetServerStatusQuery, Types.GetServerStatusQueryVariables>,
) => (WrappedComponent: PageGetServerStatusComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.GetServerStatusDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrGetServerStatus = {
  getServerPage: getServerPageGetServerStatus,
  withPage: withPageGetServerStatus,
  usePage: useGetServerStatus,
};
