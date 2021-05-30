import { ApolloError } from '@apollo/client';
import { GetUserBySessionQuery } from '../../../common/generated/generated-types';

export type AllPhotosPagePropsType = {
  props: React.PropsWithChildren<{
    data?: GetUserBySessionQuery | undefined;
    error?: ApolloError | undefined;
  }>;
};
