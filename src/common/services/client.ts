import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.APP_GRAPHQL_ENDPOINT || 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});
