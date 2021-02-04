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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AppModel = {
  __typename?: 'AppModel';
  status: Scalars['Int'];
};

export type BBoxResponseApi = {
  __typename?: 'BBoxResponseApi';
  xmax: Scalars['Int'];
  xmin: Scalars['Int'];
  ymax: Scalars['Int'];
  ymin: Scalars['Int'];
};

export enum FileExtensionEnum {
  Jpg = 'JPG',
  Png = 'PNG',
}

export type ImageFileWithInsight = {
  __typename?: 'ImageFileWithInsight';
  _id: Scalars['String'];
  createAt: Scalars['DateTime'];
  insight?: Maybe<Array<Insight>>;
  label: Scalars['String'];
  meta: ImageMeta;
  owner: Scalars['String'];
  type: Scalars['String'];
  updateAt: Scalars['DateTime'];
  uri: Scalars['String'];
  zone: ZoneEnum;
};

export type ImageMeta = {
  __typename?: 'ImageMeta';
  contentType: Scalars['String'];
  dpi: Scalars['Int'];
  extension: FileExtensionEnum;
  filename: Scalars['String'];
  height: Scalars['Int'];
  sha1?: Maybe<Scalars['String']>;
  size: Scalars['Int'];
  width: Scalars['Int'];
};

export type Insight = {
  __typename?: 'Insight';
  _id: Scalars['String'];
  bbox: BBoxResponseApi;
  createAt: Scalars['DateTime'];
  label: Scalars['String'];
  lang: LanguageEnum;
  model: ModelEnum;
  prob: Scalars['Int'];
  result: Scalars['String'];
  updateAt: Scalars['DateTime'];
};

export enum LanguageEnum {
  Enus = 'enus',
  Th = 'th',
}

export enum ModelEnum {
  Detection_600 = 'detection_600',
  FacesEmo = 'faces_emo',
}

export type Query = {
  __typename?: 'Query';
  getFilesWithInsight: Array<ImageFileWithInsight>;
  serverStatus: AppModel;
};

export type QueryGetFilesWithInsightArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  userId: Scalars['String'];
};

export enum ZoneEnum {
  Th = 'TH',
}

export type GetMetaQueryVariables = Exact<{ [key: string]: never }>;

export type GetMetaQuery = { __typename?: 'Query' } & {
  getFilesWithInsight: Array<
    { __typename?: 'ImageFileWithInsight' } & Pick<
      ImageFileWithInsight,
      '_id' | 'label'
    > & { meta: { __typename?: 'ImageMeta' } & Pick<ImageMeta, 'width' | 'height'> }
  >;
};

export type GetInsightQueryVariables = Exact<{ [key: string]: never }>;

export type GetInsightQuery = { __typename?: 'Query' } & {
  getFilesWithInsight: Array<
    { __typename?: 'ImageFileWithInsight' } & {
      insight?: Maybe<Array<{ __typename?: 'Insight' } & Pick<Insight, 'result'>>>;
    }
  >;
};

export const GetMetaDocument = gql`
  query getMeta {
    getFilesWithInsight(userId: "1234") {
      _id
      label
      meta {
        width
        height
      }
    }
  }
`;

/**
 * __useGetMetaQuery__
 *
 * To run a query within a React component, call `useGetMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMetaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMetaQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMetaQuery, GetMetaQueryVariables>,
): Apollo.QueryResult<GetMetaQuery, GetMetaQueryVariables> {
  return Apollo.useQuery<GetMetaQuery, GetMetaQueryVariables>(
    GetMetaDocument,
    baseOptions,
  );
}
export function useGetMetaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMetaQuery, GetMetaQueryVariables>,
): Apollo.QueryTuple<GetMetaQuery, GetMetaQueryVariables> {
  return Apollo.useLazyQuery<GetMetaQuery, GetMetaQueryVariables>(
    GetMetaDocument,
    baseOptions,
  );
}
export type GetMetaQueryHookResult = ReturnType<typeof useGetMetaQuery>;
export type GetMetaLazyQueryHookResult = ReturnType<typeof useGetMetaLazyQuery>;
export type GetMetaQueryResult = Apollo.QueryResult<GetMetaQuery, GetMetaQueryVariables>;
export const GetInsightDocument = gql`
  query getInsight {
    getFilesWithInsight(limit: 10, skip: 0, userId: "123") {
      insight {
        result
      }
    }
  }
`;

/**
 * __useGetInsightQuery__
 *
 * To run a query within a React component, call `useGetInsightQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInsightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInsightQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInsightQuery(
  baseOptions?: Apollo.QueryHookOptions<GetInsightQuery, GetInsightQueryVariables>,
): Apollo.QueryResult<GetInsightQuery, GetInsightQueryVariables> {
  return Apollo.useQuery<GetInsightQuery, GetInsightQueryVariables>(
    GetInsightDocument,
    baseOptions,
  );
}
export function useGetInsightLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetInsightQuery, GetInsightQueryVariables>,
): Apollo.QueryTuple<GetInsightQuery, GetInsightQueryVariables> {
  return Apollo.useLazyQuery<GetInsightQuery, GetInsightQueryVariables>(
    GetInsightDocument,
    baseOptions,
  );
}
export type GetInsightQueryHookResult = ReturnType<typeof useGetInsightQuery>;
export type GetInsightLazyQueryHookResult = ReturnType<typeof useGetInsightLazyQuery>;
export type GetInsightQueryResult = Apollo.QueryResult<
  GetInsightQuery,
  GetInsightQueryVariables
>;
