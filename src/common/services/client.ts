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
    console.log(graphQLErrors[0]);
    if (graphQLErrors[0].extensions) {
      switch (graphQLErrors[0].extensions?.exception?.status) {
        case 401:
          alert('Invalid Email or Password');
          break;
        case 400:
          alert(graphQLErrors[0].message);
          break;
        default:
          console.log(
            `[GraphQL error]: Status: ${graphQLErrors[0].extensions?.exception?.status} Message: ${graphQLErrors[0].message}, Location: ${graphQLErrors[0].locations}, Path: ${graphQLErrors[0].path}`,
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
