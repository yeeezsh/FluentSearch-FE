import 'antd/dist/antd.css';
import HomeNavbar from 'Components/Layouts/Home/HomeNavbar/HomeNavbar';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'Stores/stores';
import '../styles/globals.css';

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <HomeNavbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
