import type { AppProps } from 'next/app';
import { AuthProvider } from '../src/contexts/AuthContenxt';

import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { Layout } from '../src/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
