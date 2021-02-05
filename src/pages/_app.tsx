import HomeNavbar from 'Modules/home/components/Navbar';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';
import { CustomApolloProvider } from 'Tests/mock/graphql/provider';

const EXCLUDE_NAVBAR: string[] = [
  '/login',
  '/register',
  '/allphotos',
  '/upload',
  '/history',
  '/dashboard',
  '/task',
];

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const pathname = useRouter().pathname;
  const isExcludeNavbar = EXCLUDE_NAVBAR.includes(pathname);

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <CustomApolloProvider>
          {!isExcludeNavbar && <HomeNavbar />}
          <Component {...pageProps} />
        </CustomApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
