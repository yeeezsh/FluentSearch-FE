import { ApolloClient, createHttpLink, HttpLink, InMemoryCache } from '@apollo/client';

const endpoint = new HttpLink({
  uri: process.env.APP_GRAPHQL_ENDPOINT || 'http://localhost:5000/graphql',
});

export const client = new ApolloClient({
  uri: process.env.APP_GRAPHQL_ENDPOINT || 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});
