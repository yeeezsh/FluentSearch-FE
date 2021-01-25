import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
