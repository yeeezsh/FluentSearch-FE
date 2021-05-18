import { ApolloClient, HttpLink, InMemoryCache, ServerError } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import HttpStatusCode from '../constants/httpStatusCode';

export const END_POINT =
  process.env.APP_GRAPHQL_ENDPOINT || 'http://api.fluentsearch.ml/graphql';
const httpLink = new HttpLink({
  uri: END_POINT,
  credentials: 'include',
});

const logoutLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions && err.extensions.exception.response.statusCode) {
        case 400:
          alert('This email already exist, Please change the email');
          break;
        default:
          console.log(
            `[GraphQL error]: Status: ${err.extensions?.exception.response.statusCode} Message: ${err.message}, Location: ${err.locations}, Path: ${err.path}`,
          );
          break;
      }
    }
  }

  if (networkError) {
    if ((networkError as ServerError)?.statusCode === HttpStatusCode.UNAUTHORIZED)
      window.location.replace('/logout');
    else if (
      (networkError as ServerError)?.statusCode === HttpStatusCode.NOT_IMPLEMENTED
    ) {
      alert(networkError?.message);
      window.location.replace('/');
    }
  }
});

export const client = new ApolloClient({
  link: logoutLink.concat(httpLink),
  cache: new InMemoryCache(),
});
