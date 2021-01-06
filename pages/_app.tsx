import 'antd/dist/antd.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Provider } from 'react-redux';
import { store } from 'Stores/stores';
import { GlobalStyle } from 'Styles/Global.styled';

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
