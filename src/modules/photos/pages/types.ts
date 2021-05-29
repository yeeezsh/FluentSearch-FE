import { ApolloError } from '@apollo/client';
import { GetRecentFilesQuery } from '../../../common/generated/generated-types';

export type AllPhotosPagePropsType = {
  data?: GetRecentFilesQuery;
  error?: ApolloError;
};
