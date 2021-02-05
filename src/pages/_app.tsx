import HomeNavbar from 'Modules/home/components/Navbar';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'Stores/index';
import { GlobalStyle } from 'Styles/global';
import { CustomApolloProvider } from 'Tests/mock/graphql/provider';

const INCLUDE_NAVBAR: string[] = ['/'];

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const pathname = useRouter().pathname;
  const isIncludeNavbar = INCLUDE_NAVBAR.includes(pathname);

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <CustomApolloProvider>
          {isIncludeNavbar && <HomeNavbar />}
          <Component {...pageProps} />
        </CustomApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
