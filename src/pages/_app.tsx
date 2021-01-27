import { ApolloProvider } from '@apollo/client';
import HomeNavbar from 'Modules/home/components/Navbar';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from 'Services/client';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';

const EXCLUDE_NAVBAR: string[] = ['/login', '/register', '/history'];

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const pathname = useRouter().pathname;
  const isExcludeNavbar = EXCLUDE_NAVBAR.includes(pathname);

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Provider store={store}>
          {!isExcludeNavbar && <HomeNavbar />}
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
