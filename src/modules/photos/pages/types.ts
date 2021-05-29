import { ApolloError } from '@apollo/client';
import { GetRecentFilesQuery } from '../../../common/generated/generated-types';

export type AllPhotosPagePropsType = {
  props: React.PropsWithChildren<{
    data?: GetRecentFilesQuery | undefined;
    error?: ApolloError | undefined;
  }>;
};
