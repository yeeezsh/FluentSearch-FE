import { ApolloProvider } from '@apollo/client';
import HomeNavbar from 'Modules/home/components/Navbar';
import { userActions } from 'Modules/user/reducers/userReducer';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import adapter from 'Services/adapter.service';
import { client } from 'Services/client';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';

const INCLUDE_NAVBAR: string[] = ['/'];
const router = useRouter();
const dispatch = useDispatch();

adapter.instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log('interceptors err');
    console.log(err);
    const logs = err.message as string;
    const unauthorized = logs.includes('401');
    const tokenTimeout = logs.includes('410');
    if (unauthorized) {
      dispatch(userActions.deleteUser());
      router.push('/login');
    }
    if (tokenTimeout) {
      // request for access token
      // authorize again
      router.push('/refresh');
    }
  },
);

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const pathname = useRouter().pathname;
  const isIncludeNavbar = INCLUDE_NAVBAR.includes(pathname);

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ApolloProvider client={client}>
          {isIncludeNavbar && <HomeNavbar />}
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
