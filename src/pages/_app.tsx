import 'antd/dist/antd.css';
import HomeNavbar from 'Components/Layouts/Home/HomeNavbar';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useRouter } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/common/stores/stores';
import { GlobalStyle } from 'src/common/styles/Global.styled';

const EXCLUDE_NAVBAR: string[] = ['/login'];

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const pathname = useRouter().pathname;
  const isExcludeNavbar = EXCLUDE_NAVBAR.includes(pathname);

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        {!isExcludeNavbar && <HomeNavbar />}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
