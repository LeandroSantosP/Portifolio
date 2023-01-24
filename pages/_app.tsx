import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContenxt';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}
