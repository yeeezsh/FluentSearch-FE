import { Provider } from 'react-redux'
import { store } from 'Stores/stores'
import '../styles/globals.css'

export function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
